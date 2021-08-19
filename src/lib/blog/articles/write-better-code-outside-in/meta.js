import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2018-09-22_write-better-code-outside-in",
  title: "Write better code — Outside in",
  datePosted: "2018-09-22",
  description: "A strategy I've been trying to use when writing code, to write better code.",
  contentSnippet: `
    <blockquote>“Software is a great combination between artistry and engineering.” — Bill Gates</blockquote>

    <h2><strong>Top Down and Bottom Up</strong></h2>
    <p>Phrases like “top-down” or “bottom-up” can mean a lot. Maybe you’re thinking about how projects are divided into milestones before milestones are defined as sets of tasks, how your brain processes information, or defining a hierarchical organization in a company.</p>
    <blockquote>I’ve never been able to fully wrap my head around the idea of software being built either up or down.</blockquote>
    <p>Some programmers use these terms to describe the processes for designing and building software. Building bottom-up consists of developing building blocks that stack and rearrange to shape out the rest of the system.</p>
    <p>I’ve never been able to fully wrap my head around the idea of software being built either up or down. Maybe you can think about building a program as constructing a building where the foundation is laid, then a frame or structure goes up, etc. But software doesn’t really play by the same rules. Going along with the building analogy, when writing software I might build a bridge between two buildings before those two buildings exist. It’s hard to conceptualize a floating bridge connecting two non-existent buildings. A lot of things can take your program down but gravity is pretty low on the list.</p>

    <h2><strong>How About Free Floating Components?</strong></h2>
    <p>I end up thinking about software as these components floating in free space that can handle IO and contain multiple sub-components within them.</p>
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
