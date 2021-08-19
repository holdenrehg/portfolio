import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-02-04_odoo-images-and-attachments-load-from-url",
  title: "Odoo images and attachments — Load from URL",
  datePosted: "2019-02-04",
  coverImage: "/blog/odoo-images-and-attachments-load-from-url/cover.jpeg",
  description: `
      This is the first in a series of posts about images and attachments in Odoo.
      I think it’s a topic that not all Odoo developers are completely clear on.
      Each post will be a quick dive into detail about images or attachments in
      Odoo. Of course, we’ll focus on the latest and greatest (currently version
      12.0) but there is some overlap between version.
    `,
  tags: [
      Tags.WebDevelopment,
      Tags.Odoo,
      Tags.Software,
      Tags.OpenSource,
      Tags.Python,
    ],
  related: [
      "2019-01-27_dockerized-odoo-development",
      "2019-02-16_run-an-odoo-repl",
      "2019-03-27_odoo-field-guide",
    ],
})
