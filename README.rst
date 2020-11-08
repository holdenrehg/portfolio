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

1. Activate the virtual environment:

.. code-block:: shell

    $ python3 -m venv venv
    $ source venv/bin/activate

2. Install dependencies:

.. code-block:: shell

    $ (venv) python -m pip install -r requirements.txt

Running the project for development
-----------------------------------

The frontend and backup are run separately.

.. code-block:: shell

    $ (venv) gatsby develop

.. code-block:: shell

    $ (venv) flask run
