Portfolio
=========

My personal portfolio website.

Configuring environment
-----------------------

There are two environment files for the application. The `.flaskenv` file are public
environment variables used by everyone while the `.env` is ignored and project specific.
Starting with the sample file will get you going initially:

Getting started with venv
-------------------------

**1. Activate the virtual environment:**

.. code-block:: bash

    $ python3 -m venv venv
    $ source venv/bin/activate

**2. Install dependencies:**

.. code-block:: bash

    $ (venv) python -m pip install -r requirements.txt

Running the project for development
-----------------------------------

The frontend and backup are run separately.

.. code-block:: bash

    $ (venv) gatsby develop

.. code-block:: bash

    $ (venv) flask run

Deployments
-----------

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
    $ find ./public -type d -exec chmod g+rx {} \;
    $ find ./public -type f -exec chmod g+r {} \;

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
