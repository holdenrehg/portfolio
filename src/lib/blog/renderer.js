import React from "react"

export function renderTags(tags, color, text, size) {
    const res = []
    const classes = [
      "mr-2",
      "my-1",
      "inline-block",
      "uppercase",
      "tracking-wider",
      "font-bold",
      text ? text : "text-white",
      color ? color : "bg-purple-800",
      size === "xs" ? "px-2" : "px-3",
      size === "xs" ? "py-1" : "py-2",
      size === "xs" ? "text-xs" : "text-sm",
    ]

    if(tags) {
      if(typeof tags === "string") {
        tags = tags.split(",")
      }

      for(const tag of tags) {
        res.push(<div className = { classes.join(" ") }>{ tag }</div>)
      }
    }

    return res
}
