import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
    id: "2021-03-16_odoo-jinja-templating",
    title: "Odoo + Jinja Templating",
    subtitle: "A simpler alternative for displaying static information",
    coverImage: "/blog/odoo-jinja-templating/cover.jpg",
    datePosted: "2021-03-16",
    description: `
        Odoo has a built in templating engine called qweb
        which is use on report templates and through the frontend javascript framework. But
        as many Odoo developers know, there are different view types built into Odoo that
        do not use the qweb engine. This means that the qweb directive are not
        available on form views, tree views, kanban views, etc.
    `,
    tags: [
        Tags.Odoo,
        Tags.Erp,
        Tags.OpenSource,
        Tags.Python,
        Tags.WebDevelopment,
    ],
    related: [
        "2021-03-01_odoo-inverse-field-guide",
        "2020-01-29_chaining-context-managers-for-mocks",
        "2019-07-13_ten-ways-to-prevent-tech-debt",
    ],
})
