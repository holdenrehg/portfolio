<p>
    <span class="first-letter">I</span>n older versions of Odoo, prior to version 12.0, every instance was
    created with a default user called Administrator with a primary database id of 1.
</p>
<p>In the code, you’ll find this little gem:</p>

<code class="python">
    <pre>{`
# The hard-coded super-user id (a.k.a. administrator, or root user).

SUPERUSER_ID = 1
        `}</pre>
</code>

<h2>Easy but dangerous</h2>
<p>
    This made things easy for developers. Most developers probably always logged in as the administrator user,
    especially on their local environments. So every time they logged in they had full access to all
    resources. Maybe you still had to add a certain group here or there, but generally you have access to
    everything.
</p>
<p>This also used to make things dangerous.</p>
<p>
    Developers who weren’t writing automated tests, never tested the system from the actual users point of
    view. This leads to lots of emails and complaints like “I clicked the Tasks menu and got an Access Denied
    error”.
</p>

<h2>What’s different in 12.0?</h2>
<p>Now in version 12.0, we have segregation between the Administrative user and the actual superuser.</p>
<p>
    Don’t worry, there’s still that nice snippet in core that says <code>SUPERUSER = 1</code> but the default user,
    who is now called “Mitchell Admin”, has an id of 2.
</p>
<figure>
    <img src="/images/articles/becoming-a-superuser-in-odoo/metadata.png" alt="" />
</figure>
<p>
    You don’t even have the ability to see a user with an id of 1 in the Settings &gt; Users list. It doesn’t
    seem to exist anymore from. Or it’s at least not accessible from the GUI.
</p>

<h2>So how do I become superuser?</h2>
<p>But there’s been a link added to the developer mode menu to “Become Superuser”.</p>
<ol>
    <li>Activate Developer Mode (Setting &gt; Activate Developer Mode)</li>
    <li>Click the Bug Icon in the top right</li>
    <li>Click Become Superuser, which will add a yellow striped banner</li>
</ol>
<figure>
    <img src="/images/articles/becoming-a-superuser-in-odoo/debug-menu.png" alt="" />
</figure>

<h2>With great power comes great responsibility</h2>
<p>
    As a developer, you’ll want to use this with some caution. It’s easy to fall back into the trap of always
    being logged in as the superuser and ignoring all the permissions all of the time.
</p>
<p>So use it only when you have to.</p>
<p>And as usual, <a href="/blog/2019-02-02_writing-tests-in-odoo">test! test! test!</a></p>
