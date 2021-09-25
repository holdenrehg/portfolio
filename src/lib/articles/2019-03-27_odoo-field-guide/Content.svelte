<p>
    <span class="first-letter">T</span>his is a complete reference to all fields that exist in Odoo (as of
    version 12.0) with the required and optional attributes for each field.
</p>
<code class="python">
    <pre>{`
class Many2one(_Relational):
class One2many(_RelationalMulti):
class Many2many(_RelationalMulti):

class Boolean(Field):
class Integer(Field):
class Float(Field):
class Monetary(Field):
class Char(Field):
class Text(Field):
class Html(Field):
class Date(Field):
class Datetime(Field):
class Binary(Field):
class Selection(Field):
        `}</pre>
</code>

<h2>Many2one</h2>
<p>
    A relationship field defining that Model A has a single reference to Model B. A good example of this, in
    general, is that Sales Order
    <code>sale.order</code> has a <code>partner_id = fields.Many2one</code>
    reference to <code>res.partner</code> . This means that each sales order has a single Customer/Partner.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/many2one-definition.png" alt="" />
</figure>

<h2>One2many</h2>
<p>
    A relationship field defining that Model A has multiple references to Model B and Model B has a
    corresponding Many2one. A good example of this, in general, is that Sales Order <code>sale.order</code>
    has a
    <code>order_line = fields.One2many</code> reference to
    <code>sale.order.line</code> and the <code>sale.order.line</code> model has a single reference back to the
    order via an
    <code>order_id = fields.Many2one</code>.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/one2many-definition.png" alt="" />
</figure>

<h2>Many2many</h2>
<p>
    A relationship field defining that Model A has multiple references to Model B records and Model B has
    multiple references to Model A records. A good example of this, in general, is that Sales Order
    <code>sale.order</code> has a <code>tag_ids = fields.Many2many</code>
    reference to <code>crm.tag.lead</code>. But a single tag can be assigned to many different order records.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/many2many-definition.png" alt="" />
</figure>

<h2>Boolean Field</h2>
<p>
    A simple <code>bool</code> type field that stores either a
    <code>True</code> or a <code>False</code> value.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/boolean-definition.png" alt="" />
</figure>

<h2><strong>Integer Field</strong></h2>
<p>An <code>int4</code> type field which stores an integer value.</p>
<figure>
    <img src="/images/articles/odoo-field-guide/integer-definition.png" alt="" />
</figure>

<h2><strong>Float Field</strong></h2>
<p>A <code>float8</code> type field which stores a floating point number.</p>
<figure>
    <img src="/images/articles/odoo-field-guide/float-definition.png" alt="" />
</figure>

<h2><strong>Monetary Field</strong></h2>
<p>
    A special version of a <code>float8</code> column which automatically displays on the frontend in a certain
    currency.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/monetary-definition.png" alt="" />
</figure>

<h2>Char Field</h2>
<p>
    A <code>char</code> type column field which will stores string values. This is typically used for short strings
    because it has a default max value of 255 characters.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/char-definition.png" alt="" />
</figure>

<h2>Text Field</h2>
<p>
    A <code>text</code> type column field which will store long-form string values. This is typically used for
    longer strings and descriptions because it has no max value for strings.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/text-definition.png" alt="" />
</figure>

<h2>Html Field</h2>
<p>
    Another <code>text</code> type column that stores long-form strings, except it assumes that the field will
    be populated with HTML context. This alters the frontend to display formatted HTML context instead of standard
    utf-8 text.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/html-definition.png" alt="" />
</figure>

<h2>Selection Field</h2>
<p>
    A <code>selection</code> or enum type column that defines a set of fixed values that the user can select
    from. A good example of this is the
    <code>states</code> field on a sales order. There are many different events hard linked to the sales order
    states, so we must fix a list of options.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/selection-definition.png" alt="" />
</figure>

<h2>Date Field</h2>
<p>A <code>date</code> type column that stores dates without times.</p>
<figure>
    <img src="/images/articles/odoo-field-guide/date-definition.png" alt="" />
</figure>

<h2>Datetime Field</h2>
<p>A <code>datetime</code> type column that stores datetime values.</p>
<figure>
    <img src="/images/articles/odoo-field-guide/datetime-definition.png" alt="" />
</figure>

<h2>Binary Field</h2>
<p>
    A <code>bytea</code> type column that stores binary string values. In the case of Odoo it’s base64 encoded
    binary strings typically.
</p>
<p>
    These fields are ideal for storing documents or images. The frontend of Odoo will then render these via <code
        >&lt;img/&gt;</code
    > tags.
</p>
<figure>
    <img src="/images/articles/odoo-field-guide/binary-definition.png" alt="" />
</figure>
