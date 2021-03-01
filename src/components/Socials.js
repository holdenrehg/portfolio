import React from "react"

export class Socials extends React.Component {
  static defaultProps = {
    color: ""
  }

  render() {
    return (
      <div className="flex my-10">
        <a href="https://linkedin.com/in/holdenrehg"
          rel="noreferrer"
          target="_blank"
          className="pr-6">
          <img src={`/icons/social/linkedin${this.props.color}.svg`} alt="" className="cursor-pointer" width="26px"/>
        </a>
        <a href="https://twitter.com/reedrehg"
          rel="noreferrer"
          target="_blank"
          className="pr-6">
          <img src={`/icons/social/twitter${this.props.color}.svg`} alt="" className="cursor-pointer" width="26px"/>
        </a>
        {/* TODO */}
        <a href="/blog"
          rel="noreferrer"
          target="_blank"
          className="pr-6">
          <img src={`/icons/social/rss${this.props.color}.svg`} alt="" className="cursor-pointer" width="22px"/>
        </a>
        <a href="https://instagram.com/reedrehg"
          rel="noreferrer"
          target="_blank"
          className="pr-6">
          <img src={`/icons/social/instagram${this.props.color}.svg`} alt="" className="cursor-pointer" width="24px"/>
        </a>
        <a href="https://github.com/holdenrehg"
          rel="noreferrer"
          target="_blank"
          className="pr-6">
          <img src={`/icons/social/github${this.props.color}.svg`} alt="" className="cursor-pointer" width="24px"/>
        </a>
      </div>
    )
  }
}
