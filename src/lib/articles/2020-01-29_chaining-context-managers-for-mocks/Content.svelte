<p>
    <span class="first-letter">R</span>
    ecently, I’ve used<code>unittest.mock.patch</code>to mock connections to external services while
    developing a Django app. While writing the tests, I found myself, repeatedly writing code that looks like:
</p>

<code class="python">
    <pre>{`
def test_valid_connection_has_connected_status():
    with mock.patch("myapp.connection", MockConnection):
        with mock.patch("myapp.authenticator", MockAuthenticator):
            assertTrue(connect().is_connected)
            assertEqual(connect().status, "connected")
        `}</pre>
</code>

<p>
    It’s not a huge deal at first, but as you add more use cases things really bloat up. I wanted utilities
    with a clear interface for the team to prevent mistakes, to make the tests more readable, and to save a
    few characters. Generally, the solution to, either with variables or functions, dynamically chain together
    context managers wasn’t perfectly clear (at least it wasn’t to me).
</p>

<blockquote>
    If you aren’t familiar with context managers, go read through the
    <a
        href="https://docs.python.org/3.7/reference/datamodel.html#context-managers"
        rel="noreferrer"
        target="_blank">data model docs</a
    >
    and the
    <a
        href="https://docs.python.org/3.7/reference/compound_stmts.html#the-with-statement"
        rel="noreferrer"
        target="_blank">language reference docs on the with statement</a
    >.
</blockquote>

<h2>Variables</h2>
<p>One potential solution we have is to pull out some common variables.</p>
<p>
    Looking back at our example, we may want to split out the authenticators so that we can easily handle both
    authenticated and unauthenticated scenarios.
</p>
<p>
    I’m going to do that by extending the<code>MockAuthenticator</code>to take in a parameter called<code
        >authenticated</code
    >.
</p>

<code class="python">
    <pre>{`
class MockAuthenticator:
    def __init__(self, authenticated):
        self.authenticated = authenticated

    # We can trick the application into thinking
    # that it's initializing a new object, while
    # it's really just calling this function and
    # getting back the same object.
    def __call__(self, *args, **kwargs):
        return self
        `}</pre>
</code>

<p>
    Then we can pull out some variables for each scenario to re-use throughout the entire test suite. This
    actually isn’t a bad option.
</p>

<code class="python">
    <pre>{`
test_connection = mock.patch("myapp.connection", MockConnection)
authed = mock.patch("myapp.authenticator", MockAuthenticator(authenticated=True))
unauthed = mock.patch("myapp.authenticator", MockAuthenticator(authenticated=False))

def test_valid_connection_has_connected_status():
    with test_connection, authed:
        assertTrue(connect().is_connected)
        assertEqual(connect().status, "connected")

def test_invalid_connection_has_disconnected_status():
    with test_connection, unauthed:
        assertFalse(connect().is_connected)
        assertEqual(connect().status, "disconnected")
        `}</pre>
</code>

<p>
    But I didn’t really like the fact that I had to redefine
    <code>test_connection</code>on every test, no matter what type of connection I was using. I attempted to
    abstract those up into a single context manager, but ran into issues.
</p>
<p>
    The<code>with</code>statement can handle multiple “arguments” as you see in the example above, but you
    can’t pass an iterable or unpack an iterable the way you can with function calls. That would make things
    simpler because we would only be dealing with a couple of
    <code>mock.patch</code>variables instantiated within a reusable
    <code>authed</code>function.
</p>

<code class="python">
    <pre>{`
def authed():
    return (
        mock.patch("myapp.connection", MockConnection)
        mock.patch("myapp.authenticator", MockAuthenticator(authenticated=True))
    )

def test_valid_connection_has_connected_status():
    # Does Not Work :(
    with authed():
        assertTrue(connect().is_connected)
        assertEqual(connect().status, "connected")
        `}</pre>
</code>

<h2>Yield functions</h2>

<p>
    The best option in my mind is to pull out two functions that make it clear what is going on in each test,
    while mocking multiple objects behind the scenes.
</p>
<p>
    We can do this by defining<code>contextmanager</code>functions, running each mock as needed and then<code
        >yield</code
    >ing to the calling function.
    <a
        href="https://docs.python.org/3.7/library/contextlib.html?highlight=exitstack#contextlib.contextmanager"
        rel="noreferrer"
        target="_blank"
        >The
        <code>contextmanager</code>
        function</a
    >
    is a way to define a context manager without needing to have explicit
    <code>__enter__</code>and<code>__exit__</code>methods like you would in a class definition.
</p>

<p>
    Now we redefine our tests. Check them out. I personally think they are much easier to understand at a
    glance, with a simple interface for auth mocks. Plus it will save us a few characters as an added bonus.
</p>

<code class="python">
    <pre>{`
def test_valid_connection_has_connected_status():
    with authed():
        assertTrue(connect().is_connected)
        assertEqual(connect().status, "connected")

def test_invalid_connection_has_disconnected_status():
    with unauthed():
        assertFalse(connect().is_connected)
        assertEqual(connect().status, "connected")
        `}</pre>
</code>

<h3>A note about exit stacks</h3>

<p>
    While it doesn’t make sense for the exact scenario we’re dealing with above, we could have also
    potentially used an<code>ExitStack</code>.
</p>

<p>
    I had no clue what an<code>ExitStack</code>was until I started hunting around for a way to chain together
    context managers dynamically. In the
    <a
        href="https://docs.python.org/3.7/library/contextlib.html?highlight=exitstack#contextlib.ExitStack"
        rel="noreferrer"
        target="_blank">python docs</a
    >, it’s defined as “[a way] to make it easy to programmatically combine other context managers and cleanup
    functions, especially those that are optional or otherwise driven by input data.”
</p>

<p>
    Sounds great. The general idea behind them is that I can enter into the<code>ExitStack</code>and have more
    control over the context managers that I push onto the stack. When the<code>ExitStack</code>closes then it
    iteratively pops every registered context manager off the stack and closes them in reverse order of their
    registration (first in last out).
</p>

<p>Check out what that looks like:</p>

<code class="python">
    <pre>{`
from contextlib import ExitStack

with ExitStack() as stack:
    stack.enter_context(open("file_1.txt"))
    stack.enter_context(open("file_2.txt"))
    stack.enter_context(open("file_3.txt"))
    stack.enter_context(open("file_4.txt"))

# After leaving scope, the stack will close all registered context managers:
#     close file_4.txt
#     close file_3.txt
#     close file_2.txt
#     close file_1.txt
        `}</pre>
</code>

<p>
    This is essentially the same as running nested<code>with</code>
    statements except you’ll see how we need it to abstract out an
    <code>authed</code>and<code>unauthed</code>context manager.
</p>

<code class="python">
    <pre>{`
with open("file_1.txt"):
    with open("file_2.txt"):
        with open("file_3.txt"):
            with open("file_4.txt"):
        `}</pre>
</code>

<p>
    The primary benefit is that while you cannot, for example, iterate over a list of files and pass a list of<code
        >open</code
    >results into a<code>with</code>statement, we can do that with the
    <code>ExitStack</code>.
</p>

<p>
    We can take a look at another common example when dealing with mocks. Assume that you need to test a
    connection to an external API or database and you want to create a single test that interacts with a
    number of outside mocks.
</p>

<p>You might start with something like this for each service adapter:</p>

<code class="python">
    <pre>{`
def test_mysql_database_adapters():
    with mock.patch("db.connection", MockMySQLConnection):
        assertTrue(db.connect().is_connected)

def test_psql_database_adapters():
    with mock.patch("db.connection", MockPostgresConnection):
        assertTrue(db.connect().is_connected)

def test_redis_database_adapters():
    with mock.patch("db.connection", MockRedisConnection):
        assertTrue(db.connect().is_connected)

def test_sqlite_database_adapters():
    with mock.patch("db.connection", MockSQLiteConnection):
        assertTrue(db.connect().is_connected)
        `}</pre>
</code>

<p>
    Instead, we can create a context manager that iterates over all possible adapters, creates a new context
    for them via a
    <code>db.connect</code>function, and then yields those back to the test. Once that test has finished
    running, then the<code>ExitStack</code>handles all of the cleanup for those connections.
</p>

<code class="python">
    <pre>{`
from contextlib import contextmanager, ExitStack

@contextmanager
def db_env(adapters):
    with ExitStack() as stack:
        yield [stack.enter_context(db.connect(adapter) for adapter in adapters)]

def test_database_adapters():
    with db_env(SUPPORTED_ADAPTERS) as connections:
        for connection in connections:
            assertTrue(connection.is_connection)
        `}</pre>
</code>

<p>
    Context managers can be an extremely useful abstraction in your python code if you don’t go overboard with
    them. Give it a shot in your code or tests to see where that might make sense.
</p>
