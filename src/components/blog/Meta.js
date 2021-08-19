export class Meta {

  /**
   * The fields that are required to create a Meta object.
   */
  static required = [
    "id",
    "title",
    "description",
    "datePosted",
  ]

  /**
   * Default values for the Meta object fields.
   */
  static defaults = {
    backgroundColor: "#292b2b",
    textDecorationColor: "#a0aec0",
  }

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
    // check for required fields...
    for(const field of Meta.required) {
      if(!data[field]) throw Error(`Field ${field} is required for Meta.`)
    }

    // set user-defined values on the object
    for(const field of Object.keys(data)) {
      this[field] = data[field]
    }

    // set any defaults
    for (const field of Object.keys(Meta.defaults)) {
      if(!this.hasOwnProperty(field)) {
        this[field] = Meta.defaults[field];
      }
    }
  }

  facebookDescription() {
    //
  }

  twitterDescription() {
    //
  }

  linkedinDescription() {
    //
  }
}
