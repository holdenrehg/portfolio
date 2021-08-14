import React from "react"
import { Layout } from "../../components"
import { GatsbySeo } from "gatsby-plugin-next-seo"

export default () => (
  <Layout>
    <GatsbySeo
    title="10+ Years of Experience in Software, Python, and Odoo"
    description="I'm Trying to Build Simpler Software and Help Companies Build Software With Python and Odoo"
    openGraph={{
        title: "10+ Years of Experience in Software, Python, and Odoo",
        description: "I'm Trying to Build Simpler Software and Help Companies Build Software With Python and Odoo",
    }}
    />

    <div className="relative pt-16 lg:px-20 md:min-height-950">
      <div className="px-8 md:px-20 lg:px-32">

        {/* Breadcrumbs */}
        {/* <div className="text-lg">
          <p>
            <a href="/portfolio" className="underline hover:opacity-75">Portfolio</a>
            <span className="mx-1">&gt;</span>
            <span>Building a team.</span>
          </p>
        </div> */}

        {/* Title */}
        {/* <h2 className="mb-12 md:mb-0 text-4xl text-vollkorn tracking-tighter" style={{lineHeight: "3.8rem"}}>
          <mark className="bg-orange-200 hover:opacity-90">
            Building a team.<br/>
          </mark>
        </h2> */}
      </div>
    </div>
  </Layout>
)
