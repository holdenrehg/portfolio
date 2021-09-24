<ul class="table-of-contents">
    <li>
        <strong><a href="#whats-the-problem">What's the problem?</a></strong>
        <ul>
            <li><a href="#bloated-models">Bloated models</a></li>
            <li><a href="#tightly-coupled-tests">Tightly coupled tests</a></li>
        </ul>
    </li>
    <li>
        <strong><a href="#about-humble-object">What exactly is the Humble Object pattern?</a></strong>
    </li>
    <li><strong><a href="#when-does-it-make-sense">When does it make sense in Odoo?</a></strong></li>
    <li><strong><a href="#how-to-apply">How to I apply it?</a></strong></li>
    <li>
        <strong><a href="#stock-example">A more complicated example with stock</a></strong>
        <ul>
            <li><a href="#setup">Setup</a></li>
            <li><a href="#first-test">The first test</a></li>
            <li><a href="#original-code">The original code</a></li>
            <li>
                <a href="#how-to-apply-in-stock">Applying the pattern</a>
                <ul>
                    <li><a href="#step-1">Step 1: Figure out what it does</a></li>
                    <li><a href="#step-2">Step 2: Psuedocode a better version</a></li>
                    <li><a href="#step-3">Step 3: Extract functions</a></li>
                    <li><a href="#step-4">Step 4: Refactor</a></li>
                    <li><a href="#step-5">Step 5: Write and run tests</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><strong><a href="#note-on-tools">A note about tools</a></strong></li>
    <li><strong><a href="#takeaways">Takeaways</a></strong></li>
</ul>

<blockquote>
    <mark class="bg-orange-200 py-1 px-2">Take a look at the corresponding code</mark> for this article in the
    <a
        href="https://github.com/holdenrehg-samples/sample_odoo_humble_object"
        class="underline"
        target="_blank">holdenrehg-samples/sample_odoo_humble_object</a
    > repo.
</blockquote>

<p>Frameworks I've worked with typically fall into two camps with architecture.</p>

<p>
    <strong>1.</strong> You have "free for all" frameworks telling you to do mostly whatever you'd like, however
    you'd like. They chuck all the tools on the ground with descriptions of how each work, but they don't care
    if you want to build a house, a canoe, or pave a driveway. Developers usually refer to these as "unopinionated".
</p>
<p>
    <strong>2.</strong> Then you have the "prefab" style frameworks where they put up the frame of your application
    for you. They often show you where to put certain things and often lock you in to certain tools or patterns
    by default. Want to use a steel frame instead of timber? Might not be a realistic option to swap that out.
    Developers call these ones "opinionated".
</p>
<hr />
<p>
    That's enough with the construction analogy. It doesn't line up perfectly, but the gist is that you have
    frameworks that are more like a collection of modules or libraries with sets of generalized utilities for
    common tasks. For example, Flask has a routing module that you explicitly use. There is no routing config
    file that is processed and handles the mapping for you. You import the module in python, write the
    endpoint function, call the function to load and parse the html, pass the data into the html, and return a
    response.
</p>
<p>
    I don't want to get into the debate of which one of these strategies is best (surprise: the answer is "it
    depends" like most methodology conflicts in software).
</p>
<p>
    I'm writing this all out because I wanted to talk about where Odoo falls on this spectrum. In my opinion,
    I think that Odoo falls pretty much as far to the "opinionated" side as possible. You have very little
    control or input when it comes to how views are rendered, requests are routed, how the database it
    interacted with, etc.
</p>
<p>So there's obviously pros and cons there.</p>
<p>
    With this article I'm going to work through an example of implementing the <a
        href="https://martinfowler.com/bliki/HumbleObject.html"
        class="underline"
        target="_blank">humble object pattern</a
    > within Odoo to solve some potential issues.
</p>

<h2 id="whats-the-problem">What's the problem?</h2>
<p>There's a couple primary issues this pattern helps with:</p>
<ol>
    <li>Models end up huge, bloated, and difficult to work with.</li>
    <li>Tests are tightly coupled with the environment and orm.</li>
</ol>
<p>
    I have a habit of looking to the code around me as a baseline. This can be incredibly helpful in team
    environments to keep things consistent. At the same time, if there are bad choices made around you, it's
    easier to not think about them and just carry them into your code as well.
</p>
<p>
    That's why I'm pointing out some examples of how the Odoo design choices have led to some not-ideal code.
    As Odoo developers adding even more modules into this environment, or potentially even into the open
    source project, we can work together to identify some of these issues and implement better solutions.
</p>

<h3 id="bloated-models">Bloated models</h3>
<p>
    Taking a look at the <a href="https://github.com/odoo/odoo" class="underline" target="_blank">core code</a
    >
    today (currently v14) I can quickly find a few examples of massive and complicated models or sets of models.
</p>
<p>
    <strong>The class <code>Partner</code></strong> is
    <a
        href="https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/models/res_partner.py#L132-L987"
        class="underline"
        target="_blank">856 lines long</a
    > with over 65 methods.
</p>
<p>
    <strong>The class <code>SaleOrder</code></strong> is
    <a
        href="https://github.com/odoo/odoo/blob/14.0/addons/sale/models/sale.py#L19-L1143"
        class="underline"
        target="_blank">1125 lines long</a
    > also about 65 methods and the longest method being 124 lines long.
</p>
<p>
    Strictly using metrics like line counts is not perfect, but it's generally clear that risk goes up as
    certain pieces get larger, numbers of dependencies goes up, code is reaching into many other parts of the
    system, and responsibilities for data storage, business logic, and presentation are all intermingled
    together. It creates a spiderweb of complicated systems that developers struggle to change and work with.
</p>

<h3 id="tightly-coupled-tests">Tightly coupled tests</h3>
<p>
    We could dig into best practices of coupling and dependencies, which are very important, but honestly the
    biggest problem with tests tightly coupled into the framework and the database specifically, is that <strong
        >I cannot run my tests without running an entire instance and database.</strong
    >
</p>
<p>This seems crazy to me.</p>
<p>
    If I make a <code>my_test.py</code> file with one standalone unit test and run
    <code>python -m unittest my_test.py</code> it takes 0.000s:
</p>
<code class="python">
    <pre>{`
import unittest

class Test(unittest.TestCase):
    def test_sample(self):
        assert 1 + 1 == 2
                `}</pre>
</code>
<p>
    Putting the same test into an Odoo module and running it (best case) on my laptop takes about 8 seconds.
    This of course is assuming you already have a demo database configured with the module already installed.
    I've worked on projects where about 100 tests takes nearly 5 minutes.
</p>
<p>
    For medium and large sized projects this is huge hindrance to teams. It slows developers down and makes
    the continuous integration process more difficult.
</p>

<h2 id="about-humble-object">What exactly is the Humble Object pattern?</h2>
<p>
    I'm not sure the exact origins of the term "humble object" term but it was referenced in the <a
        href="http://xunitpatterns.com/Humble%20Object.html"
        class="underline"
        target="_blank">xUnit Patterns book by Gerard Mezzaros</a
    >. Also, Martin Fowler has
    <a href="https://martinfowler.com/bliki/HumbleObject.html" class="underline" target="_blank"
        >a short write up</a
    > on it.
</p>
<p>The gist of the idea is simple.</p>
<blockquote>
    Extract business logic code from hard to test classes and put it in easy to test classes.
</blockquote>
<p>Let's break it down a couple pieces of this.</p>
<p>
    <strong>By "business logic"</strong>, I mean code that does some sort of non-trvial operation or
    calculation specific to your application. This is code that is critical for you to test. This might be a
    function that calculates the total revenue for a specific customer, or determines the lead time for a
    product, or checks the stock availability of your inventory items.
</p>
<p>
    <strong>By "hard to test"</strong> I mean classes that hard to initialize.
    <code>models.Model</code> is a good example. What do I need to create an instance of a model? I need a PostgreSQL
    application running, an Odoo application running, a demo database, and demo data for my new object. Code that
    is hard to test is wrapped up in dependencies pointing to complex systems that we also need to initialize to
    run our code.
</p>
<p>
    <strong>By "easy to test"</strong> I mean pure python functions and pure python data structures. Doesn't really
    get much simpler than that.
</p>

<h2 id="when-does-it-make-sense">When does it make sense in Odoo?</h2>
<p>
    I think about this pattern while writing methods that I end up then sticking onto the most relevant model.
    As soon as that method lands on the model, I again am writing tests that depend on a
    more-complex-than-I-would-like&#8482; environment.
</p>
<p>
    I also think about this pattern when there's some "system" that could be broken up into smaller
    components. Usually as Odoo developers we think about groupings of code as modules/addons. Generally that
    works alright as a place to draw a boundary line between things that fit together. But there are scenarios
    where it makes sense to draw more lines and break things up within a single module. The <code>stock</code>
    module is a great example because it has a decent amount of logic, but probably would not be worth
    separating out into dozens of small addons. Instead of packing everything onto a few models though, we
    could separate out some "sub systems" within the
    <code>stock</code> module. I'll go through an example of this.
</p>

<h2 id="how-to-apply">Getting to the point, how do I apply it?</h2>
<p>
    In short, use more pure python or python that doesn't depend on anything that you can't easily initialize.
</p>
<p>A trivial example may look like:</p>
<code class="python">
    <pre>{`
import scanner
from odoo import fields
from odoo.models import Model

class Receipt(Model):
    _name = "receipt.receipt"

    vendor = fields.Char()
    amount = fields.Char()

    def scan(self, picture):
        receipt = scanner.scan(picture)
        self.vendor = receipt.find("Vendor")
        self.amount = receipt.find("Amount")
                `}</pre>
</code>
<p>
    We have our small <code>Receipt</code> class with one method <code>scan</code>. Scanning will take in the
    picture of the receipt, pass it over to a <code>scanner</code> library (details of how this library would work
    not important) and then we extract information out of the picture to store on our object.
</p>
<code class="python">
    <pre>{`
from odoo.tests import TransactionCase

class ReceiptTests(TransactionCase):
    def test_scan(self):
        receipt = self.env["receipt.receipt"].create({})

        assert not receipt.vendor
        assert not receipt.amount

        with open("./sample_receipt.png") as file:
            receipt.scan(file)

        assert receipt.vendor == "Home Depot"
        assert receipt.amount == 102.56
                `}</pre>
</code>
<p>
    Now for a test, we need all the usual suspects in Odoo. The database, running instance, etc. etc. etc.
    Here's our problem where developers are a little frustrated with the process of running tests, there's a
    local database with an issue blocking them from testing their code, they need 5 different Odoo
    environments to test the same piece of code in each version, it's all slow, etc.
</p>
<p>
    Moving to a humble object (or in this case more a humble function), we can create a little sub system for
    handling receipt scanning:
</p>
<code class="python">
    <pre>{`
import scanner

def scan(picture):
    receipt = scanner.scan(picture)
    return {
        "vendor": receipt.find("Vendor"),
        "amount": receipt.find("Amount")
    }
                `}</pre>
</code>
<code class="python">
    <pre>{`
from odoo import fields
from odoo.models import Model
from . import receipt_scanner

class Receipt(Model):

    ...

    def scan(self, picture):
        receipt = receipt_scanner.scan(picture)
        self.vendor = receipt["vendor"]
        self.amount = receipt["amount"]
                `}</pre>
</code>
<p>
    It's a subtle difference, but now we have a pure function that we can test easily. There's no need to
    initialize the entire Odoo environment:
</p>
<code>
    <pre>{`
import unittest
import receipt_scanner

class ReceiptScannerTests(unittest.TransactionCase):
    def test_scan(self):
        with open("./sample_receipt.png") as file:
            receipt = receipt_scanner.scan()
            assert receipt["vendor"] == "Home Depot"
            assert receipt["amount"] == 102.56
                `}</pre>
</code>
<p>With a setup like this we can just run the module from the command line:</p>
<code class="console">
    <pre>{`
.
----------------------------------------------------------------------
Ran 1 test

OK
                `}</pre>
</code>

<h2 id="stock-example">A more complicated example with stock</h2>
<p>
    Hopefully you've got the general idea of how this works now. I'll dig into a concrete example using the <code
        >stock</code
    > module.
</p>

<h3 id="setup">Setup</h3>
<p>
    There's not one solution to structure your modules and tests when you use this pattern, but here's what I
    like:
</p>
<code class="console">
    <pre>{`
└── my_module
    ├── core
    │   ├── __init__.py
    │   └── tests
    │       └── __init__.py
    ├── controllers
    ├── helpers
    ├── models
    ├── views
    └── tests
                `}</pre>
</code>
<p>
    You can have all your standard module scaffolding with controllers, helpers, models, views, etc. except
    with an added <code>core</code> folder. The core folder is the extracted out business logic for your application.
    You can think about it as these "sub systems" or domain logic. Essentially anything that you want to standalone
    and be testable in isolation. This means that we also need a separate test suite. Trying to merge the Odoo
    tests cases with these will lead to all sorts of import issues.
</p>

<h3 id="first-test">The first test</h3>
<p>Let's add one test and get it running:</p>
<code class="console">
    <pre>{`
└── my_module
    └── core
        ├── __init__.py
        └── tests
            ├──   test_sample.py
            └── __init__.py
                `}</pre>
</code>
<code class="python">
    <pre>{`
import unittest

class SampleTest(unittest.TestCase):
    def test_one_plus_plus(self):
        assert 1 + 1 == 2
                `}</pre>
</code>
<p>
    Now run it. From the root directory of <code>my_module</code> you are going to execute the
    <code>core</code> package:
</p>
<code class="console">
    <pre>{`
$ python3 -m unittest discover -s core -t .

.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
                `}</pre>
</code>

<h3 id="original-code">The original code</h3>
<p>Here's the code we're going to try to refactor away from:</p>
<p>
    <mark class="bg-orange-700 text-orange-100 font-bold px-3 py-1">Warning:</mark> In my opinion, this method
    is complicated at first glance and you probably don't want to take the time to figure it out. So I'm only putting
    it here so you understand what we're working with and then I'll break it down.
</p>
<code class="python">
    <pre>{`
from odoo import api
from odoo.models import Model
from odoo.tools import float_compare


class Quant(Model):
    _name = "stock.quant"

    def _get_available_quantity(self, product_id, location_id, lot_id=None, package_id=None, owner_id=None, strict=False, allow_negative=False):
        """ Return the available quantity, i.e. the sum of 'quantity' minus the sum of
        'reserved_quantity', for the set of quants sharing the combination of 'product_id,
        location_id' if 'strict' is set to False or sharing the *exact same characteristics*
        otherwise.
        This method is called in the following usecases:
            - when a stock move checks its availability
            - when a stock move actually assign
            - when editing a move line, to check if the new value is forced or not
            - when validating a move line with some forced values and have to potentially unlink an
                equivalent move line in another picking
        In the two first usecases, 'strict' should be set to 'False', as we don't know what exact
        quants we'll reserve, and the characteristics are meaningless in this context.
        In the last ones, 'strict' should be set to 'True', as we work on a specific set of
        characteristics.

        :return: available quantity as a float
        """
        self = self.sudo()
        quants = self._gather(product_id, location_id, lot_id=lot_id, package_id=package_id, owner_id=owner_id, strict=strict)
        rounding = product_id.uom_id.rounding
        if product_id.tracking == 'none':
            available_quantity = sum(quants.mapped('quantity')) - sum(quants.mapped('reserved_quantity'))
            if allow_negative:
                return available_quantity
            else:
                return available_quantity if float_compare(available_quantity, 0.0, precision_rounding=rounding) >= 0.0 else 0.0
        else:
            availaible_quantities = {lot_id: 0.0 for lot_id in list(set(quants.mapped('lot_id'))) + ['untracked']}
            for quant in quants:
                if not quant.lot_id:
                    availaible_quantities['untracked'] += quant.quantity - quant.reserved_quantity
                else:
                    availaible_quantities[quant.lot_id] += quant.quantity - quant.reserved_quantity
            if allow_negative:
                return sum(availaible_quantities.values())
            else:
                return sum([available_quantity for available_quantity in availaible_quantities.values() if float_compare(available_quantity, 0, precision_rounding=rounding) > 0])
                `}</pre>
</code>

<h3 id="how-to-apply-in-stock">Applying the pattern</h3>

<h4 id="step-1">Step 1: Figure out what it does</h4>
<p>After sorting through the conditionals here, this method is essentially:</p>
<ol>
    <li>
        a. Gathering a set of <code>stock.quant</code> objects based on the params product, location, lot, and
        owner.
    </li>
    <li>
        b. Determining the availability quantity of those quants, which depends on if the products are tracked
        and if negative quantities are allowed.
    </li>
</ol>
<h4 id="step-2">Step 2: Psuedocode an ideal version</h4>
<p>
    In the original code you have 8+ difference branches of if statements to follow. I rearranged those first
    to try to create some more readability.
</p>
<code class="python">
    <pre>{`
if product.id.tracking == "none":
    available_quantities = [ ... ]
else:
    available_quantities = [ ... ]


if allow_negative:
    # filter_negative(available_quantities)
    ...

return sum(available_quantities)
                `}</pre>
</code>
<p>
    So if we can get <code>available_quantities</code> into the same data structure despite if it's trackable
    or not, it simplifies. The same sort of <code>allow_negative</code> filter is applied either way and we can
    use the same summation function at the end too.
</p>
<h4 id="step-3">Step 3: Extract functions</h4>
<p>
    Now we can start pulling out some methods into our <code>core</code> code. I'm going to make a
    <code>core/stock_availability.py</code> module to start.
</p>
<p>
    First I want to break down exactly what's happening with the "lot trackable" scenario. The original code
    is creating a dictionary where the key is the <code>lot_id</code> and the value is the available quantity for
    that lot. Then all of the keys are essentially ignored and the values are pulled out into a list. I'm starting
    with creating a function that generates the map:
</p>
<code class="python">
    <pre>{`
from typing import List, Dict
from functools import reduce


def filter_tracked(quant) -> bool:
    """Filter function that flags tracked quants to be filtered."""
    return quant.lot_id is not None


def filter_untracked(quant) -> bool:
    """Filter function that flags untracked quants to be filtered."""
    return quant.lot_id is None


def quantities_per_lot(quants) -> Dict[str, float]:
    """
    Generates a quantity per lot map. Example return value looks like:

        {
            "untracked": 12.5,
            "lot_1": 10.0,
            "lot_2": 11.0,
            "lot_3": 12.0,

            ...
        }
    """

    tracked_quants = list(filter(filter_tracked, quants))
    untracked_quants = list(filter(filter_untracked, quants))

    res = {
        "untracked": sum([quant.quantity - quant.reserved_quantity for quant in untracked_quants]),
    }
    for quant in tracked_quants:
        res[quant.lot_id] = res.get(quant.lot_id, 0.0) + qty_available(quant)
    return res

                `}</pre>
</code>
<p>A little easier to understand:</p>
<ul>
    <li>Takes in a list of quants.</li>
    <li>
        Splits quants into an untracked list and a tracked list. Tracked means they have a a <code
            >lot_id</code
        >
        and untracked means there is no <code>lot_id</code> assigned.
    </li>
    <li>
        A dictionary is returned containing a mapping of <code>lot_id</code> -&gt; quantity available.
    </li>
</ul>
<p>
    Now we can handle that <code>if/else</code> for generating available_quantities:
</p>
<code class="python">
    <pre>{`
def availability_by_tracking(tracking, quants) -> List[float]:
    """
    Returns a list of available quantities based on a tracking status. Without
    tracking all of the quantities are summed together. With tracking the
    quantities are summed per lot.

    This does not provide mapping between the quantities and the lot numbers.
    Use the quantities_per_lot() function for that.

        availability_by_tracking("none", (stock.quant(1), stock.quant(2)))
            [56.0]

        availability_by_tracking("lot", (stock.quant(1), stock.quant(2), stock.quant(3)))
            [45.2, 34.9]
    """
    if tracking == "none":
        return [sum([quant.quantitiy - quant.reserved_quantity for quant in quants])]
    return list(quantities_per_lot(quants).values())
                `}</pre>
</code>
<code class="python">
    <pre>{`
from odoo import models.Model
from odoo.addons.stock.core import stock_availability

class Quant(Model):
    def _get_available_quantity(
        self,
        product_id,
        location_id,
        lot_id=None,
        package_id=None,
        owner_id=None,
        strict=False,
        allow_negative=False,
    ):
        self = self.sudo()
        rounding = product_id.uom_id.rounding
        quants = self._gather(
            product_id,
            location_id,
            lot_id=lot_id,
            package_id=package_id,
            owner_id=owner_id,
            strict=strict,
        )

        available_quantities = stock_availability.availability_by_tracking(
            product_id.tracking, quants
        )

        if not allow_negative:
            available_quantities = filter(
                lambda qty: float_compare(qty, 0, precision_rounding=rounding) > 0,
                available_quantities,
            )

        return sum(available_quantities)

                `}</pre>
</code>

<h4 id="step-4">Step 4: Refactor</h4>
<p>
    At this point, we have everything that we need to write tests and finish up, but it's a good point to
    refactor one more time. While writing the new code I noticed that I was repeating certain lines. For
    example, the calculation:
</p>
<code class="python">
    <pre>{`
quant.quantity - quant.reserved_quantity
                `}</pre>
</code>
<p>
    This is a pretty important line of code. It determines how the system decides what an "available" stock
    quantity is. This is a rule that ideally is stored in one place. Right now there's a risk that it gets
    changed in one calculation but not another causing a <strong>very difficult to find bug</strong>. Trust me
    I've seen too many of those types of bugs. So let's pull out a couple more functions for that:
</p>
<code class="python">
    <pre>{`
from typing import List, Dict
from functools import reduce


def qty_available(quant) -> float:
    """Rule for the definition of "available quantity" based on 1 quant object."""
    return quant.quantity - quant.reserved_quantity


def sum_availability(val, quant) -> float:
    """Reducer function to sum a collection of quants."""
    return val + qty_available(quant)
                `}</pre>
</code>
<p>Then update our original code:</p>
<code class="python">
    <pre>{`
from typing import List, Dict
from functools import reduce


def availability_by_tracking(tracking, quants) -> List[float]:
    if tracking == "none":
        return [reduce(sum_availability, quants, 0)]  # use the sum_availability reduce fn here
    ...


def quantities_per_lot(quants) -> Dict[str, float]:
    ...

    res = {
        "untracked": reduce(sum_availability, untracked_quants, 0)
    }
    for quant in tracked_quants:
        res[quant.lot_id] = res.get(quant.lot_id, 0.0) + qty_available(quant)  # use qty_available here
    return res
                `}</pre>
</code>

<h4 id="step-5">Step 5: Write and run tests</h4>
<p>
    Last step, we can write tests. Now that we have a standalone, testable set of functions we can use <code
        >unittest</code
    >
    to test these directly. I was assuming the quant records are being passed around, but one way to handle that
    in tests is to mock the quant model with just the fields that we need as a pure python class. You'll see that
    below as <code>QuantMock</code>.
</p>
<p>
    I'm not going to go through all of the tests and assertions that I did since it's really more about the
    workflow and setup than the actual test methods here.
</p>
<code class="python">
    <pre>{`
import unittest
from dataclasses import dataclass
from functools import reduce
from . import stock_availability as stock


@dataclass
class QuantMock:
    quantity: float
    reserved_quantity: float
    lot_id: int = None


class TestStock(unittest.TestCase):
    def test_qty_available(self):
        quant = QuantMock(quantity=12.5, reserved_quantity=5.2)
        assert stock.qty_available(quant) == 7.3

    def test_sum_availability(self):
        quants = [
            QuantMock(quantity=11.0, reserved_quantity=2.0),
            QuantMock(quantity=11.0, reserved_quantity=3.0),
            QuantMock(quantity=11.0, reserved_quantity=4.0),
        ]
        assert reduce(stock.sum_availability, quants, 0) == 24.0

    def test_filter_tracked_quants(self):
        quants = [
            QuantMock(quantity=11.0, reserved_quantity=2.0, lot_id=2),
            QuantMock(quantity=11.0, reserved_quantity=2.0, lot_id=7),
            QuantMock(quantity=11.0, reserved_quantity=3.0, lot_id=None),
        ]

        filtered = list(filter(stock.filter_tracked, quants))
        assert len(filtered) == 2
        assert filtered == [quants[0], quants[1]]

    def test_filter_untracked_quants(self):
        quants = [
            QuantMock(quantity=11.0, reserved_quantity=2.0, lot_id=2),
            QuantMock(quantity=11.0, reserved_quantity=2.0, lot_id=7),
            QuantMock(quantity=11.0, reserved_quantity=3.0, lot_id=None),
        ]

        filtered = list(filter(stock.filter_untracked, quants))
        assert len(filtered) == 1
        assert filtered == [quants[2]]

    def test_availability_by_tracking_without_lots(self):
        quants = [
            QuantMock(quantity=11.0, reserved_quantity=2.0),
            QuantMock(quantity=11.0, reserved_quantity=3.0),
            QuantMock(quantity=11.0, reserved_quantity=4.0),
        ]

        assert stock.availability_by_tracking("none", quants) == [24.0]

    def test_availability_by_tracking_with_lots(self):
        quants = [
            QuantMock(quantity=11.0, reserved_quantity=2.0),
            QuantMock(quantity=11.0, reserved_quantity=3.0, lot_id=1),
            QuantMock(quantity=11.0, reserved_quantity=4.0, lot_id=2),
            QuantMock(quantity=11.0, reserved_quantity=5.0, lot_id=3),
            QuantMock(quantity=11.0, reserved_quantity=5.0, lot_id=3),
        ]

        quantities = stock.availability_by_tracking("lots", quants)
        assert quantities == [
            9.0,  # untracked
            8.0,  # lot_id=1
            7.0,  # lot_id=2
            12.0,  # lot_id=3
        ]

                `}</pre>
</code>
<p>
    If you've got it all setup the way I've described above you can go into your module and run your tests
    directly from command line. On my machine, I'm getting tests to run in 0.027s. Imagine dealing with code
    as complex as
    <code>stock.quant</code> for standard Odoo tests. It would be quite a bit of setup to get unit tests like this
    done.
</p>
<code class="console">
    <pre>{`
holden:$ python3 -m unittest discover -s core -t . -v

test_availability_by_tracking_with_lots (tests.test_stock.TestStock) ... ok
test_availability_by_tracking_without_lots (tests.test_stock.TestStock) ... ok
test_filter_tracked_quants (tests.test_stock.TestStock) ... ok
test_filter_untracked_quants (tests.test_stock.TestStock) ... ok
test_qty_available (tests.test_stock.TestStock) ... ok
test_sum_availability (tests.test_stock.TestStock) ... ok

----------------------------------------------------------------------
Ran 6 tests in 0.027s

OK

                `}</pre>
</code>

<h2 id="note-on-tools">A note about tools.</h2>
<p>
    I'm using <code>unittest</code> here with the standard test runner, but you have the freedom to use what
    you want. If you wanted to use <code>pytest</code> instead, or swap out the test runner for something like
    <code>green</code>, go for it! There's no lock in since it's just pure, simple python code.
</p>

<h2 id="takeaways">Takeaways.</h2>
<p>
    There's a ton I didn't discuss here that I've been thinking about for a while with Odoo. Some problems and
    some additional benefits with this type of setup, but I think overall the benefits outweigh the cons.
</p>
<p>
    If enough of your code was written into more pure python, the cost saving of migrating from one major
    version of Odoo to another might be a big enough benefit on its own, without even thinking about the
    benefits to day to day developers working on these systems.
</p>
<p>
    There's some work to do with integrating this into your CI pipeline or pre-commit checks, but relatively
    easy compared to the standard Odoo tests.
</p>
<p>
    I hope this is a pattern that the Odoo community can start utilizing going forward. I'd love to talk to
    other developers about architecting their code so if you have any question or ideas, please reach out to
    me.
</p>
<p>Best of luck coding.</p>
<p>- Holden</p>
