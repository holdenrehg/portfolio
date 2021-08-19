import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-02-02_writing-tests-in-odoo",
  title: "Writing tests in Odoo",
  subtitle: "Organizing, Writing, and Running Automated Tests",
  datePosted: "2019-02-02",
  coverImage: "/blog/writing-tests-in-odoo/cover.jpeg",
  description: `
    Testing with Odoo, in any version, is not 100% straight forward. There are
    some different tricks and requirements that aren’t always made clear. So I
    wanted to write up everything that my team and I at Blue Stingray have
    learned
    `,
  tags: [
      Tags.SoftwareTesting,
      Tags.WebDevelopment,
      Tags.Odoo,
      Tags.Python,
      Tags.UnitTesting,
    ],
  related: [
        "2020-03-29_daily-odoo-team-routine",
        "2020-01-29_chaining-context-managers-for-mocks",
        "2019-03-09_odoo-down-for-maintenance",
    ],
})
