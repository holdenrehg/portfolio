import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2018-04-29_odoo-sh-is-almost-ready",
  title: "Odoo.sh is almost ready",
  subtitle: "But no quite",
  datePosted: "2018-04-29",
  coverImage: "/blog/odoo-sh-is-almost-ready/cover.jpeg",
  description: `
      Odoo.sh is a cool new tool developed by Odoo which seems to be a wrapper
      around the runbot tool they have already developed. It’s a free (for now)
      SAAS product that gives you the ability to link up Github repositories.
      It’s not a full CI server, but
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
