import React, { useEffect, useState } from "react"
import { prettyDate } from "../../utils/date"
import { ArticlePreview } from "."
import { getArticles } from "../../pages/blog/all"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Article = (props) => {
  const [state, setState] = useState({relatedArticles: []});

  const data = useStaticQuery(graphql`
    query ArticleSiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  useEffect(() => {
    if(props.meta.related) {
      if(typeof props.meta.related === "string") {
        props.meta.related = props.meta.related.split(",")
      }

      getArticles().then(articles => {
        setState({
          relatedArticles: articles.filter(
            article => props.meta.related.includes(article.defaultProps.meta.id)
          )
        })
      })
    }
  }, [])

  return (
    <div>
      <GatsbySeo
        title={props.meta.title}
        description={props.meta.description.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()}
        openGraph={{
          site_name: data.site.siteMetadata.title,
          url: `${data.site.siteMetadata.siteUrl}/blog/${props.meta.id}`,
          title: props.meta.title,
          description: props.meta.description.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim(),
          images: !props.meta.coverImage ? [] : [{
            url: `${data.site.siteMetadata.siteUrl}${props.meta.coverImage}`,
          }]
        }}
        twitter={{
          site: "@holdenrehg",
          handle: "@holdenrehg",
          cardType: props.meta.coverImage ? "summary_large_image" : "summary"
        }}
      />

      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${data.site.siteMetadata.siteUrl}/blog/${props.meta.id}"
            },
            "headline": "${props.meta.title}",
            "image": ${props.meta.coverImage ? `["${data.site.siteMetadata.siteUrl}${props.meta.coverImage}"]` : "[]"},
            "datePublished": "${props.meta.datePosted}",
            "dateModified": "${props.meta.datePosted}",
            "author": {
              "@type": "Person",
              "name": "Holden Rehg"
            },
            "publisher": {
              "@type": "Organization",
              "name": "${data.site.siteMetadata.title}",
              "logo": {
                "@type": "ImageObject",
                "url": "${data.site.siteMetadata.siteUrl}/images/self-portrait-1.jpeg"
              }
            },
            "description": "${props.meta.description.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()}"
          }
        `}</script>
      </Helmet>

      <div className="blog-article px-20 pb-32 bg-white">
        <div className="content-wrapper pt-40">
          {/* Article header */}
          <div className="w-2/3 mx-auto text-lg">
            <p>
              <a href="/blog" className="underline hover:opacity-75">Articles</a>
              <span className="mx-1">&gt;</span>
              <span>{props.meta.title}</span>
            </p>
          </div>
          {/* Cover image */}
          <div
            style={{backgroundImage: `url(${props.meta.coverImage})`}}
            className={(!props.meta.coverImage ? "hidden " : "") + "bg-cover bg-center w-full h-104 my-10"}></div>
          {/* Meta data about the article */}
          <div className="w-2/3 mx-auto">
            <h1 id="blog-article-title" className="text-4xl font-extrabold mb-0">{props.meta.title}</h1>
            <h2 id="blog-article-subtitle" className={(!props.meta.subtitle ? "hidden ": "") + "text-xl mt-0"}>{props.meta.subtitle}</h2>
            <div className="mt-8">
              <div className="inline-block mr-10">
                <div className="font-bold">Written by</div>
                <div className="text-lg">Holden Rehg</div>
              </div>
              <div className="inline-block">
                <div className="font-bold">Posted on</div>
                <div className="text-lg">{prettyDate(props.meta.datePosted)}</div>
              </div>
            </div>
          </div>
          <hr className="bg-gray-200 mt-12 mb-16"/>
          {/* Article contents */}
          <div className="blog-article-content text-helvetica w-2/3 mx-auto">
            <div className="relative text-article tracking-article">
              {props.children}
            </div>
            {/* Article footer */}
            <div className="border-t border-gray-400 mt-16">
              <div>
                <h3><strong>Thanks For Reading</strong></h3>
                <p>
                  I appreciate you taking the time to read any of my articles. If you're looking for more
                  ramblings, take a look at the<a href="/blog">entire catalog of articles I've written</a>.
                  Or feel free to give me a follow on <a href="https://twitter.com/reedrehg" rel="noreferrer" target="_blank">Twitter</a>, <a href="https://www.instagram.com/reedrehg/" rel="noreferrer" target="_blank">Instagram</a>,
                  or <a href="https://www.github.com/holdenrehg/" rel="noreferrer" target="_blank">Github</a> to see what else I've got going on. Or see my <a href="#site-footer">contact info</a> below if you want to get in touch with me.
                </p>
              </div>
              <div className="mt-16">{props.meta.renderTags()}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-center py-16 px-20 bg-gray-200">
        <div className="absolute w-full left-0" style={{top: "-40px"}}>
          <div className="mx-auto rounded-full bg-cover bg-center border-4 border-gray-400" style={{backgroundImage: "url(/images/self-portrait-1.jpeg)", width: "80px", height: "80px"}}/>
          <p className="mx-auto mt-6 text-lg text-gray-900 font-bold">Holden Rehg, Author</p>
          <p className="mx-auto text-lg text-gray-800">Posted {prettyDate(props.meta.datePosted)}</p>
        </div>
        <div className="mt-40">
          <h3 className="text-3xl font-bold mb-4">Other articles you might like</h3>
          <div className="flex justify-between mb-8">
            {state.relatedArticles.map(article => (
              <ArticlePreview
                className="my-4"
                style={{ flex: "0 31%" }}
                meta={article.defaultProps.meta}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Article }
