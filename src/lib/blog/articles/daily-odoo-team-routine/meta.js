import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
  id: "2020-03-29_daily-odoo-team-routine",
  title: "An Odoo team’s daily routine",
  subtitle: "How my team and I work together day to day",
  datePosted: "2020-03-29",
  description: "A schedule of events based on how my Odoo team and I work every day together.",
  contentSnippet: `
    <p>
      There are tons of these type of
      articles out on the internet. Articles that explain “How to get started
      developing with Framework XYZ”.
    </p>
    <p>
      Unfortunately, none of the Odoo specific articles have gone into enough
      detail for me or my team to really learn about an ideal day to day
      workflow. There are plenty of explanations on how to create a sample
      Odoo module. Then there are forum posts with documentation about more
      technical topics like framework extensions, frontend widget development,
      security rules, etc.
    </p>
    <p>
      Coming from other programming environments, even other python
      environments, it’s not perfectly clear how to take a group of
      developers, stick them in an office together, and be productive while
      building Odoo based systems.
    </p>
    <p>
      How should projects actually be organized within the git repositories
      so that each developer can work on what they need to? When dealing with
      dozens or hundreds of instances, how should each developer manage their
      local environment? Etc.
    </p>
    <p>
      Here is a (hopefully) in-depth explanation of my day to day as an Odoo
      developer working with other Odoo developers and how we work together to
      get code pushed out to clients. I’ll provide as much context as possible
      because we have certain systems and processes in place now that may not
      be obvious.
    </p>
    <h2>Morning time</h2>
    <p>
      Coming into the office every morning, I usually grab some coffee.
      Caffeine should be a requirement for working with Odoo every day. You
      have to be prepared for the days where Odoo decides that none of your
      XML is valid and won’t provide good error messages to explain why.
    </p>
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
