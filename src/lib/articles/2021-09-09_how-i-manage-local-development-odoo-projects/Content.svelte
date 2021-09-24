<ul class="table-of-contents">
    <li>
        <strong><a href="#evolution-of-solutions">The evolution of solutions</a></strong>
        <ul>
            <li><a href="#first-try">First try: virtual machines</a></li>
            <li><a href="#second-try">Second try: docker</a></li>
            <li><a href="#iterating-again">Iterating again</a></li>
        </ul>
    </li>
    <li><strong><a href="#wrapping-up">Wrapping up</a></strong></li>
</ul>

<p>
    <span class="first-letter">O</span>doo development has a unique set of problems that I have not dealt with
    in any other web development project. The main issue in my experience stems from yearly, non backwards
    compatible upgrades.
</p>

<p>
    This leaves developers with the need to maintain and support projects that linearly increase in size year
    to year. There's open source modules on GitHub that stretch back to version 7/8 (current master branch is
    sitting at 15). So those projects may have 9 production branches (<code>7.0</code>, <code>8.0</code>,
    <code>9.0</code>, ... <code>15.0</code>) each with code that is about 90% identical. This continues every
    year.
</p>
<p>
    You of course can stop supporting certain versions. Odoo does have an <a
        href="https://www.odoo.com/page/odoo-long-term-support"
        target="_blank"
        rel="noreferrer">LTS policy</a
    >, but without a <i>clear, simple and affordable</i> path for migration we're often stuck as Odoo developers
    supporting older versions. I've worked with clients that are 6+ versions behind because they had introduced
    a large number of customizations to their system. It did not make financial sense to take 100k lines of code
    and migrate their entire system forward. I wouldn't have recommended to them either. Honestly the system worked
    perfectly fine for them and did its job well. It's not actually much of a burden on the client. Sticking with
    a major version for a long period of time is a bigger burden on the developers maintaining the system. In that
    scenario, I don't have too much to complain about because the customer is getting value from their software.
    That's always our top goal as developers. We just have to be aware that there's some hurdles for us to deal
    with because of it.
</p>
<p>This has led to me iterating on ways to manage local development of Odoo projects.</p>

<h2 id="evolution-of-solutions">The evolution of solutions</h2>

<p>
    I worked on a team of developers at an Odoo partner for years. We started to hit these types of issues
    fairly quickly. Our biggest problems were:
</p>

<ul>
    <li>
        <strong>1. Setting up a new project took a long time</strong>. Initially we would run Odoo instances
        directly on our local development machines. As projects grew and migrated to new versions, each
        individual developer was maintaining every major version of Odoo that we work on. This took too much
        work.
    </li>
    <li>
        <strong>2. There were conflicts.</strong> Each major version has slightly different requirements. This
        isn't only a python packaging issue. Some versions also require or only support certain PostgreSQL versions
        to work well. Jumping around between projects meant a lot of virtual environment management, 6 different
        versions of python, sometimes multiple database instances, etc.
    </li>
    <li>
        <strong>3. Local environment differences.</strong> On top of the conflicts, each developer was running
        into unique issues because everyone was running different local environment setups. In the office we had
        people developing on Mac, Windows, and multiple flavors of Linux. I didn't want to standardize this because
        developers need to work the way they want, on the machines they want.
    </li>
</ul>

<h3 id="first-try">First try: virtual machines</h3>

<p>We started with a virtual machine.</p>
<p>
    This is what a lot of people on our team at the time were actually used to. We had PHP/Laravel developers
    in the office who used Homestead. I had multiple virtual machines for different operating systems that I
    needed to test with. It felt a little more common place in 2015/2016 than it does now.
</p>
<p>
    So that actually solved #2 and most of #3. We still had occasional issues with running a virtual machine
    on a Mac vs Ubuntu for example.
</p>
<p>
    But it fairly dramatically worsened #1. Working inside of a virtual machine just slows whatever your doing
    down to a crawl. Now instead of managing virtual environments and databases, we were managing every
    instance of the virtual machine per project.
</p>
<p>
    We worked this way for maybe a year or so and some team members abandoned it completely because they found
    a better work flow on their specific machine.
</p>

<h3 id="second-try">Second try: docker</h3>

<p>
    At this point, the team all together scrapped the virtual machine. The developer experience with it just
    sucked. It was too painful and got worse the longer we used it.
</p>
<p>
    Docker had been out for a few years at this point and had a strong ecosystem. I took the time to learn it
    and force it upon my team. They really weren't happy about it honestly. Docker, from the perspective of
    someone who has never used it and doesn't know much about it, just seems like a lot of overhead. Docker
    was informally talked about like a replacement for virtual machines. The team had obviously just come out
    of virtual machine hell, so why would they accept another type of virtual machine?
</p>
<p>
    After some coaxing, we all got on board. It honestly 100% solved our #2 and #3 issues. Conflicts were
    gone. Dealing with different local dev environments was almost no work because Docker supports so many
    platforms. We used <code>docker-compose</code> to orchestrate a standard set of local containers for the application
    and database. Eventually we even added more services for things like a celery task runner, and local sentry
    instance for debugging, etc.
</p>
<p>
    And it actually mostly solved #1. Setting up a new projects was much, much easier now. Clone a repo, run a
    few scripts, and you have an instance running on localhost. We only ran into 2 new issues. Running Odoo in
    a docker container is slightly slower and there's a learning curve to docker. Day to day development,
    where you are constantly restarting an Odoo instance either manually or through a file watcher, slowed
    down. It was probably 1-3 seconds more per restart. It doesn't sound like a lot, but it does add a good
    amount of delay to your work flow. It just throws you off a little bit. Dealing with the learning curve, I
    wrote a CLI tool using <a href="https://github.com/pyinvoke/invoke" target="_blank" rel="noreferrer"
        >invoke</a
    > and tried to produce as much documentation (as my time allowed for) to lessen the burden of learning docker
    and docker-compose. This worked fairly well. In retrospect, if I had to do this again I don't think I would
    have abstracted this away from the developers though.
</p>

<h3 id="iterating-again">Iterating again</h3>

<p>Welcome to modern day.</p>
<p>
    I no longer work in on an Odoo team because I've gone independent doing freelance, contract, and
    consulting work. I took everything that I learned with managing these types of development environments
    and refactored the process a bit for my own needs.
</p>
<p>
    You can find all of the work I've done on building a project skeleton at <a
        href="https://github.com/rucksac/skeleton"
        target="_blank"
        rel="noreferrer">this repository on GitHub</a
    >.
</p>

<p>What's changed:</p>

<ul>
    <li>
        I only use docker for local databases now. This is because of the performance of running Odoo in a
        docker container. I'm a team of 1 now, so I don't need the standardization across multiple local
        environments and operating systems. I have the luxury of just dealing with my system.
    </li>
    <li>
        I switched to using <a href="https://github.com/pdm-project/pdm" target="_blank" rel="noreferrer"
            ><code>pdm</code></a
        >
        or
        <a href="https://github.com/pypa/pipenv" target="_blank" rel="noreferrer"><code>pipenv</code></a>.
        Since I don't use docker for Odoo containers, I needed a way to manage virtual environments. I started
        with
        <code>pipenv</code>
        and liked it pretty well, but eventually switched to
        <code>pdm</code>
        because it entirely abstracts the virtual environment away from you. It works more like a traditional package
        manager (think <code>npm</code> for Node.js or <code>composer</code> for PHP).
    </li>
    <li>
        I use <a href="https://github.com/jacebrowning/gitman" target="_blank" rel="noreferrer"
            ><code>gitman</code></a
        >
        to track Odoo source, enterprise addons, and any 3rd party git repo addons as dependencies. In the Odoo
        world, we for some reason don't typically make <code>pip</code> packages for addons. This leaves us to
        cloning down repositories and sticking them in our projects, or using submodules, or creating some
        other hacky solution. <code>gitman</code> has really been awesome for this. It let's me throw a
        <code>gitman.yaml</code>
        file in my repo, run
        <code>gitman update</code>
        and it downloads it all into a non-git tracked <code>vendor/</code> folder for me. I can even add dependencies
        with specific commit hashes to make upgrades more clear:
    </li>
</ul>

<code class="yaml">
    <pre>{`
location: vendor
sources:
  - repo: https://github.com/odoo/odoo
    name: odoo
    rev: 14.0
  - repo: https://github.com/OCA/project
    name: OCA--project
    rev: 14.0
    sparse_paths:
      - project_key
      - project_list
      - project_tag
        `}</pre>
</code>

<ul>
    <li>
        I track major versions as branches still, but keep multiple copies of the same project locally to
        avoid switching between major branches. This would mean re installing all the dependencies, storing
        multiple versions of Odoo databases in the same database container, etc. I don't want to do that if
        possible. When working on a project in one directory, I only want to deal with one major version and
        any feature branches off of that at a time. So now my project structures just look something like:
    </li>
</ul>
<code class="bash">
    <pre>{`
/my_projects
    /my_cool_project
        # These two are clones of the
        # same repo just set to different
        # branches.
        /14.0
        /13.0
        `}</pre>
</code>

<h2 id="wrapping-up">Wrapping up</h2>
<p>
    For where I'm at in my career with web development and Odoo development, this process actually works very
    nicely for me. It may not work well for everyone. You may be on a team of developers who does need that
    Docker layer of abstraction for the actual Odoo instance. Or you may have some specific outside
    dependencies on CI/CD tools that require you to setup projects in a certain way.
</p>
<p>
    Either way, I hope this gives you some helpful information or inspiration for your own projects at least.
</p>
<p>Best of luck coding.</p>
<p>
    <mark class="bg-orange-700 text-orange-100 font-bold px-3 py-1">PS:</mark> Take a look at the
    <a href="https://github.com/rucksac/skeleton" target="_blank" rel="noreferrer"
        >repository <code>README</code> for specific details</a
    > on using the skeleton project.
</p>
