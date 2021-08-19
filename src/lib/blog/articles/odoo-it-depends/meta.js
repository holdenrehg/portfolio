import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2016-06-04_odoo-it-depends",
  title: "Odoo — It depends",
  subtitle: "A Use Case For Odoo Compute Functions and Performance",
  datePosted: "2016-06-04",
  coverImage: "/blog/odoo-it-depends/cover.jpeg",
  description: `
      When Odoo refactored their API and caused forums to be fill with “new api”
      “old api” talk, I feel that it really increased the ease of use for
      developers. Many of the powerful features and tools built into Odoo became
      even simpler to understand. It also became simpler to
    `,
  tags: [
      Tags.Odoo,
      Tags.Python,
      Tags.OpenSource,
      Tags.WebDevelopment,
    ],
  related: [
      "2020-01-29_chaining-context-managers-for-mocks",
      "2019-03-27_odoo-field-guide",
      "2019-03-24_a-flask-plus-stripe-saas-template",
    ],
})
