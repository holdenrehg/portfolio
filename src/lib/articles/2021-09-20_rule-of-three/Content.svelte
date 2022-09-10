<ul class="table-of-contents">
    <li><strong><a href="#why-think-in-design-patterns">Why are we taught to think in software design patterns?</a></strong></li>
    <li><strong><a href="#the-rule-of-three">The rule of three</a></strong></li>
    <li><strong><a href="#your-patterns-are-not-my-patterns">Your patterns won't be the same as my patterns</a></strong></li>
    <li><strong><a href="#re-use-vs-solving">Re-usability vs solving a problem</a></strong></li>
    <li><strong><a href="#think-for-yourself">Think for yourself</a></strong></li>
</ul>

<p>
    <span class="first-letter">It</span> has taken me so long to reach a point where I don't hold a set of patterns
    up on a pedestal accepting them as the holy laws of programming. Thinking that only the best software is written
    using an elegant combination of these highly regarded software patterns, where all code fits nicely into
    a guiding principle.
</p>

<p>
    I still struggle with it. Every once in a while, I catch myself designing some generalized
    system that ultimately will be used one time or may even never see the light of day.
</p>

<h2 id="why-think-in-design-patterns">Why are we taught to think in software design patterns?</h2>

<p>
    Many developers seem to be taught, including me throughout college, a large set of design patterns and
    principles for "good" software. These are solutions that can be applied to common problems in software
    development. This leads to thought processes like:
</p>

<ul>
    <li>I need to write code to connect to a database.</li>
    <li>
        The D in SOLID says code shouldn't directly depend on low-level modules, so I must abstract my
        database code out.
    </li>
    <li>The most common pattern used for an abstraction like this is the Adapter pattern.</li>
    <li>
        Create a connection method, a database facade, an adapter interface, and an adapter implementation for
        mysql.
    </li>
</ul>

<p>All of a sudden we end up with something like this:</p>

<code class="python">
    <pre>{`
import mysql
from abc import abstractmethod, ABC

class Connection(ABC):
    @abstractmethod
    def connect():
        pass


class MysqlConnection(Connection):
    def connect(self):
        self._connection = mysql.connect()


class Database:
    def __init__(self, connection):
        self.connection = connection


db_connect():
    return Database(connection=MysqlConnection())


def main():
    connection = db_connect()
    `}</pre>
</code>

<p>
    Maybe this code makes sense if we're writing a framework with support for different database
    types or with extensibility in mind so that developers can easily add data storage adapters. My problem
    with this type of code is the "maybe". "Maybe" this will be useful if we ... down the road. It's too much
    future-proofing. It's often a waste of time leading to more code and unnecessary conceptual
    overhead for developers.
</p>

<p>What I would rather see for a new application?</p>

<code class="python">
    <pre>{`
import mysql


def main():
    connection = mysql.connect()

    `}</pre>
</code>

<p>
    It's a fantastic start. Simple and easy to understand despite breaking well known patterns.
</p>

<p>
    I don't want to deal with problems until the problems are staring me in the face. I'm waiting for "tension"
    between myself and the code before resolving and refactoring. That's because the future is impossible to
    predict. It's easy for a team to spend thousands of development hours considering and preparing for
    scenarios that do not matter or will never happen.
</p>

<p>
    <strong>I understand that this is easier said than done.</strong> Software development is hard.
    As developers we are often dealing with systems with thousands or millions of lines of code, a spider web
    of dependencies, sub systems that Sally wrote 12 years ago and we've never seen, but a customer is reporting
    bugs about it today. It is because of this reality that I feel the need to focus on writing code that is
    as simple, stable, and flexible as possible while directly providing value to the person using it. No more
    and no less. I try to assume that it will change without a doubt, but not try to predict exactly how it will
    change.
</p>

<hr />

<h2 id="the-rule-of-three">The rule of three</h2>

<p>
    I can't find who originally said it, but the rule of three ironically is not a rule. That's why I like it.
    It's more of a warning sign.
</p>

<p>When you build something similar three times over then you _may_ start to recognize patterns.</p>

<p>
    This was a big ah-ha moment for me. The entire point of implementing
    "design patterns" came about because a team of software engineers got together after building dozens or
    hundreds of applications, started recognizing patterns, and then designed common solutions for those common problems.
    The gang of four may have built hundreds of applications between them by the time they wrote their book. I believe
    most of them were in their late 30s and early 40s, after nearly 2 decades of writing software.
</p>

<h2 id="your-patterns-are-not-my-patterns">
    Your patterns may not be the same as mine
</h2>

<p>
    Instead of looking for code to fit into patterns, I've
    started to write the simplest code possible and then look for patterns *as needed*. That
    means sometimes writing tightly coupled code. Sometimes I repeat myself! These are common code smells of
    course, but instead of worrying about writing code that fits a prescribed definition of "good" code, I
    try to focus on writing code that is easy to understand and use. Then wait for that "tension" or
    resistance to change between you and your code.
</p>

<p>
    When that tension rolls around, look for patterns. You can write a lot of code that works well before
    recognizing multiple places where it could be improved via a common pattern.
</p>

<p>But the patterns you recognize probably aren't going to be like the patterns I do.</p>

<p>
    I want to be in the habit of designing my own solutions for my given scenario instead of pulling something
    off the shelf that might not make perfect sense for my application, in my programming language, using a
    certain paradigm, or running in a specific context. That does not mean I'm ignoring the advice
    and experience of the brilliant software developers of the past 50 years. There are absolutley common
    problems with battle hardened solutions. It's also possible to be inspired by a solution or adapt an
    existing solution to your context.
</p>

<h2 id="re-use-vs-solving">Re-usability vs solving a problem</h2>

<p>
    It sounds like I'm only talking about code reuse. New developers naturally think about reusability more
    than anything else because they think about "pattern matching". Something like DRY, where I see 3 pieces
    of code performing the same operations so I can abstract out a function.
</p>

<p>
    But like all patterns, DRY is a just solution to a problem. The problem being that large codebases are going to be
    even larger, more difficult to maintain, and user error prone with parts of the codebase solving the same
    problems. An oversimplified example; if I have two `add` functions, then it's likely a developer updates
    one and not the other.
</p>

<p>
    The Adapter pattern, shown in the mysql example above, is a solution for extensibility. The problem is related to software
    that needs to act differently depending on the context without changing the overall interface. I don't
    want to call different functions when using mysql vs postgres vs mariadb.
</p>

<h2 id="a-short-story">A Short Story</h2>

<p>
    The Bo Gardening Center emailed us feedback on the latest build. They are really excited about the work
    we've done so far. The application is simple, but it connects to all of the gardening center's watering systems
    and automatically waters the plants on a set schedule. Already they've seen a drop in lost saplings resulting from
    miscommunication between garden center employees responsible for watering.
</p>

<p>
    They send us a list of every plant species at the gardening center. They want the ability to set unique
    water schedules per plant species. As of now we're just dealing with one species. Because of that, we
    aren't using a database.
</p>

<p>
    Me and you are the only developers on the project. We've signed a 2 year contract with Bo's and will be
    adding 10 developers to the project over time as the application grows and we expand to more garden
    centers.
</p>

<p>
    "Where should we store this info?" I ask. You say "Eh, for this we have a lot of options. We're only dealing with
    about a thousand species. We'll need to track schedules as well. We have the most experience with mysql and
    we know it will work for this. Let's go with that.". I pull up the code and import the mysql library we've
    used in the past. I bring up a development mysql instance on my machine and manually verify it connects.
</p>

<p>
    As you watch, you mention "I'm going to email the garden center's IT about their onsite server. We didn't
    configure it and I don't see any reason why this would be an issue, but I'll double check.". They reply
    back in a few minutes and give us the thumbs up. We keep pairing on the code. I write up a couple of simple
    data models for the plants and the water schedules. I add a cron and a function for triggering a "watering"
    based on the schedules.
</p>

<p>
    "How are we going to write tests for that?" you add. I show you a mock for the database. I code up a class
    that we can inject into the tests in place of the real database connection. It just returns back static
    data for every model. You think about it. "So we have to keep the mock up to date with the data model?".
    I say "Yes.". You take over the keyboard. You go into the test, comment out the mock code, and instead add
    a switch so that we can connect to a different database. "The tests can connect to a local database and the
    production code can connect to the production database. We don't need to maintain a mock, we don't need to
    keep a mock in sync with the actual code that way.".
</p>

<p>
    I don't see a problem with it. "Sounds good to me" I say. We clean up the code, write a couple of tests, make
    sure that they run green, and commit.
</p>

<p>
    "What if we need to change the database?" I say. You look confused and don't know any reason why we would need
    to change the database. I say "just in case, we could wrap the database connection and build adapaters for each
    database type. It's a common pattern. For now, we just need to build a mysql adapater.". I rough up an
    implementation in code and show you what I mean. You look through the implementation and point out "We have
    to wrap every mysql library function we need this way. We know that this application is going to
    grow and we'll need to extend our adapaters over time. We don't know if we'll ever need to change
    databases. To be honest, it seems overkill, but let's look at what we would need to do to change databases."
</p>

<p>
    I pass the keyboard to you as you humor me. You stash the adapter work for
    now. We spend about 15 minutes considering what would need to happen to switch from mysql to postgres or
    from mysql to nosql. We would need to go through every file and update the library calls. We already have objects
    which act as an abstraction. We realize we can refactor the code and pull all of the database interactions into one db
    module. This added flexibility without added code. We consider how much effort it will take
    to maintain the adapters vs the effort to swap out down the road. It's not a huge savings, but we're early in
    a long term development project. We need to keep everything as simple as possible now before we bring more
    developers on board.
</p>

<p>
    You pass the keyboard back over, I do the refactor, commit, and we deploy the code out to production.
</p>

<h2 id="think-for-yourself">Think for yourself</h2>

<p>
    At the end of the day, this is about allowing yourself the space to design your own solutions while
    still considering existing solutions/patterns. It's easy to get caught up in the fact that some very
    smart people have developed some very interesting ideas around writing better software. We are lucky
    to work in a field where there is not one correct answer to any given problem.
</p>

<p>Best of luck coding.</p>
