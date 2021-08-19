import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-07-13_ten-ways-to-prevent-tech-debt",
  title: "10 ways to prevent technical debt",
  datePosted: "2019-07-13",
  coverImage: "/blog/ten-ways-to-prevent-tech-debt/cover.jpg",
  description: `
      I’ve seen studies claiming that developers spend as much as 50% of their
      time fixing bad code. For companies that employ 10 developers, making an
      average of $75k per year, that means about 9,000 hours and $375k are spent
      each year on refactoring bad code.
    `,
  tags: [
      Tags.WebDevelopment,
      Tags.Software,
      Tags.Python,
      Tags.OpenSource,
      Tags.SoftwareCraftsmanship,
    ],
  related: [
      "2020-03-29_daily-odoo-team-routine",
      "2018-09-22_write-better-code-outside-in",
      "2020-01-29_chaining-context-managers-for-mocks",
    ],
})
