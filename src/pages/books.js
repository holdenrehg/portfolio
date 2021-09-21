import React, { useState } from "react"
import { Layout } from "../components"
import { GatsbySeo } from "gatsby-plugin-next-seo"


const mailChimpScripts = `
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
    <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
`

export default () => {
  const [state, setState] = useState({submitted: false})

  return <Layout>
    <GatsbySeo
      title="Books written by Holden Rehg"
      openGraph={{
        title: "Books written by Holden Rehg",
      }}
    />

    <div className="relative pt-16 md:min-height-950">
      <div className="px-8 md:px-20 lg:px-32">
        {/* Welcome Header Section */}
        <div class="pb-16 text-center">
          <h2 className="mb-12 md:mb-0 text-4xl text-vollkorn tracking-tighter" style={{lineHeight: "3.8rem"}}>
            <mark className="text-purple-900 bg-purple-200">
              My Books<br/>
            </mark>
          </h2>
          <p className="text-xl mt-8">
            I wrote my <a className="underline" href="/blog/2016-03-03_managing-multiple-odoo-instances/">first article</a> back in 2016
            without much thought. I had been working on a specific technology for a year or two and wanted to share some
            tips that I learned. Since then, I've continued to write as much as possible. It's led to over 90k views across
            Medium and <a className="underline" href="/blog">my blog</a>. I've really enjoyed talking to everyone who has reached out about
            my articles. I feel like I've really been able to help other developers. Recently, I made the jump and started putting together
            book ideas. This section is where I'm going to put published and upcoming books.
          </p>

          <div className="text-left mt-20 py-40 px-16 bg-gray-200">
            <h2 className="text-4xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="inline w-12 h-12 mr-2 icon icon-tabler icon-tabler-code" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
              <span>Thinking Like A Programmer</span>
            </h2>
            <h3 className="text-2xl">A Beginner's Guide To Problem Solving In Computer Programming</h3>
            <div className="mt-2">
              <mark className="text-xl text-purple-900 bg-purple-200">Coming soon. 2022.</mark>
            </div>
            <p className="mt-10 text-xl">
              I'm writing the book that I wish I had when first starting a computer science program in college
              or before I started my first professional software development job. There's an endless number of languages, technologies,
              tools, and methodologies. There's also plenty of books, videos, and articles about any specific language or tool. It's
              pretty easy to find a "How to Program In Ruby" book or tutorial for example. Finding a book that teaches you the skills
              to adapt to any software development environment are harder to find.
            </p>
            <p className="mt-6 text-xl">
              Over the years, I've learned ways to think about problem solving with code. That way of thinking can be applied
              to any programming language or stack. I want to teach people who are brand new to programming how to think
              about approaching programming at a high level. I'll walk through topics like the general ideas behind computing, designing
              solutions to problems with code, the basic constructs and mechanisms used in nearly every language, and the
              flow of data throughout programs.
            </p>
            <hr className="my-10 bg-gray-400"/>
            <div id="mc_embed_signup" className={state.submitted ? 'hidden' : ''}>
              <p className="mb-3 text-lg leading-8">
                <span className="block">Sign up below to follow the project.</span>
                <span className="block">I'll email you when the book is officially released and some sample chapters along the way.</span>
              </p>
              <form
                action="https://holdenrehg.us5.list-manage.com/subscribe/post?u=07bdf54de638656c1e27c6183&amp;id=7d0794ca73"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
                onSubmit={() => {setState({submitted: true})}}
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label for="mce-EMAIL" className="block font-bold mb-1 text-lg">Email Address </label>
                    <input type="email" name="EMAIL" className="block w-full required email px-2 py-2 border text-black" placeholder="e.g. myemail@email.com" id="mce-EMAIL" required/>
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response hidden" id="mce-error-response"></div>
                    <div className="response hidden" id="mce-success-response"></div>
                  </div>
                  <div className="absolute" style={{left: '-5000px'}} aria-hidden="true">
                    <input type="text" name="b_07bdf54de638656c1e27c6183_7d0794ca73" tabindex="-1" value=""/>
                  </div>
                  <div className="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="cursor-pointer button mt-3 text-lg px-2 py-2 text-purple-100 bg-purple-900"/>
                  </div>
                </div>
              </form>
            </div>
            <div className={state.submitted ? '' : 'hidden'}>
              <p className="text-lg text-green-900">Thanks for subscribing! I'll keep you up to date.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div dangerouslySetInnerHTML={{ __html: mailChimpScripts }}></div>
  </Layout>
}
