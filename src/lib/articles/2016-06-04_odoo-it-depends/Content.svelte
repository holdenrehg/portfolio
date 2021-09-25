<p>
    <span class="first-letter">W</span>hen Odoo
    <a
        href="http://www.slideshare.net/openobject/odoo-from-v7-to-v8-the-new-api"
        rel="noreferrer"
        target="_blank">refactored their API</a
    > and caused forums to be fill with “new api” “old api” talk, I feel that it really increased the ease of use
    for developers. Many of the powerful features and tools built into Odoo became even simpler to understand.
    It also became simpler to write poorly performing code.
</p>
<blockquote>It also became simpler to write poorly performing code.</blockquote>
<p>
    In this article I’m going to break down an example specifically for Odoo’s compute functions that show how
    quickly a dependency chain can get out of hand and affect the entire system. Let’s take a look at defining
    a simple class.
</p>

<code class="python">
    <pre>{`
# -*- coding: utf-8 -*-
import logging
from openerp import api, models, fields

_logger = logging.getLogger(__name__)


class PartnerGroup(models.Model):
    _name = 'res.partner.group'
    name = fields.Char('Group Name')
    partner_ids = fields.One2many('res.partner', 'partner_group_id', 'Partners')
        `}</pre>
</code>
<p>
    This is a class for defining groups of partners. It has a name for the group and a reference to all the
    partners in the group. Simple enough. No performance issues yet.
</p>
<p>Lets add a couple more classes.</p>
<code class="python">
    <pre>{`
# -*- coding: utf-8 -*-
import logging
from openerp import api, fields, models

_logger = logging.getLogger(__name__)


class Partner(models.Model):
    _inherit = 'res.partner'
    partner_group_id = fields.Many2one('res.partner.group')
    has_late_bills = fields.Boolean('Has Late Bills', compute='compute_has_late_bills')

    @api.multi
    @api.depends('invoice_ids')
    def compute_has_late_bills(self):
        """
        Computes if this partner has late bills based on
        if any of the invoices attached to this group are late.
        """
        for partner in self:
            _logger.info('DEPENDS_TEST: computing late bills for partner ' + str(partner.id))
            for invoice in partner.invoice_ids:
                if invoice.is_late:
                    partner.has_late_bills = True
                    return
            partner.has_late_bills = False
        `}</pre>
</code>
<code class="python">
    <pre>{`
# -*- coding: utf-8 -*-
import logging
from datetime import datetime
from openerp import api, fields, models, tools

_logger = logging.getLogger(__name__)
LATE_LIMIT = 25


class AccountInvoice(models.Model):
    _inherit = 'account.invoice'
    is_late = fields.Boolean('Is Late', compute='compute_is_late')

    @api.multi
    @api.depends('date_invoice')
    def compute_is_late(self):
        """
        Computes if this bill is late. The bill is late if it has
        been the LATE_LIMIT days past the invoice date.
        """
        for invoice in self:
            _logger.info('DEPENDS_TEST: computing is late on invoice id ' + str(invoice.id))
            if invoice.date_invoice:
                date_invoice = datetime.strptime(invoice.date_invoice, tools.DEFAULT_SERVER_DATE_FORMAT)
                now = datetime.strptime(datetime.strftime(datetime.today(), tools.DEFAULT_SERVER_DATE_FORMAT), tools.DEFAULT_SERVER_DATE_FORMAT)
                invoice.is_late = (now - date_invoice).days > LATE_LIMIT
        `}</pre>
</code>

<p>
    Now we’ve gotten a small system for defining late invoices and for checking if any given partner has a
    late invoice. There are two compute functions. One on each class and each has a single dependency. We can
    start mapping out what our dependency chain looks like.
</p>
<code class="python">
    <pre>{`
res.partner:has_late_bills => res.partner:invoice_ids
account.invoice:is_late    => account.invoice:date_invoice
        `}</pre>
</code>
<p>
    Every time an invoice is updated on a partner it computes the partner’s has_late_bills field and every
    time an invoice’s date_invoice field is updated it recomputes the invoice’s is_late field.
</p>
<p>
    Again, this is pretty simple. Still no performance issues yet. Let’s update our partner group class to
    calculate if an entire group has any late bills.
</p>
<code class="python">
    <pre>{`
# -*- coding: utf-8 -*-
import logging
from openerp import api, models, fields

_logger = logging.getLogger(__name__)


class PartnerGroup(models.Model):
    _name = 'res.partner.group'
    name = fields.Char('Group Name')
    partner_ids = fields.One2many('res.partner', 'partner_group_id', 'Partners')
    has_late_bills = fields.Boolean('Has Late Bills', compute='compute_has_late_bills')

    @api.multi
    @api.depends('partner_ids.has_late_bills', 'partner_ids.invoice_ids')
    def compute_has_late_bills(self):
        """
        Computes if this partner group has late bills based on
        if any of the partners in the group have late bills.
        """
        for group in self:
            _logger.info('DEPENDS_TEST: computing late bills for partner group ' + str(group.id))
            for partner in group.partner_ids:
                if partner.has_late_bills:
                    group.has_late_bills = True
                    return
            group.has_late_bills = False
        `}</pre>
</code>
<blockquote>Here’s where it gets interested</blockquote>
<p>
    This includes a single mistake that can cause degraded performance and even unnecessary database queries
    (when using stored=True on compute functions) depending on how many concurrent users are accessing the
    system, the amount of invoices, the number of partners per partner group, etc.
</p>
<p>
    The groups has_late_bills depends on both the partners has_late_bills field and the partners invoices ids
    which is not necessary. Our dependency chain get’s slightly more complicated.
</p>
<code class="python">
    <pre>{`
res.partner:has_late_bills       => invoice_ids
account.invoice:is_late          => date_invoice
res.partner.group:has_late_bills => partner_ids.has_late_bills
res.partner.group:has_late_bills => partner_ids.invoice_ids
        `}</pre>
</code>
<p>By creating a single invoice, it fires the following compute actions:</p>
<ul>
    <li>Create invoice</li>
    <li>Compute account.invoice:is_late because date_invoice updated</li>
    <li>Compute res.partner:has_late_bills because the partner has a new invoice</li>
    <li>
        Compute res.partner.group:has_late_bills if one of the partners has a new has_late_bills value after
        recomputing it in the line above
    </li>
    <li>
        Compute res.partner.group:has_late_bills because the one of the partners in the group has a new
        invoice
    </li>
</ul>
<p>
    The last two actions are duplicates of each other. There is no reason why this needs to fire two times and
    can be resolved by updating our depends decorator.
</p>
<code class="python">
    <pre>{`
@api.depends(‘partner_ids.has_late_bills’)
        `}</pre>
</code>
<p>
    This may not be a huge problem in this specific example when updating a single invoice. It performs 4
    operations instead of 3, but a 25% increase in computation starts to hurt at scale. Bulk editing 100
    invoices turns into 400 operations instead of 300. 5 concurrent users bulk editing 100 invoices turns into
    2000 operations instead of 1500.
</p>

<h2>In Conclusion</h2>
<p>
    Think about this example within larger custom modules. This has 3 classes and 3 computed fields. In
    modules that have dozens or hundred of classes that use unnecessary dependencies on compute functions
    could severely hurt user experience.
</p>
<blockquote>
    Note: Watch out for stored, computed fields that cause both a computation and database write.
</blockquote>
<p>
    Luckily these are easy to track down! Log statements are your friend, and drawing simple dependency chain
    diagrams can allow you to cross out paths that already exists.
</p>
<p>Best of luck Odoods!</p>
