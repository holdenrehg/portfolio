import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2021-06-03_odoo-docker-quickstart",
  title: "Quickstart to Working with Docker and Odoo",
  datePosted: "2021-06-03",
  subtitle: "Practical quickstart steps for running Odoo within a Docker environment.",
  description: `
        I've been asked a handful of times about my Dockerized Odoo article. Even today,
        over 8 years after the release of Docker there's hesitation around developing with it.
        I completely understand that because there's so much to understand when working with
        it. Originally I wanted to hit all of the major topics, features, and pain points that I
        noticed as a developer working with Docker. That's where the Dockerized Odoo article
        came from. Now I think there's some developers who I can help by putting out a quickstart guide with
        simpler steps for th
    `,
  tags: [
        Tags.Odoo,
        Tags.DevTools,
        Tags.Docker,
    ],
  related: [
        "2019-01-27_dockerized-odoo-development",
        "2019-03-09_odoo-down-for-maintenance",
        "2019-02-16_run-an-odoo-repl",
    ],
  backgroundColor: "#134244",
})
