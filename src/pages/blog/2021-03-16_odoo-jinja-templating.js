import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"

const meta = new Meta({
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

const Page = props => (
    <Layout>
        <Article meta={props.meta}>
            <ul className="table-of-contents">
                <li><strong><a href="#introduction">Introduction</a></strong></li>
                <li><strong><a href="#how-to-show-content">How can I show context in the view?</a></strong>
                    <ul>
                        <li><a href="#views-without-models">Views can't live without their models</a></li>
                        <li><a href="#fields-for-everything">Fields for everything</a></li>
                    </ul>
                </li>
                <li><strong><a href="#another-way">Another way With jinja2</a></strong>
                    <ul>
                        <li><a href="#bringing-it-together">Bringing it together with the view</a></li>
                        <li><a href="#adding-the-context">Adding the context</a></li>
                    </ul>
                </li>
                <li><strong><a href="#refactor-out-a-mixin">Refactor out a mixin</a></strong></li>
                <li><strong><a href="#other-directives">What about other directives?</a></strong></li>
                <li><strong><a href="#possibilities">Possibilities</a></strong></li>
            </ul>

            <p id="introduction">
                <span className="first-letter">O</span>doo has a built in templating
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

            {/* === */}

            <h2 id="how-to-show-content">How can I show context in the view?</h2>
            <p>
                One of the common use cases that I've seen pop up for Odoo developers is being able to
                display some simple information like the context variable in the view. So let's
                take a look at a sample view for a <code>sale.order</code> object where we might
                want to do that.
            </p>
            <code className="xml">
                <pre>{`
<?xml version="1.0" encoding="utf-8"?>
<odoo>
    <record id="sale_order_form_inherit" model="ir.ui.view">
        <field name="name">sale.order.form.inherit</field>
        <field name="model">sale.order</field>
        <field name="inherit_id" ref="sale.view_order_form"/>
        <field name="arch" type="xml">
            <notebook position="inside">
                <page string="Simple Templating">
                    <group string="Current Context">
                        <!-- How can we show the current context dict here? -->
                    </group>
                </page>
            </notebook>
        </field>
    </record>
</odoo>
                `}</pre>
            </code>
            <img src="/blog/odoo-jinja-templating/notebook-tab.png"/>

            <h3 id="views-without-models">Views can't live without their models</h3>
            <p>
                Odoo views are some shallow, old, rich men who only date models.
            </p>
            <p>
                They are related directly to a data model in the system. This generally
                makes things much simpler when developing because there's magic behind the
                scenes that automatically loads all of the data and renders the view. The major
                pitfall though is that when you aren't operating within the expected use cases of
                the system, then you have to start introducing workarounds.
            </p>
            <p>
                For example, if you were working outside of Odoo and you wanted to render a view
                then you directly inject data into that view. Using pesudo-code, that might look
                something like:
            </p>
            <code className="html">
                <pre>{`
<div>
    <h1>{{{ title }}}</h1>
</div>
                `}</pre>
            </code>
            <code className="python">
                <pre>{`
template = load_html()
template.render(title="My Title")
                `}</pre>
            </code>

            <p>
                It's a little bit of work, but very clear to us what's happening. But Odoo
                automatically injects the model and fields into the view giving you access
                to that information but nothing else.
            </p>

            <h3 id="fields-for-everything">Fields for everything</h3>
            <p>
                Essentially any piece of information that you want to display on a view, which is
                not a static string written directly into the XML, must be in a field on the model.
            </p>
            <p>
                Looking back at our context example we obviously must create a new field.
            </p>
            <code className="python">
                <pre>{`
from odoo import fields, models


class Order(models.Model):
    _inherit = "sale.order"

    context = fields.Text(compute="_compute_context")

    def _compute_context(self):
        self.context = self.env.context
                `}</pre>
            </code>
            <code className="xml">
                <pre>{`
<group string="Current Context">
    <field name="context"/>
</group>
                `}</pre>
            </code>

            <p>
                And this does work. It's how we Odoo developers have operated, but it just
                feels wrong to be honest. When you start building out fairly complicated views
                then you continue to bloat your model more and more. Models in my mind are
                meant to represent some specific data structure that is stored in the system.
                It's easy to wrap my head around the fact that the system needs orders, so we
                have an <code>Order</code> model. The fields on that model should only track the
                must-have data for an order.
            </p>
            <p>
                But as more and more fields are added for view rendering, then it gets
                complicated keeping things straight. What do we actually need for order data in
                the business logic and what do we need to show on the order view? Should the order
                model really be responsible for storing or computing context?
            </p>
            <p>
                It feels like there needs to be more separation there.
            </p>

            {/* === */}

            <h2 id="another-way">Another way with <code>jinja2</code></h2>
            <p>
                <code>jinja2</code> is an open source templating engine that is actually already
                a requirement of the Odoo source. It's used within the core.
            </p>
            <p>
                I wanted to take advantage of it as a developer to pass some simple data into a
                view for rendering, which does not have anything directly to do with our model
                data structure. We are still bound to using the model class, but we can at least
                escape from using <code>fields</code>.
            </p>
            <p>
                Here's what that started to look like:
            </p>
            <code className="python">
                <pre>{`
from odoo import fields, models
from jinja2 import Environment


class Order(models.Model):
    _inherit = "sale.order"

    def fields_view_get(self, *args, **kwargs):
        res = super().fields_view_get(*args, **kwargs)

        # Create our templating environment, using {{{ }}} as our templating tags to avoid conflict
        templater = Environment(
            variable_start_string="{{{",
            variable_end_string="}}}",
        )

        # Create a template object out of the current view (arch)
        template = templater.from_string(res["arch"])

        # Inject data into the view and replace our template tags with the data
        res["arch"] = template.render(
            message="Hello!"
        )

        return res
                `}</pre>
            </code>

            <p>
                Now let's break down what's going on here.
            </p>
            <p><strong>1. Overriding <code>fields_view_get</code></strong></p>
            <p>
                <code>fields_view_get</code> is the glue between the model and the view. It
                packages up all of the information that the view needs and returns a big
                <code>dict</code>. In that dictionary is a field called <code>arch</code> which
                is the xml from the view. That's what we need.
            </p>
            <code className="python">
                <pre>{`
def fields_view_get(self, *args, **kwargs):
    res = super().fields_view_get(*args, **kwargs)

    ...

    return res
                `}</pre>
            </code>

            <p><strong>2. Generate a <code>jinja2</code> environment</strong></p>
            <p>
                You can think of the <code>jinja2.Environment</code> class just like a
                configuration object. We just need to to set our open and end tags. I changed
                these to use triple brackets to avoid any conflict with core Odoo code. There
                are no occurences of triple brackets anywhere in the Odoo repository.
            </p>
            <code className="python">
                <pre>{`
templater = Environment(
    variable_start_string="{{{",
    variable_end_string="}}}",
)
                `}</pre>
            </code>

            <p><strong>3. Load up our <code>arch</code> xml</strong></p>
            <p>
                Now we can create a template from the <code>arch</code>. <code>jinja2</code> is
                a really simple to use package. You can take a string of html or xml and pass it
                into a template object.
            </p>
            <code className="python">
                <pre>{`
template = templater.from_string(res["arch"])
                `}</pre>
            </code>

            <p><strong>4. Finally render is back out</strong></p>
            <p>
                Now we have a template object, created from the form xml. We just call the
                <code>render</code> function, inject whatever data we want, and put it back
                where it was before returning.
            </p>
            <code className="python">
                <pre>{`
res["arch"] = template.render(
    message="Hello!"
)
                `}</pre>
            </code>

            <h3 id="bringing-it-together">Bringing it together with the view</h3>
            <p>
                At this point, we can use the <code>message</code> data that we injected anywhere
                in our form view.
            </p>
            <code className="xml">
                <pre>{`
<?xml version="1.0" encoding="utf-8"?>
<odoo>
    <record id="sale_order_form_inherit" model="ir.ui.view">
        <field name="name">sale.order.form.inherit</field>
        <field name="model">sale.order</field>
        <field name="inherit_id" ref="sale.view_order_form"/>
        <field name="arch" type="xml">
            <notebook position="inside">
                <page string="Simple Templating">
                    <group string="Other Info">
                        <div colspan="2">
                            <strong>Message: </strong><span>{{{ message }}}</strong>
                        </div>
                    </group>
                </page>
            </notebook>
        </field>
    </record>
</odoo>
                `}</pre>
            </code>
            <img src="/blog/odoo-jinja-templating/notebook-tab-message.png"/>

            <p>
                Pretty damn cool to see this work in a few lines of code. It lets us pass in
                any static data that we want.
            </p>

            <h3 id="adding-the-context">Adding the context</h3>
            <p>
                Back to our original use case, let's add the context. We need to update the data
                that we are injecting in and update the view. I'm just going to use the entire
                <code>env</code> object to show the flexibility you have.
            </p>
            <code className="python">
                <pre>{`
res["arch"] = template.render(
    env=self.env,
    message="Hello!",
)
                `}</pre>
            </code>
            <code className="xml">
                <pre>{`
<notebook position="inside">
    <page string="Simple Templating">
        <group string="Current Context">
            <div>{{{ env.context }}}</div>
        </group>
        <group string="Other Info">
            <div colspan="2">
                <strong>Message: </strong><span>{{{ message }}}</strong>
            </div>
        </group>
    </page>
</notebook>
                `}</pre>
            </code>
            <img src="/blog/odoo-jinja-templating/notebook-tab-with-context.png"/>

            {/* === */}

            <h2 id="refactor-out-a-mixin">Refactor out a mixin</h2>
            <p>
                This is a cool option for developers, but it's really not reusable in its
                current state. Am I going to override the <code>fields_view_get</code> on
                every model that needs this type of templating?
            </p>
            <p>
                Of course not.
            </p>
            <p>
                Let's make a mixin for it:
            </p>
            <code className="python">
                <pre>{`
from odoo import models
from jinja2 import Environment


class JinjaMixin(models.AbstractModel):
    """Model mixin to enable jinja templating"""
    _name = "jinja.mixin"

    templater = Environment(
        variable_start_string="{{{",
        variable_end_string="}}}",
    )

    def view_data(self):
        return {}

    def fields_view_get(self, *args, **kwargs):
        res = super().fields_view_get(*args, **kwargs)
        res["arch"] = self.templater.from_string(res["arch"]).render(**self.view_data())
        return res
                `}</pre>
            </code>
            <p>
                The mixin lets us update our model and have a single hook for injecting
                data. You can see it's following the same logic as shown above (condensed a bit
                for simplicity sake) and instead of directly passing a <code>dict</code> to our
                <code>render</code> method, we are using the <code>view_data</code> method which
                can be easily overwritten by models inheriting the mixin.
            </p>
            <p>
                So this is what our order model can look like now:
            </p>
            <code className="python">
                <pre>{`
class Order(models.Model):
    _name = "sale.order"
    _inherit = ["sale.order", "jinja.mixin"]

    def view_data(self):
        return {
            "env": self.env,
            "message": "Hello!",
        }
                `}</pre>
            </code>
            <p>
                Pretty simple, right? You can easily use it across any model now.
            </p>

            {/* === */}

            <h2 id="other-directives">What about other directives?</h2>
            <p>
                <code>jinja2</code> has <a href="https://jinja.palletsprojects.com/en/2.11.x/" rel="noreferrer" target="_blank">a lot of features</a> built
                into it. Above we are doing the simplest possible thing of rendering a variable, but of course you have
                full access to the features of the package. For example it's possible to iterate over objects:
            </p>
            <code className="python">
                <pre>{`
class Order(models.Model):
    _name = "sale.order"
    _inherit = ["sale.order", "jinja.mixin"]

    def view_data(self):
        return {
            "items": [1, 2, 3],
        }
                `}</pre>
            </code>
            <code className="xml">
                <pre>{`
<notebook position="inside">
    <page string="Simple Templating">
        <group string="Other Info">
            <ul colspan="2">
                {% for item in items %}
                <li>{{{ item  }}}</li>
                {% endfor  %}
            </ul>
        </group>
    </page>
</notebook>
                `}</pre>
            </code>
            <p>
                Go through the documentation and see what the possibilities are.
            </p>

            {/* === */}

            <h2 id="possibilities">Possibilities</h2>
            <p>
                This might not be the perfect solution, but I really think it's a viable
                one for developers who just need to display simple data. We do not have the
                option to use qweb directives in the most common types of views like form views and
                tree views. The work it would take to extend the core system to use qweb for
                those would not be worth it. It's a big rewrite project.
            </p>
            <p>
                But this is a nice little workaround. A single mixin that's about 20 lines of code opens
                up a simple hook called <code>view_data</code> that injects whatever you want
                to render via <code>jinja2</code>.
            </p>
            <p>
                I'm going to start playing around with this idea more and see about injecting
                other model data in, handling view updates, etc. and see where it takes me. Let
                me know if you try it out or have ideas about it. I'd love to hear them.
            </p>
            <p>
                Best of luck coding on it.
            </p>
        </Article>
    </Layout>
)

Page.defaultProps = {
    meta: meta
}

export default Page
