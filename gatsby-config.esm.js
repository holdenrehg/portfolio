import { getMetas } from "./src/lib/blog/fetchMeta"

module.exports = {
  siteMetadata: {
    title: `Holden Rehg's Portfolio`,
    description: `The place where I write about my life and my work.`,
    author: `@reedrehg`,
    siteUrl: `https://holdenrehg.com`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-next-seo`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `holdenrehg`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-ZVW2NCS07K",
        ]
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              nodes {
                path
              }
            }
          }
        `,

        /**
         * Serializes every page on the site into a set of objects with
         * properties for defining a sitemap.xml.
         *
         * The function uses a set of rules where each rule defines a regex and
         * a set of properties that will override the default sitemap info for
         * any path that matches the regex. For example, blog articles should
         * have a monthly changefreq while the contact us page should be yearly.
         */
        serialize: ({ site, allSitePage }) => {
          const isIgnored = (path) => {
            const ignored = [
              /^\/errors(.*)/,
            ]

            for(const regex of ignored) {
              if(path.match(regex)) {
                return true
              }
            }

            return false
          }

          const override = (path) => {
            const overrideRules = [
              {
                regex: /^\/blog[\/]?$/,
                options: {
                  changefreq: "daily",
                }
              },
              {
                regex: /^\/blog\/(.*)/,
                options: {
                  changefreq: "monthly",
                }
              },
            ]

            for(const rule of overrideRules) {
              if(path.match(rule.regex)) {
                return rule.options
              }
            }

            return {}
          }

          return allSitePage.nodes
            .filter(node => !isIgnored(node.path))
            .map(node => {
              return Object.assign({
                  url: `${site.siteMetadata.siteUrl}${node.path}`,
                  changefreq: `yearly`,
                  priority: 0.7,
                },
                override(node.path)
              )
            })
        }
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            output: "/rss.xml",
            title: "Holden Rehg's Blog",
            feed_url: "https://holdenrehg.com/rss.xml",
            site_url: "https://holdenrehg.com",
            language: "en",
            query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }

                allSitePage {
                  nodes {
                    path
                  }
                }
              }
            `,
            serialize: ({query: {site, allSitePage}}) => {
              return getMetas().map(meta => {
                return {
                  title: meta.title,
                  description: meta.description,
                  date: meta.datePosted,
                  url: `${site.siteMetadata.siteUrl}/blog/${meta.id}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${meta.id}`,
                  custom_elements: [{
                    "content:encoded": `
                      ${meta.contentSnippet}<br/>
                      <p>
                        Continue reading the full post at <a rel="nofollow" href="${site.siteMetadata.siteUrl}/blog/${meta.id}">holdenrehg.com</a>.
                      </p>
                    `
                  }],
                }
              })
            }
          }
        ]
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}