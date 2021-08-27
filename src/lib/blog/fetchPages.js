import Page1 from "./articles/odoo-patterns-humble-object/page"
import Page2 from "./articles/odoo-docker-quickstart/page"
import Page3 from "./articles/odoo-jinja-templating/page"
import Page4 from "./articles/odoo-inverse-field-guide/page"
import Page5 from "./articles/daily-odoo-team-routine/page"
import Page6 from "./articles/chaining-context-managers-for-mocks/page"
import Page7 from "./articles/simple-business-manifesto/page"
import Page8 from "./articles/guide-to-erp/page"
import Page9 from "./articles/whats-in-python3.8/page"
import Page10 from "./articles/guide-to-no-bullshit-business-metrics/page"
import Page11 from "./articles/ten-ways-to-prevent-tech-debt/page"
import Page12 from "./articles/clicking-everywhere-in-odoo/page"
import Page13 from "./articles/becoming-a-superuser-in-odoo/page"
import Page14 from "./articles/odoo-field-guide/page"
import Page15 from "./articles/business-lessons-learned-from-chef-david-chang/page"
import Page16 from "./articles/a-flask-plus-stripe-saas-template/page"
import Page17 from "./articles/odoo-images-and-attachments-explain-regenerate-assets/page"
import Page18 from "./articles/odoo-down-for-maintenance/page"
import Page19 from "./articles/odoo-tricks-and-tools/page"
import Page20 from "./articles/run-an-odoo-repl/page"
import Page21 from "./articles/odoo-images-and-attachments-load-from-url/page"
import Page22 from "./articles/writing-tests-in-odoo/page"
import Page23 from "./articles/dockerized-odoo-development/page"
import Page24 from "./articles/write-better-code-outside-in/page"
import Page25 from "./articles/my-investment-experience/page"
import Page26 from "./articles/odoo-sh-is-almost-ready/page"
import Page27 from "./articles/upgrade-odoo-apps-from-command-line/page"
import Page28 from "./articles/odoo-it-depends/page"
import Page29 from "./articles/managing-multiple-odoo-instances/page"
import Page30 from "./articles/risk-of-invulnerable-software-teams/page"

export function getArticles() {
  return [
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
    Page13,
    Page14,
    Page15,
    Page16,
    Page17,
    Page18,
    Page19,
    Page20,
    Page21,
    Page22,
    Page23,
    Page24,
    Page25,
    Page26,
    Page27,
    Page28,
    Page29,
    Page30,
  ].sort((pageA, pageB) => new Date(pageB.defaultProps.meta.datePosted) - new Date(pageA.defaultProps.meta.datePosted))
}
