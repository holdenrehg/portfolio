import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const meta = new Meta({
    id: "2021-03-02_intro-to-owl-part-1",
    title: "Introduction To Owl in Odoo - Part 1",
    datePosted: "2021-03-02",
    description: "intro to owl",
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

            <h2>What is OWL?</h2>
            <p>
                [description of the service]
            </p>

            <h3>Why did Odoo create OWL?</h3>
            <p>
                [short description, but include links back to their documentation]
            </p>

            {/* === */}

            <h2>The main features</h2>

            Personally, I see 3 main benefits to OWL vs the old way of handling
            frontend development. All of these features have been implemented in
            a more elegant way and I'm a huge fan of anything that allows me to
            write simpler, more elegant, more readable code.

            <h3>Lifecycled components</h3>
            <p>
                [description]
            </p>

            <h3>Reactive binding with virtual dom</h3>
            <p>
                Allows reactive binding for both data and events.
            </p>
            <p>
                [description]
            </p>

            <h3>Asyncronous</h3>
            <p>
                [description]
            </p>

            {/* === */}

            <h2>Getting started</h2>
            <blockquote className="warning">
                This guide assumes some basic knowledge of Odoo development.
                If you have never used Odoo before, you may need to check out
                some of our other articles, get a local development environment
                setup, and get a feel for the system.
            </blockquote>
            <p>
                OWL is packaged into Odoo version 14 and greater. In this article
                I want to focus on using OWL within Odoo specifically, not as
                a standalone frontend framework.
            </p>
            <p>
                As always with Odoo development, we gotta have a new module to
                work with. Let's setup the simplest possible one we can to try
                out some OWL features.
            </p>
            <code className="console">
                <pre>{`
intro_to_owl_part_1/
├── __manifest__.py
└── static
    └── src
        └── js
            └── components
                `}</pre>
            </code>
            <code className="python">
                <pre>{`
# __manifest__.py

{
    "name": "Introduction to OWL in Odoo - Part 1",
    "summary": "Provides an example module for OWL.",
    "description": "Provides an example module for OWL.",
    "author": "Oocademy",
    "website": "http://www.oocademy.com",
    "category": "Tutorials",
    "version": "14.0.0.1",
    "depends": ["base"],
    "demo": [],
    "data": [],
}
                `}</pre>
            </code>

            {/* === */}

            <h2>Adding our first component</h2>
            <p>
                OWL works by defining <code>Component</code> classes which essentially
                work like web components. Each components starts with a template, data
                binded to that template, and any subcomponents.
            </p>
            <p>
                In this article, we want to create a component that displays underneath
                the customer on a sales order which shows a couple of details about
                their order history.
            </p>
            <p>
                To add a new component to a module it's 2 steps:
            </p>

            <h3>Step 1: Create and register the <code>js</code> class</h3>
            <p>
                Our new component file is going to be called <code>PartnerOrderSummary.js</code>
                and we are going to add it to <code>static/src/js/components/</code>.
            </p>
            <code className="javascript">
                <pre>{`
odoo.define("intro_to_owl_part_1.PartnerOrderSummary", function (require) {
    const { Component } = owl;

    class PartnerOrderSummary extends Component {
        //
    };

    Object.assign(PartnerOrderSummary, {
        template: "intro_to_owl_part_1.PartnerOrderSummary"
    });
});
                `}</pre>
            </code>
            <p>
                All javascript files in Odoo need to be registered from extending the
                assets template and adding a <code>script</code> tag. In this case, let's
                create a file called <code>assets.xml</code> in the root of the module that
                looks like:
            </p>
            <code className="xml">
                <pre>{`
<?xml version="1.0" encoding="utf-8"?>
<odoo>
    <template id="assets_backend_inherit" inherit_id="web.assets_backend">
        <xpath expr="script[last()]" position="after">
            <script src="/intro_to_owl_part_1/static/src/js/components/PartnerOrderSummary.js"/>
        </xpath>
    </template>
</odoo>
                `}</pre>
            </code>
            <p>
                Then that <code>assets.xml</code> needs to be added to our module
                <code>__manifest__.py</code>.
            </p>
            <code className="python">
                <pre>{`
{
    ...

    "data": [
        "assets.xml"
    ]
}
                `}</pre>
            </code>

            <h3>Step 2: Create the template <code>xml</code> for the component.</h3>
            <p>
                Now let's create our template XML. I glazed over some of the details of
                the js class (which I promise I'll loop back around to), but I'm sure
                you noticed the <code>template</code> property added to our class.
            </p>
            <code className="javascript">
                <pre>{`
class PartnerOrderSummary extends Component {
    //
};

Object.assign(PartnerOrderSummary, {
    template: "intro_to_owl_part_1.PartnerOrderSummary"
});
                `}</pre>
            </code>
            <p>
                The <code>template</code> references an XML template name. I like to organize
                my components within the same folder, so let's add a file add
                <code>static/src/js/components/PartnerOrderSummary.xml</code> right next to
                our js class with a basic template:
            </p>
            <code className="xml">
                <pre>{`
<?xml version="1.0" encoding="UTF-8"?>
<templates xml:space="preserve">
    <t t-name="intro_to_owl_part_1.PartnerOrderSummary" owl="1">
        <div>My cool new widget</div>
    </t>
</templates>
                `}</pre>
            </code>
            <p>
                And similarly to our js class, now we need to register it with the module. For these
                templates, we just add it to our <code>qweb</code> config in our <code>__manifest__.py</code>
                file.
            </p>
            <code className="python">
                <pre>{`
{
    ...

    "qweb": [
        "static/src/js/components/PartnerOrderSummary.xml"
    ]
}
                `}</pre>
            </code>

            {/* === */}


            <h2>Display our component on the sales order</h2>
            <p>
                So we've got a little module here with a component displays some
                text for now. But we need that to actually show up on a sales order
                view form, right?
            </p>

            <h3>Update the dependencies</h3>
            <p>
                First off we need to update the module dependencies:
            </p>
            <code className="python">
                <pre>{`
{
    ..

    "depends": ["base", "sale", "sale_management"],
}
                `}</pre>
            </code>

            <h3>Override form renderer to mount component to class</h3>
            <p>
                After updating your module so that Sales is installed, now let's
                add that component to the sales order form.
            </p>
            <p>
                There are multiple ways to go about this. I'm going to show you the way that
                I think is simplest, by mounting the component to the view when the page
                loads.
            </p>
            <p>
                We are going to update our <code>js</code> file to extend the core Odoo
                client action to look for a certain html class and to automatically mount
                our component to that element.
            </p>
            <code className="javascript">
                <pre>{`
odoo.define("intro_to_owl_part_1.PartnerOrderSummary", function (require) {

    const FormRenderer = require("web.FormRenderer");
    const { Component } = owl;
    const { ComponentWrapper } = require("web.OwlCompatibility");


    /**
     * OWL component responsible for displaying a partner order summary widget
     * which will show order history details about a specific customer.
     */
    class PartnerOrderSummary extends Component {
        //
    };

    /**
     * Register properties to our widget.
     */
    Object.assign(PartnerOrderSummary, {
        template: "intro_to_owl_part_1.PartnerOrderSummary"
    });

    /**
     * Override the form renderer so that we can mount the component on render
     * to any div with the class o_partner_order_summary.
     */
    FormRenderer.include({
        async _render() {
            await this._super(...arguments);

            for(const element of this.el.querySelectorAll(".o_partner_order_summary")) {
                (new ComponentWrapper(this, PartnerOrderSummary))
                    .mount(element)
            }
        }
    });
});

                `}</pre>
            </code>
            <p>
                There's a lot to take in here, especially if you've not done much frontend
                work in Odoo. I'm not going to dig too deeply into how these things work
                behind the scenes for this article. The main takeaways here is that there
                is a way to mount an OWL component to an element with a certain class. In
                our case here, it's <code>.o_partner_order_summary</code>.
            </p>
            <p>
                We have the ability to mount a component to a div pretty simply via:
            </p>
            <code className="javascript">
                <pre>{`
(new ComponentWrapper(this, PartnerOrderSummary))
    .mount(element)
                `}</pre>
            </code>
            <p>
                There's multiple places where we could hook into core Odoo classes, but
                since we are adding the component to the sales order form view, I found
                it simplest to override the <code>web.FormRenderer</code> class.
            </p>

            <h3>Adding a div to the sales order form</h3>
            <p>
                Let's override the sales order view and add our div now. I'm doing that
                by creating a <code>views.xml</code> in the root of our module:
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
            <field name="payment_term_id" position="after">
                <div class="o_partner_order_summary" colspan="2"/>
            </field>
        </field>
    </record>
</odoo>
                `}</pre>
            </code>
            <p>
                And as usual with XML files, update our <code>__manifest__.py</code>
            </p>
            <code className="python">
                <pre>{`
{
    ...

    "data": [
        ...

        "views.xml",
    ],
}
                `}</pre>
            </code>

            {/* === */}

            <h2>Expanding our widget</h2>
            <p>
                At this point, you should see your cool new module! Even though
                it's not too cool quite yet. But the hard part is done.
            </p>
            <img src="/blog/intro-to-owl-part-1/simple-text-widget.png"/>

            <h3>Designing our widget</h3>
            <p>
                Let's get our widget looking better. We can mock out the frontend
                before linking up the data.
            </p>
            <code className="xml">
                <pre>{`
<?xml version="1.0" encoding="UTF-8"?>
<templates xml:space="preserve">
    <t t-name="intro_to_owl_part_1.PartnerOrderSummary" owl="1">
        <div class="center" style="width: 100%; text-align: center; border: 1px solid #cecece; padding: 2rem 20%; margin: 12px 0;">
            <img
                src="#"
                width="75px"
                height="75px"
                style="background-color: #ccc; border-radius: 50%; margin-bottom: 10px;"/>

            <!-- Customer name -->
            <p style="font-size: 16px; color: #4d4b4b;"><strong>Gemini Furniture</strong></p>

            <!-- Address -->
            <p style="font-size: 12px; color: #8c8787;">
                <i class="fa fa-map-marker" style="padding-right: 4px;"/>
                <span>Fairfield</span>
            </p>

            <!-- Grid of previous order stats -->
            <div class="row" style="padding-top: 20px;">
                <div class="col-6" style="border-right: 1px solid #ccc;">
                    <p style="font-size: 20px;"><strong>35</strong></p>
                    <p style="font-size: 12px; color: #8c8787;">Orders</p>
                </div>
                <div class="col-6">
                    <p style="font-size: 20px;"><strong>$97,183.50</strong></p>
                    <p style="font-size: 12px; color: #8c8787;">Total Sales</p>
                </div>
            </div>
        </div>
    </t>
</templates>
                `}</pre>
            </code>
            <p>
                We are obviously using dummy data at this point, but this is how our
                widget should end up looking after a reload with our updated XML. There
                is nothing fancy going on with these current changes since it's pretty
                much just HTML and inline styles.
            </p>
            <img src="/blog/intro-to-owl-part-1/widget-mock-no-data.png"/>

            <h3>Linking up the data</h3>
            <p>
                The final step at this point is to actual link up our partner data. OWL tracks all of the
                data on a component through a <code>state</code> object. So we'll start by adding a
                <code>partner</code> property and allowing a way to set the data on construction.
            </p>
            <code className="javascript">
                <pre>{`
const { useState } = owl.hooks;

class PartnerOrderSummary extends Component {
    partner = useState({});

    constructor(self) {
        super();
        this.partner = partner;
    }
}
                `}</pre>
            </code>
            <p>
                The component object actually gets initialized when the form view renders. At that point, we can grab
                the partner information off of the sales order and pass it into our constructor:
            </p>
            <code className="javascript">
                <pre>{`
FormRenderer.include({
    async _renderView() {
        await this._super(...arguments);

        for(const element of this.el.querySelectorAll(".o_partner_order_summary")) {
            this._rpc({
                model: "res.partner",
                method: "read",
                args: [[this.state.data.partner_id.res_id]]
            }).then(data => {
                (new ComponentWrapper(
                    this,
                    PartnerOrderSummary,
                    useState(data[0])
                )).mount(element);
            });

        }
    }
});
                `}</pre>
            </code>
            <p>
                Let's break down what's going on here. First we are looking through the page
                for elements that have out class <code>o_partner_order_summary</code>. Then we
                make an rpc call to the backend to grab all of the data from the partner linked to
                the current order. Once that data returns, then we are mounting our component.
            </p>
            <p>
                At this point, we have all of the data from the partner record available to us
                via the <code>partner</code> variable in the XML view.
            </p>
            <code className="xml">
                <pre>{`
<?xml version="1.0" encoding="UTF-8"?>
<templates xml:space="preserve">
    <t t-name="intro_to_owl_part_1.PartnerOrderSummary" owl="1">
        <div class="center" style="width: 100%; text-align: center; border: 1px solid #cecece; padding: 2rem 20%; margin: 12px 0;">
            <img
                t-attf-src="data:image/jpg;base64,{{partner.image_256}}"
                width="75px"
                height="75px"
                style="background-color: #ccc; border-radius: 50%; margin-bottom: 10px;"/>

            <!-- Customer name -->
            <p style="font-size: 16px; color: #4d4b4b;"><strong t-esc="partner.name"/></p>

            <!-- Address -->
            <p style="font-size: 12px; color: #8c8787;">
                <i class="fa fa-map-marker" style="padding-right: 4px;"/>
                <span t-esc="partner.city"/>
                <span t-esc="partner.zip" style="margin-left: 5px;"/>
            </p>

            <!-- Grid of previous order stats -->
            <div class="row" style="padding-top: 20px;">
                <div class="col-6" style="border-right: 1px solid #ccc;">
                    <p style="font-size: 20px;">
                        <strong t-esc="partner.sale_order_count"/>
                    </p>
                    <p style="font-size: 12px; color: #8c8787;">Orders</p>
                </div>
                <div class="col-6">
                    <p style="font-size: 20px;">
                        <strong t-esc="partner.sale_order_revenue" t-options='{"widget": "monetary"}'/>
                    </p>
                    <p style="font-size: 12px; color: #8c8787;">Total Sales</p>
                </div>
            </div>
        </div>
    </t>
</templates>
                `}</pre>
            </code>
            <p>
                Our new view goes through and replaces all of our dummy data with <code>t-esc</code>
                statements to pull whatever data we need off of the partner.
            </p>
            <p>
                For example, we can display the image like:
            </p>
            <code className="xml">
                <pre>{`
<img
    t-attf-src="data:image/jpg;base64,{{partner.image_256}}"
    width="75px"
    height="75px"
    style="background-color: #ccc; border-radius: 50%; margin-bottom: 10px;"/>
                `}</pre>
            </code>
            <p>
                Or we can display the ciy and zip of the partner like this:
            </p>
            <code className="xml">
                <pre>{`
<p style="font-size: 12px; color: #8c8787;">
    <i class="fa fa-map-marker" style="padding-right: 4px;"/>
    <span t-esc="partner.city"/>
    <span t-esc="partner.zip" style="margin-left: 5px;"/>
</p>
                `}</pre>
            </code>
            <img src="/blog/intro-to-owl-part-1/complete-widget-1.png"/>
            <img src="/blog/intro-to-owl-part-1/complete-widget-2.png"/>

            {/* === */}

            <h2>In conclusion</h2>
            <p>
                I've tried to walk you through all of absolute basic of getting an OWL component
                set up in Odoo, registering all of the files and classes you need, create a simple
                component, linking that component into an existing Odoo view, storing component data,
                and rendering component data.
            </p>
            <p>
                There's much more to OWL and frontend development in Odoo that we plan on addressing
                in future articles. Feel free to reach out and let us know what else you'd like to know!
            </p>
            <p>
                I hope this helps you Odoo developers out there and best of luck coding!
            </p>
        </Article>
    </Layout>
)

Page.defaultProps = {
    meta: meta
}

export default Page
