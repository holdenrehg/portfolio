import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2016-10-23_upgrade-odoo-apps-from-command-line",
  title: "Upgrade Odoo apps from command line",
  subtitle: "Luckily, not as difficult as it seems",
  datePosted: "2016-10-23",
  description: `
      Every once in a while, you will run into an issue during Odoo development
      that causes an internal server error in one of your Odoo databases. This
      could be caused by some different issues
    `,
  tags: [
      Tags.Odoo,
      Tags.WebDevelopment,
      Tags.Software,
      Tags.Python,
      Tags.OpenSource,
    ],
  related: [
      "2020-03-29_daily-odoo-team-routine",
      "2019-07-13_ten-ways-to-prevent-tech-debt",
      "2019-03-27_odoo-field-guide",
    ],
})
