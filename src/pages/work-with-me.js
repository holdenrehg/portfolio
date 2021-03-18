import React from "react"
import { Layout } from "../components"
import { GatsbySeo } from "gatsby-plugin-next-seo"

// Inspiration from:
// https://dribbble.com/shots/7007253-DailyUI-082-Form

export default () => (
  <Layout>
    <GatsbySeo
      title="Reach Out, Tell Me About Your Project, Let's Work Together"
      description="Consulting and Freelancing with Companies using Python and Odoo"
      openGraph={{
        title: "Reach Out, Tell Me About Your Project, Let's Work Together",
        description: "Consulting and Freelancing with Companies using Python and Odoo",
      }}
    />

    <div className="blog-article px-20 pb-32 bg-gray-100">
      <div className="content-wrapper pt-56 pb-20">
        <div className="text-center mx-auto w-2/3">
          <h1 className="text-3xl font-extrabold">Coming soon.</h1>
          <h2 className="text-xl">I'm still getting my work schedule organized. In the mean time, reach out to me in the contact section below if you have any questions.</h2>
        </div>
      </div>
    </div>
  </Layout>
)
