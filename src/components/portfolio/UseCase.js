import React from "react"

export class UseCase extends React.Component {
  static defaultProps = {
    "src": "",
    "backgroundColor": "gray-300",
    "textColor": "dark",
    "textColors": {
      "dark": {
        "header": "text-gray-900",
        "subheader": "text-gray-800",
        "description": "text-gray-800",
      },
      "light": {
        "header": "text-gray-100",
        "subheader": "text-gray-200",
        "description": "text-gray-200",
      }
    }
  }

  textColor(type) {
    return this.props.textColors[this.props.textColor][type]
  }

  imageDiv() {
    if(this.props.src) {
      return <div className="flex-1 pr-10">
        <img className="w-full opacity-50" src={this.props.src}/>
      </div>
    }
  }

  render() {
    return (
      <div className={ "flex my-6 px-10 py-16 shadow-md bg-" + this.props.backgroundColor } style={this.props.style}>
        { this.imageDiv() }
        <div className="flex-1">
          <p className={ "my-1 uppercase text-sm " + this.textColor("subheader") }>
            { this.props.subheader }
          </p>

          <p className={ "my-1 text-4xl " + this.textColor("header") }>
            { this.props.header }
          </p>

          <p className={ "mt-2 text-vollkorn text-base " + this.textColor("description") }>
            { this.props.description }
          </p>

          <button className="mt-8 text-base bg-white text-gray-900 rounded px-6 py-3 shadow-md">
            <span>Read more about it</span>
            <img className="inline ml-4" width="12" height="12" src="/icons/external-link.svg" />
          </button>
        </div>
      </div>
    )
  }
}
