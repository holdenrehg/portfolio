import React from "react"
import { Layout } from "../../../../components"
import { Article } from "../../../../components/blog"
import meta from "./meta"

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <p><span className="first-letter">E</span>very once in a while, you will run into an issue during Odoo development that causes an internal server error in one of your Odoo databases. This could be caused by some different issues:</p>
      <ul>
          <li>Pulling down code updates without restarting the odoo processes, preventing python files from generating the proper .pyc files.</li>
          <li>Not properly updating the applications that were affecting from pulling down code changes.</li>
          <li>Not updating across all databases that have the effected applications installed.</li>
      </ul>

      <p>Let’s assume we have one Odoo instance currently running. I can view the processes by running a ps aux and greping for the script name.</p>
      <code className="console">
        <pre>{`
$ ps aux | grep odoo-server

odoo      1995  0.5  4.3 371028 89352 ?        Sl   21:13   0:02 python /opt/odoo/core-v8/openerp-server -c /opt/odoo/config/odoo-server-v8.conf
odoo      2037  0.0  3.7 371028 77656 ?        S    21:13   0:00 python /opt/odoo/core-v8/openerp-server -c /opt/odoo/config/odoo-server-v8.conf
odoo      2038  0.0  3.7 371028 77656 ?        S    21:13   0:00 python /opt/odoo/core-v8/openerp-server -c /opt/odoo/config/odoo-server-v8.conf
odoo      2039  0.0  3.7 371028 77656 ?        S    21:13   0:00 python /opt/odoo/core-v8/openerp-server -c /opt/odoo/config/odoo-server-v8.conf
odoo      2040  0.0  3.7 371028 77656 ?        S    21:13   0:00 python /opt/odoo/core-v8/openerp-server -c /opt/odoo/config/odoo-server-v8.conf
odoo      2041  0.7  4.4 376396 90836 ?        Sl   21:13   0:02 /usr/bin/python /opt/odoo/core-v8/openerp-gevent -c /opt/odoo/config/odoo-server-v8.conf
odoo      2042  0.8  5.6 409264 116300 ?       SN   21:13   0:03 python /opt/odoo/core-v8/openerp-server -c /opt/odoo/config/odoo-server-v8.conf
odoo      2043  4.7  7.5 447704 154432 ?       SN   21:13   0:19 python /opt/odoo/core-v8/openerp-server -c /opt/odoo/config/odoo-server-v8.conf
        `}</pre>
      </code>

      <p>Let’s also assume that a production database has been properly updated but a testing database is currently throwing an internal server error because it was not properly updated.</p>
      <p>We do not want to take down any currently running processes, but we need to bring up that bad database. It’s not too hard to do that through command line.</p>
      <figure name="2357" id="2357" class="graf graf--figure graf--iframe graf-after--p">
          <script></script>
      </figure>
      <code className="console">
        <pre>{`
#!/bin/bash

./openerp-server \\
    -c /etc/odoo9e-server.conf \\
    -d Testing \\
    -u module_name1,module_name2 \\
    --stop-after-init \\
    --xmlrpc-port 8090
        `}</pre>
      </code>
      <p>This command will spin up a new Odoo instance, on a separate port, and try to upgrade a list of modules on a single database. After it runs through all the initialization processes for Odoo it kills itself. Here’s what each flag means.</p>
      <p><strong>-c /etc/odoo9e-server.conf</strong></p>
      <p>This is the path to the configuration file. It should be the same configuration file that you are already pointing your Odoo instance to run against. If you are not using any type of configuration file now, then you will just need to use all the same flags that you typically run, except for the parameters listed below. These should take precedence in this case.</p>
      <p><strong>-d Testing</strong></p>
      <p>This is the name of the database you want to try to upgrade the modules on. In my simple example above, where a production database is running and the testing database is down, this is the database we are trying to fix.</p>
      <p><strong>-u module_name1,module_name2</strong></p>
      <p>A comma separated list of problem modules that need to be upgraded.</p>
      <p><strong>--stop-after-init</strong></p>
      <p>This is a flag forcing Odoo to kill the process after all initialization logic has finished. This allows us to just recompile pyc files, upgrade modules, and then stop since we just this to all happen via command line.</p>
      <p><strong>--xmlrpc-port 8090</strong></p>
      <p>Make sure that this is a different port from the processes that are already running for your current Odoo instance. If it is, you will see an error message pop up that says the port is already in use.</p>
      <p>And that is it. Happy coding :)</p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
