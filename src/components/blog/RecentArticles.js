import React from "react"
import { ArticlePreview } from "."
import { getArticles } from "../../pages/blog/all"

/**
 * Sort comparison function to get most recent articles.
 *
 * This uses the datePosted sorting by articles posted last.
 */
const sorter = (articleA, articleB) => {
  return new Date(articleB.defaultProps.meta.datePosted) - new Date(articleA.defaultProps.meta.datePosted)
}

class RecentArticles extends React.Component {
  state = {
    recentArticles: []
  }

  componentDidMount() {
    getArticles().then(articles => {
      articles = articles.sort(sorter)
      articles = articles.splice(0, this.props.numberOfArticles)
      this.setState({recentArticles: articles})
    })
  }

  render() {
    return (
      <div className="mt-6 flex flex-wrap justify-between">
        {this.state.recentArticles.map(article => (
          <ArticlePreview
              className="my-4"
              style={{ flex: "0 30%" }}
              meta={article.defaultProps.meta}/>
        ))}
      </div>
    )
  }
}

RecentArticles.defaultProps = {
  numberOfArticles: 6,
}

export { RecentArticles }
