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
          title="Blog"
        />

        <div className="blog-article px-20 pb-32 bg-gray-100">
          <div className="content-wrapper pt-40">
            <div className="max-w-5xl mx-auto">
              <h1 className="block text-gray-900 text-6xl font-bold uppercase tracking-wider p-0 m-0">The blog</h1>
              <h2 className="text-3xl text-gray-800 -mt-2">Writings on software, business, investing, and random incoherent thoughts</h2>
              <div className="mt-8 mb-8 w-1/3 h-2 bg-purple-400"></div>
              <div className="flex flex-wrap justify-between">
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
