import React from "react"
import { Layout } from "../../components"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const busterImages = [
  "/portfolio/buster/laptop-mockup-bom.png",
  "/portfolio/buster/laptop-mockup-integrations.png",
  "/portfolio/buster/mockup_2_screens.png",
  "/portfolio/buster/sales-dashboard.png",
  "/portfolio/buster/tablet-mockup-product.png",
  "/portfolio/buster/tablet-mockup-search-orders.png",
  "/portfolio/buster/tablet-mockup-users.png",
];

function showLightbox(id) {
  return () => {
    const el = document.querySelector(`#${id}`)
    if(el) el.classList.remove("hidden")
  }
}

function hideLightbox(id) {
  return () => {
    const el = document.querySelector(`#${id}`)
    if(el) el.classList.add("hidden")
  }
}

export default () => (
  <Layout>
    <GatsbySeo
      title="10+ Years of Experience in Software, Python, and Odoo"
      description="I'm Trying to Build Simpler Software and Help Companies Build Software With Python and Odoo"
      openGraph={{
        title: "10+ Years of Experience in Software, Python, and Odoo",
        description: "I'm Trying to Build Simpler Software and Help Companies Build Software With Python and Odoo",
      }}
    />

    <div className="relative pt-16 md:min-height-950">
      <div className="px-8 md:px-20 lg:px-32">
        {/* Welcome Header Section */}
        <div class="pb-16 text-center">
          <h2 className="mb-12 md:mb-0 text-4xl text-vollkorn tracking-tighter" style={{lineHeight: "3.8rem"}}>
            <mark className="text-gray-800 bg-orange-200 hover:opacity-90">
              Holden Rehg's Portfolio<br/>
            </mark>
          </h2>
          <p className="text-lg mt-8">
            Hello! In this section I wanted to outline my favorite projects I've worked on recently. Much
            of my recent work involves <a href="https://odoo.com" className="underline" target="_blank">Odoo</a> development
            and implementation, but I will try to show a range of experiences. That coudld be team building, dev ops, server management, custom
            software development, API integrations, etc. This will also be living documentation that I will update over
            time. If you have questions or want to talk please <a href="mailto:holdenrehg@gmail.com" className="underline">email me!</a>.
          </p>
        </div>

        <div className="md:flex md:flex-wrap pb-24" style={{rowGap: "2rem", columnGap: "1.5rem"}}>

          {/* Oocademy tutorials */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 bg-white px-12 py-16">
              <div className="h-full w-full flex flex-col justify-center">
                <span className="block text-sm tracking-article pb-1">2020 - Current</span>
                <span className="block text-gray-700 leading-none pb-2 text-5xl font-extrabold">
                    Oocademy learning platform content.
                </span>
                <div className="lg:flex gap-8">
                  <div>
                    <p className="pt-3 text-gray-900 leading-6">
                      I started learning Odoo development in 2015 and have gone through dozen of project
                      implementations. As I learn more and as Odoo has expanded its technology, I've seen
                      a big gap in knowledge with developers.
                    </p>
                  </div>
                  <div>
                    <p className="pt-3 text-gray-900 leading-6">
                      Trying to do my part as a community member, I've
                      started writing content and tutorials. Recently I partnered with&nbsp;
                      <a href="https://github.com/yenthe666" className="underline" target="_blank">Yenthe Van Ginneken</a> to start providing content
                      for his Odoo learning platform <a href="https://www.oocademy.com/" className="underline" target="_blank">Oocademy</a>.
                    </p>
                  </div>
                </div>
                <ul className="mt-8">
                  <li className="my-1">
                    <a href="https://www.oocademy.com/v14.0/tutorials" className="underline" target="_blank">
                      Oocademy Tutorials
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="https://www.oocademy.com/v14.0/tutorial/introduction-to-owl-87" className="underline" target="_blank">
                      Introduction To OWL Tutorial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>

          {/* Battery Handling Case Study */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 mt-0 md:mt-10 bg-orange-100 px-8 py-10 border-4 border-orange-200">
              <div className="lg:flex lg:flex-row-reverse">
                <div className="lg:w-1/2 lg:pl-6 lg:pr-12 text-gray-900">
                  <span className="block leading-8 break-normal pb-2 text-2xl font-extrabold text-orange-900 border-b-8 border-orange-900 transition-all">
                    Battery Handling ERP Implementation.
                  </span>
                  <span className="block mt-3 text-sm tracking-article pb-1">
                    2015 - 2020
                  </span>
                  <span className="block text-sm tracking-article pb-1">
                    <a href="bhs1.com" className="underline">https://bhs1.com</a>
                  </span>
                </div>
                <p className="mt-4 lg:mt-0 lg:w-1/2 text-gray-700 leading-6">
                  Starting with myself and one other developer, we implemented and released
                  a production ERP environment for a manufacturing company of 100 employees
                  to replace their legacy, green screen software. The initial implementation
                  took 3 months. Since then, the project has expanded to include roughly 40
                  customized modules for for MRP, Inventory, Accounting, Sales, Purchasing,
                  HR, and more. We still support and maintain their system today.
                </p>
              </div>
            </div>
          </a>

          {/* Silkworm Case Study */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 bg-indigo-800 px-12 py-24">
              <div className="h-full w-full flex flex-col justify-center">
                <span className="block text-indigo-200 text-sm tracking-article pb-1">2017 - 2020</span>
                <span className="block text-indigo-100 leading-none pb-2 text-3xl font-extrabold">
                    Screen Printing ERP Implementation.
                </span>
                <p className="pt-3 leading-8 text-indigo-200 text-xl">
                  A custom screen printing and embroidery business that manufactured thousands of custom
                  products a year reached out about taking over a failing implementation by another Odoo
                  developer. We stabilized their existing implementation and expand it to include a complete
                  custom screen printing job shop module to manage their MRP process and still continue
                  to support their system.
                </p>
                <p className="pt-3 leading-8 text-indigo-200 text-lg">
                  <a className="underline" href="https://silkwormink.com">https://silkwormink.com</a>
                </p>
              </div>
            </div>
          </a>

          {/* Continuous Integray Workflow */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="md:my-0 mt-20 md:mt-24 bg-gray-200 p-8">
              <span className="-mt-20 block text-gray-700 leading-none pb-2 text-5xl font-extrabold">
                Odoo continuous integration team worflow.
              </span>
              <p class="pt-3 pl-10 text-gray-700 leading-6">
                2018
              </p>
              <p class="pt-3 pl-10 text-gray-700 leading-6">
                The Odoo agency I worked with was growing and the development team was feeling
                the pain from that. We was beginning to release more bugs as new developers joined
                the team and spending longer and longer on pull requests, code reviews, conflicting
                environment, debugging obscure problems, etc.
              </p>
              <p class="pt-3 pl-10 text-gray-700 leading-6">
                I iteratively designed a continuous integration process for us using a series of tools
                like Docker, Docker Compose, Github, Travis CI, Google Cloud, pre-commit, and custom CLI tooling to create a uniform experience
                for the dev team despite their personal development environment (we have windows, mac, and linux).
                Our process included a pipeline of automated checks and test runners to ensure code was in the
                best possible shape before another developer spend their time reviewing it. This was a constant
                feedback loop for each developer as they individually worked on their features.
              </p>
            </div>
          </a>

          {/* Building A Team */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 bg-gray-200 px-8 py-10">
              <div className="lg:flex">
                <div className="lg:w-1/2 lg:pl-6 lg:pr-12 text-gray-700">
                  <span className="block text-sm tracking-article pb-1">2015 - 2020</span>
                  <span className="block leading-10 pb-2 text-4xl font-extrabold border-b-8 border-gray-800 transition-all">
                    Building a team.
                  </span>
                  <span className="block tracking-article pt-3">
                      <a href="bluestingray.com">@ Blue Stingray</a>
                  </span>
                </div>
                <p className="lg:w-1/2 pt-6 lg:pt-0 text-gray-700 text-lg leading-6">
                  <p className="mb-4">
                    When I started work at Blue Stingray, which is a software development agency, there
                    was no Odoo team. The company was 5 people and I don't think any of us had even heard
                    the word "Odoo".
                  </p>
                  <p className="mb-4">
                    A client approached us and asked about it, and we said we'll figure it out. I was the
                    one assigned to figure it out. Over the course of the next 5 years at the company I
                    helped build and lead an Odoo team, which was 6 developers and a project manager at its
                    largest. This also helped grow the entire business to 20+ employees.
                  </p>
                  <p>
                    I ended up wearing a lot of hats, as many people will understand in small company's, but
                    a major role was essentially being an engineering manager. I determined why type of people
                    we wanted on the team, interviewed and hired, organized the team to deliver results and
                    keep its promises, kept a high yearly retention rate at 86% and an average time
                    spent at the company at around 3 years, and was able to coach most of the employees. One
                    employee I coached into my role as I left the company and many others came from coding
                    bootcamps green and ended up as strong software engineers.
                  </p>
                </p>
              </div>
            </div>
          </a>

          {/* Buster ERP */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 mt-0 md:mt-8 bg-gray-800 p-8 text-center">
              <span className="mx-auto block lg:pb-2">
                <mark className="bg-gray-500 text-gray-800 px-3 leading-none text-5xl font-extrabold">
                  Buster ERP.
                </mark>
              </span>
              <div class="pt-6 lg:pt-3 lg:pl-10 text-gray-400 text-lg leading-6">
                <p className="pb-4">
                  2017-2020
                </p>
                <p className="pb-4">
                  After spending years implementing enterprise level business solutions, as a side
                  project I wanted to create a product to offer to small businesses. Often, a small
                  1-3 person team would approach Blue Stingray, and we often had to turn them
                  away because of their budget and this was painful to see at times.
                </p>
                <p className="pb-4">
                  Buster because a SaaS implementation using Flask which offered a few simple
                  services for small businesses who 1. Couldn't afford or didn't need larger systems and
                  2. Didn't want to try to glue multiple systems together. The application offered
                  contact management, sales/purchase order processing, inventory, a job shop module, and
                  an API.
                </p>
                <p>
                  The project had about 50 active small business using it day to day. In 2020 during the Covid-19 pandemic
                  the majority of those customers stopped using the platform and from a business perspective I
                  struggled to keep the project alive. I eventually, and sadly shut the project down. Luckily, I learned an
                  unbelievable amount by going through the process.
                </p>
                <div className="flex flex-wrap mt-10">
                  {busterImages.map(path => {
                    return <div className="w-1/4">
                      {/* Thumbnail */}
                      <a className="cursor-pointer" onClick={showLightbox(`${path.split('/').pop().split(".")[0]}`)}>
                        <img src={`${path}`}/>
                      </a>
                      {/* Lightbox */}
                      <div id={`${path.split('/').pop().split(".")[0]}`} className="cursor-pointer hidden transition-all"  onClick={hideLightbox(`${path.split('/').pop().split(".")[0]}`)}>
                        <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black bg-opacity-75">
                          <img src={`${path}`} style={{maxWidth: "92%"}}/>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </a>

          {/* Client-Service Cloud Server Workflows */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 bg-white border-8 border-indigo-100 px-6 lg:px-16 py-10 text-center">
                <span className="block text-indigo-900 leading-10 pb-2 text-3xl font-extrabold">
                  Client-Service Google Cloud server management.
                </span>
                <div className="mx-2">
                  <div className="inline-block mx-3 w-5 h-5 bg-indigo-500 rounded-full"/>
                  <div className="inline-block mx-3 w-5 h-5 bg-indigo-500 rounded-full"/>
                  <div className="inline-block mx-3 w-5 h-5 bg-indigo-500 rounded-full"/>
                </div>
                <p className="pt-3 text-indigo-800 leading-6">
                  Every client that approached us about a software implementation asked us "where is this
                  going to be hosted?". At first everything needed to be deferred off to another company
                  or the client needed to provide their own onsite hosting.
                </p>
                <p className="pt-3 text-indigo-800 leading-6">
                  Eventually I worked with my team to determine a plan for providing a hosting service. This
                  led to partnering with Google Cloud and working with a consultant to develop a process
                  for hosting client software implementation. I managed 10-20 servers hosting multiple services for
                  our clients throughout my time at Blue Stingray.
                </p>
                <p className="pt-3 text-indigo-800 leading-6">
                  We focused on a specific set of technologies for the sake of simplicity. This involved a Nginx
                  web server, Google Cloud compute instances running Ubuntu, Docker and Docker Compose, custom
                  uptime solutions for each layer (web server, database, application), custom CLI tooling for
                  deployments, Google Cloud monitoring, and Sentry application monitoring.
                </p>
            </div>
          </a>

          {/* SMB Software Discovery Process */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 bg-white border border-gray-300 py-8 px-12">
                <span className="block leading-10 pb-2 text-5xl">
                  SMB Software Discovery Process.
                </span>
                <span className="block mt-1 tracking-article pb-1">
                  2017 - 2019
                </span>
                <p className="pt-3 leading-6">
                  Our team at Blue Stingray had a problem where the agile process we were using to
                  develop conflicted with the sales process for our clients. Each client wanted a
                  fairly complete estimate and requirements document for the entire project before
                  moving forward. This led to dramatic changes over the course of the project as
                  the client's operations evolved or other factors triggered scope changes.
                </p>
                <p className="pt-3 leading-6">
                  I worked with the sales team to work out a new process for project estimation
                  that did not include detailed requirement documents. We switched to proposing
                  multiple phased estimations for large projects and focusing on end goals via user
                  stories vs specific descriptions of features. Essentially providing more flexible
                  estimates for long terms projects where we bake in an expectation change.
                </p>
            </div>
          </a>

          {/* Job Queue API Magento Integration */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 mt-0 md:mt-48 bg-orange-100 px-12 py-12">
              <div className="h-full w-full flex flex-col justify-center">
                <span className="block text-orange-800 text-sm tracking-article pb-1">2018</span>
                <span className="block text-orange-900 leading-none pb-2 text-3xl font-extrabold">
                  Job queue API integration with Magento.
                </span>
                <div class="lg:flex gap-2 text-orange-800">
                  <p className="pt-3">
                    A large sports helmet manufacturer ran a Magento Ecommerce platform with store fronts
                    in 50+ languages and an Odoo ERP instance. The two needed to be integrated together to
                    sync order and customer information between the two systems.
                  </p>
                  <p className="pt-3">
                    I designed a python service using Flask and a Celery and RabbitMQ job queue which was deployed
                    using gunicorn, Nginx, and an Ubuntu cloud instance on Google Cloud. The application was tied
                    into our standard hosting process to include Sentry integration, cloud server monitoring, and
                    up time monitoring. The service was processing 30-50 orders an hour with a single instance with
                    the possibility to scale it up horizontally if needed as the ecommerce grew.
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* MRP Process and BOM Visualizations */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 bg-gray-200 px-6 lg:px-16 py-10 text-center">
                <span className="block text-indigo-900 leading-10 pb-2 text-3xl font-extrabold">
                  Manufacturing Process and Bill of Material Visualizations.
                </span>
                <span className="block text-indigo-900 leading-10 pb-2">
                  2019
                </span>
                <div className="my-3">
                  <div className="inline-block mx-3 w-3 h-3 bg-gray-400"/>
                  <div className="inline-block mx-3 w-3 h-3 bg-gray-400"/>
                  <div className="inline-block mx-3 w-3 h-3 bg-gray-400"/>
                  <div className="inline-block mx-3 w-3 h-3 bg-gray-400"/>
                  <div className="inline-block mx-3 w-3 h-3 bg-gray-400"/>
                </div>
                <p className="pt-3 text-indigo-800 leading-6">
                  Most of the Odoo implementations I've done have required, or the client had
                  demanded, some form of customizations. This meant developing many custom
                  modules and learning the dynamics of architecting larger software systems.
                </p>
                <p className="pt-3 text-indigo-800 leading-6">
                  I wanted to include an example of one specific module customizations. A manufacturing
                  company required a dynamic BOM visualization tool. As their BOMs increased in size and
                  became increasingly complex it was difficult for their employees to move through
                  multiple menus. Their engineers needed a single, visual tool. Developing this
                  involved using the dhtmlx graph to build a custom frontend module and view within
                  the core MRP module BOM view.
                </p>
                <div className="mt-10 p-2 border-4 border-gray-100">
                  <img src="/portfolio/mrp-bom-visuals/bom-view.jpg"/>
                </div>
            </div>
          </a>

          {/* Flask Stripe Integration */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 bg-indigo-800 px-8 py-12">
              <div className="lg:flex">
                <div className="lg:w-1/2 lg:pl-6 lg:pr-12 text-indigo-200">
                  <span className="block leading-10 pb-2 text-3xl font-extrabold border-b-8 border-white transition-all">
                    Flask Stripe integration.
                  </span>
                  <span className="block leading-10">
                    2019
                  </span>
                  <span className="block pt-3">
                    <a href="https://github.com/holdenrehg-samples/sample_flask_stripe_integration" className="underline">
                      Github repository.
                    </a>
                  </span>
                </div>
                <div className="lg:w-1/2 pt-5 lg:pt-5 text-indigo-200 text-lg leading-6">
                  <p className="pb-4">
                    I started writing blog articles back in 2016 on Medium (and have since switched everything over
                    to the blog on <a href="/blog">my portfolio site</a>) and as part of that I wanted to
                    share my experience with building a SaaS product with primarily Flask and Stripe.
                  </p>
                  <p className="pb-4">
                    At the time, I didn't find fantastic resources for a simple implementation of this. For a
                    critical system like payment I was cautious of doing it properly. After implementation it was
                    a perfect candidate to share with other developing and get a bit of feedback. It became a starting
                    template for other future projects as well.
                  </p>
                  <p className="hidden lg:block">
                    &lt;- Click the Github link to the left to see the code.
                  </p>
                  <p className="block lg:hidden">
                    ^ Click the Github link above to see the code.
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Pygrid Scrolling Isometric Prototype */}
          <a style={{width: "calc(50% - 1.5rem)"}}>
            <div className="my-8 md:my-0 mt-0 md:mt-16 bg-gray-200 border border-gray-300 py-8 px-12">
              <span className="block text-gray-600 leading-10 pb-2 text-5xl">
                Pygrid isometric scrolling prototype.
              </span>
              <span className="block text-gray-600 leading-10 pb-2">
                2021
              </span>
              <span>
                <a href="https://github.com/holdenrehg-samples/sample_pygame_tiles" className="block underline text-gray-700 mt-3" target="_blank">
                  Github repository.
                </a>
                <a href="https://holdenrehg.github.io/catchergames/2021/07/17/experimenting-with-scrolling-isometric.html" className="block underline text-gray-700" target="_blank">
                  Blog article.
                </a>
              </span>
              <p className="mt-6 leading-6 text-gray-800">
                <p className="pb-5">
                  In 2021, after I left my full time job at Blue Stingray to pursue some consulting, freelancing, and
                  contracting work I started playing around with game developer frameworks and engines such as pygame, monogame, and Unity.
                </p>
                <p className="pb-5">
                  As usual with my career, as I learn I like to write and document those things. I've been having
                  fun with game development as a hobby and wanted to share the ideas I come across as I
                  get better.
                </p>
                <p>
                  In this case, I implemented an isometric map with two very simple isometric block assets
                  I created in Aseprite. I created a Tiled map and imported that map into pygame so that
                  you can float the camera around the map.
                </p>
              </p>
              <div className="pt-5">
                <img src="/portfolio/isometric-scrolling/isometric-scrolling-pygame.png"/>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)
