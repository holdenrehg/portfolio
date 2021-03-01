import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"

const meta = new Meta({
  id: "2019-03-03_odoo-tricks-and-tools",
  title: "Odoo tricks and tools",
  datePosted: "2019-03-03",
  coverImage: "/blog/odoo-tricks-and-tools/cover.jpg",
  description: `
    There’s a set of built-in tools associated with the Odoo framework that many
    developers / third-party modules often overlook (found in the Odoo core
    under odoo/tools). I’m going to outline and provide examples for some of the
    most common functions and variables.
  `,
  tags: [
    Tags.Python,
    Tags.Odoo,
    Tags.Erp,
    Tags.WebDevelopment,
  ],
  related: [
    "2019-09-04_guide-to-erp",
    "2020-03-29_daily-odoo-team-routine",
    "2019-02-02_writing-tests-in-odoo",
  ],
})

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <h2>Intro</h2>
      <p><span className="first-letter">T</span>here’s a set of built-in <code>tools</code> associated with the Odoo framework that many developers / third-party modules often overlook (found in the Odoo core under <code>odoo/tools</code>).</p>
      <p>I’m going to outline and provide examples for some of the most common functions and variables.</p>

      <h2>Preface</h2>
      <p>All of the commands run below, I’m running in an Odoo shell instance. It makes it easy to test out all of the different tools available to you. If you aren’t sure how to run an Odoo shell, then <a href="/blog/2019-02-16_run-an-odoo-repl">see my article on it called Run An Odoo REPL</a>.</p>

      <h2>The tools</h2>
      <h3>config</h3>
      <p>Some helpers related to the odoo.conf configuration file or the configuration parameters passed into the odoo.py executable at start.</p>
      <code className="python">
        <pre>{`
from odoo.tools import config


config.get("db_name")
# "odoo"

config.filestore(config.get("db_name"))
# "/var/lib/odoo/filestore/odoo"

config.session_dir
# "/var/lib/odoo/sessions"

config.options
# {
#     "addons_paths": "/opt/odoo/core/odoo/addons",
#     "auto_reload": False,
#     "db_host": "db",
# }
        `}</pre>
      </code>

      <h3><strong>convert</strong></h3>
      <p>Conversion helpers. These are primarily focused on conversion of data types such as xml and csv specific to Odoo, but one of the simpler function built into <code>convert</code> is <code>str2bool</code> that has many common use cases. Especially if working with APIs and integrations.</p>
      <code className="python">
        <pre>{`
from odoo.tools import convert


convert.str2bool("0")  # False
convert.str2bool("false")  # False
convert.str2bool("False")  # False

convert.str2bool("1")  # True
convert.str2bool("true")  # True
convert.str2bool("True")  # True
        `}</pre>
      </code>

      <h3>date_utils — getters</h3>
      <p>There are a few built-in functions for getting ranges and references to different time periods. These are specific to certain periods like “month”, “quarter”, “fiscal year”, etc.</p>
      <code className="python">
        <pre>{`
from odoo import fields
from odoo.tools import date_utils


sample_date = fields.Datetime.now()  # assume it's March 3rd, 2019

date_utils.get_month(sample_date)
# Returns the range for the first day of the month to the last
# (datetime.datetime(2019, 3, 1, 0, 0), datetime.datetime(2019, 3, 31, 0, 0))

date_utils.get_quarter(sample_date)
# Returns the range for the first day of the fiscal quarter to the last
# (datetime.datetime(2019, 1, 1, 0, 0), datetime.datetime(2019, 3, 31, 0, 0))

date_utils.get_quarter_number(sample_date)
# Returns the number of the current quarter (1, 2, 3, or 4) based on the date
# 1 in this case

date_utils.get_fiscal_year(sample_date)
# Returns the range for the first day of the fiscal year to the last
# (datetime.datetime(2019, 1, 1, 0, 0), datetime.datetime(2019, 12, 31, 0, 0))
        `}</pre>
      </code>

      <h3>date_utils — range helpers</h3>
      <p>Behind the scenes of the getter functions above, you also have generic range helpers.</p>
      <code className="python">
        <pre>{`
from dateutil.relativedelta import relativedelta
from odoo import fields
from odoo.tools import date_utils


sample_date = fields.Datetime.now()  # assume it's March 3rd, 2019

date_utils.start_of(sample_date, "hour")  # datetime.datetime(2019, 3, 3, 17, 0)
date_utils.start_of(sample_date, "day")  # datetime.datetime(2019, 3, 3, 0, 0)
date_utils.start_of(sample_date, "week")  # datetime.datetime(2019, 2, 25, 0, 0)
date_utils.start_of(sample_date, "month")  # datetime.datetime(2019, 3, 1, 0, 0)
date_utils.start_of(sample_date, "quarter")  # datetime.datetime(2019, 1, 1, 0, 0)
date_utils.start_of(sample_date, "year")  # datetime.datetime(2019, 1, 1, 0, 0)

date_utils.end_of(sample_date, "hour")  # datetime.datetime(2019, 3, 3, 17 59, 59, 999999)
date_utils.end_of(sample_date, "day")  # datetime.datetime(2019, 3, 3, 23, 59, 59, 999999)
date_utils.end_of(sample_date, "week")  # datetime.datetime(2019, 3, 3, 23, 59, 59, 999999)
date_utils.end_of(sample_date, "month")  # datetime.datetime(2019, 3, 31, 23, 59, 59, 999999)
date_utils.end_of(sample_date, "quarter")  # datetime.datetime(2019, 3, 31, 23, 59, 59, 999999)
date_utils.end_of(sample_date, "year")  # datetime.datetime(2019, 12, 31, 23, 59, 59, 999999)

for date in date_utils.date_range(
    start=sample_date,
    end=date_utils.add(sample_date, days=15),
    step=relativedelta(days=1),
):
    print(date)

# 2019-03-03 17:29:03
# 2019-03-04 17:29:03
# 2019-03-05 17:29:03
# 2019-03-06 17:29:03
# 2019-03-07 17:29:03
# 2019-03-08 17:29:03
# 2019-03-09 17:29:03
# 2019-03-10 17:29:03
# 2019-03-11 17:29:03
# 2019-03-12 17:29:03
# 2019-03-13 17:29:03
# 2019-03-14 17:29:03
# 2019-03-15 17:29:03
# 2019-03-16 17:29:03
# 2019-03-17 17:29:03
# 2019-03-18 17:29:03
        `}</pre>
      </code>

      <h3>date_utils — calculations</h3>
      <p>Also in the date_utils, there are a couple of abstractions to make simple date calculations easy.</p>
      <code className="python">
        <pre>{`
from odoo import fields
from odoo.tools import date_utils


sample_date = fields.Datetime.now()  # assume it's March 3rd, 2019

date_utils.add(sample_date, days=5)  # datetime.datetime(2019, 3, 8, 17, 29, 3)
date_utils.add(sample_date, weeks=2)  # datetime.datetime(2019, 3, 17, 17, 29, 3)
date_utils.add(sample_date, months=1)  # datetime.datetime(2019, 4, 3, 17, 29, 3)
date_utils.add(sample_date, years=1)  # datetime.datetime(2019, 3, 3, 17, 29, 3)
date_utils.add(sample_date, days=2, months=6, years=1)  # datetime.datetime(2019, 9, 5, 17, 29, 3)

date_utils.subtract(sample_date, days=5)  # datetime.datetime(2019, 2, 26, 17, 29, 3)
date_utils.subtract(sample_date, weeks=2)  # datetime.datetime(2019, 2, 17, 17, 29, 3)
date_utils.subtract(sample_date, months=1)  # datetime.datetime(2019, 2, 3, 17, 29, 3)
date_utils.subtract(sample_date, years=1)  # datetime.datetime(2019, 3, 3, 17, 29, 3)
date_utils.subtract(sample_date, days=2, months=6, years=1)  # datetime.datetime(2019, 9, 1, 17, 29, 3)
        `}</pre>
      </code>

      <h3><strong>float_utils</strong></h3>
      <p>A set of helpers related to floating point numbers.</p>
      <code className="python">
        <pre>{`
from odoo.tools import float_utils


float_utils.float_round(
    1.5424,
    precision_digits=2,
    rounding_method="DOWN",
)  # 1.54

float_utils.float_round(
    1.5424,
    precision_digits=3,
    rounding_method="UP",
)  # 1.543

float_utils.float_round(
    1.5424,
    precision_digits=3,
    rounding_method="HALF-UP",
)  # 1.542

float_utils.float_is_zero(0.04252, precision_digits=5)  # False
float_utils.float_is_zero(0.04252, precision_digits=1)  # True

float_utils.float_compare(0.042555, 0.04256, precision_digits=5)  # 0 => equal
float_utils.float_compare(0.042555, 0.04256, precision_digits=6)  # -1 => value1 is lower than value2

        `}</pre>
      </code>

      <h3>image</h3>
      <p>Set of tools for manipulating images.</p>
      <code className="python">
        <pre>{`
from odoo.tools import image


image.image_resize_image(img, size=(500, 500))
image.image_resize_and_sharpen(img, size=(500, 500))

with open("/tmp/my_image.png", "w") as f:
    image.image_save_for_web(img, f)
        `}</pre>
      </code>

      <h3>mail</h3>
      <p>Different helpers written to help create emails, but generally help with parsing and generating html.</p>
      <code className="python">
        <pre>{`
from odoo.tools import mail


mail.html_keep_url("http://google.com")
# '<a href="https://google.com" rel="noreferrer" target="_blank">https://google.com</a>'

html = '''
<html>
  <head>
    <script src="/my/script.js"/>
  </head>
  <body>
    <p>
      <span>A cool html email with <a href="https://google.com">a link to goolge.</a></span>
    </p>
  </body>
</html>
'''

mail.html.sanitize(html)
# '\n\n<p>\n<span>A cool html email with <a href="https://google.com">a link to google.</a></span>'

mail.html2plaintext(html)
# A cool html email with a link to google.com. [1]
# [1] https://google.com

mail.plaintext2html(mail.html2plaintext(html))
# <p><br/>A cool html email with a link to google.com.</p>
        `}</pre>
      </code>

      <h3><strong>misc</strong></h3>
      <p>Lots of little miscellaneous helpers that come in handy.</p>
      <code className="python">
        <pre>{`
from odoo.tools import misc


misc.DEFAULT_SERVER_DATE_FORMAT  # "%Y-%m-%d"
misc.DEFAULT_SERVER_TIME_FORMAT  # "%H:%M:%S"
misc.DEFAULT_SERVER_DATETIME_FORMAT  # "%Y-%m-%d %H:%M:%S"

misc.flatten([[["a", "b"], "c"], "d", ["e", [], "f"]])
# ["a", "b", "c", "d", "e", "f"]

for i, el in misc.reverse_enumerate(["a", "b", "c"]):
    print(i, el)

# 2 c
# 1 b
# 0 a

misc.topological_sort(
    {
        "a": ["b", "c"],
        "b": ["c"].
        "d": ["a"],
        "r": ["y"],
        "y": ["z"],
    }
)
# ["y", "b", "a", "r", "d"]

misc.scan_languages()
# [
#     ("sq_AL", "Albanian / Shqip")],
#     ...
#     ("zh_HK", "Chinese (HK)")],
#     ...
# ]

misc.human_size(1024, * 10)  # "10.00 Kb"
misc.human_size(1024 * 10000)  # "9.77 Mb"
misc.human_size(1024 * 10000000)  # "9.54 Gb"

for split in misc.split_every(iterable=["a", "b", "c", "d"], n=2):
    print(split)

# ("a", "b")
# ("c", "d")

misc.groupby(
    [
        {"first_name": "Jon", "last_name": "Stewart"},
        {"first_name": "Martha", "last_name": "Stewart"},
        {"first_name": "Rod", "last_name": "Stewart"},
        {"first_name": "Jow", "last_name": "Jackson"},
    ],
    key=lambda el: el["last_name"]
)
# dict_items(
#     [
#         ("Jackson", [
#             {"first_name": "Joe", "last_name": "Jackson"},
#         ],
#         ("Stewart": [
#             {"first_name": "Jon", "last_name": "Stewart"},
#             {"first_name": "Martha", "last_name": "Stewart"},
#             {"first_name": "Rod", "last_name": "Stewart"},
#         ])
#     ]
# )

list(misc.unique(["a", "a", "b", "c"]))
# ["a", "b", "c"]
        `}</pre>
      </code>

      <h2>The others</h2>
      <p>Check out some of the other modules that we didn’t cover. All of these are kept in the core repository under <code>odoo/tools</code> . There are tools for interaction with the local filesystem via <code>osutil.py</code> , pdf helpers via <code>pdf.py</code> , profiling and debugging tools under <code>profiler.py</code> or <code>debugger.py</code> , and some data structures built from scratch under <code>graph.py</code> and <code>lru.py</code> .</p>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
