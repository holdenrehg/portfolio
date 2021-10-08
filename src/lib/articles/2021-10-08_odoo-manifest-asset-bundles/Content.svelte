<p>
    In the last few weeks I have migrated over 30 modules from version 14 to version 15 of Odoo. This seems to
    be part of our painstaking yearly ritual as Odoo developers to attempt to keep our projects up to date
    with the latest annual release.
</p>
<p>
    As some people may know, I believe there are better options as a community than to do annual,
    non-backwards compatible releases without automated tooling provided as an upgrade path. I&#39;ve talked
    about that a bit in my <a
        href="https://www.holdenrehg.com/blog/2021-09-09_how-i-manage-local-development-odoo-projects"
        >managing hundreds of local development projects article</a
    >.
</p>
<p>
    But this year specifically I have less to complain about at least. Out of 30+ modules migrated, across a
    big spectrum of features, there were very few changes between 14 and 15. I&#39;m really hoping that other
    developers have the same experience as they go through this process.
</p>
<h3>The two biggest changes I&#39;ve seen</h3>
<p>I ran into 2 big changes that affect us developers day to day.</p>
<h4>1. OWL</h4>
<p>
    This is a big change. For anyone who hasn&#39;t heard, Odoo built a new frontend JavaScript framework
    called <a href="https://github.com/odoo/owl">OWL</a>. Luckily, for anyone not interested in migrated all
    of their old JS code, it appears the old frontend system has not been entirely scrapped (yet). All of the
    JavaScript that I migrated still worked properly. Over time, it&#39;s going to make a lot more sense to
    use OWL though.
</p>
<h4>2. Asset bundling</h4>
<p>The second is asset bundling. This is what I wanted to talk about with this article.</p>
<p>
    Odoo creates &quot;asset bundles&quot; that get loaded into the frontend of the application. Each bundle
    contains different sets of assets. The assets are either JavaScript or CSS. As developers, we need a way
    to hook into this bundles and say &quot;put my custom JS or CSS code into a bundle&quot;.
</p>
<h5><strong>Useful bundles</strong></h5>
<p>There are a set of common bundles. The majority of custom code written will fit into these bundles:</p>
<ul>
    <li><code>web.assets_common</code>: Loaded everywhere (frontend, backend, point of sale).</li>
    <li>
        <code>web.assets_backend</code>: Only loaded into the &quot;backend&quot; of the application. By
        backend, I mean where you login as a user as <code>/web/login</code>. This bundle is excluded from the
        frontend website.
    </li>
    <li>
        <code>web.assets_frontend</code>: The opposite of <code>web.assets_backend</code>, only loaded into
        the frontend website.
    </li>
    <li><code>web.assets_qweb</code>: Loads QWeb XML files.</li>
    <li><code>web.assets_wysiwyg</code>: Loads assets into the backend wysiwyg text editor.</li>
    <li><code>website.assets_editor</code>: Loads assets into the frontend website edit mode.</li>
    <li><code>web.assets_tests</code>: Loads assets for frontend testing and tours.</li>
    <li><code>web._assets_primary_variables</code>: Used to load custom scss variables for styles.</li>
</ul>
<p>
    There are of course other bundles spread out throughout Odoo core. Some of used as helpers or aliases,
    while others are specific to certain modules (non-<code>web</code> modules). I wouldn&#39;t worry about these
    too much unless you are working on a specific or more obscure use case.
</p>
<h5><strong>The old way</strong></h5>
<p>
    Prior to version 15, when we wanted to add any custom JS or CSS to our modules, we would add it by
    inheriting a QWeb template:
</p>
<code class="xml">
    <pre>{`
# my_module/assets.xml
<odoo>
    <${'template'} id="assets_backend" inherit_id="web.assets_backend">
        <xpath expr="." position="inside">
            <script .../>
            <link .../>
        </xpath>
    </template>
</odoo>
    `}</pre>
</code>
<p>
    Typically this means having some sort of file called <code>assets.xml</code> in the module and then adding
    a reference to the <code>__manifest__.py</code>:
</p>
<code class="python">
    <pre>{`
# my_module/__manifest__.py
{
    ...

    "data": [
        "assets.xml"
    ]
}
    `}</pre>
</code>
<h5><strong>The new way</strong></h5>
<p>
    In version 15, there is no more template override. You do not need to create an <code>assets.xml</code>
    file, with a <code>&lt;template/&gt;</code> tag to inherit.
</p>
<p>
    Now, it&#39;s all done in the <code>__manifest__.py</code> files. For example, if we create a JS file that
    we want to load into our module then we can add it to a bundle by defining an <code>assets</code> key in
    our <code>__manifest__.py</code> dictionary. Within <code>assets</code> we will add the name of the bundle
    that we want to load into, and then a list of file paths starting with
    <code>{'{module_name}'}/path/to/script.js</code>:
</p>

<code class="javascript">
    <pre>{`
/** @odoo-module **/

export function hello() {
    console.log("hello, from our new script");
}
    `}</pre>
</code>
<code class="python">
    <pre>{`
# my_module/__manifest__.py
{
    ...

    "assets": {
        "web.assets_backend": [
            "my_module/static/src/js/my_script.js"
        ]
    }
}
    `}</pre>
</code>

<p>It&#39;s one less step than the old way of doing things.</p>
<h5><strong>A note on flexibility</strong></h5>
<p>
    This new system is slightly less flexible at first glance. Before, we could control exact where we were
    inserting assets based on an <code>xpath</code>. Now, by default it&#39;s always going to append the
    assets to the very end of the bundle.
</p>
<p>
    Odoo introduced some ways around that. You can include &quot;operations&quot; when loading in assets to
    control where to place assets inside of the bundle.
</p>
<p><strong>append</strong></p>
<p>Appends to the end of the bundle:</p>
<code class="python">
    <pre>{`
{
    "assets": {
        "web.assets_backend": [
            "my_module/path/to/file"
        ]
    }
}
    `}</pre>
</code>
<p><strong>prepend</strong></p>
<p>Prepends to the beginning of the bundle:</p>
<code class="python">
    <pre>{`
{
    "assets": {
        "web.assets_backend": [
            ("prepend", "my_module/path/to/file")
        ]
    }
}
    `}</pre>
</code>
<p><strong>before</strong></p>
<p>Place your file before another file in the bundle:</p>
<code class="python">
    <pre>{`
{
    "assets": {
        "web.assets_backend": [
            (
                 "before",
                 # looks for this asset in
                 # the parent bundle...
                 "web/path/to/target",
                 # and places this asset before it.
                 "my_module/path/to/file",
            )
        ]
    }
}
    `}</pre>
</code>
<p><strong>after</strong></p>
<p>Place your file after another file in the bundle:</p>
<code class="python">
    <pre>{`
{
    "assets": {
        "web.assets_backend": [
            (
                 "after",
                 # looks for this asset in
                 # the parent bundle...
                 "web/path/to/target",
                 # and places this asset after it.
                 "my_module/path/to/file",
            )
        ]
    }
}
    `}</pre>
</code>
<p><strong>include,remove,replace</strong></p>
<p>
    There are more operation options that a little less common day to day when writing custom modules. The <a
        href="https://www.odoo.com/documentation/15.0/developer/reference/javascript/javascript_reference.html?highlight=asset%20bundle#"
        >official documentation</a
    > has more, detailed information about these if you need them. I&#39;d recommend reading through it.
</p>
<h3>Final thoughts</h3>
<p>
    To be honest, I&#39;m conflicted on this update. In general I see why they made the decision. It removed
    an extra step for developers.
</p>
<p>
    At the same time, it feels like another &quot;system&quot; that we need to understand. There&#39;s
    implicit &quot;magic&quot; happening in the manifest files now with this <code>assets</code> options that
    isn&#39;t entirely obvious to new developers. As Odoo developers, we have to learn QWeb no matter what. So
    before, we learned QWeb and then it was clear what was happening when inheriting the
    <code>web.assets_backend</code>
    template. We inherited it, wrote an <code>xpath</code> which we knew looked to the parent template,
    inserted some line of code for <code>script</code> or <code>link</code> into the parent template, and then
    we knew that it funneled it&#39;s way into the <code>&lt;head/&gt;</code> of the final HTML as some point.
</p>
<p>
    Now there is just one additional layer to understand. One additional conceptual barrier to understanding
    how the underlying system works. Personally for me, and for other developers who have spent a lot of time
    with Odoo this honestly an improvement. From the perspective of a brand new developer, I think it&#39;s
    one more thing that needs to be understood in an already large, complex system.
</p>
