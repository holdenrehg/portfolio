import React from "react"
import { Layout } from "../../../../components"
import { Article } from "../../../../components/blog"
import meta from "./meta"

const Page = props => (
    <Layout>
        <Article meta={props.meta}>
            <ul className="table-of-contents">
                <li><strong><a href="#introduction">Introduction</a></strong></li>
                <li><strong><a href="#installing">Installing Docker</a></strong>
                    <ul>
                        <li><a href="#installing-on-linux">Linux/Unix</a></li>
                        <li><a href="#installing-on-mac">Mac</a></li>
                        <li><a href="#installing-on-windows">Windows</a></li>
                    </ul>
                </li>
                <li><strong><a href="#local">Local Development</a></strong>
                    <ul>
                        <li><a href="#starting">Starting instances</a></li>
                        <li><a href="#stopping">Stopping instances</a></li>
                        <li><a href="#restarting">Restarting instances</a></li>
                        <li><a href="#configuring">Configuring Odoo</a></li>
                        <li><a href="#custom-addons">Adding custom addons</a></li>
                        <li><a href="#connecting-to-db">Connecting to the database</a></li>
                        <li><a href="#tailing-logs">Tailing or reading logs</a></li>
                    </ul>
                </li>
                <li><strong><a href="#docker-compose">A Note on Docker Compose</a></strong></li>
                <li><strong><a href="#conclusion">Wrapping Up</a></strong></li>
            </ul>

            <p id="introduction">
                I've been asked a handful of times about
                my <a href="/blog/2019-01-27_dockerized-odoo-development">Dockerized Odoo</a> article. Even
                today 8 years after the release of Docker there's hesitation around developing with it.
                I completely understand that because Docker can be complex.
            </p>
            <p>
                Originally I wanted to cover the major topics, features, and pain points that I
                noticed as a developer working with Docker. That's where the <a href="/blog/2019-01-27_dockerized-odoo-development">Dockerized Odoo</a> article
                came from. Now I think I can help a certain type of developer by putting out a quickstart guide with
                simpler steps. This is targeted towards that developer who might not need every detail.
            </p>
            <p>
                So that's what I'm aiming to do here. Here's the most pragmatic quickstart guide to
                working with Odoo and Docker that I can come up with:
            </p>

            <h2 id="installing">Installing Docker</h2>
            <p>
                For detailed instructions on getting setup in a specific environment, take a look
                at <a href="https://docs.docker.com/get-docker/">docs.docker.com/get-docker/</a>.
                At the end of the day we need access to the <code>docker</code> command line tool. This
                is what we'll use to work with, control, and manipulate our containers.
            </p>

            <h3 id="installing-on-linux">Linux/Unix</h3>
            <p>Using Docker's <code>docker-install</code> script is the easiest way to install Docker on Linux.</p>
            <code className="console">
                <pre>{`
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sh get-docker.sh
                `}</pre>
            </code>

            <h3 id="installing-on-mac">Mac</h3>
            <p>
                On a Mac you need to download the Docker Desktop .dmg to install the application
                from <a href="https://docs.docker.com/docker-for-mac/install/">docs.docker.com/docker-for-mac/install/</a>.
            </p>

            <h3 id="installing-on-windows">Windows</h3>
            <p>
                Now to be honest I have very little experience with Docker on Windows, but I have set it
                up a handful of times. Using <a href="https://docs.docker.com/docker-for-windows/install/">docs.docker.com/docker-for-windows/install/</a>
                and downloading the Docker Desktop application was pretty straight forward.
            </p>
            <p>
                I would make sure you have access to <code>docker</code> from powershell once it's installed.
            </p>

            <h2 id="local">Local Development</h2>
            <p>
                As Odoo developers, there is a handful of tasks that we do over and over and over while building
                Odoo modules or applications. I'm going to show you how to handle the basic tasks to get your
                work done day to day.
            </p>

            <p>
                For this section we are just going to stick with standard <code>docker</code> commands.
            </p>

            <h3 id="starting">Starting an Odoo instance</h3>
            <img src="/blog/odoo-docker-quickstart/starting_container.gif"/>
            <p>
                When starting a brand new instance, there are two steps:
            </p>
            <p>
                1. Start up a Postgres database container. Use a name unique to your project. For example,
                you'll see below that I am using <code>myodoo_db</code> since I am working in a sample project called
                <code>myodoo</code>.
            </p>
            <code className="console">
                <pre>{`
$ docker run -d \\
    -e POSTGRES_USER=odoo \\
    -e POSTGRES_PASSWORD=odoo \\
    -e POSTGRES_DB=postgres \\
    --name myodoo_db postgres:13
                `}</pre>
            </code>
            <p>
                2. Start up the Odoo container. Similarly, try to use a unique name. I'm again prefixing
                the name with <code>myodoo_</code> to keep the container names unique.
            </p>
            <code className="console">
                <pre>{`
$ docker run -p 8069:8069 --name myodoo_odoo --link myodoo_db:db -t odoo
                `}</pre>
            </code>
            <p>
                In this example we've opened up the Odoo instance to http://localhost:8069.
            </p>

            <h3 id="stopping">Stopping an Odoo instance</h3>
            <p>
                Containers can either be run in the foreground or background. So far we are running
                the postgres container in the background (using the <code>-d</code> flag) and the
                Odoo instance in the foreground.
            </p>
            <p>
                To stop the Odoo container you can just use <code>ctrl+c</code>.
            </p>
            <p>
                To stop a container running in the background, you can use <code>{`docker stop {container-name}`}</code>.
                It's helpful to first run <code>docker ps</code> to see what's actually running right now.
            </p>
            <code className="console">
                <pre>{`
$ docker ps
CONTAINER ID   IMAGE         COMMAND                  CREATED             STATUS             PORTS      NAMES
f5231fb8d19b   postgres:13   "docker-entrypoint.s…"   About an hour ago   Up About an hour   5432/tcp   myodoo_db

$ docker stop myodoo_db
myodoo_db

$ docker ps
CONTAINER ID   IMAGE         COMMAND                  CREATED             STATUS             PORTS      NAMES
                `}</pre>
            </code>

            <h3 id="restarting">Restarting an Odoo instance</h3>
            <p>
                To bring containers back up that are currently off, use <code>docker start</code>.
            </p>
            <code className="console">
                <pre>{`
$ docker start myodoo_db
$ docker start myodoo_odoo
                `}</pre>
            </code>
            <p>
                Or to restart containers that are already running, use <code>docker restart</code>.
                For example, when coding a new module you'll probably use <code>docker restart</code>
                often.
            </p>
            <code className="console">
                <pre>{`
$ docker restart myodoo_odoo
                `}</pre>
            </code>

            <h3 id="configuring">Configuring Odoo</h3>
            <p>
                The configurations for the Odoo instance can be set by either passing inline
                argument or providing a new odoo.conf file.
            </p>
            <p>
                It's important to keep in mind that certain parts of containers cannot be
                modified once they are created. They are meant to be easily destroyed and
                recreated. So first we need to get rid of our original Odoo container:
            </p>
            <code className="console">
                <pre>{`
$ docker stop myodoo_odoo  # running containers cannot be removed
$ docker rm myodoo_odoo
                `}</pre>
            </code>
            <p>
                To create a new container with inline arguments, it's possible to pass them
                in via the <code>--</code> keyword:
            </p>
            <code className="console">
                <pre>{`
$ docker run -p 8069:8069 --name myodoo_odoo --link myodoo_db:db -t odoo -- list_db=False
                `}</pre>
            </code>
            <p>
                To create a new container with a new conf file all together we are going to use
                the <code>-v</code> which defines a new volume. A volume is essentially a way to share data
                between your host computer and the container. In this example,
                it's assuming that you have a file called <code>/my/odoo/odoo.conf</code> on
                your computer.
            </p>
            <code className="console">
                <pre>{`
$ docker run -p 8069:8069 --name myodoo_odoo --link myodoo_db:db -v /my/odoo:/etc/odoo -t odoo
                `}</pre>
            </code>

            <h3 id="custom-addons">Adding custom addons</h3>
            <p>
                Now we may want to load in some of our own modules that we're working on. I have
                a sample directory under <code>/odoo/myodoo</code> for this sample project and it looks
                like:
            </p>
            <code className="console">
                <pre>{`
/odoo/myodoo/
└── addons
    ├── event_mail
    ├── event_project
    └── partner_event
                `}</pre>
            </code>
            <p>
                To mount these addons into the Odoo container, we need to link a volume to a
                designated directory that the Odoo container has built in for extra addons
                at <code>/mnt/extra_addons</code>:
            </p>
            <code className="console">
                <pre>{`
$ docker run \\
    -p 8069:8069 \\
    --name myodoo_odoo \\
    --link myodoo_db:db \\
    -v /odoo/myodoo:/mnt/extra_addons \\
    -t odoo
                `}</pre>
            </code>
            <img src="/blog/odoo-docker-quickstart/start_container_with_mounted_addons.gif"/>
            <p>
                Once started up, you will have access to your addons via the Apps menu as usual. As your
                developing your addons you can <code>docker restart myodoo_odoo</code> to reload
                your python code.
            </p>

            <h3 id="connecting-to-db">Connecting to the database</h3>
            <p>
                Running any command "inside" of the container can be done via <code>docker exec</code>.
                This is helpful also to access the database. When first creating the database container
                we passed in environment variables for the credentials (user is <code>odoo</code>, password is
                <code>odoo</code>, default database is <code>postgres</code>).
            </p>
            <p>
                To open up the connection to the database we use <code>docker exec</code> to run <code>psql</code>
                inside of the container.
            </p>
            <code className="console">
                <pre>{`
$ docker exec -it myodoo_db psql -U odoo -W postgres
                `}</pre>
            </code>
            <img src="/blog/odoo-docker-quickstart/psql.gif"/>

            <h3 id="tailing-logs">Tailing or reading log</h3>
            <p>
                The simplest way to monitor logs while working locally is through the <code>docker logs</code>
                command. You can list, grep, and tail logs for a specific container. Here is an example of
                tailing logs on one of the Odoo container's we've created:
            </p>
            <code className="console">
                <pre>{`
$ docker logs -f myodoo_odoo
                `}</pre>
            </code>
            <img src="/blog/odoo-docker-quickstart/logs.gif"/>

            <h2 id="docker-compose">A Note on Docker Compose</h2>
            <p>
                In <a href="/blog/2019-01-27_dockerized-odoo-development">Dockerizing Odoo</a> I utilized <code>docker-compose</code> and I still
                recommend using it if you really start to depend on Docker for your development. It
                feels like a must-have utility for the sake of efficiency.
            </p>
            <p>
                But I'm thinking about the total beginners here. The Odoo developers who are just playing
                around with Docker for the first time and using Docker directly helps you learn
                more because of how explicit the API is and it's also simpler on a small
                scale (one or two containers).
            </p>
            <p>
                As you learn more and get more comfortable with <code>docker</code> I recommend going back
                to look at my original article and to start reading through
                the <a href="https://docs.docker.com/compose/">Docker Compose documentation</a>.
            </p>

            <h2 id="conclusion">Wrapping Up</h2>
            <p>
                That's the basics for simple local Odoo development techniques using Docker. Try them
                out and let me know what you think. I hope it's able to simplify your workflow or your
                team's workflow!
            </p>
            <p>Best of luck coding.</p>
            <p>- Holden</p>
        </Article>
    </Layout>
)

Page.defaultProps = {
    meta: meta
}

export default Page
