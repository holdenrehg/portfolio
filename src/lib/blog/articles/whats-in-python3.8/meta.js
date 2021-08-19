import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-08-09_whats-in-python3.8",
  title: "What's in python 3.8?",
  datePosted: "2019-08-09",
  coverImage: "/blog/whats-in-python3.8/cover.jpg",
  description: `
      The programming language python is releasing it’s latest minor version 3.8
      soon and is currently in beta. Many of the application I build are built
      on top of python3, so I wanted to take a look at what's coming down the
      pipe.
    `,
  tags: [
      Tags.Python,
      Tags.WebDevelopment,
      Tags.Software,
      Tags.OpenSource,
    ],
  related: [
      "2020-01-29_chaining-context-managers-for-mocks",
      "2019-09-17_simple-business-manifesto",
      "2019-09-04_guide-to-erp",
    ]
})
