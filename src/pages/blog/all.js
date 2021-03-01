import React from "react"

const articleFiles = [
  "2020-03-29_daily-odoo-team-routine",
  "2020-01-29_chaining-context-managers-for-mocks",
  "2019-09-17_simple-business-manifesto",
  "2019-09-04_guide-to-erp",
  "2019-08-09_whats-in-python3.8",
  "2019-08-04_guide-to-no-bullshit-business-metrics",
  "2019-07-13_ten-ways-to-prevent-tech-debt",
  "2019-07-01_clicking-everywhere-in-odoo",
  "2019-04-26_becoming-a-superuser-in-odoo",
  "2019-03-27_odoo-field-guide",
  "2019-03-26_business-lessons-learned-from-chef-david-chang",
  "2019-03-24_a-flask-plus-stripe-saas-template",
  "2019-03-09_odoo-images-and-attachments-explain-regenerate-assets",
  "2019-03-09_odoo-down-for-maintenance",
  "2019-03-03_odoo-tricks-and-tools",
  "2019-02-16_run-an-odoo-repl",
  "2019-02-04_odoo-images-and-attachments-load-from-url",
  "2019-02-02_writing-tests-in-odoo",
  "2019-01-27_dockerized-odoo-development",
  "2018-09-22_write-better-code-outside-in",
  "2018-06-18_my-investment-experience",
  "2018-04-29_odoo-sh-is-almost-ready",
  "2016-10-23_upgrade-odoo-apps-from-command-line",
  "2016-06-04_odoo-it-depends",
  "2016-03-03_managing-multiple-odoo-instances",
]

export const getArticles = () => {
  let promise = new Promise((resolve, reject) => {
    Promise.all(articleFiles.map(fileName => import(`./${fileName}`)))
      .then(function() {
        resolve(arguments[0].map(_module => _module.default))
      })
      .catch(reject)
  })

  return promise
}

// Workaround. Gatsby forces all page files to have a default export.
export default () => {
  return (<div></div>)
}
