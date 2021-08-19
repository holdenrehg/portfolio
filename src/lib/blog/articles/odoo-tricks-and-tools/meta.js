import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-03-03_odoo-tricks-and-tools",
  title: "Odoo tricks and tools",
  datePosted: "2019-03-03",
  coverImage: "/blog/odoo-tricks-and-tools/cover.jpg",
  description: "A walkthrough of some of the tools hidden down in the Odoo framework.",
  contentSnippet: `
    <h2>Intro</h2>
    <p>There’s a set of built-in <code>tools</code> associated with the Odoo framework that many developers / third-party modules often overlook (found in the Odoo core under <code>odoo/tools</code>).</p>
    <p>I’m going to outline and provide examples for some of the most common functions and variables.</p>

    <h2>Preface</h2>
    <p>All of the commands run below, I’m running in an Odoo shell instance. It makes it easy to test out all of the different tools available to you. If you aren’t sure how to run an Odoo shell, then <a href="/blog/2019-02-16_run-an-odoo-repl">see my article on it called Run An Odoo REPL</a>.</p>

    <h2>The tools</h2>
    <h3>config</h3>
    <p>Some helpers related to the odoo.conf configuration file or the configuration parameters are...</p>
  `,
  tags: [
      Tags.Python,
      Tags.Odoo,
      Tags.Erp,
      Tags.WebDevelopment,
    ],
  related: [
      "2019-09-04_guide-to-erp",
      "2020-03-29_daily-odoo-team-routine",
      "2019-02-02_writing-tests-in-odoo",
    ],
})
