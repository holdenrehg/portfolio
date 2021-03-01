import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"

const meta = new Meta({
  id: "2019-01-27_dockerized-odoo-development",
  title: "Dockerized Odoo development",
  subtitle: "Easier Development With Docker",
  datePosted: "2019-01-27",
  coverImage: "/blog/dockerized-odoo-development/cover.jpeg",
  description: `
    This is a follow up to something I wrote about a couple of years ago when I
    was trying to go through the process of running dozens of applications on
    the same server. Looking back I wish I would have jumped into Docker sooner,
    but hindsight is 20/20.
  `,
  tags: [
    Tags.Odoo,
    Tags.Docker,
    Tags.Python,
    Tags.DevTools,
  ],
  related: [
    "2019-09-04_guide-to-erp",
    "2019-07-13_ten-ways-to-prevent-tech-debt",
    "2019-03-03_odoo-tricks-and-tools",
  ],
})

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <p><span className="first-letter">T</span>his is a follow up to something I wrote about a couple of years ago when I was trying to go through the process of running dozens of applications on the same server. Looking back I wish I would have jumped into Docker sooner, but hindsight is 20/20.</p>

      {/* === */}

      <h2>Why Docker?</h2>
      <p>Docker, in my opinion, is still the only real option for running isolated development systems for a team of engineers using varying operating systems while being able to deploy those isolated systems from a local environment, to a development environment, to a production environment.</p>
      <p>You have a few other tools out there like LXC but it’s not diverse enough.</p>
      <p>Ultimately with these types of tools (virtualization, containers, virtual machines, etc.), we are just trying to solve a few problems that we run into on development teams.</p>
      <p><strong>The Team and Example Project</strong></p>
      <p>Think about 10 developers working on a team together to develop an awesome new web application using Python and Postgresql. Between these 10 developers, imagine they use 5 different operating systems. They use Ubuntu, Red Hat, Fedora, Windows, and macOS.</p>
      <p>The Python app they are building integrates 3 open source projects behind the scenes running a chat application, queueing software, and a resource monitoring tool that only runs on Linux. The production and staging environments are Linux servers.</p>
      <p>How do we get the application running on all 10 developers local environments? It’s possible, but not fun. Some people use virtual machines, some may have to use cloud servers for certain services, some dual boot their systems or use a separate laptop, etc.</p>
      <p>And this is actually a common, pretty simple example. Think about more complex examples like a client-service business where each developer has between 5–20 projects on their local system at a time, different programming languages or different versions of 1 programming language, different database systems, different dependencies, etc.</p>
      <p><strong>The Team’s Needs</strong></p>
      <p>The team needs a development environment that does the following:</p>
      <ul>
          <li>Isolates an operating system at a certain version, per service.</li>
          <li>Isolates all dependencies at a certain version.</li>
          <li>Runs essentially anywhere. Any OS, cloud or physical, production or local.</li>
          <li>Performs well enough for developers to not rip their hair out.</li>
      </ul>

      <h2>What is Docker?</h2>
      <p>At this point, it seems that most developers have at least run across Docker. Even if it’s just from looking at open source projects that provide instructions on running with Docker or seeing articles about if you don’t start using containers your living in prehistoric times (Docker is a good tool, but <strong>do what’s best for you and don’t bandwagon</strong> just for the sake of using the newest shit)</p>
      <p>So for people who need a quick summary, let’s run through some different terms:</p>
      <p><strong>Virtualization</strong></p>
      <p>There are different types of virtualization, but ultimately virtualization means the simulation of computer systems or environments on a single host system, <strong>isolated into their own space</strong>.</p>
      <p>Imagine if you have a generic phone that has 4 buttons on it for iOS, Android, Blackberry, or Microsoft. You could “open up” your iOS system and take a couple of pictures before going back to the Android system to edit those two pictures.</p>
      <p>Virtualization, in the simplest use case, let’s you do that with computers. If you are a macOS user who needs to run the newest Office Suite then you can simulate a Windows 10 system from your mac.</p>
      <p>Your mac would be considered the host.</p>
      <p>The windows system would be considered a guest operating system.</p>
      <p>A tool called a hypervisor interfaces with physical hardware and distributes resources to each guest.</p>
      <p><strong>Virtual Machines</strong></p>
      <p>You may have experience with tools like VirtualBox or VMWare Workstation for virtualization or even local development, but technically Docker does not use the same type of virtualization.</p>
      <p>In practice, two factors that stand out with virtual machines, compared to containers, are:</p>
      <ol>
          <li>Virtual Machines always provide a full operating system.</li>
          <li>Virtual Machines take a performance hit because of the extra layers of software placed between the host system (your computer) and the guest system (the operating system running in the virtual machine.)</li>
      </ol>
      <p>Virtual machines are good in a way but also bad in a way. It meets some of the teams’ needs but they are <strong>not fast</strong> and they <strong>will not deploy as easily</strong>.</p>
      <p>There’s a lot of details about resource sharing, networking, and hypervisors, hardware utilization, partitioning, etc. associated with explaining how virtual machines work behind the scenes. <a href="https://www.vmware.com/solutions/virtualization.html" rel="noreferrer" target="_blank">VMWare</a> has some good resources out there if you want to dig into those details.</p>
      <p><strong>Containers</strong></p>
      <p>Finally, something Docker specific. So as you know, Docker does not use Virtual Machines or the definition of virtualization defined by Virtual Machines.</p>
      <p>It uses containers. There are quite a few technical differences between containers and virtual machines, but you can visualize containers as micro virtual machines. Docker does not package up the container in the same way that a virtual machine does, with the entire guest operating system kernel, hypervisor, and hardware virtualization tooling, so we can create hundreds of these simple containers and network them together without the overhead of a virtual machine.</p>
      <p>Remember that when running containers, they are still an isolated environment.</p>
      <p>Your computer is the docker host.</p>
      <p>Each container runs as its own “micro virtual machine”. You can treat it like a remote server in a way, by copying files to and from, shelling into the container, networking with the containers IP, etc.</p>
      <p><strong>Volumes</strong></p>
      <p>A volume is a way to share data between the host (your computer) and a specific container. With each container being as close to stateless as possible, you can map data inside the container from your machine. You will see more about this below when we setup our <code>docker-compose.yml</code> file.</p>
      <p><strong>Images</strong></p>
      <p>Images are basically compiled containers. Containers are given instructions, defining how to set up the container from scratch, that look like:</p>
      <code className="dockerfile">
        <pre>{`
FROM odoo:10.0

RUN touch /var/log/odoo.log
RUN git clone https://github.com/me/my_addons.git /opt/odoo/addons/my_addons
        `}</pre>
      </code>
      <p>Think about these like Chef recipes or server provisioning tools. It&#39;s telling Docker how to create a container so that the container is exactly the same for every developer and every environment. These are called Dockerfile’s.</p>
      <p>There is a process of building the container from these files, packaging them up as an image, and pushing them to an image repository so that your team or our developers can use them. See <a href="https://hub.docker.com" rel="noreferrer" target="_blank">hub.docker.com</a>.</p>
      <h3>Running Odoo On Docker</h3>
      <p>There’s much, much, much more to learn about docker and ecosystem that revolves around Docker, but hopefully, that gives you a rough idea about the basics.</p>
      <p>Let’s get Odoo up and running now.</p>
      <p><strong>Installing Docker and Docker Compose</strong></p>
      <p>Make sure you have <a href="https://docs.docker.com/install/#supported-platforms" rel="noreferrer" target="_blank">Docker and Docker Compose installed</a>. For Linux based system, you can use your package manager:</p>
      <code className="console">
        <ore>{`
# Using Ubuntu / Debian
$ sudo apt install docker docker-compose

# Using Redhat
$ sudo apt install docker docker-compose
        `}</ore>
      </code>
      <p><strong>Creating Our Docker Compose File</strong></p>
      <p>Without using docker, we know that we need a <a href="https://github.com/Yenthe666/InstallScript/blob/12.0/odoo_install.sh" rel="noreferrer" target="_blank">certain set of steps to create our local environment</a> for Odoo development:</p>
      <p>All of that has been baked into a template for us already as a docker image (<a href="https://github.com/odoo/docker/blob/d0360678214b8f70970a2369a5a6b37981ab2c45/12.0/Dockerfile" rel="noreferrer" target="_blank">see the Dockerfile</a> for the steps followed). All we need to do is reference the docker hub image.</p>
      <p>1. Make a folder on your system, which will become your project environment:</p>
      <code className="console">
        <pre>{`
$ mkdir -p ~/projects/odoo-docker
$ cd ~/projects/odoo-docker
$ touch docker-compose.yml
$ mkdir ./config && touch config/odoo.conf
$ mkdir ./addons
        `}</pre>
      </code>
      <p>2. Add the <code>./docker-compose.yml</code> contents:</p>
      <p>I’ve created the sample <code>docker-compose.yml</code> file below. I haven’t talked about docker compose in this article yet, but it’s an additional tool created by docker to allow you to orchestrate multiple containers together. In the case of Odoo, we need the web application container but also the postgresql database container.</p>
      <code className="yaml">
        <pre>{`
version: '3.3'

services:
  # Web Application Service Definition
  # --------
  #
  # All of the information needed to start up an odoo web
  # application container.
  web:
    image: odoo:12.0
    depends_on:
        - db

    # Port Mapping
    # --------
    #
    # Here we are mapping a port on the host machine (on the left)
    # to a port inside of the container (on the right.) The default
    # port on Odoo is 8069, so Odoo is running on that port inside
    # of the container. But we are going to access it locally on
    # our machine from localhost:9000.
    ports:
      - 9000:8069

    # Data Volumes
    # --------
    #
    # This defines files that we are mapping from the host machine
    # into the container.
    #
    # Right now, we are using it to map a configuration file into
    # the container and any extra odoo modules.
    volumes:
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons

    # Odoo Environment Variables
    # --------
    #
    # The odoo image uses a few different environment
    # variables when running to connect to the postgres
    # database.
    #
    # Make sure that they are the same as the database user
    # defined in the db container environment variables.
    environment:
      - HOST=db
      - USER=odoo
      - PASSWORD=odoo

  # Database Container Service Definition
  # --------
  #
  # All of the information needed to start up a postgresql
  # container.
  db:
    image: postgres:10

    # Database Environment Variables
    # --------
    #
    # The postgresql image uses a few different environment
    # variables when running to create the database. Set the
    # username and password of the database user here.
    #
    # Make sure that they are the same as the database user
    # defined in the web container environment variables.
    environment:
      - POSTGRES_PASSWORD=odoo
      - POSTGRES_USER=odoo
      - POSTGRES_DB=postgres  # Leave this set to postgres
        `}</pre>
      </code>
      <p>3. Add the odoo.conf to <code>./config/odoo.conf</code> which will be mapped inside the container using volumes.</p>
      <p>This is a very simple and fairly standard odoo configuration. The only part that may be confusing is the <code>db_host</code> . With docker, it will understand references to the container name (see in the docker-compose.yml above where we named our postgres container <code>db</code>). So it finds the proper IP for that container based on the name.</p>
      <code className="python">
        <pre>{`
[options]

admin_passwd = my_admin_password

# |--------------------------------------------------------------------------
# | Port Options
# |--------------------------------------------------------------------------
# |
# | Define the application port and longpolling ports.
# |

xmlrpc_port = 8069

# |--------------------------------------------------------------------------
# | Database Configurations
# |--------------------------------------------------------------------------
# |
# | Database configurations that setup Odoo to connect to a
# | postgresql database.
# |

db_host = db
db_user = odoo
db_password = odoo
db_port = 5432
        `}</pre>
      </code>
      <p>4. Run the containers</p>
      <p>You can start up the container by running:</p>
      <code className="console">
        <pre>{`
$ docker-compose up
        `}</pre>
      </code>
      <p>You will see the output from the database and the odoo process. Once it has completed start up then you can access your instance at <a href="http://localhost:9000." rel="noreferrer" target="_blank">http://localhost:9000.</a></p>
      <p>And that’s it. Congrats. You have a local Odoo environment running inside docker containers.</p>
      <img src="/blog/dockerized-odoo-development/create-db.png"/>

      {/* === */}

      <h2>Notes On Workflow And Management</h2>
      <p>This is just a simple tutorial on getting started with docker and Odoo, but there’s a lot you can do from here to make the workflow for you and your team a smoother process.</p>
      <p><strong>Get Used To The Daily Workflow</strong></p>
      <p>We started up the container above with a simple command:</p>
      <code className="console">
        <pre>{`
$ docker-compose up
        `}</pre>
      </code>
      <p>And we can then stop it with Ctrl+C. But make sure to review the <code>docker</code> and <code>docker-compose</code> CLI tools to see everything that it can do:</p>
      <code className="console">
        <pre>{`
# Start containers up in the background
$ docker-compose up -d

# Restart containers
$ docker-compose restart

# Stop containers
$ docker-compose stop

# Destroy containers (WARNING: This could mean data inside those containers as well)
$ docker-compose down

# Show container processes
$ docker ps
$ docker ps --filter name={container_name}

# Show container process stats
$ docker stats

# SSH into a container
$ docker exec -it {container_id} sh
$ docker exec -it $(docker ps -q --filter name={container_name}) sh
$ docker exec -u {user} -it {container_id} sh
$ docker exec -u root -it {container_id} bash

# Copy contents to container from host
$ docker cp ~/my/file {container_id}:~/myfile

# Copy contents from container to host
$ docker cp {container_id}:~/myfile ~/my/file

# Tail the process from a container
$ docker logs -f {container_id}
        `}</pre>
      </code>
      <p><strong>Some Ideas On What To Do Next</strong></p>
      <ul>
          <li>Create a project <code>make</code> process. If you can get to the point where any developer can <code>git pull</code> your project, run a single script or command, and have the application up and running. That’s ideal. With a setup like this, you could for example just add a <code>make.sh</code> script in the root of the project which would download any addons that you need.</li>
          <li>Build your own docker image. You could have your own <code>my/odoo:12.0</code> docker image which you reference from the docker-compose.yml file and it has all the dependencies and tools that you always use configured and ready to go.</li>
          <li>Auto-deploy your docker containers on repository push.</li>
          <li>Automatically download sample or pre-seeded databases on container run.</li>
      </ul>
      <p>Do whatever is best for you and your team.</p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
