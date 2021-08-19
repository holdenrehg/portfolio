import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-07-01_clicking-everywhere-in-odoo",
  title: "Clicking everywhere in Odoo",
  subtitle: "An interesting method for interface testing",
  datePosted: "2019-07-01",
  coverImage: "/blog/clicking-everywhere-in-odoo/cover.jpg",
  description: `
      Typically, good software developers write tests. But there are a lot of
      types of tests. With lots of different names depending on your software
      background. One common type of test out there allows developers to interact
      directly with the GUI (graphical user interface) that a standard user would
      interact with, except in an automated way. Some people call these functional
      tests, or user interface testing or browser tests.
    `,
  tags: [
      Tags.Odoo,
      Tags.SoftwareTesting,
      Tags.Erp,
      Tags.WebDevelopment,
      Tags.Python,
    ],
  related: [
      "2019-02-02_writing-tests-in-odoo",
      "2019-02-16_run-an-odoo-repl",
      "2020-03-29_daily-odoo-team-routine",
    ],
})
