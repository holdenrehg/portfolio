import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-01-27_dockerized-odoo-development",
  title: "Dockerized Odoo development",
  subtitle: "Easier Development With Docker",
  datePosted: "2019-01-27",
  coverImage: "/blog/dockerized-odoo-development/cover.jpeg",
  description: `
      This is a follow up to something I wrote about a couple of years ago when I
      was trying to go through the process of running dozens of applications on
      the same server. Looking back I wish I would have jumped into Docker sooner,
      but hindsight is 20/20.
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
