import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2020-03-29_daily-odoo-team-routine",
  title: "An Odoo team’s daily routine",
  subtitle: "How my team and I work together day to day",
  datePosted: "2020-03-29",
  description: `
      There are tons of these types of articles out on the internet. Articles that
      explain "How to get started developing with Framework XYZ". None of the Odoo
      specific articles have gone into enough details for me or my team to really
      learn the ideal day to day workflow.
    `,
  tags: [
      Tags.Odoo,
      Tags.Python,
      Tags.Productivity,
      Tags.WebDevelopment,
      Tags.ProjectManagement,
    ],
  related: [
      "2019-08-04_guide-to-no-bullshit-business-metrics",
      "2019-09-17_simple-business-manifesto",
      "2019-09-04_guide-to-erp",
    ],
  backgroundColor: "#1a1636",
})
