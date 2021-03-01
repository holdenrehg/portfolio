import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"

const meta = new Meta({
  id: "2019-02-16_run-an-odoo-repl",
  title: "Run an Odoo REPL / IPython prompt",
  subtitle: "One of the most useful things in Odoo",
  datePosted: "2019-02-16",
  coverImage: "/blog/run-an-odoo-repl/cover.png",
  description: `
    In Odoo, you have the ability to run Odoo as a web server and access it via
    a GUI, but you can also run a python REPL with all of the Odoo modules
    loaded in as globals. This is extremely helpful for debugging and for
    learning.
  `,
  tags: [
    Tags.OpenSource,
    Tags.Odoo,
    Tags.Erp,
    Tags.Python,
    Tags.Software
  ],
  related: [
    "2016-10-23_upgrade-odoo-apps-from-command-line",
    "2019-04-26_becoming-a-superuser-in-odoo",
    "2020-03-29_daily-odoo-team-routine",
  ],
})

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <code className="console">
        <pre>{`
$ ./odoo-bin shell \\
    -c /etc/odoo.conf \\
    --xmlrpc-port=8888 \\
    --longpolling-port=8899 \\
    -d odoo
        `}</pre>
      </code>

      <figure>
        <img src="/blog/run-an-odoo-repl" alt=""/>
      </figure>

      {/* === */}

      <p><span className="first-letter">I</span>n Odoo, you have the ability to run Odoo as a web server and access it via a GUI, but you can also run a python REPL with all of the Odoo modules loaded in as globals. This is extremely helpful for debugging and for learning.</p>
      <p>For example, you could start up the shell, query for information via env/search/browse commands, run individual functions, access variables and properties associated with core classes, load in new functions if needed for testing, etc.</p>
      <h2>How to run an Odoo shell</h2>

      {/* === */}

      <p>Let’s break down the command:</p>
      <code className="console">
        <pre>{`
$ ./odoo-bin shell \\
    -c /etc/odoo.conf \\
    --xmlrpc-port=8888 \\
    --longpolling-port=8899 \\
    -d odoo
        `}</pre>
      </code>

      <h3><strong>./odoo-bin shell</strong></h3>
      <p><code>odoo-bin</code> is the executable in the root directory of the core Odoo project. This is how you run an Odoo instance.</p>
      <p>If you run <code>odoo-bin help</code> you will see that we have a few different commands that we can run. One of those commands is <code>shell</code> which will start up our REPL.</p>
      <code className="console">
        <pre>{`
odoo:$ ./odoo-bin help
Available commands:

    deploy    Deploy a module on an Odoo instance
    help      Display the list of available commands
    scaffold  Generates an Odoo module skeleton
    server    Start the odoo server (default command)
    shell     Start odoo in an interactive shell
    start     Quick start the Odoo server for your project

Use 'odoo-bin <command> --help' for individual command help
        `}</pre>
      </code>

      <h3><strong>-c /etc/odoo.conf</strong></h3>
      <p>Reference to your configuration files, if relevant. If you do not need all of your configurations and addons referenced then you can leave this off.</p>

      <h3><strong>--xmlrpc-port=8888 --longpolling-port=8899</strong></h3>
      <p>More optional flags. I use these because then I can run a standard Odoo instance on 8069/8072, but run a shell prompt at the same time on separate non-conflicting ports. You can use any open ports that you would like.</p>

      <h3><strong>-d odoo</strong></h3>
      <p>The database that you want to connect to. All Odoo shell prompts are connected to a single database at a time.</p>

      {/* === */}

      <h2>What do you have reference to?</h2>
      <p>Once you got a shell prompt up and running, then check out what you actually have reference to. You can see this by runnng <code>globals()</code>:</p>
      <figure>
        <img src="/blog/run-an-odoo-repl/globals.png" alt=""/>
      </figure>

      <p>Here are some of the globals that I end up using the most often:</p>

      <h3><strong>self</strong></h3>
      <code className="python">
        <pre>{`
In [1]: self
Out[1]: res.users(1,)
        `}</pre>
      </code>
      <p><code>self</code> is a reference to the currently logged in user. By default, this is going to be id=1 (the admin user.)</p>

      <h3><strong>env</strong></h3>
      <p>A global reference to the <code>Environment</code> similar to if you would access it via <code>self.env</code> .</p>
      <p>This is where we can start querying/accessing different data in the system:</p>
      <code className="python">
        <pre>{`
In [1]: attachments = env["ir.attachment"].search([])

In [2]: attachments
Out[2]: ir.attachment(356, 355, 354, 353, 352)
        `}</pre>
      </code>

      <h3><strong>odoo / openerp</strong></h3>
      <p>The global reference to the odoo core. Anything that you would typically import in modules is accessible. So if you need to access <code>odoo.models</code> , <code>odoo.tools</code> , <code>odoo.exceptions</code> , etc. you can import or reference those in the shell prompt.</p>
      <code className="python">
        <pre>{`
In [1]: f = odoo.fields.Many2one

In [2]: dir(f)
Out[12]:
['__class__',
 '__delattr__',
 '__dir__',
 '__doc__',
 '__eq__',

... ]
        `}</pre>
      </code>

      {/* === */}

      <h2>Some Tricks</h2>
      <p>Here are just a couple of quick tricks that I use pretty often within the odoo shell.</p>

      <h3><strong>General Imports</strong></h3>
      <p>Just like any ipython prompt, you can import any accessible library. This is extremely helpful as you start debugging. Bring different libraries into the prompt.</p>
      <code className="python">
        <pre>{`
In [1]: import math, string, io
        `}</pre>
      </code>

      <h3><strong>Viewing Properties and Functions</strong></h3>
      <p>At the beginning of this article, I said that the shell is great for both debugging and learning. Seeing the properties and functions available helped me initially learn how Odoo worked internally.</p>
      <p>You can go through everything available to you via the global <code>odoo</code> or <code>env</code> module.</p>
      <p>Let’s take the <code>search</code> method for example. This is something that many odoo developers use via commands like <code>env[&#39;my.model&#39;].search</code> . But we can see a quick description of this directly in the prompt by using <code>??</code> :</p>
      <figure>
        <img src="/blog/run-an-odoo-repl/attachments.png" alt=""/>
      </figure>
      <p>Above, we are assuming that we already know that the <code>search</code> method exists. If we actually need to find methods then we can hit tab at the end of a variable to see all available properties and methods:</p>
      <figure>
        <img src="/blog/run-an-odoo-repl/tab-options.gif" alt=""/>
      </figure>

      <h3><strong>Committing Data</strong></h3>
      <p><strong>Be careful with this</strong> since it actually writes to your database.</p>
      <p>If you need to update some record via the odoo shell, you have to run the <code>update</code> method like you would in a standard custom module, but then you have to manually commit them to the database via <code>env.cr.commit</code>.</p>
      <code className="python">
        <pre>{`
In [1]: users = env["res.users"].search([])

In [2]: for user in users:
   ...:     user.update({"create_uid": 1})
   ...:

In [3]: env.cr.commit()
        `}</pre>
      </code>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
