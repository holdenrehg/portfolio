import React from "react"
// import { useEffect } from "react"
import { RecentArticles } from "../components/blog"
// import { UseCase } from "../components/portfolio"
import { ImageGallery, Layout, Socials } from "../components"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { useStaticQuery, graphql } from "gatsby"

const Section = (props) => {
  return <div id={props.name} className="relative py-16 px-8 bg-white border-t md:py-32 md:px-20" style={{ minHeight: '1000px' }}>
    <div className="content-wrapper">
      <div className="flex flex-col md:mb-12 justify-center">
        {props.children}
      </div>
    </div>
  </div>
}

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
      title="Holden Rehg: I'm a Software Developer, Freelancer, Blogger, Landlord"
      description="Building Simpler Software, Helping Companies Build Software With Python and Odoo, and Blogging About It"
      openGraph={{
        url: data.site.siteMetadata.siteUrl,
        title: "Holden Rehg: I'm a Software Developer, Freelancer, Blogger, Landlord",
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

    <div className="relative">
      {/* Welcome Header Section */}
      <div className="px-8 pb-16 bg-main text-center md:px-20 md:min-height-950 md:text-left md:pb-32">
        <div className="content-wrapper pt-40 mx-auto md:pt-64">
          <div className="flex justify-between">
            <div className="inline-block align-middle">
              <div className="text-md sm:text-lg text-orange-900 uppercase tracking-widest">Welcome to my portfolio</div>
              <div className="block text-gray-900 text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-wider">I'm Holden Rehg</div>
              <div className="mt-3 text-3xl sm:text-4xl text-gray-800 md:-mt-2">A Software Developer, Investor, and Hobby Writer</div>
            </div>
            <div className="hidden md:inline-block md:ml-20 align-middle md:block">
              <ImageGallery />
            </div>
          </div>
          <div className="mt-10 w-2/3 mx-auto h-2 bg-orange-300 md:w-1/3 md:mx-0"></div>
          <div className="text-left text-lg md:text-2xl md:w-3/4 my-8 tracking-wider relative xl:w-full">
            <span className="pt-8 block text-black md:pt-8">
              Hey, how's it going? For the last 10 years, I've mainly been working on software out of the middle of the United States. Recently I've stretched into some writing and real estate investing too.
            </span>
            <div className="z-50 mt-4 relative mt-16">
              <ul className="mt-12 md:mt-0 md:ml-8 xl:mx-auto xl:w-full">
                <li>
                  <img className="inline mr-4 h-4" src="/icons/code.svg" alt=""/>
                  <a className="underline cursor-pointer hover:text-black" href="/portfolio">Here for software freelancing and consulting?</a>
                </li>
                <li className="mt-5 md:mt-0">
                  <img className="inline mr-4 h-4" src="/icons/paperclip.svg" alt=""/>
                  <a className="underline cursor-pointer hover:text-black" href="/blog">Here for my writing?</a>
                </li>
                <li className="mt-5 md:mt-0">
                  <img className="inline mr-4 h-4" src="/icons/question-mark.svg" alt=""/>
                  <a className="underline cursor-pointer hover:text-black" href="#about-me">Just wondering who the hell I am?</a>
                </li>
                <li class="hidden md:block">
                  <img className="mt-20 bg-orange-300 rounded-full p-3 blink" width="32" height="32" src="/icons/chevron-bottom.svg" alt=""/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Add once portfolio is implemented */}
      {/* <Section name="portfolio">
        <h2 className="text-6xl uppercase mb-3">My software work</h2>
        <p className="text-3xl max-w-4xl mb-8">
          <mark className="px-1 text-vollkorn bg-orange-200">
            I help companies in making experiences that are user-centered and seamless, plus building interfaces that
            are aesthetically pleasing and consistent all across.
          </mark>
        </p>
        <div className="flex flex-wrap justify-between">
          <UseCase
            subheader="A pretty cool thing"
            header="I handled a thing"
            description="This is a long description about some random stuff that went down during this project. Blah blah and some blah with some blah blah."
            backgroundColor="gray-100"
            style={{ flex: '0 49%' }}/>
          <UseCase
            subheader="A pretty cool thing"
            header="I handled a thing"
            description="This is a long description about some random stuff that went down during this project. Blah blah and some blah with some blah blah."
            backgroundColor="gray-200"
            style={{ flex: '0 49%' }}/>
          <UseCase
            subheader="A pretty cool thing"
            header="I handled a thing"
            description="This is a long description about some random stuff that went down during this project. Blah blah and some blah with some blah blah."
            backgroundColor="gray-200"
            style={{ flex: '0 49%' }}/>
          <UseCase
            subheader="A pretty cool thing"
            header="I handled a thing"
            description="This is a long description about some random stuff that went down during this project. Blah blah and some blah with some blah blah."
            backgroundColor="gray-300"
            style={{ flex: '0 49%' }}/>
          </div>
          <div className="w-full">
            <a href="/portfolio">
              <button className="mt-10 py-3 px-6 bg-gray-800 text-white font-bold border-b border-gray-900 rounded hover:bg-gray-700">See more work</button>
            </a>
          </div>
      </Section> */}

      {/* <Section name="real-estate">
        <h2 className="text-6xl uppercase mb-3">My real estate investing</h2>
        <p className="text-3xl max-w-4xl">
          <mark className="px-1 text-vollkorn bg-purple-200">
            I do this and that with houses and blah blah blah...
          </mark>
        </p>
      </Section> */}

      <Section name="blog">
        <h2 className="text-4xl sm:text-6xl md:text-7xl uppercase mb-3">Most Recent Articles</h2>
        <p className="text-xl sm:text-2xl md:text-3xl md:max-w-4xl">
          <mark className="px-1 text-vollkorn bg-purple-200">
            Mostly incoherent thoughts on software, business, and investing.
          </mark>
        </p>
        <RecentArticles />
        <div className="w-full">
          <a href="/blog">
            <button className="mt-4 py-3 px-6 bg-gray-800 text-white font-bold border-b border-gray-900 rounded hover:bg-gray-700">
              See more articles
            </button>
          </a>
        </div>
      </Section>

      {/* About Section */}
      <Section name="about-me">
        <h2 className="text-4xl sm:text-6xl md:text-7xl uppercase mb-3">A little about me</h2>
        <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mb-8">
          <mark className="px-1 text-vollkorn bg-orange-800 text-orange-100">
            Taking one step at a time.
          </mark>
        </p>

        <div className="md:flex justify-between ">
          <div className="text-lg md:text-xl" style={{ flex: '0 60%' }}>
            <p>
              I started programming about 10 years ago when in high school.
              The first website started as a pretty goofy Wordpress blog. It was
              a better alternative in my head to flipping burgers or working as
              a cashier. Not too many options for a 16 year old in my town.
            </p>
            <p className="mt-4">
              Solving problems like that felt good. At least once you get to the
              solution. So I stuck with it and <a className="underline" href="http://iastate.edu" rel="noreferrer" target="_blank">studied software engineering</a>
              &nbsp;in school. Every chance, I worked throughout school. Trying to start,
              and eventually failing at, side projects while working at school IT,
              remote startup gigs, or summer internships.
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
              few small properties. Hoping to help out a few people while also keeping
              myself happy and entertained.
            </p>
            <Socials color="000000"/>
          </div>
          <div style={{ flex: '0 34%' }}>
            <h3 className="text-3xl font-extrabold">Milestones</h3>
            <ul className="mt-8 text-md md:text-lg">
              <li><span className="w-12 inline-block font-bold">2010</span>Built my first website and wrote my first line of code.</li>
              <li><span className="w-12 inline-block font-bold">2012</span>Enrolled in the Software Engineering program at <a className="underline" href="http://iastate.edu" rel="noreferrer" target="_blank">Iowa State University</a>.</li>
              <li><span className="w-12 inline-block font-bold">2015</span>Became a Partner and lead developer at <a className="underline" href="https://bluestingray.com" rel="noreferrer" target="_blank">Blue Stingray</a> software development firm.</li>
              <li><span className="w-12 inline-block font-bold">2017</span>Started Buster Technologies LLC.</li>
              <li><span className="w-12 inline-block font-bold">2019</span>Bought my first rental property.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Background Sunset Blocks */}
      <div className="absolute top-0 right-0 w-full hidden overflow-x:hidden md:block">
        <div className="absolute top-0 rounded-b-full bg-orange-900" style={{ right: '-140px', width: '420px', height: '230px', opacity: '0.040' }}></div>
        <div className="absolute top-0 rounded-b-full bg-black" style={{ right: '-140px', width: '500px', height: '300px', opacity: '0.032' }}></div>
        <div className="absolute top-0 rounded-b-full bg-orange-700" style={{ right: '-140px', width: '550px', height: '360px', opacity: '0.028' }}></div>
        <div className="absolute top-0 rounded-b-full bg-gray-900" style={{ right: '-140px', width: '590px', height: '400px', opacity: '0.027' }}></div>
        <div className="absolute top-0 rounded-b-full bg-orange-800" style={{ right: '-140px', width: '650px', height: '440px', opacity: '0.026' }}></div>
        <div className="absolute top-0 rounded-b-full bg-gray-900" style={{ right: '-140px', width: '700px', height: '510px', opacity: '0.014' }}></div>
        <div className="absolute top-0 rounded-b-full bg-gray-900" style={{ right: '-140px', width: '760px', height: '600px', opacity: '0.013' }}></div>
        <div className="absolute top-0 rounded-b-full bg-gray-900" style={{ right: '-140px', width: '800px', height: '720px', opacity: '0.012' }}></div>
        <div className="absolute top-0 rounded-b-full bg-gray-900" style={{ right: '-140px', width: '850px', height: '850px', opacity: '0.011' }}></div>
        <div className="absolute top-0 rounded-b-full bg-gray-900" style={{ right: '-140px', width: '900px', height: '900px', opacity: '0.020' }}></div>
        <div className="absolute top-0 rounded-b-full bg-gray-900" style={{ right: '-140px', width: '1000px', height: '1200px', opacity: '0.009' }}></div>
        <div className="absolute top-0 rounded-b-full bg-gray-900" style={{ right: '-140px', width: '1200px', height: '1500px', opacity: '0.015' }}></div>
      </div>
    </div>
  </Layout>
}
