import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-03-09_odoo-images-and-attachments-explain-regenerate-assets",
  title: "Odoo images and attachments — Explaining and regenerating assets",
  subtitle: "How do assets and bundles actually work",
  datePosted: "2019-03-09",
  description: `
      If you have ever manually moved a filestore from one site to another, or
      migrated a database without the filestore, then you’ve probably had to deal
      with failing or missing assets.
    `,
  tags: [
      Tags.Odoo,
      Tags.Erp,
      Tags.OpenSource,
      Tags.Python,
      Tags.WebDevelopment,
    ],
  related: [
      "2020-03-29_daily-odoo-team-routine",
      "2019-03-27_odoo-field-guide",
      "2019-03-09_odoo-down-for-maintenance",
    ],
  backgroundColor: "#132929",
})
