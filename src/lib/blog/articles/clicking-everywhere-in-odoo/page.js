import React from "react"
import { Layout } from "../../../../components"
import { Article } from "../../../../components/blog"
import meta from "./meta"

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <p><span className="first-letter">T</span>ypically, good software developers write tests.</p>
      <p>But there are a lot of types of tests. With lots of different names depending on your software background.</p>
      <p>One common type of test out there allows developers to interact directly with the GUI (graphical user interface) that a standard user would interact with, except in an automated way. Some people call these functional tests, or user interface testing or browser tests.</p>
      <p>Either way, the developer could hypothetically write a test like:</p>

      <code className="python">
        <pre>{`
class BrowserTest:
    def test_landing_page_has_login_button(self):
        self.go_to("/landing")
        self.assert_has("#login").redirects_to("/login")
        `}</pre>
      </code>

      <p><strong>Warning</strong>: That code above doesn’t have anything to do with Odoo, just more of a pseudo-code example of what a browser test would look like in a standard system.</p>
      <p>In Odoo land, they use Tours to run these sort of tests. Tours run on <a href="http://phantomjs.org/" rel="noreferrer" target="_blank">PhantomJS</a>, a headless browser, which allows you to interact with the interface through code, but also see the backend result.</p>
      <p>Outside of Odoo, you will often see Python developers using a tool called Selenium which gives you the same sort of functionality. Selenium can be run against most browsers, headless or not, as well as tools like PhantomJS or <a href="https://www.browserstack.com/" rel="noreferrer" target="_blank">BrowserStack</a>.</p>
      <p>But in the latest version of Odoo (12.0), there is a built-in feature that is great for running a test to ensure that the majority of the interface works as expected (or at least doesn’t error out.) This is something called the Click Everywhere Test. Wondering what it does? Well. It clicks everywhere. And then stops if there is an error or traceback.</p>
      <ol>
          <li>Activate developer mode</li>
          <li>Click the debug menu icon in the top right</li>
          <li>Click “Run Click Everywhere Test”</li>
          <li>Watch the screen jump around as the system automatically tries to click all available links and buttons <span role="img" aria-label="">🙈</span></li>
      </ol>
      <figure>
        <img src="/blog/clicking-everywhere-in-odoo/click-everywhere.gif" alt=""/>
      </figure>
      <p>This isn’t as targeted or focused as a browser test that looks for a specific use case to pass, but it’s not a bad sanity check to ensure that there’s nothing obviously broken on the instance. This can save you some stress by preventing clients from becoming confused or angry because they happened to click a bad link somewhere on their instance and a traceback popped up.</p>
      <p>Go give it a shot.</p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
