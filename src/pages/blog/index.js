import React from "react"
import { ArticlePreview } from "../../components/blog"
import { Layout } from "../../components"
import { getArticles } from "../../lib/blog/fetchPages"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import debounce from "debounce"

export default class Page extends React.Component {
  state = {
    allArticles: [],
    currentArticles: [],  // articles currently being rendered
    tags: [],
    tagLimit: 5,
  }

  componentDidMount() {
    const articles = getArticles()
    this.setState({
      allArticles: articles,
      currentArticles: articles,
      tags: [...new Set([].concat(...articles.map(article => article.defaultProps.meta.tags)))]
    })
  }

  /**
   * Trigger the articles to be filtered based on the current search query.
   */
  onSearch() {
    const target = document.querySelector("#articleSearch")
    const query = this.alphanumeric(target.value).toLowerCase()
    let results = this.state.allArticles

    if(query) {
      results = this.state.allArticles.filter(
        article => {
          const meta = article.defaultProps.meta

          return this.alphanumeric(meta.title).toLowerCase().includes(query) ||
            this.alphanumeric(meta.subtitle).toLowerCase().includes(query) ||
            this.matchesTag(query, meta.tags)
        }
      )
    }

    this.setState({currentArticles: results})
    if(typeof window !== "undefined" && window.hasOwnProperty("gtag")) {
      window.gtag("event", "search", {
        "search_term": query
      })
    }
  }

  /**
   * Converts a string to an alphanumeric (with spaces) string.
   */
  alphanumeric(data) {
    return (data || "").replace(/[^0-9a-z ]/gi, "")
  }

  /**
   * Checks if a given query contains any of the given tags.
   */
  matchesTag(query, tags) {
    for(const tag of tags) {
      if(query.includes(this.alphanumeric(tag).toLowerCase())) {
        return true
      }
    }

    return false
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

        <div className="blog-article px-8 pt-10 md:px-20 pb-32 bg-gray-100">
          <div className="content-wrapper pt-8">
            <div className="mx-auto">
              <h2 className="md:w-1/2 mx-auto text-center mb-10 text-4xl text-indigo-900 text-vollkorn tracking-tighter">
                <mark className="bg-indigo-100 hover:opacity-90">
                  Writings on software, business, investing, and random incoherent thoughts.
                </mark>
              </h2>
              <form>
                <div class="w-full relative">
                  <label for="articleSearch" class="sr-only">Search</label>
                  <img src="/icons/magnifying-glass.svg"
                    className="absolute"
                    width="20"
                    height="20"
                    style={{left: "0", top: "10px", left: "1rem"}}/>
                  <input
                    onKeyUp={event => { debounce(this.onSearch(event), 800) }}
                    type="text"
                    name="articleSearch"
                    id="articleSearch"
                    class="w-full py-2 pl-16 pr-5 text-xl text-900 placeholder-gray-700 border border-gray-400 shadow-sm focus:ring-purple-400 focus:border-purple-400 block rounded-md"
                    placeholder="What are you looking for?"/>
                </div>
              </form>
              <div className="mt-6">
                {this.state.tags.slice(0, this.state.tagLimit).map(tag => (
                  <div
                    onClick={() => { document.querySelector("#articleSearch").value = tag; this.onSearch()  }}
                    className="cursor-pointer hover:bg-gray-400 mr-2 my-1 inline-block uppercase tracking-wider font-bold text-gray-600 bg-gray-300 px-2 py-1 text-xs"
                  >
                    { tag }
                  </div>
                ))}

                {
                  this.state.tagLimit < this.state.tags.length ?
                  <button onClick={() => {this.setState({tagLimit: 1000})}} className="ml-4 underline text-purple-600">more tags...</button> :
                  <button onClick={() => {this.setState({tagLimit: 5})}} className="ml-4 underline text-purple-600">less tags...</button>
                }
              </div>
              <div className="md:flex md:flex-wrap md:justify-between">
                {
                !this.state.currentArticles.length ?
                <p className="mt-10 text-xl text-gray-600">Sorry, no articles yet for that query. Send me an email and let me know what you're looking for.</p> :
                this.state.currentArticles.map(article => (
                  <ArticlePreview
                    className="my-4"
                    style={{ flex: "0 48%" }}
                    meta={article.defaultProps.meta}/>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
