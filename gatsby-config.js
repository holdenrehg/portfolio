// This pattern was recommended on an issues on the Gatsby repo:
// https://github.com/gatsbyjs/gatsby/issues/7810#issuecomment-449741977
//
// The point of this is to allow es6 syntax importing in the gatsby-config and
// gatsby-node files.


require = require("esm")(module)

module.exports = require("./gatsby-config.esm.js")
