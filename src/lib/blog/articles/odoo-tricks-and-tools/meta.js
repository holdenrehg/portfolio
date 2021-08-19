import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-03-03_odoo-tricks-and-tools",
  title: "Odoo tricks and tools",
  datePosted: "2019-03-03",
  coverImage: "/blog/odoo-tricks-and-tools/cover.jpg",
  description: `
      There’s a set of built-in tools associated with the Odoo framework that many
      developers / third-party modules often overlook (found in the Odoo core
      under odoo/tools). I’m going to outline and provide examples for some of the
      most common functions and variables.
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
