import React from "react"
import { prettyDate } from "../../utils/date"
import { RecentArticles } from "."

class RecentArticlesLinks extends RecentArticles {
  render() {
    return (
      <div className="text-gray-900">
        <strong className="block text-lg text-gray-700 pb-3">I like to write, so check out some of my recent articles:</strong>
        <ul className="list-disc ml-3">
          {this.state.recentArticles.map(article => (
            <li className="m-0 px-0 py-1">
              <a href={`/blog/${article.defaultProps.meta.id}`} className="hover:text-indigo-800 hover:underline">
                <span>{article.defaultProps.meta.title}</span>
                <span className="text-gray-600">&nbsp;{prettyDate(article.defaultProps.meta.datePosted)}</span>
              </a>
            </li>
          ))}
        </ul>
        <a className="block pt-3 text-gray-700 hover:underline" href="/blog"><strong>-&gt; Or click here to see all my articles.</strong></a>
      </div>
    )
  }
}

export { RecentArticlesLinks }
