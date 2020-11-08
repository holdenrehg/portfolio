import React from "react"
import { ArticlePreview } from "."
import { articles } from "../../pages/blog/all"

/**
 * Sort comparison function to get most recent articles.
 *
 * This uses the datePosted sorting by articles posted last.
 */
const sorter = (articleA, articleB) => {
  return new Date(articleB.defaultProps.meta.datePosted) - new Date(articleA.defaultProps.meta.datePosted)
}

/**
 * Limit an array to the first `count` elements.
 */
const limit = (arr, count) => {
  return arr.splice(0, count)
}

/**
 * Get an array of recent articles as HTML.
 *
 * This depends on the ArticlePreview component for each article.
 */
const recentArticles = (articles, numberOfArticles) => {
  articles = limit(articles.sort(sorter), numberOfArticles)
  const filtered = []

  for( const article of articles) {
    filtered.push(
      <ArticlePreview className="my-4" style={{ flex: "0 30%" }} meta={article.defaultProps.meta}/>
    )
  }

  return filtered
}

const RecentArticles = (props) => {
  return (
    <div className="mt-6 flex flex-wrap justify-between">
      {recentArticles(articles, props.numberOfArticles)}
    </div>
  )
}

RecentArticles.defaultProps = {
  numberOfArticles: 6,
}

export { RecentArticles }
