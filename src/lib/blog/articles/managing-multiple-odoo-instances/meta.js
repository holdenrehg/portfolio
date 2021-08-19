import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2016-03-03_managing-multiple-odoo-instances",
  title: "Managing multiple Odoo instances",
  datePosted: "2016-03-03",
  coverImage: "/blog/managing-multiple-odoo-instances/cover.jpeg",
  description: `
      Getting started with hosting Odoo can be tricky especially when trying to
      manage multiple instances, manage multiple editions (Odoo 8, Odoo 9
      Community, Odoo 9 Enterprise), and keep a smooth development workflow. I
      spent some time breaking down a simpler way to install and organize Odoo
      on our development server and thought
    `,
  tags: [
      Tags.DevTools,
      Tags.Software,
      Tags.Odoo,
      Tags.Erp,
    ],
  related: [
      "2019-01-27_dockerized-odoo-development",
      "2019-07-13_ten-ways-to-prevent-tech-debt",
      "2020-03-29_daily-odoo-team-routine",
    ],
})
