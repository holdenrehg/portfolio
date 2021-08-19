import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-04-26_becoming-a-superuser-in-odoo",
  title: "Becoming a superuser in Odoo 12",
  subtitle: "It's a little different from before",
  datePosted: "2019-04-26",
  coverImage: "/blog/becoming-a-superuser-in-odoo/cover.jpg",
  description: `
      In older versions of Odoo, prior to version 12.0, every instance was created
      with a default user called Administrator with a primary database id of 1.
      This made things easy for developers. Most developers probably always logged
      in as the administrator user, especially on their local environments. So
      every time they logged in they had full access to all resources.
    `,
  tags: [
      Tags.Odoo,
      Tags.Erp,
      Tags.Python,
      Tags.SoftwareTesting,
    ],
  related: [
      "2019-07-01_clicking-everywhere-in-odoo",
      "2019-07-13_ten-ways-to-prevent-tech-debt",
      "2019-02-02_writing-tests-in-odoo",
    ],
})
