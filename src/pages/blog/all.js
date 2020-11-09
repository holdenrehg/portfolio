import React from "react"

export const getArticles = () => {
  let promise = new Promise((resolve, reject) => {
    Promise.all([
      import("./chaining-context-managers-for-mocks"),
      import("./daily-odoo-team-routine"),
      import("./guide-to-erp"),
      import("./guide-to-no-bullshit-business-metrics"),
      import("./simple-business-manifesto"),
      import("./whats-in-python3.8"),
    ])
      .then(function() { resolve(arguments[0].map(_module => _module.default)) })
      .catch(reject)
  })

  return promise
}

// Workaround. Gatsby forces all page files to have a default export.
export default () => {
  return (<div></div>)
}
