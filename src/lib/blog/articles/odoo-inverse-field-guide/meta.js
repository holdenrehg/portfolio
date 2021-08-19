import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2021-03-01_odoo-inverse-field-guide",
  title: "Odoo — Guide to Inverse Field Parameters",
  subtitle: "Explanation on how to use and understand inverse functions.",
  datePosted: "2021-03-01",
  description: `
        The concepts of an inverse field in Odoo can be a bit mysterious to a
        lot of developers. I just did a search on the Odoo docs for the phrase
        'inverse' and found 4 page results. Most of these results are about the
        One2many inverse relationship (which is not what I'm talking about in
        this article).
    `,
  tags: [
        Tags.Odoo,
        Tags.Python,
        Tags.OpenSource,
        Tags.WebDevelopment,
    ],
  related: [
        "2020-03-29_daily-odoo-team-routine",
        "2016-06-04_odoo-it-depends",
        "2019-07-13_ten-ways-to-prevent-tech-debt",
    ],
})
