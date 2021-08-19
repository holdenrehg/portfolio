import React from "react"
import { Layout } from "../../../../components"
import { Article } from "../../../../components/blog"
import meta from "./meta"

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <h2>Update — Jan 27th, 2019</h2>
      <p>This article will still have relevant information if you are running Odoo directly on your machine or server, but I recommend reading a more updated article like <a href="/blog/2019-01-27_dockerized-odoo-development">Easier Odoo Development</a> if you are in the position to containerize your application. — Holden</p>
      <hr/>

      {/* === */}

      <h2>Managing Odoo Instances</h2>
      <p><span className="first-letter">G</span>etting started with hosting Odoo can be tricky especially when trying to manage multiple instances, manage multiple editions (Odoo 8, Odoo 9 Community, Odoo 9 Enterprise), and keep a smooth development workflow. I spent some time breaking down a simpler way to install and organize Odoo on our development server and thought I would share it with any one in the community who might be interested.</p>
      <p>I’m going to explain a quick example of setting up Odoo 9 Community and Odoo 9 Enterprise on a blank server, setting up a postgres server, defining service scripts, defining Odoo configurations, and running both instances from source.</p>
      <blockquote>This process could easily apply across multiple systems, but I will be using Ubuntu 14.04 so adapt commands as needed.</blockquote>

      <h3>The Database</h3>
      <p>Odoo uses a postgresql server to store data so we need to first install and setup our database server.</p>
      <code className="console">
        <pre>{`
# Install postgresql and login as the postgres user
$ sudo apt-get install postgresql
$ sudo -u postgres psql postgres

# Change the postgres users password and quit the postgres shell
postgres=# \password postgres
postgres=# \q
        `}</pre>
      </code>
      <p>Odoo allows end users to manage their own databases. This can be problematic when different instances share the same database server. The best way to handle this is by creating a different postgres user for each Odoo instance. In this case, we will need 2 users, one for community and one for enterprise.</p>
      <code className="console">
        <pre>{`
$ createuser -U postgres odoo-community
$ createuser -U postgres odoo-enterprise
        `}</pre>
      </code>
      <p>After creating our users, we want to make sure that they have the correct permissions. We will give them the CREATEDB role so that end users can create / delete databases through Odoo.</p>
      <code className="console">
        <pre>{`
$ psql -U postgres
postgres=# alter role odoo-community createdb;
postgres=# alter role odoo-enterprise createdb;
        `}</pre>
      </code>

      <p>Finally make sure to set passwords for each user.</p>
      <code className="console">
        <pre>{`
postgres=# \password odoo-community
postgres=# \password odoo-enterprise
        `}</pre>
      </code>

      <h3>The Source Code</h3>
      <p>Now that we have the two Odoo postgres users for each instance, we need the actual source code. Odoo has this split up between a couple of repositories if you are also working with enterprise. The core of odoo is stored in their <a href="https://github.com/odoo/odoo" rel="noreferrer" target="_blank">community git repository</a> and all enterprise addons are stored in a private git repository.</p>
      <p>1. Setup Community</p>
      <code className="console">
        <pre>{`
/odoo/community
- core
    - addons
    - debian
    - doc
    - openerp

    ...
- vendor
    - addons
        `}</pre>
      </code>
      <p>Our community instance will be stored in /odoo/community with two major sections.</p>
      <p><strong>core</strong> contains a clone of the odoo repository. This is your Odoo core code that should not be tampered with. Keeping this separate makes it easy to pull down updates directly from the git repository.</p>
      <p><strong>vendor</strong> is a directory of all third-party code that you want to pull in. This will be your own sweet custom modules or trusted modules that you download. You will see how we set this up in our configurations as an addons path.</p>
      <p>2. Setup Enterprise</p>
      <code className="console">
        <pre>{`
/odoo/enterprise
- core
    - addons
    - debian
    - doc
    - openerp
    ...
- addons
- vendor
    - addons
        `}</pre>
      </code>
      <p>Our community instance will be stored in /odoo/community with three major sections.</p>
      <p><strong>core </strong>contains the same code as the community core. This could easily be a shared code base between the two instances we are setting up, but for debugging purposes, I like to keep the two separate.</p>
      <p><strong>addons </strong>contains all enterprise specific addons. This is primarily going to be all the enterprise addons from the Odoo enterprise repository.</p>
      <p><strong>vendor </strong>is a directory of all third-party code that you want to pull in. You will see how we set this up in our configurations as an addons path.</p>
      <h4>The Dependencies</h4>
      <p>You will want to install the python dependencies required for Odoo. The requirements.txt file provided will the Odoo core makes it easy.</p>
      <code className="console">
        <pre>{`
$ pip install -r requirements.txt
        `}</pre>
      </code>
      <p>You will also need a couple of node dependencies for stylesheets.</p>
      <code className="console">
        <pre>{`
$ sudo apt-get install node-clean-css -y
$ sudo apt-get install node-less -y
        `}</pre>
      </code>

      <h3>The Service Scripts</h3>
      <p>Now that we have all our source setup, we will want an easy way to start / stop these different instances. Let’s start with the community script.</p>
      <blockquote>I have a user named odoo setup on my server. You will want to change the USER variable to be the name of the user that you want to own these processes.</blockquote>
      <p>You will create this file in /etc/init.d/odoo-community-server.</p>
      <code className="console">
        <pre>{`
#!/bin/sh

### BEGIN INIT INFO
# Provides: odoo-community-server
# Required-Start: $remote_fs $syslog
# Required-Stop: $remote_fs $syslog
# Should-Start: $network
# Should-Stop: $network
# Default-Start: 2 3 4 5
# Default-Stop: 0 1 6
# Short-Description: Enterprise Business Applications
# Description: ODOO Business Applications
### END INIT INFO

PATH=/bin:/sbin:/usr/bin
DAEMON=/odoo/community/core/openerp-server
NAME=odoo-community-server
DESC=odoo-community-server

# Specify the user name.
USER=odoo

# Specify a config file.
CONFIGFILE=”/etc/odoo-community-server.conf”

# pidfile
PIDFILE=/var/run/\${NAME}.pid

# Additional options that are passed to the Daemon.
DAEMON_OPTS=”-c $CONFIGFILE”
[ -x $DAEMON ] || exit 0
[ -f $CONFIGFILE ] || exit 0
checkpid() {
[ -f $PIDFILE ] || return 1
pid=\`cat $PIDFILE\`
[ -d /proc/$pid ] && return 0
return 1
}

case “\${1}” in
start)
echo -n “Starting \${DESC}: “
start-stop-daemon — start — quiet — pidfile $PIDFILE — chuid $USER — background — make-pidfile — exec $DAEMON — $DAEMON_OPTS
echo “\${NAME}.”
;;
stop)
echo -n “Stopping \${DESC}: “
start-stop-daemon — stop — quiet — pidfile $PIDFILE — oknodo
echo “\${NAME}.”
;;

restart|force-reload)
echo -n “Restarting \${DESC}: “
start-stop-daemon — stop — quiet — pidfile $PIDFILE — oknodo
sleep 1
start-stop-daemon — start — quiet — pidfile $PIDFILE — chuid $USER — background — make-pidfile — exec $DAEMON — $DAEMON_OPTS
echo “\${NAME}.”
;;
*)
N=/etc/init.d/$NAME
echo “Usage: $NAME {start|stop|restart|force-reload}” >&2
exit 1
;;

esac
exit 0
        `}</pre>
      </code>
      <p>The most important pieces to notice in this config file are the following:</p>
      <code className="console">
        <pre>{`
# The path to the program that will run (odoo)
DAEMON=/odoo/community/core/openerp-server

# The name of the service
NAME=odoo-community-server

# The path to the odoo config file
CONFIGFILE=”/etc/odoo-community-server.conf”
        `}</pre>
      </code>
      <p>Now we want to create the same service script for the enterprise instance. This file will exists in /etc/init.d/odoo-enterprise-server and look like this.</p>
      <code className="console">
        <pre>{`
#!/bin/sh

### BEGIN INIT INFO
# Provides: odoo-enterprise-server
# Required-Start: $remote_fs $syslog
# Required-Stop: $remote_fs $syslog
# Should-Start: $network
# Should-Stop: $network
# Default-Start: 2 3 4 5
# Default-Stop: 0 1 6
# Short-Description: Enterprise Business Applications
# Description: ODOO Business Applications
### END INIT INFO

PATH=/bin:/sbin:/usr/bin
DAEMON=/odoo/enterprise/core/openerp-server
NAME=odoo-enterprise-server
DESC=odoo-enterprise-server

# Specify the user name.
USER=odoo

# Specify a config file.
CONFIGFILE=”/etc/odoo-enterprise-server.conf”

# pidfile
PIDFILE=/var/run/\${NAME}.pid

# Additional options that are passed to the Daemon.
DAEMON_OPTS=”-c $CONFIGFILE”
[ -x $DAEMON ] || exit 0
[ -f $CONFIGFILE ] || exit 0
checkpid() {
[ -f $PIDFILE ] || return 1
pid=\`cat $PIDFILE\`
[ -d /proc/$pid ] && return 0
return 1
}

case “\${1}” in
start)
echo -n “Starting \${DESC}: “
start-stop-daemon — start — quiet — pidfile $PIDFILE — chuid $USER — background — make-pidfile — exec $DAEMON — $DAEMON_OPTS
echo “\${NAME}.”
;;
stop)
echo -n “Stopping \${DESC}: “
start-stop-daemon — stop — quiet — pidfile $PIDFILE — oknodo
echo “\${NAME}.”
;;

restart|force-reload)
echo -n “Restarting \${DESC}: “
start-stop-daemon — stop — quiet — pidfile $PIDFILE — oknodo
sleep 1
start-stop-daemon — start — quiet — pidfile $PIDFILE — chuid $USER — background — make-pidfile — exec $DAEMON — $DAEMON_OPTS
echo “\${NAME}.”
;;
*)
N=/etc/init.d/$NAME
echo “Usage: $NAME {start|stop|restart|force-reload}” >&2
exit 1
;;

esac
exit 0
        `}</pre>
      </code>
      <p>Once we setup the configuration files, you will be able to easily run the following commands to control the two seperate Odoo instances. This is much easier and manageable than running the server directly with “python odoo.py …”</p>
      <code className="console">
        <pre>{`
$ sudo service odoo-community-server {start|stop|restart}
$ sudo service odoo-enterprise-server {start|stop|restart}
        `}</pre>
      </code>
      <blockquote>If you are interested in having these run on boot, make sure you add them to your defaults with “sudo update-rc.d {'{service-name}'} defaults”.</blockquote>

      <h3>The Configurations</h3>
      <p>Finally we just have to setup the configuration files for each server. The service scripts are where these config files are referenced. Ultimatley running the service scripts will be the same as running:</p>
      <code className="console">
        <pre>{`
$ python odoo.py -c /path/to/config
        `}</pre>
      </code>
      <p>The community config script was set to be located in /etc/odoo-community-server.conf.</p>
      <code className="python">
        <pre>{`
[options]
admin_passwd = admin
db_host = False
db_port = False
db_user = odoo-community
db_password = $PASSWORD
addons_path = /usr/lib/python2.7/dist-packages/openerp/addons
logfile = /var/log/odoo/odoo-community-server.log
addons_path = /odoo/community/core/addons,/odoo/community/vendor/addons
xmlrpc_port = 8070
        `}</pre>
      </code>
      <p>We will run the community edition on port 8070 and the enterprise edition on port 8071. You are free to run them on any available ports you like though.</p>
      <code className="python">
        <pre>{`
[options]
admin_passwd = admin
db_host = False
db_port = False
db_user = odoo-enterprise
db_password = $PASSWORD
addons_path = /usr/lib/python2.7/dist-packages/openerp/addons
logfile = /var/log/odoo/odoo-enterprise-server.log
addons_path = /odoo/enterprise/addons,/odoo/enterprise/core/addons,/odoo/enterprise/vendor/addons
xmlrpc_port = 8071
        `}</pre>
      </code>
      <blockquote>It is important that the enterprise addons are loaded before the community addons. The `web` module is known to conflict because that is the only shared module between the two editions that is different.</blockquote>

      <h2>In Conclusion</h2>
      <p>Start up your servers and check out the Odoo instances running at <a href="http://servername.com:8070" rel="noreferrer" target="_blank">http://servername.com:8070</a> and <a href="http://servername.com:8071." rel="noreferrer" target="_blank">http://servername.com:8071.</a></p>
      <p>It takes slightly longer to setup Odoo this way (unless if you create a flexible shell script) but it has worked great for us as we constantly roll out updates to multiple editions along with our own custom modules. It keeps a nice separation of concerns between each part of the application as well.</p>
      <p>We are hoping to keep improving our Odoo development workflow / environments even more! Let us know or <a href="mailto:holdenrehg@gmail.com">send me an email</a> if the community has better ways to handle development.</p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
