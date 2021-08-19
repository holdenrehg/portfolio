import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-02-16_run-an-odoo-repl",
  title: "Run an Odoo REPL / IPython prompt",
  subtitle: "One of the most useful things in Odoo",
  datePosted: "2019-02-16",
  coverImage: "/blog/run-an-odoo-repl/cover.png",
  description: `
      In Odoo, you have the ability to run Odoo as a web server and access it via
      a GUI, but you can also run a python REPL with all of the Odoo modules
      loaded in as globals. This is extremely helpful for debugging and for
      learning.
    `,
  tags: [
      Tags.OpenSource,
      Tags.Odoo,
      Tags.Erp,
      Tags.Python,
      Tags.Software
    ],
  related: [
      "2016-10-23_upgrade-odoo-apps-from-command-line",
      "2019-04-26_becoming-a-superuser-in-odoo",
      "2020-03-29_daily-odoo-team-routine",
    ],
})
