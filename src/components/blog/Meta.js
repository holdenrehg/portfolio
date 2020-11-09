import React from "react"

export class Meta {

  /**
   * The fields that are required to create a Meta object.
   */
  static required = [
    "id",
    "title",
    "description",
    "datePosted",
    // "related",
  ]

  /**
   * Construct a new Meta object, validating that all required fields were
   * included, and setting properties.
   *
   * These objects are expected to store the following information:
   *     - id (str): unique id that will be use for the url
   *     - title (str): main title of the article
   *     - subtitle (str): subtitle of the article
   *     - description (str): short description of the article
   *     - datePosted (str): date posted formatted as YYYY-MM-DD
   *     - coverImage (str): src path to the cover image
   *     - tags (str): comma separated list of tags to describe the article
   */
  constructor(data) {
    for(let field of Meta.required) {
      if(!data[field]) throw `Field ${field} is required for Meta.`
    }

    for(let field of Object.keys(data)) {
      this[field] = data[field]
    }
  }

  renderTags(color, text, size) {
    const tags = []
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


    if(this.tags) {
      for(const tag of this.tags.split(",")) {
        tags.push(
          <div className={classes.join(" ")}>
            {tag}
          </div>
        )
      }
    }

    return tags
  }
}
