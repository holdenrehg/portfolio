import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2021-03-01_odoo-inverse-field-guide",
  title: "Odoo — Guide to Inverse Field Parameters",
  subtitle: "Explanation on how to use and understand inverse functions.",
  datePosted: "2021-03-01",
  description: "Explanation on how to use and understand inverse functions.",
  contentSnippet: `
    <p>
      The concepts of an inverse field
      in Odoo can be a bit mysterious to a lot of developers. I just did
      a search on the Odoo docs for the phrase "inverse" and found 4 page
      results. Most of these results are about the <code>One2many</code>
      inverse relationship (which is not what I'm talking about in this article).
    </p>
    <p>
      There were a few paragraphs that popped up in reference documentation
      and the best explanation that I found was the following:
    </p>
    <blockquote>
      "Computed fields are readonly by default. To allow setting values on a computed field,
      use the <code>inverse</code> parameter. It is the name of a function reversing the
      computation and setting the relevant fields.
    </blockquote>
    <p>
      Now that's not too bad. We can learn the purpose of the inverse field. Generally yes, we use
      inverse fields to make computed fields writable. But I think there's a bit to expand upon when
      talking about how it actually works.
    </p>
    <h2>Starting with a computed field</h2>
    <p>
      We need to do a quick overview of what a computed field means before stepping into inverse functions, because
      inverse functions only apply to computed fields.
    </p>
    <p>
      A computed field is a field on a model that automatically computes its own value based on...
    </p>
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
