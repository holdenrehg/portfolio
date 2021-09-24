<p>
    <span class="first-letter">I</span>f you have ever manually moved a filestore from one site to another, or
    migrated a database without the filestore, then you’ve probably had to deal with failing or missing
    assets.
</p>
<p>
    It’s not obvious how assets are stored and served within the Odoo system. There is no manual compilation
    process like you would expect coming from frontend utilities like <code>npm</code> ,
    <code>webpack</code>
    , or even a simpler <code>sass --watch</code> process.
</p>
<p>
    As developers, when we are writing stylesheets or javascript we just reload the page and everything has
    been minified and concatenated into these large asset bundles. Automagically. <span
        role="img"
        aria-label="">🎆</span
    >
</p>
<p>
    I’m going to try to reveal a little bit of the magic going on behind the scenes and some tricks for
    regenerating assets bundles.
</p>

<h2>Viewing the bundles</h2>
<p>
    Open up developer tools on any Odoo instance. In the <code>&lt;head/&gt;</code> you won’t see a ton of
    <code>link</code>
    or <code>script</code> tags from all of the different modules (assuming you are not in developer mode). You
    will just see a few compiled files.
</p>
<figure>
    <img
        src="/images/articles/odoo-images-and-attachments-explain-regenerate-assets/bundle-devtools.png"
        alt=""
    />
</figure>
<p>They are broken out into a few categories:</p>
<ul class="postList">
    <li><code>web.assets_common</code></li>
    <li><code>web.assets_backend</code></li>
    <li><code>web_editor.summernote</code></li>
    <li><code>web_editor.assets_editor</code></li>
</ul>
<p>
    And when you open up any of these files, they are an aggregated set of assets across multiple modules.
    They aren’t completely abstracted though. You can still see paths to where the assets came from.
</p>
<p>
    This is how all of the assets are served up to Odoo when you are accessing the site as a normal,
    non-developer mode user. We’ll get into why these are like this, but as a developer, you should always
    expect the assets to be compiled into these large, minified files by default.
</p>
<figure>
    <img
        src="/images/articles/odoo-images-and-attachments-explain-regenerate-assets/bundle-devtools-css.png"
        alt=""
    />
</figure>

<h2>Why are assets bundled</h2>
<p>
    I wasn’t in the room when the creators of Odoo decided to do this, but it’s most likely for performance
    and convenience.
</p>

<h3>Performance</h3>
<p>
    Loading in hundreds and hundreds of assets files isn’t smart. Odoo isn’t a small application, so they
    concatenate everything together server side so that the client only has to load a few files. This makes
    things faster obviously. Fewer files and less content going over the network.
</p>

<h3>Convenience</h3>
<p>
    There is a certain convenience about creating your module, defining your assets in xml, writing your css
    or js, reloading the page, and not having to worry about the bundling process at all. No file watchers, no
    extra commands to run.
</p>
<p>
    I don’t completely agree with this approach because there’s too much “magic” and it’s not explicit to the
    developer what’s going on. If something is implicit then it needs to work 100% of the time. In the case of
    asset bundles, there are still scenarios where developers have to manually work with them (the reason I’m
    writing this article).
</p>
<p>
    But I do understand the benefits to this approach, and as a developer as long as you are slightly aware of
    the inner working, then you’ll be able to handle any scenario.
</p>

<h2>Revealing a little bit more</h2>
<p>
    Even though we open up dev tools and see all of those assets compiled, there are built-in utilities in
    Odoo for getting around that immediately.
</p>
<p>
    This is where the difference between Developer Mode and Developer Mode with Assets comes in. I’m sure many
    users and even some developers have wondered why both of these modes exist.
</p>
<p>
    Developer Mode leave the assets as is. They continue to perform their default process of concatenation and
    minification of all assets.
</p>
<p>
    But we’re going to focus on Developer Tools with Assets. Let’s go ahead and enable is so that we can see
    exactly how it affects the asset bundling process. You can enable it one of two ways.:
</p>
<ol>
    <li>Go to Settings and select “Activate developer mode (with assets)”</li>
    <li>Or add <code>debug=assets</code> to your url parameters.</li>
</ol>
<p>Now check out dev tools again:</p>
<figure>
    <img
        src="/images/articles/odoo-images-and-attachments-explain-regenerate-assets/bundle-devtools-2.png"
        alt=""
    />
</figure>
<figure>
    <img
        src="/images/articles/odoo-images-and-attachments-explain-regenerate-assets/bundle-devtools-css-2.png"
        alt=""
    />
</figure>
<p>
    Nothing has been combined into a bundle. Frontend code has not been minified. We are actually now loading
    in every asset file manually. This obviously hurts performance but is very helpful as a developer. If we
    need to search css or js, find the original source files from core, extend core frontend code, etc. then
    we should be working with assets on.
</p>

<h2>Digging into core</h2>
<p>
    Most developers probably understood what I explained above before they read this article. They know that
    the assets get combined into large asset files like <code>web.assets_backend</code> from an xml template,
    which they can inherit, stick their own <code>&lt;link/&gt;</code> or
    <code>&lt;script/&gt;</code> tag in, and then their code gets included on the page.
</p>
<p>
    But I would suspect most developers don’t understand the full process behind the scenes. If you start
    digging into core a bit, you can see how these are actually combined into bundles.
</p>

<h3>Attachments</h3>
<p>
    <code>ir.attachment</code> becomes important since all of these bundles that you see on the frontend are stored
    as attachment records.
</p>
<p>Looking at the database, we can see the following records:</p>
<code class="sql">
    <pre>{`
odoo=# select id,name from ir_attachment where name like '/web/content/%%assets_backend%.css%';
id  |                       name
-----+---------------------------------------------------
749 | /web/content/749-b02200e/web.assets_backend.0.css
750 | /web/content/750-b02200e/web.assets_backend.1.css
(2 rows)
odoo=# select id,name from ir_attachment where name like '/web/content/%';
id  |                          name
-----+---------------------------------------------------------
753 | /web/content/753-b02200e/web.assets_backend.js
754 | /web/content/754-60aed99/web_editor.assets_editor.js
681 | /web/content/681-875e871/web.assets_frontend.0.css
683 | /web/content/683-875e871/web.assets_frontend.js
748 | /web/content/748-78450bf/web.assets_common.0.css
749 | /web/content/749-b02200e/web.assets_backend.0.css
750 | /web/content/750-b02200e/web.assets_backend.1.css
751 | /web/content/751-60aed99/web_editor.assets_editor.0.css
752 | /web/content/752-78450bf/web.assets_common.js
351 | /web/content/351-92b02fe/web_editor.summernote.0.css
355 | /web/content/355-92b02fe/web_editor.summernote.js
(11 rows)
        `}</pre>
</code>
<p>
    Looks familiar. We have all of the same files that we see in dev tools when loading up a page. All of
    these bundles start with <code>/web/content</code> which makes it simple to search for.
</p>
<p>We can even see the exact paths to these files in our filestore.</p>
<p>
    So we know that when the client makes the request to the frontend, Odoo is looking at those attachment
    records, finding the file based on a path in the <code>ir.attachment</code> record, and then serving that file
    to the frontend.
</p>
<code class="sql">
    <pre>{`
datas_fname               |                 store_fname
--------------------------+-----------------------------------------
web.assets_backend.0.css  | 13/1373c2eeb8edda69ac37a7ecfa5ba4a908fb94ba
web.assets_backend.1.css  | 97/9733c7a9a67906f8ded8d8607155351d8d2881d1
(2 rows)
        `}</pre>
</code>
<figure>
    <img
        src="/images/articles/odoo-images-and-attachments-explain-regenerate-assets/shell-filestore-head.png"
        alt=""
    />
</figure>

<h3>Asset creation and templates</h3>
<p>
    So we know how assets are loaded, via <code>ir.attachment</code> but how do they actually get created? Like
    I said earlier, automagically.
</p>
<p>These are automatically generated, lazily, on page load.</p>
<code class="xml">
    <pre>{`
<template id="web.webclient_bootstrap">
    <t t-call="web.layout">
        <t t-set="head_web">
            <t t-call-assets="web.assets_common" t-js="false"/>
            <t t-call-assets="web.assets_backend" t-js="false"/>
        </t>

        ...
    </t>
</template>
        `}</pre>
</code>
<p>
    If you take a look at the <code>web.webclient_bootstrap</code> template, you will see those bundles being
    loaded via the <code>t-call-assets</code> directive. This directive is the main function that looks at the
    assets and auto creates them.
</p>
<code class="python">
    <pre>{`
from odoo import models
from odoo.addons.base.models.qweb import QWeb
from odoo.addons.base.models.assetsbundle import AssetsBundle


class IrQWeb(models.AbstractModel, QWeb):
    def _compile_directive_call_assets(self, el, options):
        """
        This special 't-call' tag can be used in order to aggregate/minify
        javascript and css assets.

        This function makes a call to '_get_asset_nodes'.
        """
        ...

    def _get_asset_nodes(
      self,
      xmlid,
      options,
      css=True,
      js=True,
      debug=False,
      async_load=False,
      values=None
    ):
        """
        The purpose of this function is to aggregate all of the assets together
        before generating a bundle. This called 'get_asset_bundle' to actually
        generate the asset bundle.
        """
        ...

    def get_asset_bundle(self, xmlid, files, remains=None, env=None):
        return AssetsBundle(xmlid, files, remains=remains, env=env)
        `}</pre>
</code>
<p>
    The <code>IrQweb</code> class is the one responsive for defining the
    <code>_compile_directive_call_assets</code>
    method. This method is linked to the xml <code>t-call-assets</code> directive. Check out the method
    yourself in core, because it does a lot but in terms of asset generation, the most important part of the
    method is that it calls <code>_get_asset_nodes</code> which then calls
    <code>get_asset_bundle</code> .
</p>
<p>
    You can see that <code>get_asset_bundle</code> references the primary class
    <code>AssetsBundle</code> which is in charge of creating, updating, destroying, and generally managing the
    asset bundles that we’ve been looking at.
</p>
<p>
    <code>AssetsBundle</code> is another class that you should take a look at yourself to see all of the
    different functionality provided. But the main function that we are going to look at is
    <code>save_attachment</code> .
</p>
<code class="python">
    <pre>{`
class AssetsBundle(object):
    def save_attachment(self, type, content):
        assert type in ('js', 'css')
        ira = self.env['ir.attachment']

        # Set user direction in name to store two bundles
        # 1 for ltr and 1 for rtl, this will help during cleaning of assets bundle
        # and allow to only clear the current direction bundle
        # (this applies to css bundles only)
        fname = '%s%s.%s' % (self.name, '' if inc is None else '.%s' % inc)
        mimetype = 'application/javascript' if type == 'js' else 'text/css'
        values = {
            'name': "/web/content/%s" % type,
            'datas_fname': fname,
            'mimetype': mimetype,
            'res_model': 'ir.ui.view',
            'res_id': False,
            'type': 'binary',
            'public': True,
            'datas': base64.b64encode(content.encode('utf8')),
        }
        attachment = ira.sudo().create(values)

        url = self.get_asset_url(
            id=attachment.id,
            unique=self.version,
            extra='%s' % ('rtl/' if type == 'css' and self.user_direction == 'rtl' else ''),
            name=fname,
            page='',
            type='',
        )
        values = {
            'name': url,
            'url': url,
        }
        attachment.write(values)

        if self.env.context.get('commit_assetsbundle') is True:
            self.env.cr.commit()

        self.clean_attachments(type)

        return attachment
        `}</pre>
</code>
<p>
    The <code>save_attachment</code> method creates <code>ir.attachment</code> records based on binary strings
    generated from bundled content passed in. You will notice that these are always prefixed with
    <code>/web/content</code>
    which is why we can search <code>ir.attachment</code> records based on <code>/web/content</code> when looking
    for bundles generated from core.
</p>

<h3>The details</h3>
<p>
    There are more details that occur between the XML directive and the <code>save_attachment</code> method so
    I highly recommend going through the methods to learn a little bit more about the actual concatenation and
    minification process. That’s out of scope of this article :)
</p>

<hr />

<h2>The case for regenerating bundles</h2>
<p>
    Before getting into the process of actually regenerating the bundles, let’s review the scenarios when
    bundles need to be regenerated. It’s not too often, depending on what you do day-to-day.
</p>
<ul class="postList">
    <li>
        Migrating a filestore manually to a separate instance, via an <code>scp</code>, <code>ftp</code>
        , or even just a <code>mv</code> transfer.
    </li>
    <li>Restoring a database from a sql dump without the filestore.</li>
    <li>Corrupted assets.</li>
</ul>

<h2>How to regenerate assets from the GUI</h2>
<p>
    If are on Odoo 12.0+ then regenerating asset bundles is simple from the GUI (assuming that you can access
    the GUI.)
</p>
<ol>
    <li>Enable developer mode</li>
    <li>Open the debug menu from the toolbar</li>
    <li>Select Regenerate Asset Bundles</li>
</ol>
<p>This runs a JS function called <code>regenerateAssets</code> .</p>
<code class="javascript">
    <pre>{`
/**
 * Delete asset bundles to force their regeneration.
 *
 * @returns {void}
 */
regenerateAssets: function () {
    var self = this;
    var domain = [
        ['res_model', '=', 'ir.ui.view'],
        ['name', 'like', 'assets_'],
    ];

    this._rpc({
        model: 'ir.attachment',
        method: 'search',
        args: [domain],
    }).then(function(ids) {
        self._rpc({
            model: 'ir.attachment',
            method: 'unlink',
            args: [ids],
        }).then(self.do_action('reload'));
    });
}
        `}</pre>
</code>

<h2>How to regenerate assets from Odoo Shell</h2>
<p>
    Looking at the JS function above, it’s not too difficult for us to just manually regenerate the assets
    ourselves from an <a href="/blog/2019-02-16_run-an-odoo-repl.js" rel="noreferrer" target="_blank"
        >Odoo shell instance</a
    >. If you are on Odoo 11.0 or prior, then this is very helpful since you don’t have the GUI functions
    provided in 12.0+.
</p>
<p>
    After deleting the <code>ir.attachment</code> records then you just need to reload the web page, which
    will call the <code>t-call-assets</code> directive again and regenerate the bundles. Once the page is loaded
    you can look in the database and see that all of those attachments you just deleted are back.
</p>
<code class="python">
    <pre>{`
In [1]: domain = [('res_model', '=', 'ir.ui.view'), ('name', 'like', 'assets_')]

In [2]: env['ir.attachment'].search(domain).unlink()
Out[2]: True

In [3]: env.cr.commit()
        `}</pre>
</code>

<h2>How to regenerate assets from psql</h2>
<p>And finally, we can do the same thing from a <code>psql</code> prompt as well.</p>
<p>
    The same applies here as when regenerating from Odoo shell. Reload the web page and the system will
    recreate the asset bundle attachments.
</p>

<code class="sql">
    <pre>{`
odoo=# select id,name from ir_attachment where res_model='ir.ui.view' and name like '%assets_%';
id  |                       name
-----+---------------------------------------------------
879 | /web/content/879-78450bf/web.assets_common.0.css
880 | /web/content/880-78450bf/web.assets_backend.0.css
881 | /web/content/881-78450bf/web.assets_backend.1.css
882 | /web/content/882-78450bf/web_editor.assets_editor.0.css
883 | /web/content/883-78450bf/web.assets_common.js
884 | /web/content/884-78450bf/web.assets_backend.js
885 | /web/content/885-78450bf/web_editor.assets_editor.js
(7 rows)

odoo=# delete from ir_attachment where res_model='ir.ui.view' and name like '%assets_%';
DELETE 7
        `}</pre>
</code>
