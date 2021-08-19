import React from "react"
import { RecentArticlesLinks } from "../components/blog"
import { ImageGallery, Layout, Socials } from "../components"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query IndexSiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return <Layout>
    <GatsbySeo
      title="Holden Rehg: I'm a Software Developer, Freelancer, and Blogger"
      description="Building Simpler Software, Helping Companies Build Software With Python and Odoo, and Blogging About It"
      openGraph={{
        url: data.site.siteMetadata.siteUrl,
        title: "Holden Rehg: I'm a Software Developer, Freelancer, and Blogger",
        description: "Building Simpler Software, Helping Companies Build Software With Python and Odoo, and Blogging About It",
        images: [{
          url: `${data.site.siteMetadata.siteUrl}/images/self-portrait-1.jpeg`,
        }]
      }}
      twitter={{
        site: "@holdenrehg",
        handle: "@holdenrehg",
        cardType: "summary",
      }}
    />

    <div className="relative pt-16 lg:px-20 md:min-height-950">
      <div className="px-8 md:px-20 lg:px-32">
        {/* Welcome Header Section */}
        <div class="pb-16 text-center">
          <h2 className="mb-12 md:mb-0 text-4xl text-indigo-900 text-vollkorn tracking-tighter" style={{lineHeight: "3.8rem"}}>
            <mark className="bg-yellow-200 hover:opacity-90">
              Holden Rehg.<br/>
              Web Programmer &amp; Freelancer.<br/>
              Based in the U.S.A.
            </mark>
          </h2>
          <div className="md:flex justify-evenly items-center">
            {/* Left of Hero Image */}
            <div className="md:flex flex-col text-center md:text-left md:w-1/4">
              <div className="my-8 md:my-4">
                <strong className="text-lg text-gray-700">Biography</strong>
                <p className="mt-1 text-gray-800">
                  Hello. For the last {new Date().getYear() - new Date("05/01/2011").getYear()} years, I've been
                  professionally writing or studying software and web development. Since 2015, I've been
                  focusing on software solutions for small to medium sized businesses.
                </p>
              </div>
              <div className="my-8 md:my-4">
                <strong className="text-lg text-gray-700">Contact</strong>
                <p className="mt-1 text-gray-800">
                  <a className="block hover:underline" href="https://www.google.com/maps/place/St.+Louis,+MO/@38.6530795,-90.313673,12z/data=!3m1!4b1!4m5!3m4!1s0x87d8b4a9faed8ef9:0xbe39eaca22bbe05b!8m2!3d38.6270025!4d-90.1994042">St. Louis, MO, US</a>
                  <a className="block hover:underline" href="mailto:holdenrehg@gmail.com">holdenrehg@gmail.com</a>
                  <span className="block phone-number" title="+1 618 691 9180"/>
                </p>
              </div>
              <div className="my-8 md:my-4">
                <strong className="text-lg text-gray-700">Education</strong>
                <p className="mt-1 text-gray-800">
                  I studied Software Engineering at <a href="https://iastate.edu">Iowa State University</a>.
                </p>
              </div>
            </div>
            {/* Center Hero Image */}
            <div
              className="relative mx-auto md:mt-12 md:w-1/2"
            >
              <div
                className="center-gallery relative mx-auto bg-transparent"
              >
                <div className="mx-auto text-center pt-12">
                  <ImageGallery/>
                </div>
              </div>
            </div>
            {/* Right of Hero Image */}
            <div className="md:flex flex-col text-center md:text-right md:w-1/4">
              <div className="my-8 md:my-4">
                <strong className="text-sm text-gray-700">Years Experience</strong>
                <p className="text-gray-800 text-vollkorn text-4xl tracking-tighter">
                  <span className="border-b-8 border-indigo-800 border-opacity-25 hover:border-opacity-50 transition-all">
                    {new Date().getYear() - new Date("05/01/2011").getYear()} Years
                  </span>
                </p>
              </div>
              <div className="my-8 md:my-4">
                <strong className="text-lg text-gray-700">Favorite Tech</strong>
                <p className="mt-1 text-gray-800">
                  Web development technology is constantly shape shifting and evolving, so I've used a broad
                  range of tools. Most recently I've been using a lot of&nbsp;
                  <a className="whitespace-no-wrap underline" href="https://python.org">Python</a>,&nbsp;
                  <a className="whitespace-no-wrap underline" href="https://odoo.com">Odoo</a>,&nbsp;
                  <a className="whitespace-no-wrap underline" href="https://flask.palletsprojects.com/en/2.0.x/">Flask</a>,&nbsp;
                  <a className="whitespace-no-wrap underline" href="https://www.postgresql.org/">PostgreSQL</a>,&nbsp;
                  <a className="whitespace-no-wrap underline" href="https://vuejs.org/">Vue.js</a>,&nbsp;
                  <a className="whitespace-no-wrap underline" href="https://github.com">Github</a>,&nbsp;
                  <a className="whitespace-no-wrap underline" href="https://travis-ci.org/">Travis CI</a>,
                  and <a className="whitespace-no-wrap underline" href="https://www.docker.com/">Docker</a>.
                </p>
              </div>
              <div className="my-8 md:my-4">
                <strong className="text-lg text-gray-700">Services</strong>
                <p className="mt-1 text-gray-800">
                  <span className="block">Consulting.</span>
                  <span className="block">Custom Software Development.</span>
                  <span className="block">Project Planning.</span>
                  <span className="block">Quality Control.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-20 bg-indigo-900 opacity-25" style={{opacity: "12%"}}/>

        <div className="pb-20">
          <RecentArticlesLinks/>
        </div>

        <hr className="mb-20 bg-indigo-900 opacity-25" style={{opacity: "12%"}}/>

        <div id="about-me" className="mb-20">
          <h2 className="text-lg text-gray-700 mb-2"><strong>A little about me</strong></h2>
          <div className="md:flex justify-between ">
            <div className="text-lg" style={{ flex: '0 60%' }}>
              <p>
                I started programming {new Date().getYear() - new Date("05/01/2011").getYear()} years
                ago while in high school. The first website started as
                a pretty basic Wordpress blog, but turned into a freelance business where I built
                websites for local businesses. It felt like the best option especially compared to other
                job opportunities available. There was not too many options for a 16 year
                old in my town.
              </p>
              <p className="mt-4">
                Solving problems and working with business owners felt good. At least once you get to the
                solution. So I stuck with it and <a className="underline" href="http://iastate.edu" rel="noreferrer" target="_blank">studied software engineering</a>
                &nbsp;in school. Every chance I had I worked. I can't remember a week throughout school where I
                didn't have some sort of job or work, even up to 30-40 hours a week at times. This meant countless
                side projects, a school IT job, teching assistant for classes, remote startup gigs, and summer internships.
              </p>
              <p className="mt-4">
                All of this led to working at <a className="underline" href="https://bluestingray.com" rel="noreferrer" target="_blank">a software firm</a> near
                my home town in <a className="underline" href="https://goo.gl/maps/ULgf7s3zvintX9fs5" rel="noreferrer" target="_blank">St. Louis, MO</a>,
                receiving a percentage of the company as part owner and building a
                new team from scratch focusing on ERP systems for small businesses.
              </p>
              <p className="mt-4">
                Over 5 five years, we would build up the team to 5 developers, a
                project manager, and a support team member. The overall revenue of
                the company quadruple, with roughly half of that coming from the
                ERP team.
              </p>
              <p className="mt-4">
                During that time, I also had a few other itches to scratch. I started
                my own business for consulting, freelancing, and writing. I also started
                buying rental real estate in my home town.
              </p>
              <p className="mt-4">
                And that's where we're at today. Spending my time still trying to help
                businesses with software needs, writing about software, and managing a
                few small rental properties. Hoping to help out a few people while also keeping
                myself happy and fullfilled.
              </p>
            </div>
            <div style={{ flex: '0 34%' }}>
              <h3 className="text-xl font-extrabold pt-12 md:pt-0">
                <span className="pb-2 border-b-8 border-indigo-800 border-opacity-25 hover:border-opacity-50 transition-all">
                  Milestones
                </span>
              </h3>
              <ul className="mt-8 text-md md:text-lg">
                <li><span className="w-12 inline-block font-bold">2010</span>Built my first website and wrote my first line of code.</li>
                <li><span className="w-12 inline-block font-bold">2011</span>Started freelance website development for local businesses while in high school.</li>
                <li><span className="w-12 inline-block font-bold">2012</span>Enrolled in the Software Engineering program at <a className="underline" href="http://iastate.edu" rel="noreferrer" target="_blank">Iowa State University</a>.</li>
                <li><span className="w-12 inline-block font-bold">2015</span>Became a Partner and lead developer at the <a className="underline" href="https://bluestingray.com" rel="noreferrer" target="_blank">Blue Stingray</a> software development firm.</li>
                <li><span className="w-12 inline-block font-bold">2017</span>Started Buster Technologies LLC to create business software solutions and provide software contracting/consulting.</li>
                <li><span className="w-12 inline-block font-bold">2019</span>Bought my first rental property.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
}
