import React from "react"
import { Layout } from "../../../../components"
import { Article } from "../../../../components/blog"
import meta from "./meta"

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <p>
        <span className="first-letter">T</span>here are tons of these type of
        articles out on the internet. Articles that explain “How to get started
        developing with Framework XYZ”.
      </p>
      <p>
        Unfortunately, none of the Odoo specific articles have gone into enough
        detail for me or my team to really learn about an ideal day to day
        workflow. There are plenty of explanations on how to create a sample
        Odoo module. Then there are forum posts with documentation about more
        technical topics like framework extensions, frontend widget development,
        security rules, etc.
      </p>
      <p>
        Coming from other programming environments, even other python
        environments, it’s not perfectly clear how to take a group of
        developers, stick them in an office together, and be productive while
        building Odoo based systems.
      </p>
      <p>
        How should projects actually be organized within the git repositories
        so that each developer can work on what they need to? When dealing with
        dozens or hundreds of instances, how should each developer manage their
        local environment? Etc.
      </p>
      <p>
        Here is a (hopefully) in-depth explanation of my day to day as an Odoo
        developer working with other Odoo developers and how we work together to
        get code pushed out to clients. I’ll provide as much context as possible
        because we have certain systems and processes in place now that may not
        be obvious.
      </p>

      <h2>Morning time</h2>

      <p>
        Coming into the office every morning, I usually grab some coffee.
        Caffeine should be a requirement for working with Odoo every day. You
        have to be prepared for the days where Odoo decides that none of your
        XML is valid and won’t provide good error messages to explain why.
      </p>
      <p>
        But afterward, I try to spend at least 30–60 min checking our systems.
        By systems I mean:
      </p>
      <ul>
          <li>Email (Gmail)</li>
          <li>Slack</li>
          <li>Google Calendar</li>
          <li>Project Management (Odoo Tasks)</li>
          <li>Pull Requests (Bitbucket)</li>
      </ul>

      <p>Each system has a different responsibility for our team. Email is primarily an interface between our team and the clients. Slack is our internal communication system to chat with each other. Google Calendar acts as our agenda items. Project Management defines and prioritizes work for each developer on the team. Bitbucket contains all of the source code that we write. We use a Pull Request workflow to move code from development to staging or production environments.</p>
      <h3>Team check-in</h3>
      <p>We’ve gone back and forth on these sort of meetings for years. We initially tried to do stand up meetings.</p>
      <p>Why?</p>
      <p>I guess just because that’s the norm. After a while we asked ourselves “what is the point?” and that’s the only answer we could come up with. Eventually, we couldn’t stand behind responses like “it helps bond team members” or “it increases transparency”. All it did for us was waste 15–30 minutes of everyone&#39;s time in the morning.</p>
      <p>The meeting didn’t only waste the time we spent physically in the meeting. It also lowered productivity. Some people are deep into a project or task by 10 am every day. So it takes time to get a few notes together right before the meeting, it takes time to stand in a circle listening to things that you probably already heard about the day before, and then time to get back into what you were doing before the meeting started.</p>
      <p>Stand up meetings may work for some teams, but we have 5 developers on the team at the moment, we all sit in the same room, we all talk to each other almost every day, we spend time in meetings with each other, so we roughly know what’s going on with each other week to week.</p>
      <p>So we decided on a daily check-in virtually instead of standing up in a circle:</p>

      <figure>
        <img src="/blog/daily-odoo-team-routine/slack.jpeg" alt=""/>
        <figcaption>
          A slack channel, like what we use for check-in's. Photo by
          <a
            href="https://unsplash.com/@pankajpatel?utm_source=medium&amp;utm_medium=referral"
            rel="noreferrer"
            target="_blank">Pankaj Patel</a>
          on
          <a
            href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral"
            rel="noreferrer"
            target="_blank">Unsplash.</a>
          </figcaption>
      </figure>

      <p>
        Every morning, between 6 am — 10 am, each team member will post a short
        sentence or a list of what they have going on for the day into a general
        slack channel. If they need anything they’ll throw out a question.
      </p>
      <p>
        This lets each person work on their own time because they can type up
        their check-in when they are available and read other responses when
        they are available.
      </p>

      <h2>Weekly check-in</h2>

      <p>
        Along with our virtual daily check-in process, we introduced a weekly
        meeting called a Tactical Meeting.
      </p>
      <p>
        This
        <a
          href="https://www.holacracy.org/tactical-meetings"
          rel="noreferrer"
          target="_blank">term was taken from Holacracy</a>.
        They describe it as:
      </p>

      <blockquote>
        Tactical Meetings are focused on the operational work of the Circle.
        Their purpose is to triage issues that have come up during the week and
        remove obstacles so that the work can move forward. Each circle conducts
        tactical meetings; they occur roughly weekly and are scheduled by the
        circle’s Secretary.
        <br/><br/>
        The formal output of Tactical Meetings is Projects and Actions, but they
        can be used to address any operational need: sharing information, giving
        updates, requesting projects and actions from other roles, etc.
      </blockquote>

      <p>
        This is essentially how we treat them. Our meeting happens every Friday
        at 11AM, replacing our daily Slack check-in on Fridays, and could be
        described as:
      </p>
      <ul>
          <li>A 45-minute meeting with the entire team</li>
          <li>Check-in and high-level status update from each team member</li>
          <li>Discussions on individual blockers and how to resolve them</li>
          <li>Discussion on project-wide blockers and how to resolve them</li>
          <li>Potential improvements for the entire team</li>
          <li>Items that team members have learned that week or want to focus on learning</li>
      </ul>

      <p>
        This gives us a concise forum to primarily focus on team-wide issues and
        improvements. It still has some of the same downfalls as a stand-up
        meeting except that it only occurs once a week and is relatively short
        compared to the cumulative time spent on daily meetings.
      </p>

      <h2>Coding</h2>

      <p>
        After the morning ritual of getting prepared and checking in with the
        team, developers are usually plugging in their headphones and writing
        code.
      </p>

      <h3>Code Organization</h3>

      <p>
        Here’s a little bit of context on how our code is organized. This is not
        exactly normal compared to other environments or projects.
      </p>
      <p><strong>A repository per client</strong></p>
      <p>
        All of our code is stored in Bitbucket. As a company, we work with
        clients who typically have unique environments so each client gets their
        own repository. This provides a clean separation of concerns. If you
        were to pull up our repository list, it would look like:
      </p>
      <ul>
          <li>client_a_addons</li>
          <li>client_b_addons</li>
          <li>client_c_addons</li>
      </ul>

      <p><strong>A set of Odoo addons</strong></p>
      <p>
        At the core of each repository, it is essentially just a list of addons.
        This is similar to what you would see with a standard Odoo repository,
        just like any of the
        <a href="https://github.com/OCA" rel="noreferrer" target="_blank">OCA repositories</a>.
      </p>
      <p>
        We also keep quite a few additional files in the root of the repo and
        in dot folders which help us develop day to day.
      </p>
      <p>Generally, we only want to track custom addons that we are developing.</p>
      <p>
        We even keep 3rd party addons separated out into a
        <code>_lib</code> folder which is not tracked in the repository. This
        folder is ignored in the <code>.git</code> file, and then we have
        developed an internal dependency management system that allows us to run
        a simple command such as <code>$ om setup dependencies</code>
      </p>
      <p>
        This command will download the latest versions of the 3rd party addons
        which the project relies on and place those with the
        <code>_lib</code> folder.
      </p>

      <code className="console">
        <pre>{`
/client_a_addons
    _lib/
        account_due_list/
        project_stage_closed/
        project_role/
        project_task_code/

    custom_addon_a/
    custom_addon_b/
    custom_addon_c/

    docker-compose.yml    # container configurations
    requirements.txt      # python requirements to run the project
    __manifest__.py       # module dependency requirements
        `}</pre>
      </code>

      <p><strong>Isolated environments</strong></p>
      <p>
        Every one of our repositories has what it needs packaged inside of it so
        that a developer can simply clone down a repository, run a script, and
        have a localized instance of the project to work with.
      </p>
      <p>
        We do this using Docker, Docker Compose, and custom scripts. You’ll see
        these described in the workflow section below.
      </p>
      <p>
        We also define our own configuration files in each project to pull in
        external dependencies for the project. By dependencies here, I mean
        outside Odoo modules such as OCA modules. These are automatically
        downloaded.
      </p>

      <h4>Tools</h4>

      <p>
        Quick side note on some tools. Every developer on the team uses whatever
        tools they are comfortable with. So you’ll see a variety of things like
        the following in our office:
      </p>
      <ul>
          <li>Sublime Text</li>
          <li>PyCharm</li>
          <li>VS Code</li>
          <li>VIM</li>
          <li>Hyper.js</li>
          <li>Terminator</li>
          <li>Postman</li>
          <li>DBeaver</li>
          <li>PSequel</li>
          <li>GitKraken</li>
      </ul>

      <p>
        The standardization of certain development tools can slow people down
        and generally just piss people off.
      </p>

      <h3>The Initial Setup</h3>

      <p>
        Because of the Isolated Environments that I described above, it makes
        setup extremely easy. We do not need to worry about the underlying OS
        very often and each developer on the team can run any project on their
        local machine despite the Odoo version or external dependencies because
        of Docker. We also do not run into conflicts between projects on a
        single machine.
      </p>
      <p>
        So the initial setup when Tom The Developer needs to setup Project A
        will look something like this:
      </p>

      <code className="console">
        <pre>{`
$ git clone git@bitbucket.org:mycompany/project_a.git
$ cd project_a
$ ./make.sh
$ docker-compose up -d

# Now the project has built and is accessible locally. Typically we
# will run on http://localhost:10102 but this changes depending on
# the project environment variables.
        `}</pre>
      </code>

      <h3>Data</h3>

      <p>Data is tricky and we do not have a completely streamlined process.</p>
      <p>
        When a developer gets initially setup, they will have a brand new Odoo
        instance running with all of the custom functionality needed, but no
        real data. So depending on the situation and project, one of a few
        things happens:
      </p>
      <ol>
          <li>If the developer has access, they can download a copy from a Staging environment and upload the database to their local.</li>
          <li>If the project has a robust set of demo data/sample data configured in a module, then that module can be installed instead.</li>
          <li>Simple data can be manually created as needed depending on the functionality.</li>
      </ol>

      <p>
        No project should have a hard dependency on a certain set of data or a
        specific database. So we try to develop our modules in a way that they
        have everything that they need packaged up within the module, and if
        they have hard dependencies on certain configurations then those are
        enforced within the module as well.
      </p>

      <h3>Workflow</h3>

      <p>
        So now that we’ve covered some of the context about how our code is
        structured, the tools that we are using, and how our developers get up
        and running with projects, you can see how we actually work on tasks day
        to day.
      </p>
      <p><strong>1. Pick up a task</strong></p>
      <p>
        As I described in the beginning, we have project management system with
        a set of tasks. We happen to use Odoo internally, but development teams
        typically have some sort of system in place (Jira, Asana, Trello, etc.).
      </p>
      <p>
        Each developer has their task list, with estimate hours, client
        comments, requirements, attachments, and anything that they need to get
        the task done. Once developers get settled in for the day, assuming they
        have no meetings or phone calls, they pick up a task off their list.
      </p>
      <p><strong>2. Write the code and tests (in the order that works for them)</strong></p>
      <p>Then they’ll start working.</p>
      <p>
        If it’s a task for a new project, then they may need to clone down the
        repo, build the project, and run it first, otherwise, they’ll pull up
        their existing instance and start working.
      </p>
      <p>
        We currently, roughly follow a
        <a
          href="https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow"
          rel="noreferrer"
          target="_blank">feature branching pattern</a>.
          This lets us assign a git repository branch to a task/feature number.
      </p>

      <pre name="bf6a" id="bf6a" class="graf graf--pre graf-after--p">git checkout -b feature/11425/add-a-cool-new-feature</pre>

      <p>
        Adding the task number from our project management system helps us track
        what’s going on with certain tasks.
      </p>
      <p>
        After checking out the right branch, the developer will either write
        automated tests for the task, watch them fail, and then start writing
        the code to correct those tests (a standard TDD process). Or they’ll do
        the opposite and write the functionality, manually test it in the
        interface, and then write the automated tests to confirm. This is up to
        the developer depending on how they like to work.
      </p>
      <p><strong>3. Create a pull request</strong></p>
      <p>
        Once the feature is ready to code, the developer will make a pull
        request from their feature branch into a<code>development</code>branch
        on the repository. Some of our projects have multiple version so it
        could potentially be a<code>dev-9.0</code>,<code>dev-10.0</code>,
        <code>dev-11.0</code>, or<code>dev-12.0</code>branch instead.
      </p>
      <p><strong>4. Two team members review and approve the pull request</strong></p>
      <p>
        Two developers must review and approve each pull request. So randomly
        throughout each day a developer with go through the open pull requests
        and ensure that the code is high quality. Generally, we look for the
        code to match our style standards, to be performant, to be readable, to
        be secure, to be maintainable, and to meet the customers’ requirements.
      </p>
      <p>
        Our repositories are also linked to a continuous integration server
        called Drone, where our tests are automatically run. This allows
        developers to easily see if anything could cause an issue even before
        reviewing and manually testing the code.
      </p>
      <p>
        <strong>5. The pull request is merged to a</strong>
        <code><strong>development</strong></code>
        <strong>branch</strong>
      </p>
      <p>Once the PR (pull request) is approved, then it’s merged!</p>
      <p>
        The code now lives in the development branch where it can be deployed
        out to a server.
      </p>
      <p>
        <strong>6.</strong>
        <code><strong>development</strong></code>
        <strong>is deployed to staging</strong>
      </p>
      <p>
        Depending on the project, the code is either automatically deployed out
        to a certain server via a continuous integration process or a developer
        manually deploys code to a staging server (almost always this for us at
        the moment).
      </p>
      <p>
        These staging servers are typically accessible by the customer and we
        work with them to approve features for production.
      </p>
      <p>
        <strong>7. Code is eventually merged to</strong>
        <code><strong>master</strong></code>
        <strong>when a release is identified</strong>
      </p>
      <p>
        Identifying a proper release candidate can be somewhat random, but once
        we have a set of features that we feel are ready to be released to
        production and a client has completely approved/validated, then we’ll
        merge the current dev branch into a<code>master</code>branch for
        release.
      </p>
      <p>
        <strong>8.</strong>
        <code><strong>master</strong></code>
        <strong>is deployed to production</strong>
      </p>
      <p>
        Then finally, the same process for staging is utilized for production.
        The code is released to the production server for the client to utilize
        in their live system.
      </p>

      <h2><strong>Analysis and Troubleshooting</strong></h2>

      <p>
        Writing code can be frustrating at times, but it helps to have other
        developers around. Generally, most of us try to not bother the other
        developers on the team unless we must.
      </p>
      <p>
        Breaking another person’s concentration can really throw them off for a
        while. This makes it harder on everyone, especially if you depend on
        someone’s work for your deadline, but we also don’t want people sitting
        around for hours or days completely stuck.
      </p>
      <p>
        Using a specific time limit can help to create a balance between these
        two scenarios. We generally tell the developers to not allow themselves
        to be blocked for more than 20–30 minutes before taking a break, talking
        to a rubber ducky, or asking another developer for help.
      </p>
      <p>
        So when developers need help they can often put their questions online
        somewhere (in project management or in a chat tool like Slack), where
        each developer can check it on their own time.
      </p>
      <p>
        We can of course just walk over and quickly hash things out if there’s
        a bigger question to answer, like if two developers need to debug or
        work on a problem together, or if there is an emergency.
      </p>
      <p>
        We try to just lean on common sense as much as possible instead of pages
        of exact procedures.
      </p>

      <h2>Long Term Planning</h2>

      <p>
        Lastly, we’ll do some longer-term planning as a company each quarter.
        This lets us take a day every few months and think about some long term
        goals we have as a team. These could be an improvement to our internal
        tools/toolset, new processes that we want to put in place, or ideas on
        how we handle client work. Anything that makes us better as a company or
        as individual developers.
      </p>

      <h2>Other Stuff</h2>

      <p>
        I’m sure there are dozens of other small things that we do as a team
        that I’m leaving out of there. Writing code involves a huge amount of
        moving pieces.
      </p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
