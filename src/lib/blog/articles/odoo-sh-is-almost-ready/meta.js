import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2018-04-29_odoo-sh-is-almost-ready",
  title: "Odoo.sh is almost ready",
  subtitle: "But no quite",
  datePosted: "2018-04-29",
  coverImage: "/blog/odoo-sh-is-almost-ready/cover.jpeg",
  description: "My thoughts about the early beta and development of Odoo.sh. I don't think it's quite ready for full time.",
  contentSnippet: `
    <p><a href="http://odoo.sh" rel="noreferrer" target="_blank">Odoo.sh</a> is a cool new tool developed by Odoo which seems to be a wrapper around the runbot tool they have already developed. It’s a free (for now) SAAS product that gives you the ability to link up Github repositories. It’s not a full CI server, but has CI like features, building instances per commit / push to your repository branches.</p>
    <p>It’s a fantastic idea, especially for Odoo developers or Odoo partners. I was excited when it was released. Unfortuantley after a week or two of getting it setup, I had to switch away from it already:</p>

    <h2>No Community Support</h2>
    <p>The biggest issue had to be the lack of support for the community versions of Odoo. I understand that Odoo is a for profit business trying to make money through their Enterprise version, but 90% of the platform is built on top of community and even Odoo partners work with clients who depend on the community version of Odoo.</p>
    <img src="/blog/odoo-sh-is-almost-ready/love-your-neighbor.jpeg"/>

    <h2>Version Support</h2>
    <p>9.0 is a little bit old. I get that. But it’s not that old and it would be great to have at least support for 9.0 and above. With those three versions (9, 10, and 11) that would cover every release since Odoo Enterprise began.</p>
    <p>No reason to include 8.0. Let’s not think about 8.0 and back.</p>

    <h2>Pricing</h2>
    <p>It’s not badly priced for a managed service, but the storage space will quickly become an issue for any reasonably sized business. 4GB does not hold a lot of information. For reference, if an 80 employee manufacturing company runs for 3 or 4 years on a system like Odoo, I would estimate them to reach 5GB+ considering attachment storage.</p>
    <p>If you take a platform like Google Cloud or AWS, you can get over 500GB worth of storage for less than $20 if you already have an instance setup.</p>

    <h2>Web hooks and Communication</h2>
    <p>Emails are great, but some sort of web hook system would be even better. With the growth of tools like Slack, being able to integrate and post statuses based on builds within the Odoo.sh system would be a huge plus.</p>
    <img src="/blog/odoo-sh-is-almost-ready/yell.jpeg"/>

    <h2>Where is Docker?</h2>
    <p>No container support? We are on a shared hosting system that auto deploys, but does not allow you to select environments or deploy your own environments via containers. That makes things difficult to test when you might have 100 different Odoo instances running on multiple different architectures.</p>
    <p>I have some hope that things will get better. I know it’s a new product that Odoo put out there, but for now I will have to use another solution.</p>
  `,
  tags: [
      Tags.DevTools,
      Tags.Odoo,
      Tags.Python,
      Tags.Erp,
    ],
  related: [
      "2019-01-27_dockerized-odoo-development",
      "2019-02-16_run-an-odoo-repl",
      "2019-09-04_guide-to-erp",
    ],
})
