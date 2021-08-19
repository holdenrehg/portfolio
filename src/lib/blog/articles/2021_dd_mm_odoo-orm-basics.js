import React from "react"
import { Layout } from "../../../../components"
import { Article, Meta } from "../../components/blog"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const meta = new Meta({
    id: "2021_dd_mm_odoo-orm-basics",
    title: "Odoo ORM Basics",
    subtitle: "Primer to get started with the Odoo ORM",
    datePosted: "2021-03-09",
    description: "{Ex. A short little description, usually the first paragram}",
    coverImage: "/blog/odoo-orm-basics/cover.png",
    tags: [],
    related: [],
})

const Page = props => (
    <Layout>
        <Article meta={props.meta}>
            <GatsbySeo
                nofollow={true}
                noindex={true}
            />

            <ul className="table-of-contents">
                <li><strong><a href="#introduction">Introduction</a></strong>
                    <ul>
                        <li><a href="#whats-an-orm">What's an ORM?</a></li>
                        <li><a href="#odoo-shell">Odoo Shell</a></li>
                    </ul>
                </li>
                <li><strong><a href="#model-class">Model Class</a></strong>
                    <ul>
                        <li><a href="#">Table Names</a></li>
                        <li><a href="#">Meta Data</a></li>
                        <li><a href="#">Fields</a>
                            <ul>
                                <li><a href="#">Field Types</a></li>
                                <li><a href="#">Parameters</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#recordsets">Record Objects</a>
                    <ul>
                        <li><a href="#objects-vs-ids">Objects vs Id's (Equality)</a></li>
                    </ul>
                </li>
                <li><strong><a href="#inserting-data">Inserting Data</a></strong>
                    <ul>
                        <li><a href="#">Primitive Data</a></li>
                        <li><a href="#">Relationships</a></li>
                    </ul>
                </li>
                <li><strong><a href="#getting-data">Getting Data</a></strong>
                    <ul>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Single Records</a></li>
                    </ul>
                </li>
                <li><strong><a href="#updating-data">Updating Data</a></strong></li>
                <li><strong><a href="#deleting-data">Deleting Data</a></strong>
                    <ul>
                        <li><a href="#">Archived Data</a></li>
                    </ul>
                </li>
            </ul>

            {/* === */}

            <h2 id="introduction"></h2>
            <p>
                <span className="first-letter">O</span>doo has its own ORM packaged into the project. For anyone who
                is not familiar with the ancronym ORM or object relational mapper,
                it's basically a way for programmers to work with a database
                through the code.
            </p>
            <p>
                This article is going to show you basics of using the Odoo ORM.
            </p>

            <h3 id="whats-an-orm">What's an ORM?</h3>
            <p>
                To provide a little bit of context, before the idea of ORM's
                came into popularity programmers often needed to understand much
                more about the databases that they worked with. If they worked
                with a SQL based database, they needed to know everything about
                querying data properly, structuring tables and columns, properly
                handling concurency, cursors, transaction, rollbacks, etc. It's
                a lot of information just for an application developer to know
                to build something basic.
            </p>
            <p>
                ORM's abstract that information away. Instead of creating a table,
                you may create a model class. Instead of running a select query,
                you may just run a function. Instead of running an insert query,
                you may just modify an object.
            </p>
            <p>
                Essentially it let's programmers be programmers and let's database
                administrators be database administrators.
            </p>

            <h3 id="odoo-shell">Odoo Shell</h3>
            <p>
                For the examples and testing in this article, I'm going to
                use the Odoo Shell. I would recommend checking
                out <a href="/blog/2019-02-16_run-an-odoo-repl" target="_blank">this article</a> if you don't have experience with it.
            </p>

            {/* === */}

            <h2 id="model-class">Model Class</h2>
            <p>abcd 1234...</p>

            {/* === */}

            <h2 id="model-class">Record Objects</h2>
            <p>abcd 1234...</p>

            <h3 id="objects-vs-ids">Objects vs Id's (Equality)</h3>
            <p>abcd 1234...</p>

            {/* === */}

            <h2 id="inserting-data">Inserting Data</h2>
            <p>abcd 1234...</p>

            {/* === */}

            <h2 id="getting-data">Getting Data</h2>
            <p>abcd 1234...</p>

            {/* === */}

            <h2 id="updating-data">Updating Data</h2>
            <p>abcd 1234...</p>

            {/* === */}

            <h2 id="deleting-data">Deleting Data</h2>
            <p>abcd 1234...</p>
        </Article>
    </Layout>
)

Page.defaultProps = {
    meta: meta
}

export default Page
