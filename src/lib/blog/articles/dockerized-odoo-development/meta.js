import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-01-27_dockerized-odoo-development",
  title: "Dockerized Odoo development",
  subtitle: "Easier Development With Docker",
  datePosted: "2019-01-27",
  coverImage: "/blog/dockerized-odoo-development/cover.jpeg",
  description: "Follow up to my original Odoo server management article.",
  contentSnippet: `
    <p>This is a follow up to something I wrote about a couple of years ago when I was trying to go through the process of running dozens of applications on the same server. Looking back I wish I would have jumped into Docker sooner, but hindsight is 20/20.</p>

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
