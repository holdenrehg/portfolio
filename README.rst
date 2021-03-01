=========
Portfolio
=========

My personal portfolio website.

Configuring environment
=======================

There are two environment files for the application. The `.flaskenv` file are public
environment variables used by everyone while the `.env` is ignored and project specific.
Starting with the sample file will get you going initially:

Getting started with venv
=========================

**1. Activate the virtual environment:**

.. code-block:: bash

    $ python3 -m venv venv
    $ source venv/bin/activate

**2. Install dependencies:**

.. code-block:: bash

    $ (venv) python -m pip install -r requirements.txt

Running the project for development
===================================

The frontend and backup are run separately.

.. code-block:: bash

    $ (venv) gatsby develop

.. code-block:: bash

    $ (venv) flask run

Deployments
===========

Server configuration
--------------------

Here are instructions for configuring a server for this project and the process
to deploy it out.

**1. Switch users**

Create a new user, if needed:

.. code-block:: bash

    $ sudo adduser -s /bin/bash -d /home/buster buster
    $ sudo usermod -G sudo buster
    $ sudo passwd buster

Use the non-root user that has sudo access:

.. code-block:: bash

    $ su - buster

**2. Install system packages**

One way or another, you need to get `node` and `npm`. I recommend `nvm` at the
moment to install it directly under the user created above. See the nvm
website at https://nvm.sh for instructions.

Then go forward with standard apt packages:

.. code-block:: bash

    $ sudo apt-get update
    $ sudo add-apt-repository ppa:certbot/certbot
    $ sudo apt-get update

    $ sudo apt-get install git nginx ufw certbot python3-certbot-nginx
    $ sudo npm install -g gatsby-cli

**3. Clone and access the code**

Keep the project in the user's root directory.

If you don't already have the code, clone it:

.. code-block:: bash

    $ mkdir -p ~/apps
    $ cd ~/home/apps
    $ git clone https://github.com/holdenrehg/portfolio.git

Once cloned, move into the directory to start configuring

.. code-block:: bash

    $ cd ~/home/apps/portfolio

**4. Generate the site**


.. code-block:: bash

    $ npm update --force
    $ gatsby build

    # file permissions
    $ chmod 600 -R ./portfolio  # set defaults, only user access
    $ find ./portfolio -type d -exec chmod ug+rx {} \;  # give user/groups read and execute on directories
    $ find ./portfolio -type f -exec chmod ug+r {} \;  # give user/groups read on files

**5. Configure nginx**

Open up the firewall:

.. code-block:: bash

    $ sudo ufw allow 'Nginx HTTP'
    $ sudo ufw allow 'Nginx HTTPS'
    $ sudo ufw allow 'OpenSSH'
    $ sudo ufw enable  # if not already enabled

Create the virtual host file:

.. code-block:: bash

    $ sudo vi /etc/nginx/sites-available/<domain.com>.conf
    $ sudo ln -s /etc/nginx/sites-available/<domain.com>.conf /etc/nginx/sites-enabled/<domain.com>.conf

.. code-block:: nginx

    server {
        root /home/<user>/apps/portfolio/public;
        index index.html index.htm index.nginx-debian.html;
        server_name <domain.com>;

        location / {
            try_files $uri $uri/ =404;
        }
    }

Test and restart (if ok) the nginx service to see the site:

.. code-block:: bash

    $ sudo nginx -t
    $ sudo service nginx restart


**6. Configure SSL**

.. code-block:: bash

    $ sudo certbot --nginx

Once you go through the dialogs, restart the nginx service:

.. code-block:: bash

    $ sudo service nginx restart

Running the backend
-------------------

Before doing this, first setup the python environment following the
instructions in the section above.

.. code-block:: bash

    $ watress-serve --call 'portfolio:create_app'

Writing a new article
=====================

Here are the steps to take to add a new article to the blog.

1. Create the page file in `src/pages/blog/{date}_{article-slug}.js`:

.. code-block:: javascript

    import React from "react"
    import { Layout } from "../../components"
    import { Article, Meta, Tags } from "../../components/blog"

    const meta = new Meta({
        id: "{YYYY}-{MM}-{DD}_{article-slug}",
        title: "{Ex. Super Cool New Article Title}",
        subtitle: "{Ex. Details on how super cool this blog is}",
        datePosted: "{Ex. 2020-03-03}",
        description: "{Ex. A short little description, usually the first paragram}",
        tags: [
            Tags.SuperCool,
            ...
        ],
        related: [
            "{id-to-related-articles}",
            "{id-to-related-articles}",
            "{id-to-related-articles}",
        ],
    })

    const Page = props => (
        <Layout>
            <Article meta={props.meta}>
                <p>My super cool new article...</p>
            </Article>
        </Layout>
    )

    Page.defaultProps = {
        meta: meta
    }

    export default Page

2. Register the article in `src/pages/blog/all.js`:

.. code-block:: javascript

    const articleFiles = [
        "{YYYY}-{MM}-{DD}_{article-slug}",  // <-- put the id for the new article at the top of the list

        ...
    ]

3. Check that your article appears.

Navigate to `/blog` and make sure that your newly registered article actually
appears in the list and can be clicked on to show the full article. It's a nice
double check before stating to write.


4. That's it. Start writing.

It's registered now. Just write the thing!

Article utilities
-----------------

There's a handful of general utility classes, elements, etc. that I use to write
so they generally look consistent:


**headers**

The title of the article is registered at an `<h1/>` so all headers in the article
body are at highest an `<h2/>`.

**first letter**

The first letter of articles is usually bolded and enlarged using a span class:

.. code-block:: html

    <p><span className="first-letter">T<span>he beginning of this article is about...</p>

**body paragraphs**

Just simply use a `<p/>` for paragraph blocks.

**code blocks**

I use `highlight.js` for code highlighting. `rst` doesn't seem to be very
backtick friendly within code blocks, so below you'll need to replace the phrase `<backtick>` with
an actual backtick character (`````):

.. code-block:: html

    <code className="javascript">
        <pre>{<backtick>
            const l = 5;
            const x = 6;

            add(l, x)
        <backtick>}</pre>
    </code>
