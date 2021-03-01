import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"

const meta = new Meta({
  id: "2019-02-02_writing-tests-in-odoo",
  title: "Writing tests in Odoo",
  subtitle: "Organizing, Writing, and Running Automated Tests",
  datePosted: "2019-02-02",
  coverImage: "/blog/writing-tests-in-odoo/cover.jpeg",
  description: `
  Testing with Odoo, in any version, is not 100% straight forward. There are
  some different tricks and requirements that aren’t always made clear. So I
  wanted to write up everything that my team and I at Blue Stingray have
  learned
  `,
  tags: [
    Tags.SoftwareTesting,
    Tags.WebDevelopment,
    Tags.Odoo,
    Tags.Python,
    Tags.UnitTesting,
  ],
  related: [
      "2020-03-29_daily-odoo-team-routine",
      "2020-01-29_chaining-context-managers-for-mocks",
      "2019-03-09_odoo-down-for-maintenance",
  ],
})

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
        <h2>Introduction</h2>
        <p><span className="first-letter">T</span>esting with Odoo, in any version, is not 100% straight forward. There are some different tricks and requirements that aren’t always made clear.</p>
        <p>So I wanted to write up everything that my team and I at <a href="https://bluestingray.com" rel="noreferrer" target="_blank">Blue Stingray</a> have learned about Odoo testing over the last few years. We’ve luckily been able to learn a ton.</p>
        <p>This is not an explanation on <strong>what</strong> to test. There are plenty of great articles and books out there for what should you be testing, and maybe I’ll write up a summary of those one day. But for now, this is strictly an explanation on how to organize, write, and run some example tests in Odoo.</p>
        <p>I will try to thoroughly cover:</p>
        <ul>
            <li>Setting up a module for tests</li>
            <li>Writing a test within the Odoo framework boundaries</li>
            <li>Running your Odoo / module test suite</li>
        </ul>

        {/* === */}

        <h2>Requirements</h2>
        <p>What do you need?</p>
        <ul>
            <li>A running instance of Odoo.</li>
            <li>A custom Odoo module (I’ll provide a sample).</li>
        </ul>
        <p>I will be referencing Odoo 12, but Odoo 9 to 12 have pretty similar testing frameworks. There were no huge changes between recent versions.</p>
        <p>Also, you may want to check out a <a href="/blog/2019-01-27_dockerized-odoo-development">Simple Introduction To Docker Development In Odoo</a> since I will be referencing some Docker commands.</p>

        {/* === */}

        <h2>Module Structure</h2>
        <p>
            Let’s create a sample module. For reference, all sample code is in a repository at
            <a href="https://github.com/holdenrehg/sample_test_module" rel="noreferrer" target="_blank">https://github.com/holdenrehg/sample_test_module</a>.
        </p>
        <code className="console">
            <pre>{`
test_module
├── doc
├── helpers
├── models
├── security
├── static
├── tests
├── __manifest__.py
├── __init__.py
├── init.xml
└── readme.md
            `}</pre>
        </code>
        <p>
            I’m creating a sample module called <code>test_module</code> which will contain all of my sample tests and
            code. You will see quite a few directories above, many just “standards” introduced by Odoo in general, but
            the most important directory will be <code>tests</code>.
        </p>
        <h3>The Tests Directory</h3>
        <code className="console">
            <pre>{`
test_module/tests/
├── unit
│   ├── test_tweeter_helper.py
│   ├── test_twitter_tweet_model.py
│   ├── test_string_helper.py
│   ├── test_twitter_settings_model.py
│   └── __init__.py
└── __init__.py
            `}</pre>
        </code>
        <p>
            You can organize your tests directory however you would like, but I often will try to break up different
            types of tests. In the example above you can see that we have <code>tests/unit</code> for all of our unit
            tests. Maybe if we kept building this out, we would introduce <code>tests/integration</code>,
            <code>tests/security</code>, etc.
        </p>
        <h3>Some Sample Models and Helpers</h3>
        <p>Also inside of our module, we have 2 models and 2 helpers to use as examples for writing some tests.</p>
        <p>
            Again, this is just convention to have a <code>models</code> folder and a <code>helpers</code> folder for
            Odoo modules, but as long as your <code>__init__</code> files are properly importing files you can organize
            your module however you would like.
        </p>
        <code className="console">
            <pre>{`
test_module/helpers
├── string.py
├── tweeter.py
└── __init__.py
test_module/models/
├── twitter
│   ├── tweet.py
│   ├── settings.py
│   └── __init__.py
└── __init__.py
            `}</pre>
        </code>

        {/* === */}

        <h2>Module Files</h2>
        <p>Let’s dig into the contents of some of these sample files that I’ve written for you. I’m not quite going to get into the <code>tests</code> folder until the section below.</p>
        <h3>__manifest__.py</h3>
        <p>Because we are using 12.0 we require a manifest file. If we were looking at 9.0 and back we may have an <code>__openerp__.py</code> file in the root of our module, but the general contents will be the same.</p>
        <code className="python">
            <pre>{`
# -*- coding: utf-8 -*-
# noinspection PyStatementEffect
{
    'name': 'Sample Testing Module',
    'category': 'Testing',
    'version': '12.0.0',
    'author': 'Holden Rehg',

    # |-------------------------------------------------------------------------
    # | Dependencies
    # |-------------------------------------------------------------------------
    # |
    # | References of all modules that this module depends on. If this module
    # | is ever installed or upgrade, it will automatically install any
    # | dependencies as well.
    # |

    'depends': ['web'],

    # |-------------------------------------------------------------------------
    # | Data References
    # |-------------------------------------------------------------------------
    # |
    # | References to all XML data that this module relies on. These XML files
    # | are automatically pulled into the system and processed.
    # |

    'data': [

        # Security Records...
        'security/ir.rule.csv',
        'security/ir.model.access.csv',

        # General/Data Records...
        'init.xml',
    ],

    # |-------------------------------------------------------------------------
    # | Demo Data
    # |-------------------------------------------------------------------------
    # |
    # | A reference to demo data
    # |

    'demo': [],

    # |-------------------------------------------------------------------------
    # | Is Installable
    # |-------------------------------------------------------------------------
    # |
    # | Gives the user the option to look at Local Modules and install, upgrade
    # | or uninstall. This seems to be used by most developers as a switch for
    # | modules that are either active / inactive.
    # |

    'installable': True,

    # |-------------------------------------------------------------------------
    # | Auto Install
    # |-------------------------------------------------------------------------
    # |
    # | Lets Odoo know if this module should be automatically installed when
    # | the server is started.
    # |

    'auto_install': False,
}
            `}</pre>
        </code>
        <h3>A Couple Sample Models</h3>
        <p>We have an extremely creative, and definitely unique (no one has used Twitter for their development tutorial before, right?) set of models to mess around with.</p>
        <p>The first is a Twitter settings model. This is going to be a class that stores a username and a password. These would be credentials for accessing Twitter accounts if this module was expanding out to a functioning module.</p>
        <code className="python">
            <pre>{`
# -*- coding: utf-8 -*-
from odoo import _, api, fields, models


class TwitterSettings(models.Model):
	_name = 'twitter.settings'

	username = fields.Char(string='Username')
	password = fields.Char(string='Password')
	connected = fields.Boolean(string='Connected', default=False)

	def connect(self):
	    """
	    Attempt to connect to Twitter.
	    """
	    self.ensure_one()
	    self.update({'connected': True, })
            `}</pre>
        </code>
        <p>The second is a Tweet model. This is a data model that contains the description of the tweet, and constraints for the tweet. For example, you cannot generate a tweet that is longer than 140 character.</p>
        <p>This gives us a clear restriction where we can write some tests to ensure that restriction is being enforced by the system.</p>
        <code className="python">
            <pre>{`
# -*- coding: utf-8 -*-
from odoo import _, api, fields, models
from odoo.exceptions import ValidationError


class Tweet(models.Model):
	_name = 'twitter.tweet'
	_rec_name = 'description'

	description = fields.Text(string='Description', size=140, required=True)

	@api.constrains('description')
	def constrain_description(self):
		"""
		Raises a ValidationError if tweets are longer than 140 characters.
		"""
		if self and len(self.description) > 140:
			raise ValidationError('Tweets cannot be longer than 140 characters.')
            `}</pre>
        </code>
        <h3>A Couple Sample Helpers</h3>
        <p>Now we need 2 helpers. We have the Twitter data models, but we need an easy way to make a tweet and an easy way to truncate off characters down.</p>
        <p>
            So that leaves us with a <code>string.py</code> helper and a <code>tweeter.py</code> helper for our
            <code>Tweeter</code> class.
        </p>
        <code className="python">
            <pre>{`
# -*- coding: utf-8 -*-

def limit(str, size):
	"""
	Truncate a string down to a certain size limit.
	In the case where the string is less than size it will
	return the string as is.
	:param str: The string to truncate.
	:param size: The max number of characters the string can be.
	:return: The size limited string.
	"""
	if len(str) <= size:
		return str
	return str[0:size]
            `}</pre>
        </code>
        <code className="python">
            <pre>{`
# -*- coding: utf-8 -*-

class Tweeter():
	def __init__(self, settings):
		"""
		Initialize the Tweeter object.
		"""
		self.settings = settings

	def tweet(self, description):
		"""
		Create a tweet.
		:param description: The content of the tweet.
		:return: The generated tweet.
		"""
		return self.settings.env['twitter.tweet'].create({
			'description': description, })
            `}</pre>
        </code>

        {/* === */}

        <h2>Writing A Test — Requirements</h2>
        <p>Alright, we got a sweet Twitter module built out now.</p>
        <p>How do we write a test for it? First, there are some requirements specific to the Odoo testing framework that we must adhere to. You’ll see how these apply in the sample tests I’ve written, but here’s what you need to think about:</p>
        <ul>
            <li>All tests must be included in <code>tests/__init__.py</code></li>
            <li>All tests must extend an Odoo test case class</li>
            <li>All tests must be put inside of the <code>tests</code> directory in your module</li>
            <li>All test files must start with <code>test_&lt;what_your_testing&gt;.py</code></li>
            <li>All test methods must start with <code>def test_&lt;what_your_testing&gt;(self):</code></li>
        </ul>
        <h3>All Tests Must Be Included In <code>tests/__init__.py</code></h3>
        <p>Even if they are nested deeper. So in the case of our sample module, we have 4 tests:</p>
        <ul>
            <li><code>tests/unit/test_string_helper.py</code></li>
            <li><code>tests/unit/test_tweeter_helper.py</code></li>
            <li><code>tests/unit/test_twitter_settings_model.py</code></li>
            <li><code>tests/unit/test_twitter_tweet_model.py</code></li>
        </ul>
        <p>If you look at the <code>tests/__init__.py</code> file then you will see the following:</p>
        <code className="python">
            <pre>{`
# -*- coding: utf-8 -*-
from .unit import test_string_helper
from .unit import test_tweeter_helper
from .unit import test_twitter_settings_model
from .unit import test_twitter_tweet_model
            `}</pre>
        </code>
        <p>Make sure to always include your test file in this <code>__init__.py</code> file for the system to recognize the test.</p>
        <h4>Extend An Odoo Test Class</h4>
        <p>There are some pre-existing test classes for you to work with, but you need to extend one of them.</p>
        <code className="python">
            <pre>{`
odoo.tests.common.TransactionCase <--- Most common
odoo.tests.common.SingleTransactionCase
odoo.tests.common.HttpCase
odoo.tests.common.SavepointCase
            `}</pre>
        </code>
        <p>So your tests classes will look something like the following:</p>
        <code className="python">
            <pre>{`
# -*- coding: utf-8 -*-
from odoo.tests import TransactionCase

class MyTest(TransactionCase):
    ...
            `}</pre>
        </code>
        <h3><strong>Put Your Tests In The Tests Folder</strong></h3>
        <p>You can get a little bit creative with your module organization, except when it comes to things like tests, make sure they are in the <code>tests</code> folder.</p>
        <p>Otherwise, the testing framework will ignore them.</p>
        <code className="console">
            <pre>{`
test_module/tests/
├── unit
│   ├── test_tweeter_helper.py
│   ├── test_twitter_tweet_model.py
│   ├── test_string_helper.py
│   ├── test_twitter_settings_model.py
│   └── __init__.py
└── __init__.py
            `}</pre>
        </code>
        <h3>All Test Files Must Start With test_</h3>
        <p>As you are making your tests (and putting them in the <code>tests</code> folder), make sure that all of your test files are prefixed with <code>test_</code> .</p>
        <p>There’s a reason why, in my example, that my test files are named things like <code>test_tweeter_helper.py</code> or <code>test_string_helper.py</code> .</p>
        <h3>All Test Methods Must Start With test_</h3>
        <p>I haven’t actually shown you a full test class or method yet, but when you add methods to your test class (which is inside of the <code>tests</code> folder and inside of a file prepended with <code>tests_&lt;filename&gt;.py</code>) then you also have to prefix it with <code>test_</code> .</p>
        <p>I know it’s feeling a little overkill, but this is the last <code>test_</code> you will need.</p>
        <code className="python">
            <pre>{`
# -*- coding: utf-8 -*-
from odoo.tests import TransactionCase
class MyTest(TransactionCase):
    def test_should_evaluate_true(self):  <----
        ...
            `}</pre>
        </code>

        {/* === */}

        <h2>Writing A Test — Examples</h2>
        <p>Now you know those 5 requirements above for actually writing a test.</p>
        <p>Here’s what one looks like:</p>
        <code className="python">
            <pre>{`

# -*- coding: utf-8 -*-
from odoo.tests import TransactionCase
from odoo.addons.test_module.helpers import string


class StringHelperTest(TransactionCase):
	def test_string_should_truncate_when_greater(self):
		self.assertEqual(len(string.limit('A short string...', size=5)), 5)

	def test_string_should_do_nothing_when_same_size(self):
		sample_str = 'This is my sample string.'
		sample_str_len = len(sample_str)
		self.assertEqual(len(string.limit(sample_str, sample_str_len)), sample_str_len)

	def test_string_should_do_nothing_when_less_than(self):
		sample_str = 'Another cool sample string!'
		sample_str_len = len(sample_str)
		self.assertEqual(len(string.limit(sample_str, sample_str_len)), sample_str_len)
            `}</pre>
        </code>
        <p>This is our unit test for the string helper. So this is under <code>tests/unit/test_string_helper.py</code> and is testing our helper at <code>helpers/string.py</code> .</p>
        <p>I’m not going to dig too far into what you should be trying to test for or all of the assertion method available to you (check out the <a href="https://docs.python.org/2/library/unittest.html#assert-methods" rel="noreferrer" target="_blank">list of assertion methods for unittest2</a> or the <code>odoo/test/common.py</code> file in Odoo core.)</p>
        <p>Hopefully, you can get a general idea from the example above for how to write some sample test methods.</p>
        <p>I wrote 3 methods in that example above:</p>
        <ol>
            <li>Does our string helper properly truncate a string when the string is longer than the size limit?</li>
            <li>Does our string helper do nothing when the string is exactly the size limit?</li>
            <li>Does our string helper do nothing when the string is less than the size limit?</li>
        </ol>
        <p>To do this, I need to import our string helper from the module via a <code>from odoo.addons.test_module.helpers import string</code> call, create some sample strings to work with, call the <code>string.limit(...)</code> function that I’m trying to test, and then assert that the return values are equal to the expected results.</p>
        <code className="python">
            <pre>{`
def test_string_should_do_nothing_when_same_size(self):
    sample_str = 'This is my sample string.'
    sample_str_len = len(sample_str)

    self.assertEqual(
        # Actual results from function call...
        len(string.limit(sample_str, sample_str_len)),
        # Expected results from the function call...
        sample_str_len
    )
            `}</pre>
        </code>
        <p>Make sure to check out the other 3 test classes that I wrote as well for some more example tests:</p>
        <a href="https://github.com/holdenrehg/sample_test_module/tree/master/test_module/tests/unit" rel="noreferrer" target="_blank"></a>

        {/* === */}

        <h2>Running Tests</h2>
        <p>Finally, we can try to run some tests. I’m going to show you how to run these via Docker and Docker Compose, but you can also run these directly from the <code>odoo.py</code> or <code>odoo-bin</code> executables.</p>
        <h3>Requirements</h3>
        <p>More requirements.</p>
        <p>Similar to the requirements for writing a test. There are a few things that we need for running the test suite.</p>
        <ul>
            <li>A database instance WITH demo data. So when you are creating a database from that database creation screen, <strong>make sure to mark to include demo data</strong>.</li>
            <li>Run odoo with the <code>--test-enable</code> flag.</li>
            <li>Run odoo with the <code>-d {'{my_database'}</code> flag.</li>
            <li>Run odoo with the <code>-i {'{modules_to_install}'}</code> flag.</li>
            <li>(optional) Sometimes it’s also nice to use <code>--stop-after-init</code> .</li>
        </ul>
        <h3>Run The Tests</h3>
        <p><strong>With Docker</strong></p>
        <p>1. Clone down the sample project</p>
        <code className="console">
            <pre>{`
$ git clone https://github.com/holdenrehg/sample_test_module.git
$ cd sample_test_module
            `}</pre>
        </code>
        <p>2. Start up the instance and create a new database called <code>test_1</code> <strong>with demo data</strong>. If you do not make your database first, the command in step #3 will automatically create the database but also run tests on core modules (this can take a while).</p>
        <code className="console">
            <pre>{`
$ docker-compose up -d
            `}</pre>
        </code>
        <p>3. Stop your instance and then re-run the container with the proper arguments for testing.</p>
        <code className="console">
            <pre>{`
$ docker-compose stop
$ docker-compose run web \\
    --test-enable \\
    --stop-after-init \\
    -d test_1 \\
    -i test_module
            `}</pre>
        </code>
        <p><strong>Without Docker</strong></p>
        <p>If you are running your own local instance:</p>
        <p>1. Clone down the sample project and move the addon into your addons directory.</p>
        <code className="console">
            <pre>{`
$ git clone https://github.com/holdenrehg/sample_test_module.git
$ mv sample_test_module/test_module {my_project/my_addons/}
            `}</pre>
        </code>
        <p>2. Make a database called <code>test_1</code> <strong>with demo data</strong>. If you do not make your database first, the command in step #3 will automatically create the database but also run tests on core modules (this can take a while).</p>
        <p>3. Run your odoo instance with the proper arguments for testing.</p>
        <code className="console">
            <pre>{`
$ odoo.py \\
      --test-enable \\
      --stop-after-init \\
      -d test_1 \\
      -i test_module
            `}</pre>
        </code>
        <h3>Test Results</h3>
        <p><strong>Good Results</strong></p>
        <p>If everything runs successfully then you will see the following in the log:</p>
        <img src="/blog/writing-tests-in-odoo/good-results.png"/>
        <p>It gives you a lot of information to parse, but you will be looking for each section that says something similar to<code>odoo.addons.test_module.tests.unit.test_string_helper running test</code> because that will be an individual test class/test case. You can see where it runs each method in the test case.</p>
        <p>Example Results For String Helper Tests</p>
        <code className="console">
            <pre>{`
2019-02-02 20:11:36,199 1 INFO test_1 odoo.modules.module: odoo.addons.test_module.tests.unit.test_string_helper running tests.
2019-02-02 20:11:36,200 1 INFO test_1 odoo.addons.test_module.tests.unit.test_string_helper: test_string_should_do_nothing_when_less_than (odoo.addons.test_module.tests.unit.test_string_helper.StringHelperTest)
2019-02-02 20:11:36,278 1 INFO test_1 odoo.addons.test_module.tests.unit.test_string_helper: test_string_should_do_nothing_when_same_size (odoo.addons.test_module.tests.unit.test_string_helper.StringHelperTest)
2019-02-02 20:11:36,279 1 INFO test_1 odoo.addons.test_module.tests.unit.test_string_helper: test_string_should_truncate_when_greater (odoo.addons.test_module.tests.unit.test_string_helper.StringHelperTest)
2019-02-02 20:11:36,280 1 INFO test_1 odoo.addons.test_module.tests.unit.test_string_helper: Ran 3 tests in 0.080s
2019-02-02 20:11:36,280 1 INFO test_1 odoo.addons.test_module.tests.unit.test_string_helper: OK
            `}</pre>
        </code>
        <p><strong>Bad Results</strong></p>
        <p>All the tests don’t pass all the time, so let’s check out our log for a failing test.</p>
        <img src="/blog/writing-tests-in-odoo/good-results.png"/>
        <p>You’ll see where again we get the logger for <code>odoo.addons.test_module.tests.unit.test_string_helper running tests</code> and then each method that runs below it.</p>
        <p>In this scenario (where I forced a method to fail) we can see a stack trace with the problem:</p>
        <code className="python">
            <pre>{`
FAIL: test_string_should_truncate_when_greater (odoo.addons.test_module.tests.unit.test_string_helper.StringHelperTest)
Traceback (most recent call last):
   File "/mnt/extra-addons/test_module/tests/unit/test_string_helper.py", line 8, in test_string_should_truncate_when_greater
     self.assertEqual(len(string.limit('A short string...', size=6)), 5)
 AssertionError: 6 != 5
            `}</pre>
        </code>
        <p>Pretty clear that our <code>string.limit</code> method ran with <code>size=6</code> but we were expecting the length of the final string to be equal to 5. This looks like a problem with our test instead of the functionality of the method, so we can fix that and re-run our test suite.</p>

        {/* === */}

        <h2>Conclusion</h2>
        <p>There’s a little bit of an additional learning curve testing in Odoo, especially if you are used to working on a vanilla python project with tools like pytest or unittest2.</p>
        <p>But if you are an Odoo developer day-to-day it’s worth it.</p>
        <p>Write more tests.</p>
        <p>Then write even more tests.</p>
        <p>They can save your ass in the long run especially as your testing suite builds up and provides more and more coverage of your project.</p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
