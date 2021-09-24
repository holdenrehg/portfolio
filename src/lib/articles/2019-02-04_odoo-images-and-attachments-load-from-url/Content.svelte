<p>
    <span class="first-letter">T</span>his is the first in a series of posts about images and attachments in
    Odoo. I think it’s a topic that not all Odoo developers are completely clear on.
</p>
<p>
    Each post will be a quick dive into detail about images or attachments in Odoo. Of course, we’ll focus on
    the latest and greatest (currently version 12.0) but there is some overlap between version.
</p>

<h2>Loading Binary Fields From A URL</h2>
<p>Odoo stores images/Binary fields directly in the database.</p>
<p>So I’m talking about things like the following:</p>
<code class="python">
    <pre>{`
from odoo import models


class ProductTemplate(models.Model):
    _inherit = "product.template"

    image = fields.Binary(
        string="Product Image",
        attachment=False,
    )
        `}</pre>
</code>
<p>
    In the example above we are looking at a <code>Binary</code> field called <code>image</code> which is
    stored on the <code>product.template</code> model, not as an attachment. The default for
    <code>Binary</code>
    fields will be <code>attachment=False</code> .
</p>
<p>
    So if you take a look at the database table, in this case, it would be <code>product_template</code>
    we will see a blob column for the<code>image</code> field. The contents contain a
    <strong>base64 encoded binary string</strong> of the image.
</p>

<h3>Create A Image Helper Mixin</h3>
<p>But sometimes it’s nice to work with URLs, so consider creating a mixin like the following as a helper:</p>
<code class="python">
    <pre>{`
import requests
import logging
import base64

_logger = logging.getLogger(__name__)


class StoresImages():
    """
    Image mixin for odoo.models.Model to utilize if the data model deals with
    storing Binary fields or images.
    """

    def fetch_image_from_url(self, url):
        """
        Gets an image from a URL and converts it to an Odoo friendly format
        so that we can store it in a Binary field.
        :param url: The URL to fetch.

        :return: Returns a base64 encoded string.
        """
        data = ""

        try:
            # Python 2
            # data = requests.get(url.strip()).content.encode("base64").replace("\\n", "")

            # Python 3
            data = base64.b64encode(requests.get(url.strip()).content).replace(b"\\n", b"")
        except Exception as e:
            _logger.warn("There was a problem requesting the image from URL %s" % url)
            logging.exception(e)

        return data
        `}</pre>
</code>
<p>
    In this mixin, we have a basic <code>fetch_image_from_url</code> function which will take in a URL pointing
    to an image and then return the proper string which we can store in the database.
</p>

<h3>Then Add Your Helper To Data Models</h3>
<p>
    Use your mixin on your data models where you need access to functions like the <code
        >fetch_image_from_url</code
    > function we created above.
</p>
<code class="python">
    <pre>{`
class CustomModel(models.Model, StoresImages):
    _name = "my.custom.model"

    image_url = fields.Char(string="Image URL", required=True)
    image = fields.Binary(
        string="Image",
        compute="_compute_image",
        store=True,
        attachment=False
    )

    @api.multi
    @api.depends("image_url")
    def _compute_image(self):
        """
        Computes the image Binary from the image_url per database record
        automatically.
        """
        for record in self:
            image = None
            if record.image_url:
                image = self.fetch_image_from_url(record.image_url)
            record.update({"image": image, })
        `}</pre>
</code>
<p>
    Here we created our own custom model called <code>my.custom.model</code> . You can see that it uses our
    <code>StoresImages</code> mixin:
</p>
<code class="python">
    <pre>{`
class CustomModel(models.Model, StoresImages)
        `}</pre>
</code>
<p>Then we added a field for storing a single URL:</p>
<code class="python">
    <pre>{`
image_url = fields.Char(
    string="Image URL",
    required=True
)
        `}</pre>
</code>
<p>
    Instead of overriding the<code>write</code> function or updating the image with Binary strings to actually
    display the image, we can create a simple <code>compute</code> field that automatically converts the
    <code>image_url</code> field when it changes. This compute function can use our mixin/helper to make the code
    clean:
</p>
<code class="python">
    <pre>{`
image = fields.Binary(
    string="Image",
    compute="_compute_image",
    store=True,
    attachment=False
)

@api.multi
@api.depends("image_url")
def _compute_image(self):
    """
    Computes the image Binary from the image_url per database
    record automatically.
    """
    for record in self:
        image = None
        if record.image_url:
            image = self.fetch_image_from_url(record.image_url)
        record.update({"image": image, })
        `}</pre>
</code>
<p>Try it out by creating or updating a record:</p>
<code class="python">
    <pre>{`
obj = self.env["my.custom.model"].create({
    "image_url": "https://..."
})
        `}</pre>
</code>
