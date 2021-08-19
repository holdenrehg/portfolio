import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2018-09-22_write-better-code-outside-in",
  title: "Write better code — Outside in",
  datePosted: "2018-09-22",
  description: `
      Phrases like “top-down” or “bottom-up” can mean a lot. Maybe you’re thinking
      about how projects are divided into milestones before milestones are defined
      as sets of tasks, how your brain processes information, or defining a
      hierarchical organization in a company.
    `,
  tags: [
      Tags.SoftwareCraftsmanship,
      Tags.Refactoring,
      Tags.WebDevelopment,
      Tags.Python,
    ],
  related: [
      "2019-07-13_ten-ways-to-prevent-tech-debt",
      "2020-01-29_chaining-context-managers-for-mocks",
      "2019-09-04_guide-to-erp",
    ],
  backgroundColor: "#230806",
})
