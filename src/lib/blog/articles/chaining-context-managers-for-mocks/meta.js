import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2020-01-29_chaining-context-managers-for-mocks",
  title: "Chaining ContextManager values when mocking tests",
  datePosted: "2020-01-29",
  coverImage: "/blog/chaining-context-managers-for-mocks/cover.jpg",
  description: `
      Recently, I've used unittest.mock.patch to mock connections to external
      services while developing a Django app. While writing the tests, I found
      myself writing repetitive code. Chaining ContextManager values can be a
      solution to this.
    `,
  tags: [
      Tags.Python,
      Tags.WebDevelopment,
      Tags.UnitTesting,
      Tags.SoftwareTesting,
      Tags.Refactoring,
    ],
  related: [
      "2020-03-29_daily-odoo-team-routine",
      "2019-08-09_whats-in-python3.8",
      "2019-09-17_simple-business-manifesto",
    ]
})
