<ul class="table-of-contents">
    <li><strong><a href="#why-think-in-design-patterns">Why are we taught to think in software design patterns?</a></strong></li>
    <li><strong><a href="#the-rule-of-three">The rule of three</a></strong></li>
    <li><strong><a href="#your-patterns-are-not-my-patterns">Your patterns won't be the same as my patterns</a></strong></li>
    <li><strong><a href="#re-use-vs-solving">Re-usability vs solving a problem</a></strong></li>
    <li><strong><a href="#think-for-yourself">Think for yourself</a></strong></li>
</ul>

<p>
    <span class="first-letter">It</span> taken me so long to reach a point where I don't hold a set of patterns
    up on a pedestal accepting them as the holy laws of programming. Thinking that only the best software is written
    using an elegant combination of these highly regarded software patterns, without any code fitting nicely into
    a guiding principle.
</p>

<p>
    I still struggle with it, every once in a while catching myself designing some facade into a generalized
    system, that ultimately I'm only going to use once or that may never see the light of day.
</p>

<h2 id="why-think-in-design-patterns">Why are we taught to think in software design patterns?</h2>

<p>
    Many developers seem to be taught, including me throughout college, a large set of design patterns and
    principles for "good" software. These are solutions that can be applied to common problems in software
    development. This leads to the thought processes like:
</p>

<ul>
    <li>I need to write code to connect to a database.</li>
    <li>
        The D in SOLID says code shouldn't directly depend on low level modules, so I must abstract my
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
    Maybe something like this makes sense if we end up writing a framework that supports 5 different database
    connections or where users need to create their own data storage adapters. My problem with this type of
    code is the "maybe". "Maybe" this will be useful if we ... down the road. It's too much future-proofing.
    It's a waste of time and leads to more code to understand, more conceptual overhead for developers.
</p>

<p>What I would rather see for an application that is getting built for the first time?</p>

<code class="python">
    <pre>{`
import mysql


def main():
    connection = mysql.connect()

    `}</pre>
</code>

<p>
    It's a fantastic start. Simple. Easy to understand. Even though there are many developers who would tell
    you it's tightly coupled and untestable.
</p>

<p>
    Don't deal with problems until problems are staring you in the face. Wait until there's "tension" between
    you and your code that you need to resolve and refactor.
</p>

<hr />

<h2 id="the-rule-of-three">The rule of three</h2>

<p>
    I can't find who originally said it, but the rule of three ironically is not a rule. That's why I like it.
    It's more of a warning sign.
</p>

<p>When you build something similar three times over, then you _may_ start to recognize patterns.</p>

<p>
    This was a big ah-ha moment for me when starting to think about it. The entire point of implementing
    "design patterns" came about because a team of software engineers got together after building dozens or
    hundreds of applications, started recognizing patterns, and then working on common solutions. The gang of
    four may have built hundreds of applications between them by the time they wrote their book. I believe
    most of them were in their late 30s and early 40s, after nearly 2 decades of writing software.
</p>

<h2 id="your-patterns-are-not-my-patterns">
    Your patterns won't be the same as my patterns
</h2>

<p>
    I've tried to start thinking in the reverse. Instead of looking for code to fit into patterns, I've
    started to write the absolute simplest code possible first and then looking for patterns *as needed*. That
    means sometimes writing tightly coupled code. Sometimes I repeat myself! Some of my code has 4 or 5 if
    statements or a switch. These are all standard code smells of course, but instead of worrying about
    writing code that fits a prescribed definition of "good" code, I try to focus on writing code that is easy
    to understand and use first. Again, wait for the "tension" or resistance to change between you and your
    code.
</p>

<p>
    When that tension rolls around, look for patterns. You can write a lot of code that works just fine before
    recognizing multiple places where it could be improved via a common pattern.
</p>

<p>But the patterns you recognize probably aren't going to be like the patterns I do.</p>

<p>
    I want to be in the habit of designing my own solutions for my given scenario instead of pulling something
    off the shelf that might not make perfect sense for my application, in my programming language, using a
    certain paradigm, running in a specific context.
</p>

<h2 id="re-use-vs-solving">Re-usability vs solving a problem</h2>

<p>
    It sounds like I'm only talking about code reuse. Something like DRY, where I see 3 places where I doing
    the same operations so I can abstract out a function.
</p>

<p>That is a valid scenario, but patterns of course are not always about code re-use.</p>

<p>
    I do still give in to certain common patterns or ideas when the code is resistant to change or sometimes
    to testability. For example, in my database connection example above, it is much easier to write unit
    tests for the first example. Should my code be dictated based on how easy it is to test? Maybe. TDD people
    would say so. Some others like DHH may not. But whether its a good idea or not, if a requirement of the
    test is to be testable then the overall system is resistant to change in that regard. I feel a struggle
    when trying to test it, so that's my trigger that it's time to refactor. Then I may glance at some common
    patterns for this, adapt one, or come up with one that makes sense.
</p>

<h2 id="think-for-yourself">Think for yourself</h2>

<p>
    At the end of the day, this is all about becoming solving problems for yourself. Or at least considering
    your own thoughts and ideas as a potential solution. It's easy to get caught up in the fact that some very
    smart people have developed some very interesting ideas around writing better software. Software is not as
    cut and dry as we made it out to be. The fundamentals of writing code, developing software applications,
    are not as steeped in engineering, science, and mathematics as we initially think.
</p>

<p>We have more freedom than the software developers and computer engineers of the 60s.</p>

<p>Best of luck coding.</p>
