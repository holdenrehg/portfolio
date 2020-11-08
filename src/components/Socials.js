import React from "react"

export class Socials extends React.Component {
  static defaultProps = {
    color: ""
  }

  render() {
    return (
      <div className="flex my-10">
        <a href="https://linkedin.com/in/holdenrehg" target="blank" className="pr-6"><img className="cursor-pointer" src={`/icons/social/linkedin${this.props.color}.svg`} width="26px"/></a>
        <a href="https://twitter.com/reedrehg" target="blank" className="pr-6"><img className="cursor-pointer" src={`/icons/social/twitter${this.props.color}.svg`} width="26px"/></a>
        <a href="#" target="blank" className="pr-6"><img className="cursor-pointer" src={`/icons/social/rss${this.props.color}.svg`} width="22px"/></a>
        <a href="https://instagram.com/reedrehg" target="blank" className="pr-6"><img className="cursor-pointer" src={`/icons/social/instagram${this.props.color}.svg`} width="24px"/></a>
        <a href="https://github.com/holdenrehg" target="blank" className="pr-6"><img className="cursor-pointer" src={`/icons/social/github${this.props.color}.svg`} width="24px"/></a>
      </div>
    )
  }
}
