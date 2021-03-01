import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"

const meta = new Meta({
  id: "2018-09-22_write-better-code-outside-in",
  title: "Write better code — Outside in",
  subtitle: "todo",
  datePosted: "2018-09-22",
  description: `
    Phrases like “top-down” or “bottom-up” can mean a lot. Maybe you’re thinking
    about how projects are divided into milestones before milestones are defined
    as sets of tasks, how your brain processes information, or defining a
    hierarchical organization in a company.
  `,
  tags: [
    Tags.SoftwareCraftsmanship,
    Tags.Refactoring,
    Tags.WebDevelopment,
    Tags.Python,
  ],
  related: [
    "2019-07-13_ten-ways-to-prevent-tech-debt",
    "2020-01-29_chaining-context-managers-for-mocks",
    "2019-09-04_guide-to-erp",
  ],
  backgroundColor: "#230806",
})

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <blockquote>“Software is a great combination between artistry and engineering.” — Bill Gates</blockquote>

      {/* === */}

      <h2><strong>Top Down and Bottom Up</strong></h2>
      <p><span className="first-letter">P</span>hrases like “top-down” or “bottom-up” can mean a lot. Maybe you’re thinking about how projects are divided into milestones before milestones are defined as sets of tasks, how your brain processes information, or defining a hierarchical organization in a company.</p>
      <blockquote>I’ve never been able to fully wrap my head around the idea of software being built either up or down.</blockquote>
      <p>Some programmers use these terms to describe the processes for designing and building software. Building bottom-up consists of developing building blocks that stack and rearrange to shape out the rest of the system.</p>
      <p>I’ve never been able to fully wrap my head around the idea of software being built either up or down. Maybe you can think about building a program as constructing a building where the foundation is laid, then a frame or structure goes up, etc. But software doesn’t really play by the same rules. Going along with the building analogy, when writing software I might build a bridge between two buildings before those two buildings exist. It’s hard to conceptualize a floating bridge connecting two non-existent buildings. A lot of things can take your program down but gravity is pretty low on the list.</p>

      {/* === */}

      <h2><strong>How About Free Floating Components?</strong></h2>
      <p>I end up thinking about software as these components floating in free space that can handle IO and contain multiple sub-components within them.</p>
      <p>Thinking about it that way, it’s more about designing software “inside out” or “outside in”.</p>
      <img src="/blog/write-better-code-outside-in/death-star.png"/>
      <p>After going through school and working in software, I haven’t heard these terms thrown around too much. Inside out seems to be assumed across the board. You hear a lot about writing testable code, reusable functions, single responsibility components, writing tests before the code (TDD/BDD), breaking large problems into small pieces (Algorithmic Thinking), etc.</p>
      <p>Those are some great ways to approach code especially if you have plenty of time to do all of the planning, pseudocode, and pen and paper system designing that you need to do. But realistically, you just run into situations where you need to be more efficient than that. And ideally not write horrible code in the process that is just going to be refactored later.</p>

      {/* === */}

      <h2>Defining Outside In</h2>
      <p>Try scrapping the idea of writing units first. No tests first, no functional methods, no inner workings of your program. It’s so easy to focus on the hardest problem first which means you jump right into trying to implement an algorithm or define complicated logic.</p>
      <p>Instead, we will contradict that idea and do the following:</p>
      <ul>
          <li>Define the entry point for the code.</li>
          <li>Assume that any module, function, helper, library, etc. is available, even if the code does not exist.</li>
          <li>Write the ideal version of the entry point.</li>
          <li>Write the ideal version of any code that was assumed until you start reaching “low level” functions that perform the bulk of the logic.</li>
          <li>Repeat until you have all functions defined.</li>
          <li>Now actually implement the logic for the “low level” functions.</li>
      </ul>
      <p>Coding is a combination of creativity and common engineering practices. There are thousands of ways to approach a problem and still come up with the same answer. Outside in development is a way to think about software development from a high level so that we can work through problems efficiently on the fly while still producing good, readable, testable code.</p>

      {/* === */}

      <h2>An Example</h2>
      <p>We are going to look at building the start of a forecasting system that takes a set of project management tasks and builds out a schedule for the assigned users.</p>
      <ul>
          <li>This is on a web application where users will log in to see their tasks and schedule.</li>
          <li>It will be connected to a persistent database.</li>
          <li>Assume every employee works 8 hours a day M-F</li>
          <li>Assume every employee takes off federal holidays in the US</li>
          <li>Add 2 days of padding for each timeline entry</li>
          <li>Use a task data structure that consists of a name, deadline, assigned user, project reference, and estimate hours.</li>
      </ul>

      {/* === */}

      <h2>The Entry Point</h2>
      <p>With working on units first we might have started with building out a class and a few functions like this. In this case, we would be jumping into the nitty gritty of the scheduling functions.</p>
      <code className="python">
        <pre>{`
# time.py

class DT(object):
    def get_us_holidays(self):
        pass

    def get_weekdays(self):
        pass

    def set_back_days(self, days):
        pass

    def set_back_weekdays(self, weekdays):
        pass
        `}</pre>
      </code>
      <p>Instead, let’s try finding our entry point for the system and working outside in. With this being a web application, we know users are going to going to load a certain view to see their schedule. Let’s say they are going to be doing that through some sort of controller:</p>
      <code className="python">
        <pre>{`
class ScheduleController(Controller):

@get('/my/schedule')
def show_schedule(self):
    """
    Shows a set of forecast items for all of the tasks the
    current user has defined.
    """
        `}</pre>
      </code>
      <p>In this case, maybe we actually have a framework behind the scenes where we can access <code>Controller</code> and <code>@get</code> or maybe we don’t. Either way, we want to write this in the simplest, most ideal scenario possible even if the code doesn’t exist. We’ll deal with the details later.</p>
      <p>Now we move on to writing the ideal version of <code>show_schedule</code> .</p>
      <code className="python">
        <pre>{`
from app import http, auth

@http.auth()
@get('/my/schedule')
def show_schedule(self):
    """
    Shows a set of forecast items for all of the tasks the
    current user has defined.

    Assume that the schedule has already been generated by
    the task object throughout their lifecycle.
    """
    current_user = auth.current_user()

    return http.response(
        view='my.schedule',
        data={'tasks': current_user.tasks}
    )
        `}</pre>
      </code>
      <p>We are making even more assumptions here:</p>
      <ul>
          <li>Assume that we have <code>http</code> and <code>auth</code> available.</li>
          <li>Assume that <code>http.auth</code> is an annotation available.</li>
          <li>Assume that <code>http.response</code> is a function available.</li>
          <li>Assume that <code>auth.current_user</code> is a function available.</li>
          <li>Assume that the <code>response</code> function handles view based on a string and accepts a dictionary of data.</li>
          <li>Assume that the user getting returned from <code>current_user</code> has a property called <code>tasks</code> available.</li>
      </ul>
      <p>These are all details that we could have dove into immediately or even start coding within our <code>show_schedule</code> function just to get them off of our mind. But if you can make the assumptions and not worry about the details until later then you’re not prohibited and can just focus on writing the elegant solution.</p>

      {/* === */}

      <h2>Digging Deeper</h2>
      <p>Once the entry point is coded out then you just start funneling deeper into the program (i.e. outside in). Let’s start accounting for functions we know do not exist.</p>
      <code className="python">
        <pre>{`
# app/http.py

from app import views

def response(view, data=None):
    """
    Send an http response back to the client.

    :param view: str
    :param data: None|dict
    """
    return views.render(name=view, data=data)

def auth(fn):
    """
    @http.auth() annotation to prevent users
    from access a certain view in our app.
    """
    def annotation():
        pass

    return annotation
        `}</pre>
      </code>
      <code className="python">
        <pre>{`
# app/views.py

def render(name=None, data=None, content=None):
    if not name and not content:
        raise Exception('Pass either a file path through 'name' or file contents through 'content')

    if name:
        # Process a view from a file path
        pass

    elif content:
        # Process a view from the file contents
        pass
        `}</pre>
      </code>
      <p>You can see how we just keep recursing down further into the program.</p>
      <ol>
          <li>Create the <code>app/http.py</code> module and make sure we have the functions that we need available for <code>show_schedule</code>.</li>
          <li>Write them in an ideal way.</li>
          <li>Since we need a way to render views, create our <code>app/views.py</code> and add the <code>render</code> function. This is the point where we are getting pretty low level and the bulk of the view rendering logic would probably live. That’s up to you to decide as the programmer of course.</li>
      </ol>
      <p>We could do it again with the <code>auth.py</code> helper:</p>
      <code className="python">
        <pre>{`
# app/auth.py

from app import session

def current_user():
    if not session.active():
        raise Exception('There is no active session.')
    return session.active().user
        `}</pre>
      </code>
      <code className="python">
        <pre>{`
# app/session.py

import psycopg2

def active():
    """
    Check if there is an active session.
    """
    return _get_current_session()

def _get_current_session():
    return psycopg2.execute('SELECT * FROM sessions WHERE active=true;')
        `}</pre>
      </code>
      <ol>
          <li>Create the <code>app/auth.py</code> module and make sure we have the functions that we need available for <code>show_schedule</code>.</li>
          <li>Write them in an ideal way.</li>
          <li>Since we need a way to render views, create our <code>app/session.py</code> and add the <code>active</code> function. This is another point where a lot of our “low level” logic could live. Similar to the <code>views.py</code> we created.</li>
      </ol>

      {/* === */}

      <h2>Conclusion</h2>
      <p>I’m not going to write out the entire program here since it could get pretty lengthy if we assume there is no framework but hopefully, that gives you an idea on how to approach code outside in.</p>
      <p>It’s a different way to think about things and not perfect for every scenario, but a great tool to add to your skill set.</p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
