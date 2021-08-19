import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-03-27_odoo-field-guide",
  title: "The Unofficial Odoo Field Guide (v12)",
  subtitle: "Reference of field options and field attribute options",
  datePosted: "2019-03-27",
  coverImage: "/blog/odoo-field-guide/cover.png",
  description: `
      This is a complete reference to all fields that exist in Odoo (as of version
      12.0) with the required and optional attributes for each field.
    `,
  tags: [
      Tags.WebDevelopment,
      Tags.OpenSource,
      Tags.Odoo,
      Tags.Erp,
      Tags.Python,
    ],
  related: [
      "2019-09-04_guide-to-erp",
      "2019-07-01_clicking-everywhere-in-odoo",
      "2019-02-02_writing-tests-in-odoo",
    ],
})
