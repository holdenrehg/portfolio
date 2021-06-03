import React from "react"
import { ArticlePreview } from "../../components/blog"
import { Layout } from "../../components"
import { getArticles } from "./all"
import { GatsbySeo } from "gatsby-plugin-next-seo"

export default class Page extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    getArticles().then(articles => this.setState({articles: articles}))
  }

  render() {
    return (
      <Layout>
        <GatsbySeo
          title="Software, Business, and Investing Articles from Holden Rehg"
          description="I'm writing for readers who are trying to learn more about software development, python, odoo, small business practices, or investing."
          openGraph={{
            title: "Software, Business, and Investing Articles from Holden Rehg",
            description: "I'm writing for readers who are trying to learn more about software development, python, odoo, small business practices, or investing.",
          }}
        />

        <div className="blog-article px-8 md:px-20 pb-32 bg-gray-100">
          <div className="content-wrapper pt-40">
            <div className="max-w-5xl mx-auto">
              <h1 className="block text-gray-900 text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-wider p-0 m-0">The blog</h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-800 -mt-2">Writings on software, business, investing, and random incoherent thoughts</h2>
              <div className="mt-8 mb-8 w-1/3 h-2 bg-purple-400"></div>
              <div className="md:flex md:flex-wrap md:justify-between">
                {this.state.articles.map(article => (
                  <ArticlePreview
                    className="my-4"
                    style={{ flex: "0 48%" }}
                    meta={article.defaultProps.meta}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
