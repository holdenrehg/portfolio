import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2019-09-04_guide-to-erp",
  title: "A guide to ERP (infographic)",
  datePosted: "2019-09-04",
  coverImage: "/blog/guide-to-erp/cover.jpg",
  description: `
      The simplest possible definition of an ERP system generally would be a
      program that business leaders use to organize and run the majority of their
      business operations.
    `,
  tags: [
      Tags.Erp,
      Tags.CloudComputing,
      Tags.SmallBusiness,
      Tags.WebDevelopment,
      Tags.SaaS,
    ],
  related: [
      "2020-03-29_daily-odoo-team-routine",
      "2019-08-04_guide-to-no-bullshit-business-metrics",
      "2019-09-17_simple-business-manifesto",
    ]
})
