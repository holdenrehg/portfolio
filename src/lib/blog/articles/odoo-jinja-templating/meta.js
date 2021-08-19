import { Meta } from "../../../../components/blog/Meta"
import { Tags } from "../../../../components/blog/Tags"

export default new Meta({
    id: "2021-03-16_odoo-jinja-templating",
    title: "Odoo + Jinja Templating",
    subtitle: "A simpler alternative for displaying static information",
    description: "I've been experimenting with simpler template rendering options in Odoo outside of QWeb.",
    coverImage: "/blog/odoo-jinja-templating/cover.jpg",
    datePosted: "2021-03-16",
    contentSnippet: `
        <p>
            Odoo has a built in templating
            engine called <a href="https://www.odoo.com/documentation/14.0/reference/qweb.html" rel="noreferrer" target="_blank"><code>qweb</code></a>
            which is used for report templates and the frontend javascript framework. But
            as many Odoo developers know, there are different view types built into Odoo that
            do not use the qweb engine. This means that the qweb directives are not
            available on form views, tree views, kanban views, etc. (The most common types of
            views.)
        </p>
        <p>
            This can drive us crazy when we need to figure out how to display or loop
            through some basic information in the common views.
        </p>
        <p>
            I've found a good option/workaround to show static information in the views by
            utilizing the <code>jinja2</code> package (which is already a requirement of Odoo).
            I'm going to walk you through the current way and my new way to handle it.
        </p>
        <h2>How can I show context in the view?</h2>
        <p>
            One of the common use cases that I've seen pop up for Odoo developers is being able to
            display some simple information like...
        </p>
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
