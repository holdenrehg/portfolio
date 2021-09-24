<p>
    <span class="first-letter">T</span>he concepts of an inverse field in Odoo can be a bit mysterious to a
    lot of developers. I just did a search on the Odoo docs for the phrase "inverse" and found 4 page results.
    Most of these results are about the <code>One2many</code>
    inverse relationship (which is not what I'm talking about in this article).
</p>

<p>
    There were a few paragraphs that popped up in reference documentation and the best explanation that I
    found was the following:
</p>

<blockquote>
    "Computed fields are readonly by default. To allow setting values on a computed field, use the <code
        >inverse</code
    > parameter. It is the name of a function reversing the computation and setting the relevant fields.
</blockquote>

<p>
    Now that's not too bad. We can learn the purpose of the inverse field. Generally yes, we use inverse
    fields to make computed fields writable. But I think there's a bit to expand upon when talking about how
    it actually works.
</p>

<h2>Starting with a computed field</h2>
<p>
    We need to do a quick overview of what a computed field means before stepping into inverse functions,
    because inverse functions only apply to computed fields.
</p>

<p>
    A computed field is a field on a model that automatically computes its own value based on a function
    instead of a user defined value.
</p>

<p>Here's a simple example of that:</p>

<code class="python">
    <pre>{`
from odoo import fields, models


class Partner(models.Model):
    _inherit = "res.partner"

    order_count = fields.Integer(
        string="Sale Order Count",
        compute="_compute_order_count",
    )

    def _compute_order_count(self):
        for order in self:
            order.order_count = len(order.sale_order_ids)
                `}</pre>
</code>

<p>
    We are inheriting the <code>res.partner</code> model and adding our own field called
    <code>order_count</code>. We marked the field computed by adding the parameter
    <code>compute="_compute_order_count"</code>
    where
    <code>_compute_order_count</code> is the name of a method.
</p>

<p>
    That's why directly below our field definition, you the see that method <code>_compute_order_count</code>.
    So the way that this stands now, any time a user tries to access this field, which can happen when they
    view it in a form, or a developer calls it in code, etc., this method will get called.
</p>

<p>
    A great way to see where and how often it's called is by adding a `_logger.info()` line to the method and
    watching the log as you click in the order forms or do different actions. I wrote an article called
    <a href="/blog/2016-06-04_odoo-it-depends" rel="noreferrer" target="_blank">Odoo — It depends</a> if you want
    to dig deeper on when and how the functions fire.
</p>

<h3>On the fly computation vs stored computation</h3>
<p>
    The computed field in our example fires in a bunch of different scenarios like I said. Essentially, any
    time a user needs that piece of information then the function has to fire. If they load up a list of 5,000
    orders, then that function needs to run at least 5,000 times once per order to render that information.
</p>
<p>You can call this "on the fly" or "just in time" computation.</p>
<p>
    That obviously hurts performance depending on how you're using this field. So another option here is to
    store the field. That's a stored computed field and it has its own column in the database where it can
    persist the information for quick reads.
</p>

<code class="python">
    <pre>{`
order_count = fields.Integer(
    string="Sale Order Count",
    compute="_compute_order_count",
    store=True,
)
                `}</pre>
</code>

<p>
    The first step is to add <code>store=True</code> as a parameter on our field. That's what tells the ORM to
    create the column in the database. But now when does the compute function fire to update that information?
    We need to tell the system to compute whenever another field changes. In the case of
    <code>order_count</code>
    the order count will only change when the <code>sale_order_ids</code> field changes. A user goes in,
    creates a new sale order for partner Sally so that Sally's <code>sale_order_ids</code> relationship adds another
    record to it. At that point our compute function should fire and increment.
</p>
<p>
    The mechanism for that is the <code>@api.depends</code> decorator:
</p>

<code class="python">
    <pre>{`
# update your imports to include api
from odoo import api, fields, models
                `}</pre>
</code>

<code class="python">
    <pre>{`
@api.depends("sale_order_ids")
def _compute_order_count(self):
                `}</pre>
</code>

<p>
    And now we have a stored computed field on our hands, which will update every time the order relationship
    updates.
</p>

<h2>Now what if a user wants to change the computed field?</h2>
<p>
    And here comes the biggest use case for an inverse function and the main reference that Odoo makes in its
    documentation. What if a user needs to change a computed field? Keep in mind that this usually only ever
    makes sense for a <strong>stored computed field</strong>. A user can't directly set the value for an on
    the fly computed field because where would their value go? There's no column in the database. There is a
    way for this to work, but I'll reference that in a special case at the end of the article.
</p>
<p>
    In our example, a user might request that they want to manually update the order count. So we add our
    inverse parameter:
</p>

<code class="python">
    <pre>{`
order_count = fields.Integer(
    string="Sale Order Count",
    compute="_compute_order_count",
    inverse="_set_order_count"
    store=True,
)

def _set_order_count(self):
    pass
                `}</pre>
</code>

<p>
    All we need to allow a user to start editing that field is the <code>inverse="_set_order_count"</code>
    parameter, similarly to the compute parameter, we are referencing the name of a method. The method in our example
    is just a blank, do-nothing method. I'll explain why further down.
</p>

<h2>User data can still be overwritten though</h2>
<p>
    So we have our fancy field that both computes information and allows a user to set information. But the
    compute function itself does not care about the user data. It's going to keep doing its thing, running
    whenever <code>sale_order_ids</code>
    changes, and overriding whatever happens to be in the database currently, user-defined or not.
</p>
<p>
    The use case is a little tricky with this example. How helpful is it for a user to update the order count
    if it's going to get overwritten at times? Well there's some more we could do to it, for example we can
    add a flag that a user selects to say "I don't want this to automatically compute".
</p>

<code class="python">
    <pre>{`
is_user_defined_count = fields.Boolean(
    string="User defined order count?",
    default=False,
)

order_count = fields.Integer(
    string="Sale Order Count",
    compute="_compute_order_count",
    inverse="_set_order_count"
    store=True,
)

@api.depends("sale_order_ids")
def _compute_order_count(self):
    for order in self:
        if not order.is_user_defined_count:
            order.order_count = len(order.sale_order_ids)

def _set_order_count(self):
    pass
                `}</pre>
</code>

<p>
    So overall the inverse parameter just gives us a bit more flexibility compared to the things we would need
    to do without it. In this case, we probably would've need a computed order_count vs a non computed
    order_count with a flag to switch back and force between them. Then maybe even another field or function
    to pull the correct information depending on the flag so that a developer down the road doesn't reference
    the wrong field. That could've been much, much more error prone.
</p>

<h2>So what's up with this empty _set method?</h2>
<p>
    This is the part that threw me off originally when I was learning. Why do I need this empty method? What's
    the point of it?
</p>
<p>
    We need to start thinking about this like a hook. Conventionally with developers, Odoo has adopted this
    language of using <code>def _set_{'{my_field}'}</code> here so naturally we are going to think that this is
    the function that sets the information. Instead it's actually a hook. It would make more sense like this:
</p>

<code class="python">
    <pre>{`
order_count = fields.Integer(
    string="Sale Order Count",
    compute="_compute_order_count",
    inverse="_after_order_count_set",
    store=True,
)

def _after_order_count_set(self):
    """
    Hook that fires after a user manually sets the order count themselves. For
    this field, we don't need to do anything.
    """
                `}</pre>
</code>

<p>
    So the inverse function is actually a callback or hook that fires immediately after the user sets some
    information manually. That's why the method itself isn't actually writing to the database. In 99% of use
    cases with inverse function, we just want to let the user set their data and then that's it. Hence the
    do-nothing inverse method.
</p>
<p>
    There are a few situations where we might want to do some side effect, change some other field, write to a
    log, etc. after the user sets data, but generally in my experience those are rare.
</p>

<h3>Using "on the fly" fields with inverse</h3>
<p>
    One of the special cases could be to allow a user to set an on the fly computed field. Like we said above,
    there's no column that persists the computed field, but using our hook function for the inverse we can
    maybe setup another field. This is actually similar to what the Odoo documentation shows in their example:
</p>

<code class="python">
    <pre>{`
from odoo import fields, models


class Document(models.Model):
    _name = "my.document"

    path = fields.Char(
        string="Path To A Document"
    )

    document = fields.Binary(
        compute="_compute_document",
        inverse="_after_document_set",
    )

    def _compute_document(self):
        for document in self:
            with open(document.path) as f:
                document.document = f.read()

    def _after_document_set(self):
        if self.document:
            self.path = self.document.get_path()
                `}</pre>
</code>

<p>
    Keep in mind I'm using a bit of pseudo code here for getting paths. But the general idea is that you may
    have a field that persists like <code>path</code> which is all you need to obtain a file's contents. So instead
    of persisting an entire binary in the database, you may just track the path and read the document on the fly.
</p>
<p>
    But for the sake of usability, it's not very nice to have a user update a long character path directly.
    Instead we can add our computed binary <code>document</code> which allows them to see a file selector
    widget on the front end. When they edit and select their document, our
    <code>_after_document_set</code>
    function fires, grabs the path, and stores it in <code>path</code>. When they try to look at or read the
    document, then our <code>_compute_document</code> function runs and pull the information.
</p>

<h2>In conclusion</h2>
<p>
    It's best to think about this feature as a way to change the compute behavior. When a use case pops up and
    a user needs a way for them to change how a field is computed, then an inverse might make sense. Make sure
    to think through the lifecycle of when these functions run and what they do (user enters data: inverse
    function fires, dependencies are changed: compute function fires, overwriting existing data, etc.) to see
    if it makes sense for your user.
</p>
<p>
    Inverse functions are definitely a useful tool to have handy when writing code in Odoo and I've used the
    feature a handful of times over the years. Hope this helps you all get a better grasp on the concept!
</p>
<p>Best of luck coding with it.</p>
