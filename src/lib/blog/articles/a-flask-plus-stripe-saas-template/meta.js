import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-03-24_a-flask-plus-stripe-saas-template",
  title: "A Flask + Stripe SaaS template",
  subtitle: "Bootstrapped template for Flask and Stripe integration",
  datePosted: "2019-03-24",
  coverImage: "/blog/a-flask-plus-stripe-saas-template/cover.jpg",
  description: `
      Recently I’ve been working on side projects, away from the large,
      “enterprisey” code bases that I typically deal with at work. I tried out
      quite a few different setups since it’s so easy to get caught in a loop,
      using the same tools
    `,
  tags: [
      Tags.Docker,
      Tags.Flask,
      Tags.Python,
      Tags.OpenSource,
    ],
  related: [
      "2020-01-29_chaining-context-managers-for-mocks",
      "2019-07-13_ten-ways-to-prevent-tech-debt",
      "2018-09-22_write-better-code-outside-in",
    ],
})
