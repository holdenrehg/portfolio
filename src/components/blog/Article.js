import React from 'react'
import { prettyDate } from "../../utils/date"
import { ArticlePreview } from "."
import { getArticles } from "../../pages/blog/all"

export class Article extends React.Component {
  state = {
    relatedArticles: []
  }

  componentDidMount() {
    if(this.props.meta.related) {
      const relatedIds = this.props.meta.related.split(",")

      getArticles().then(articles => {
        const relatedArticles = articles.filter(article => relatedIds.includes(article.defaultProps.meta.id))
        this.setState({relatedArticles: relatedArticles})
      })
    }
  }

  render() {
    return (
      <div>
        <div className="blog-article px-20 pb-32 bg-white">
          <div className="content-wrapper pt-40">
            {/* Article header */}
            <div className="w-2/3 mx-auto text-lg">
              <p>
                <a href="/blog" className="underline hover:opacity-75">Articles</a>
                <span className="mx-1">&gt;</span>
                <span>{this.props.meta.id}</span>
              </p>
            </div>
            {/* Cover image */}
            <div
              style={{backgroundImage: `url(${this.props.meta.coverImage})`}}
              className={(!this.props.meta.coverImage ? "hidden " : "") + "bg-cover bg-center w-full h-104 my-10"}></div>
            {/* Meta data about the article */}
            <div className="w-2/3 mx-auto">
              <h1 id="blog-article-title" className="text-4xl font-extrabold mb-0">{this.props.meta.title}</h1>
              <h2 id="blog-article-subtitle" className={(!this.props.meta.subtitle ? "hidden ": "") + "text-xl mt-0"}>{this.props.meta.subtitle}</h2>
              <div className="mt-8">
                <div className="inline-block mr-10">
                  <div className="font-bold">Written by</div>
                  <div className="text-lg">Holden Rehg</div>
                </div>
                <div className="inline-block">
                  <div className="font-bold">Posted on</div>
                  <div className="text-lg">{prettyDate(this.props.meta.datePosted)}</div>
                </div>
              </div>
            </div>
            <hr className="bg-gray-200 mt-12 mb-16"/>
            {/* Article contents */}
            <div className="blog-article-content w-2/3 mx-auto">
              <div className="relative text-helvetica text-article tracking-article">
                {this.props.children}
              </div>
              {/* Article footer */}
              <div>
                <div>
                  <h2>Thanks For Reading</h2>
                  <p>
                    I appreciate you taking the time to read any of my articles.
                    Take a look at the<a href="/blog">entire catalog of articles
                    I've written</a>. Or feel free to give me a follow on
                    <a href="https://twitter.com/reedrehg" target="_blank">Twitter</a>,
                    <a href="https://www.instagram.com/reedrehg/" target="_blank">Instagram</a>,
                    or<a href="https://www.github.com/holdenrehg/" target="_blank">Github</a>.
                    Or see my<a href="#site-footer">contact info</a> below.
                  </p>
                </div>
                <div className="mt-16">{this.props.meta.renderTags()}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-center py-16 px-20 bg-gray-200">
          <div className="absolute w-full left-0" style={{top: "-40px"}}>
            <div className="mx-auto rounded-full bg-cover bg-center border-4 border-gray-400" style={{backgroundImage: "url(/images/self-portrait-1.jpeg)", width: "80px", height: "80px"}}/>
            <p className="mx-auto mt-6 text-lg text-gray-900 font-bold">Holden Rehg, Author</p>
            <p className="mx-auto text-lg text-gray-800">Posted {prettyDate(this.props.meta.datePosted)}</p>
          </div>
          <div className="mt-40">
            <h3 className="text-3xl font-bold mb-4">Other articles you might like</h3>
            <div className="flex justify-between mb-8">
              {this.state.relatedArticles.map(article => (
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
}
