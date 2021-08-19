import React from "react"
import { Layout } from "../../../../components"
import { Article } from "../../../../components/blog"
import meta from "./meta"

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <h2>What’s in python 3.8?</h2>
      <p>
        <span className="first-letter">T</span>he programming language python
        is releasing it’s latest minor version
        3.8 soon and is currently in beta. Many of the application I build are
        built on top of python 3, so I wanted to take a look at what’s coming
        down the pipe and figured I share details about the major changes that
        caught our eye.
      </p>
      <p>
        This is not a random marketing article repeating the headlines from the
        change logs. This is our team playing around with the features and
        reporting back what I see with examples.
      </p>

      {/* === */}

      <h2>Installing python 3.8 (on linux)</h2>
      <p>
        As of today, the latest version is<code>python 3.8.0b3</code>and is
        available on the
        <a
          href="https://www.python.org/downloads/release/python-380b3/"
          rel="noreferrer"
          target="_blank">downloads page here</a>.
        To install the version locally on linux, you can build from source to
        keep it separate from your other python versions:
      </p>
      <code className="console">
        <pre>{`
$ ./configure
$ make
$ make test
$ sudo make install
        `}</pre>
      </code>
      <p>
        Once it’s installed, you can use the executable created:
      </p>
      <code className="console">
        <pre>{`
$ /usr/local/bin/python3.8
        `}</pre>
      </code>

      {/* === */}

      <h2>Single Dispatch Methods</h2>
      <p>
        First up, the newest version of python is introducing
        a<code>singledispatchmethod</code>annotation into<code>functools</code>.
        Previously, you had access to overload functions through the
        <code>singledispatch</code>annotation, but no ability to for class
        methods.
      </p>
      <p>
        Here’s what the original function looks like and what still exists for
        functions in global scope:
      </p>
      <code className="python">
        <pre>{`
from functools import singledispatch

@singledispatch
def add(a, b):
    raise NotImplementedError("The \`add\` function does not support those types.")

@add.register(int)
@add.register(int)
def _(a, b):
    return a + b

@add.register(str)
@add.register(str)
def _(a, b):
    return f"{a} {b}"

add(5, 5)  # => 10
add("first", "last")  # => "first last"
        `}</pre>
      </code>
      <p>
        Here’s what you also, now have access to in 3.8:
      </p>
      <code className="python">
        <pre>{`
from functools import singledispatchmethod

class Math:
    @singledispatchmethod
    def add(self, a, b):
        raise NotImplementedError("The \`add\` method does not support those types")

    @add.register
    def _(self, a: int, b: int):
        return a + b

    @add.register
    def _(self, a: str, b: str):
        return f"{a} {b}"

Math().add(5, 5)  # => 10
Math().add("first", "last")  # => "first last"
        `}</pre>
      </code>

      {/* === */}

      <h2>Assignment expressions</h2>
      <p>
        Essentially this new features provides a way to assign a variable from
        within an expression using the new syntax of<code>variable := expr</code>.
        Typically when executing some sort of expression, if you need to reuse
        the result you need a stand alone assignment statement. Many programmers
        who are focused on clean code will sacrifice performance for the sake of
        readability. This provides a solution so you can have both.
      </p>
      <p>
        Here’s an example where we need to get a list of names, broken into a
        tuple of first and last, if the person’s name can be split. If you want
        to do that in a list comprehension today, you might end up calling the
        split function twice to get a simple line of code:
      </p>
      <code className="python">
        <pre>{`
class Person:
    def __init__(self, name):
        self.name = name

    def split_name(name):
        return name.split(" ")

persons = [
    Person(name="Bob Dylan"),
    Person(name=Conan O'brien)
]
        `}</pre>
      </code>
      <code className="python">
        <pre>{`
[split_name(person.name) for person in persons if split_name(person.name) is not None ]
# => [["Bob", "Dylan"], ["Conan", "O'brien"]]
        `}</pre>
      </code>
      <p>
        Instead you can assign that variable within the expression, essentially
        caching it for later use:
      </p>
      <code className="python">
        <pre>{`
[name for person in persons if (name := split_name(person.name)) is not None]
# => [["Bob", "Dylan"], ["Conan", "O'brien"]]
        `}</pre>
      </code>
      <p>
        The <a href="https://www.python.org/dev/peps/pep-0572/">PEP</a> also
        shares some great examples where code can be both simplified and
        performance increased:
      </p>
      <code className="python">
        <pre>{`
while chunk := file.read(8192):
    process(chunk)

# Reuse a value that's expensive to compute
[y := f(x), y**2, y**3]

# Handle a matched regex
if (match := pattern.search(data)) is not None:
    # Do something with match
    ...
        `}</pre>
      </code>

      {/* === */}

      <h2>Position-only arguments</h2>
      <p>
        Currently in python, you have 2 options for argument. They can be
        positional or keyword.
      </p>
      <code className="python">
        <pre>{`
def my_function(position_arg_1, position_arg_2, keyword_arg=None):
    pass
        `}</pre>
      </code>
      <p>
        This feature introduces a syntax for saying that a function has
        positional-only arguments, meaning that they cannot be called by
        keyword.
      </p>
      <code className="python">
        <pre>{`
def positional_only(a, b, /):
    return a + b
        `}</pre>
      </code>
      <code className="python">
        <pre>{`
positional_only(a=5, b=6)

# Traceback (most recent call last):
#     File "<stdin>", line 1, in <module>
# TypeError: positional_only() got some positional-only arguments passed as keyword arguments: 'a, b'
        `}</pre>
      </code>
      <code className="python">
        <pre>{`
positional_only(5, 6)
# => 11
        `}</pre>
      </code>
      <p>
        So why do we need this? There’s a couple of problems that it’s trying
        to solve:
      </p>

      {/* --- */}

      <h3>1. Break the disconnect between python modules developed in C</h3>
      <p>
        Python modules developed using C already support this feature, so
        there’s a disconnect with developers writing pure python. It’s often
        confusing running into one of these functions when you aren’t aware the
        functionality exists.
      </p>
      <code className="python">
        <pre>{`
ord("a")  # => 97
ord(c="a")

# Traceback (most recent call last):
#     File "<stdin>", line 1, in <module>
# TypeError: ord() takes no keyword arguments
        `}</pre>
      </code>

      {/* --- */}

      <h3>2. Uncouple the dependencies between keyword and function</h3>
      <p>
        For API developers, sometimes a hard dependency on a keyword argument is
        not a good thing. All of the sudden, you cannot change an argument in
        module without introducing a breaking change.
      </p>

      {/* === */}

      <h2>Runtime audit hooks</h2>
      <p>
        Python does not make monitoring easy, because of the way that its
        implemented at a low level (at the operating system level.) So while the
        program may have access to higher level details, like knowing that an
        HTTP server was started on port 8000, it does not have access to the
        system level process id or any context around it.
      </p>
      <p>
        This functionality introduces the ability to generally integrate with
        system level details, still without worry about the nature of the
        underlying system.
      </p>
      <p>
        Adding an audit hook allows you to register an event listener that fires
        anytime a system level event occurs. These could be errors or just
        standard processes running like `exec` or `open`. They could potentially
        be networking events like `socket.gethostbyname`.
      </p>
      <p>
        Honestly, I wasn't able to come up with a great use case for this
        functionality. These are described as “allows Python embedders to
        integrate with operating system support when launching scripts or
        importing Python code.”
      </p>
      <p>
        It provides support for loading python code itself for access to the
        binary:
      </p>
      <code className="python">
        <pre>{`
io.open_code(path : str) -> io.IOBase
        `}</pre>
      </code>

      {/* === */}

      <h2 >Typing</h2>

      {/* --- */}

      <h3>Final qualifier to typing</h3>
      <p>
        Here’s something that feels very Java-esque. Python is introducing 2
        ways to define something as<code>final</code>.
      </p>
      <p>The purpose of these 2 features are the same:</p>
      <ul>
          <li>Declaring that a method should not be overridden</li>
          <li>Declaring that a class should not be subclassed</li>
          <li>Declaring that a variable or attribute should not be reassigned</li>
      </ul>
      <p>
        This is a common feature in other object oriented languages and can
        serve many different purposes, but it is always used to restrict
        modification. Restricting other developers from inheriting and modifying
        your class, from extending and modifying your method, or from modifying
        a certain variable. There’s some scenarios where the program will fail
        or become more confusing if a certain class, method, or variable is
        altered. There’s also some scenarios where developers want to avoid
        extension because it gives them more rigid control over the
        implementation of a class or method. Without the rigid control, a
        subclass or extended method may easily break when the parent class or
        method is changed in the future.
      </p>
      <code className="python">
        <pre>{`
from typing import final, Final

@final
class Unbreakable:
    """ You can't extend me... """

class Base:
    @final
    def cannot_change_me(self):
        """ You can't extend me... """

my_string: Final = "what you can't do is change it"
        `}</pre>
      </code>

      {/* --- */}

      <h3>Literal types</h3>
      <p>
        Another typing related feature forcing type checks to be literally some
        type.
      </p>
      <code className="python">
        <pre>{`
from typing import Literal

def add(a: Literal[10], b: Literal[5]):
    return a + b

add(5, 5)   # will not work...
add(10, 5)  # this is fine
        `}</pre>
      </code>
      <p>
        You can see from our horrible<code>add</code>function above, that we can
        restrict the arguments to take a literal value in. This is helpful in
        scenarios where you expect only certain arguments, and potentially
        change what you are going to do based on those arguments.
      </p>

      {/* --- */}

      <h3>Typed hinting dictionaries</h3>
      <p>
        Finally, we have an introduction to type hinted dictionaries.
        Dictionaries can often feel like Frankenstein-ish data structures when
        used the wrong way. Type hinting dictionaries, in certain scenarios, can
        add some order to things if needed.
      </p>
      <code className="python">
        <pre>{`
from typing import TypedDict

class Person(TypedDict):
    first_name: str
    last_name: str
        `}</pre>
      </code>
      <code className="python">
        <pre>{`
# This is fine
person: Person = { "first_name": "Bob", "last_name": "Newhart" }

# This will fail the type check for \`last_name\`
person: Person = { "first_name": "Bob", "last_name": 5 }
        `}</pre>
      </code>
      <p>
        There’s a lot more that you can do with<code>TypedDict</code>through
        inheritance or applying additional, stricter type checking so read
        through the full PEP for details. Generally, it looks like a pretty
        straight forward new addition to the language, especially for basic use
        cases.
      </p>

      {/* === */}

      <h2>And there’s more</h2>
      <p>
        Make sure to get
        <a
          href="https://www.python.org/downloads/release/python-380b1/"
          rel="noreferrer"
          target="_blank">into the full release</a>
        and see everything that’s offered. I just pointed out the parts that
        were most interesting to our team over here, but there’s a handful of
        other cool features especially if you deal with concurrency,
        serialization, or writing C modules for python.
      </p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
