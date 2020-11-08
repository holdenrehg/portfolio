/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import { Footer, Header } from "."
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import highlight from "highlight.js"
import "../styles/global.css"
import "highlight.js/styles/docco.css"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Forces all anchor tags to scroll to the top of the page for most pages.
  useEffect(() => {
    if(!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [])

  // Initialize highlightjs library
  useEffect(() => {
    document.querySelectorAll("code pre").forEach(block => {
      highlight.highlightBlock(block)
    })
  }, [])

  return (
    <>
      <div className="overflow-x-scroll xl:overflow-x-hidden" style={{minWidth: "1280px"}}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="relative">
          <main>
            {props.children}
            <div className="clear-both"/>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
