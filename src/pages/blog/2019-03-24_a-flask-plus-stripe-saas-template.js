import React from "react"
import { Layout } from "../../components"
import { Article, Meta, Tags } from "../../components/blog"

const meta = new Meta({
  id: "2019-03-24_a-flask-plus-stripe-saas-template",
  title: "A Flask + Stripe SaaS template",
  subtitle: "Bootstrapped template for Flask and Stripe integration",
  datePosted: "2019-03-24",
  coverImage: "/blog/a-flask-plus-stripe-saas-template/cover.jpg",
  description: `
    Recently I’ve been working on side projects, away from the large,
    “enterprisey” code bases that I typically deal with at work. I tried out
    quite a few different setups since it’s so easy to get caught in a loop,
    using the same tools
  `,
  tags: [
    Tags.Docker,
    Tags.Flask,
    Tags.Python,
    Tags.OpenSource,
  ],
  related: [
    "2020-01-29_chaining-context-managers-for-mocks",
    "2019-07-13_ten-ways-to-prevent-tech-debt",
    "2018-09-22_write-better-code-outside-in",
  ],
})

const Page = props => (
  <Layout>
    <Article meta={props.meta}>
      <figure>
        <img src="/blog/a-flask-plus-stripe-saas-template/form.png" alt=""/>
      </figure>
      <p>
        <span className="first-letter">R</span>ecently I’ve been working on
        side projects, away from the large,
        “enterprisey” code bases that I typically deal with at work. I tried out
        quite a few different setups since it’s so easy to get caught in a loop,
        using the same tools, patterns, and ideas over and over within a single
        project/system you work on. It’s nice to break out of that every once in
        a while and see other ideas.
      </p>
      <p>
        After going through a few frameworks, experimenting with different
        architecture patterns, and thinking about ways to organize projects I
        <a href="https://bustererp.com" rel="noreferrer" target="_blank">ended up
        building a small application called Buster</a> with Flask.
      </p>
      <p>
        It’s more like Flask + friends because of the libraries, but you’ll see
        more about that as you get into this guide.
      </p>
      <p>
        After I deciding I was going to use Flask, I search around for some
        direction on basic things like user registration with Stripe
        subscriptions, running Flask in a container, etc. I needed some
        direction on building a SAAS application in Flask but didn’t find any
        guides.
      </p>
      <p>
        So I wanted to write up what I learned, how I ended up organizing my
        Flask project, how I integrated it with Stripe.
      </p>
      <p>
        I’ll walk you through the python packages I used, how the code is
        organized, how to run the sample project I created with docker-compose,
        and how to run a test suite.
      </p>
      <p>
        For this example, we are keeping things simple. There will be a way for
        Users to register an account with their billing information. This will
        create a subscription to a single product in Stripe. If the user deletes
        their account, then it stops their subscription. This is targeted
        towards a SAAS model with a simple billing plan.
      </p>

      {/* === */}

      <h2>What’s Covered</h2>
      <br/>
      <ul>
          <li>Application Tools, Libraries, and Frameworks Used</li>
          <li>Getting Setup and Running the Application</li>
          <li>
            Code Organization — Container Structures, Bootstrap Files,
            Authentication, Data Models, Routing and Views, Form Processing,
            Stripe Integration Requests
          </li>
          <li>Running Tests</li>
      </ul>

      {/* === */}

      <h2>The Tools</h2>
      <p>We are using the following tools, libraries, and frameworks:</p>
      <ul>
          <li>
            <a href="https://github.com/pallets/flask"
              rel="noreferrer"
              target="_blank">Flask</a>
          </li>
          <li>
            <a href="https://flask-login.readthedocs.io/en/latest/"
              rel="noreferrer"
              target="_blank">Flask-Login</a>
          </li>
          <li>
            <a href="https://www.sqlalchemy.org/"
              rel="noreferrer"
              target="_blank">SQLAlchemy</a>
          </li>
          <li>
            <a href="https://flask-wtf.readthedocs.io/en/stable/"
              rel="noreferrer"
              target="_blank">Flask-WTF</a>
          </li>
          <li>
            <a href="https://flask-migrate.readthedocs.io/en/latest/"
              rel="noreferrer"
              target="_blank">Flask-Migrate</a>
          </li>
          <li>
            <a href="https://gunicorn.org/"
              rel="noreferrer"
              target="_blank">Gunicorn</a>
          </li>
          <li>
            <a href="https://pypi.org/project/stripe/"
              rel="noreferrer"
              target="_blank">Stripe</a>
          </li>
          <li>
            <a href="https://mariadb.org/"
              rel="noreferrer"
              target="_blank">MariaDB</a>
          </li>
      </ul>
      <p>
        You will see all of the requirements for the application in the
        <code>requirements.txt</code> file in the repo:
      </p>
      <code className="python">
        <pre>{`
flask==1.0
flask_sqlalchemy==2.3.2
Flask-Login==0.4.1
Flask-WTF==0.14.2
Flask-Mail==0.9.1
Flask-Testing==0.7.1
Flask-Migrate==2.4.0
coverage==4.5.3
pytest==4.3.1
pytest-cov==2.6.1
alembic==1.0.8
gunicorn==19.9.0
mysqlclient==1.4.2
stripe==2.21.0
apscheduler==3.2.0
python-dateutil>=2.4.2
tzlocal==1.5.1
        `}</pre>
      </code>

      {/* === */}

      <h2>What You’ll Need</h2>
      <p>You should only need a couple of things to run the application:</p>
      <ol>
          <li>Docker with <code>docker-compose</code> running on your machine.</li>
          <li>The ability to <code>git clone</code> the repository.</li>
      </ol>

      {/* === */}

      <h2>Source Code</h2>
      <p>
        The source code is located at <a href="https://github.com/holdenrehg/sample_flask_stripe_integration" rel="noreferrer" target="_blank">https://github.com/holdenrehg/sample_flask_stripe_integration</a> so I recommend using it as a guide while reading through this tutorial.
      </p>
      <p>
        Or even better, pull down the code yourself, run the application, and
        test things out!
      </p>

      {/* === */}

      <h2>Getting Setup</h2>
      <p>
        Here are instructions on getting the sample application running on your
        machine. All of this information is also outlined in the
        <code>readme.md</code> file in the repo.
      </p>

      <p><strong>1. Update your hosts file</strong>.</p>
      <p>Update your <code>/etc/hosts</code> file by adding the following line:</p>
      <code className="console">
        <pre>{`
0.0.0.0 mystripeapp.local
        `}</pre>
      </code>

      <p><strong>2. Get the source code</strong></p>
      <p>Clone down the repository.</p>
      <p>
        These setup instructions are assuming you clone down the repo as
        <code>mystripeapp</code> so you may experience issues or have to
        slightly alter commands if you clone it down as another directory name.
      </p>
      <code className="console">
        <pre>{`
git clone https://github.com/holdenrehg/sample_flask_stripe_integration mystripeapp
        `}</pre>
      </code>

      <p><strong>3. Update environment variables</strong></p>
      <p>
        There are a set of environment variables located under
        <code>mystripeapp/utils/__init__.py</code> that need to be updated
        before running the application.
      </p>
      <p>
        The only two environment variables that you should need to change to get
        the application up and running are the stripe token and the stripe
        product code.
      </p>
      <code className="python">
        <pre>{`
def environment():
    """
    This is not how you want to handle environments in a real project,
    but for the sake of simplicity I'll create this function.

    Look at using environment variables or dotfiles for these.
    """
    return {
        "app": {
            "name": "mystripeapp.local",
            "port": "5200",
            "secret": "my_super_secret_key",
        },

        "billing": {
            "stripe": {
                "token": "****",
                "product": "****",
            }
        },

        "database": {
            "provider": "mysql",
            "host": "mariadb",
            "port": "3306",
            "username": "stripeapp",
            "password": "stripeapp",
            "database": "stripeapp",
        }
    }
        `}</pre>
      </code>
      <p>
        After updating <code>mystripeapp/utils/__init__.py</code> you will need
        to add your frontend/public Stripe token to the
        <code>mystripeapp/ui/views/auth/register.xml</code> file.
      </p>
      <code className="javascript">
        <pre>{`
// Create a Stripe client.
var stripe = Stripe("****");
        `}</pre>
      </code>

      <p><strong>4. Start up the application</strong></p>
      <p>
        This is going to build the containers and start the Flask application.
        If you are not using the <code>-d</code> flag then you will see all of
        the application logs and the database logs. This is helpful for
        debugging.
      </p>
      <code className="console">
        <pre>{`
$ cd mystripeapp
$ docker-compose up
        `}</pre>
      </code>


      <p><strong>5. Migrate the database</strong></p>
      <p>
        Make sure to leave the application running before running any migration
        commands.
      </p>
      <p>
        You’ll run these three commands to get started. The database container
        to mapped to port <code>10404</code> so you can connect to it either
        from command line using the <code>mysql</code> cli or through a GUI like
        sequelpro or dbeaver.
      </p>
      <p>
        You’ll see the other connection details in the
        <code>docker-compose.yml</code> file.
      </p>
      <code className="console">
        <pre>{`
$ docker exec -it $(docker ps -q --filter name=mystripeapp_app) flask db init
$ docker exec -it $(docker ps -q --filter name=mystripeapp_app) flask db migrate
$ docker exec -it $(docker ps -q --filter name=mystripeapp_app) flask db upgrade
        `}</pre>
      </code>

      <p><strong>6. Access the application</strong></p>
      <p>
        Everything should be ready to go now. Open up a browser and navigate to
        <a href="http://mystripeapp.local:5200" rel="noreferrer" target="_blank">http://mystripeapp.local:5200</a>
        to see if you have access.
      </p>
      <p>
        Assuming everything is okay, you can start testing the application or
        dig right into the source code.
      </p>

      {/* === */}

      <h2>Account Flows</h2>

      <h3>Registration</h3>
      <p>
        If you added Stripe tokens properly, then you should be able to easily
        register a new account.
      </p>
      <p>
        Navigate to <a href="http://mystripeapp.local:5200/register" rel="noreferrer" target="_blank">http://mystripeapp.local:5200/register</a>
        and add account details using a test card number from stripe
        <a href="https://stripe.com/docs/testing#cards" rel="noreferrer" target="_blank">https://stripe.com/docs/testing#cards</a>.
      </p>
      <p>
        After registering a new account, you should see a new Subscription in
        your Stripe dashboard under Billing &gt; Subscriptions.
      </p>

      <h3>Deletion</h3>
      <p>
        From the application dashboard at <a href="http://mystripeapp.local:5200/dashboard" rel="noreferrer" target="_blank">http://mystripeapp.local:5200/dashboard</a>
        you have the ability to delete an account. When the account is deleted,
        you will see the subscription go to Cancelled under Billing &gt;
        Subscriptions in your Stripe dashboard.
      </p>

      {/* === */}

      <h2>Code Organization</h2>
      <code className="console">
        <pre>{`
├── docker-compose.yml
├── Dockerfile
├── migrations
├── mystripeapp
├── README.md
├── requirements.txt
├── setup.cfg
├── setup.py
└── tests
        `}</pre>
      </code>
      <p>
        Pull up the source code for the project and I’ll walk you through how it
        was written.
      </p>
      <p>
        I don’t plan on outlining every single aspect of the application, but I
        will describe each section (how views work, how containers are set up,
        how routing is performed, how data models are defined, etc.)
      </p>
      <p>
        This will give you plenty enough information to dig into the code and
        see some of the nitty-gritty details yourself.
      </p>

      <hr/>

      <h3>The Containers</h3>
      <p>
        We obviously need somewhere to run the code. So the first step was to
        structure our containers using the <code>docker-compose.yml</code> file.
      </p>
      <p>We have 3 different containers:</p>
      <code className="dockerfile">
        <pre>{`
version: '3.3'

services:
  # application container for the Flask app
  app:
    build: .
    ports:
      - 5200:5000
    volumes:
      - ./:mystripeapp
    environment:
      - TERM=xterm-256color
      - FLASK_APP=mystripeapp.bootstrap:app
      - LC_ALL=C.UTF-8
      - LANG=C.UTF-8
    networks:
      - appnet
    hostname: "mystripeapp.local"
    networks:
      appnet:
        aliases:
          - "mystripeapp.local"

  # primary database container for the app
  mariadb:
    image: 'bitnami/mariadb:latest'
    restart: always
    ports:
      - 10504:3306
    networks:
      - appnet
    environment:
      - TERM=xterm-256color
      - ALLOW_EMPTY_PASSWORD=no
      - MARIADB_ROOT_PASSWORD=random_root_password
      - MARIADB_USER=stripeapp
      - MARIADB_DATABASE=stripeapp
      - MARIADB_PASSWORD=stripeapp

  # database container strictly for running tests
  testmariadb:
    image: 'bitnami/mariadb:latest'
    restart always:
    ports:
      - 10505:3306
    networks:
      - appnet
    environment:
      - TERM=xterm-256color
      - ALLOW_EMPTY_PASSWORD=no
      - MARIADB_ROOT_PASSWORD=random_root_password
      - MARIADB_USER=stripeapptest
      - MARIADB_DATABASE=stripeapptest
      - MARIADB_PASSWORD=stripeapptest

networks:
  appnet:
        `}</pre>
      </code>

      <p><strong>Container #1 — app</strong></p>
      <p>
        Our first container is called <code>app</code> and it contains all of
        the python and Flask source code to run the application.
      </p>
      <p>
        This container runs the Flask application on start, maps the 5200 port
        on your local machine to the 5000 port inside of the container, maps the
        entire project directory inside the container at
        <code>/mystripeapp</code> , and configures the new hostname
        <code>mystripeapp.local</code> so that we can mimic how the application
        will run in production with a real DNS.
      </p>
      <p>
        Take a look at the <code>Dockerfile</code> in the root of the project
        to see how we are provisioning the server. It’s nothing too complicated.
        We are essentially just installing all of the
        <code>apt</code> dependencies, installing all of our
        <code>pip</code> dependencies from the <code>requirements.txt</code>
        file, and then running the application using a <code>gunicorn</code>
        process.
      </p>

      <p><strong>Container #2 — mariadb</strong></p>
      <p>
        Then we need a place to actually store the data. We are using MariaDB
        for this. We will not be using any custom <code>Dockerfile</code> for
        our database containers, so that makes this container even simpler.
      </p>
      <p>
        Take a look at the environment variables defined in the
        <code>docker-compose.yml</code> to see credentials for the database. By
        default, everything is set up when you clone down the repo so you will
        not need to change any credentials until it’s time to release the
        application out to a remote staging/production server.
      </p>

      <p><strong>Container #3 — testmariadb</strong></p>
      <p>
        Almost an exact mirror of the MariaDB setup, strictly for the purpose of
        testing the application. This is a database that our unit tests can use.
      </p>

      <hr/>

      <h3>Bootstrap</h3>
      <p>
        Next up, we have to actually run the Flask application. We have the
        <code>app</code> container which attempts to start the application but
        if you take a look at the <code>Dockerfile</code> for the container,
        it’s expecting a Flask application to be started up from
        <code>mystripeapp.bootstrap:app</code>:
      </p>
      <code className="dockerfile">
        <pre>{`
ENTRYPOINT ["gunicorn"]
CMD ["-w", "4", "--capture-output", "--log-level=debug", "--reload", "-b", "0.0.0.0:5000", "mystripeapp.bootstrap:app"]
        `}</pre>
      </code>
      <p>
        So take a look at <code>mystripeapp/bootstrap.py</code> and you’ll see
        all of the code to initialize the Flask app.
      </p>
      <code className="python">
        <pre>{`
import sys
import logging
import datetime
import sqlalchemy
from logging import Formatter
from flask import Flask
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy, Model
from sqlalchemy.ext.declarative import declared_attr
from mystripeapp import utils


def start(override=None):
    """
    Bootstrap the application.

    :return {Flask}: Returns the configuration Flask app object.
    """
    env = utils.environment()

    app = Flask(
        __name__,
        template_folder="/mystripeapp/mystripeapp/ui",
        static_folder="/mystripeapp/mystripeapp/ui/static",
    )

    configuration = dict(
      {
        "SERVER_NAME": f"{env['app']['name']}:{env['app']['port']}",
        "WTF_CSRF_SECRET_KEY": env["app"]["secret"],
        "WTF_CSRF_ENABLED": True,
        "WTF_CSRF_METHODS": ["GET", "POST", "PUT", "DELETE"],
        "SQLALCHEMY_TRACK_MODIFICATIONS": False,
        "SQLALCHEMY_DATABASE_URI": f"{env['database']['provider']}://{env['database']['username']}:{env['database']['password']}@{env['database']['host']}:{env['database']['port']}/{env['database']['database']}",
      },
      **override or {}
    )

    # Apply default configuration values...
    for configuration_value in configuration:
        app.config[configuration_value] = configuration[configuration_value]

    # Enable the login manager library...
    app.login_manager = LoginManager(app)
    app.secret_key = env["app"]["secret"]

    # Setup the logging handlers and formatters...
    handler = logging.StreamHandler(stream=sys.stdout)
    handler.setFormatter(Formatter("%(asctime)s %(levelname)s: %(message)s"))
    handler.setLevel(logging.INFO)
    app.logger.handlers = [handler]
    app.logger.setLevel(logging.INFO)

    return app


class BaseModel(Model):
    """
    The base model for all database models.

    This will include some common columns for all tables:

      - id
      - created_at
    """

    @declared_attr
    def id(self):
        return sqlalchemy.Column(
            sqlalchemy.Integer, primary_key=True, autoincrement=True, nullable=False
        )

    @declared_attr
    def created_at(self):
        return sqlalchemy.Column(
            sqlalchemy.DateTime, default=datetime.datetime.utcnow, nullable=False
        )


app = start()
db = SQLAlchemy(app, model_class=BaseModel)
migrate = Migrate(app, db)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
        `}</pre>
      </code>
      <p>We have a few things going on here. Let’s break it down into pieces.</p>
      <p><strong>__main__</strong></p>
      <p>
        The bootstrap file is broken out into a few different structures just to
        try to provide a little bit of organization, but the final code that is
        actually responsible for starting up the application is at the bottom of
        the file.
      </p>
      <p>
        Here we generate a <code>Flask</code> app variable, initialize our
        database connection via a <code>SQLAlchemy</code> object, prep the
        application for database migrations via the <code>Migrate</code> object,
        and then actually run the application. By default this is going to start
        up on port 5000 inside the container, which we then map to our local
        machine as 5200 via the <code>docker-compose.yml</code> file.
      </p>
      <code className="python">
        <pre>{`
app = start()
db = SQLAlchemy(app, model_class=BaseModel)
migrate = Migrate(app, db)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
        `}</pre>
      </code>
      <p><strong>start</strong></p>
      <p>
        The <code>start</code> function is in charge of generating our
        application <code>Flask</code> object and applying configurations.
      </p>
      <code className="python">
        <pre>{`
def start(override=None):
    """
    Bootstrap the application.

    :return {Flask}: Returns the configuration Flask app object.
    """
        `}</pre>
      </code>
      <p>Here are the configurations that we care about for this application:</p>
      <ol>
          <li>The database connection (host, database name, username, password, port).</li>
          <li>The application <code>SERVER_NAME</code> or url.</li>
          <li>Paths for templates and views that we’ll render with jinja2.</li>
          <li>Initializing the authentication/session system for login.</li>
          <li>Configuring an application logger.</li>
      </ol>
      <p><strong>BaseModel</strong></p>
      <p>And finally, in the bootstrap, we have a <code>BaseModel</code> class. This is the class that all database models inherit from. This allows us to have common logic across all database models.</p>
      <p>For this application, we just have a primary <code>id</code> column because every table should have a primary key, and then a <code>created_at</code> column which gets populated when the specific record is inserted into the table.</p>
      <code className="python">
        <pre>{`
class BaseModel(Model):
    """
    The base model for all database models.

    This will include some common columns for all tables:

      - id
      - created_at
    """

    @declared_attr
    def id(self):
        return sqlalchemy.Column(
            sqlalchemy.Integer, primary_key=True, autoincrement=True, nullable=False
        )

    @declared_attr
    def created_at(self):
        return sqlalchemy.Column(
            sqlalchemy.DateTime, default=datetime.datetime.utcnow, nullable=False
        )
        `}</pre>
      </code>

      <hr/>

      <h3>Authentication</h3>
      <p>
        All of the authentication in the application is handled by the
        <code>Flask-Login</code> library, which makes things easy.
      </p>
      <p>To get this up and running, I only had to do a few things:</p>
      <ol>
          <li>Initialize the <code>LoginManager</code> class in our <code>bootstrap.py</code> file.</li>
          <li>Define a <code>load_user</code> function in our <code>auth.py</code> file.</li>
          <li>Add <code>UserMixin</code> to our <code>User</code> data model</li>
      </ol>
      <code className="python">
        <pre>{`
app.login_manager = LoginManager(app)
        `}</pre>
      </code>
      <code className="python">
        <pre>{`
from mystripeapp import models
from mystripeapp.bootstrap import app


@app.login_manager.user_loader
def load_user(user_id):
    """
    Load the currently authenticated user.

    :return {User|None}:
        This will return the user object if one is found, otherwise will return
        None. It is important that this function does not raise an exception.
    """
    member = models.User.query.get(user_id)
    if member:
        return member
    return None
        `}</pre>
      </code>
      <code className="python">
        <pre>{`
from flask_login.mixins import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = "users"
        `}</pre>
      </code>

      <hr/>

      <h3>Data Models</h3>
      <p>
        For this project, things are simple compared to most applications. We
        only have a single table which is stored in the
        <code>mystripeapp/models.py</code> file.
      </p>
      <code className="python">
        <pre>{`
import sqlalchemy
from flask import url_for
from sqlalchemy.ext.declarative import declared_attr
from mystripeapp.bootstrap import app, db
from flask_login.mixins import UserMixin
from werkzeug.security import check_password_hash, generate_password_hash


class User(db.Model, UserMixin):
    __tablename__ = "users"

    def __init__(self, password=None, *args, **kwargs):
        """
        On user initialization, we assume that the passwords are being passed
        in as plain-text from the registration form so we immediatley encrypt
        them before they hit the database.
        """"
        if password:
            password = generate_password_hash(password)
        super().__init__(password=password, *args, **kwargs)

    @declared_attr
    def name(self):
        return sqlalchemy.Column(sqlalchemy.String(64), nullable=False)

    @declared_attr
    def email(self):
        return sqlalchemy.Column(sqlalchemy.String(64), nullable=False)

    @declared_attr
    def password(self):
        return sqlalchemy.Column(sqlalchemy.String(255), nullable=True)

    @declared_attr
    def stripe_token(self):
        return sqlalchemy.Column(sqlalchemy.String(255), nullable=False)

    @declared_attr
    def last_four(self):
        return sqlalchemy.Column(sqlalchemy.String(4), nullable=False)

    @declared_attr
    def stripe_customer_id(self):
        return sqlalchemy.Column(sqlalchemy.String(255), nullable=True)

    def check_password(self, password):
        """
        Check if a given plain text password matches the encrypted password that
        is currently stored in the database for this Team Member.

        :param password {str}: The password that we will check.
        :return {bool}: Returns True if the password matches.
        """
        if not self.password:
            return False
        return check_password_hash(self.password, password)
        `}</pre>
      </code>
      <p>
        This is a <code>User</code> class which allows us to register and store
        users to the application.
      </p>
      <p>Essentially in this data model, we are trying to accomplish the following:</p>
      <ul>
          <li>Store basic information about the user like name and email.</li>
          <li>Store encrypted password that they use to log in with.</li>
          <li>Store Stripe information since all Users will be connected to a Stripe subscription plan.</li>
      </ul>

      <hr/>

      <h3>Routing and Views</h3>
      <p>
        Both the routing functions and the view rendering that we utilize are
        built into Flask, so if you aren’t already familiar then read through
        how Flask uses jinja2 for template rendering.
      </p>
      <p>For our application specifically, you just need to know a few things:</p>
      <ol>
          <li>All the routing functions are stored in <code>mystripeapp/routes</code> .</li>
          <li>All jinja templates are stored in <code>mystripeapp/ui/templates</code> .</li>
          <li>All jinja views are stored in <code>mystripeapp/ui/views</code> .</li>
      </ol>
      <p><strong>Routes</strong></p>
      <p>
        The routes underneath <code>mystripeapp/routes</code> are broken out
        into three files to organize routes for guest users, for dashboard
        users, and then any authentication routes:
      </p>
      <ul>
          <li><code>guest.py</code> — /</li>
          <li><code>auth.py</code> — /login</li>
          <li><code>auth.py</code> — /register</li>
          <li><code>auth.py</code> — /logout</li>
          <li><code>dashboard.py</code> — /dashboard</li>
          <li><code>dashboard.py</code> — /account/delete</li>
      </ul>
      <p>
        If you take a look at any of the simpler routing functions, such as the
        landing page, you’ll see the use of the <code>render_template</code>
        function.
      </p>
      <code className="python">
        <pre>{`
from mystripeapp.bootstrap import app
from flask import render_template, abort
from jinja2 import TemplateNotFound


@app.route("/")
def welcome():
    try:
        return render_template("views/landing.html")
    except TemplateNotFound:
        abort(404)
        `}</pre>
      </code>
      <p>
        So when a user navigates to the
        route <a href="http://mystripeapp.local:5200/" rel="noreferrer" target="_blank">http://mystripeapp.local:5200/</a> then
        our application runs the <code>welcome</code> function, which grabs the
        html sitting at <code>views/landing.html</code> and serves it to the
        frontend.
      </p>
      <p>
        This should be straightforward, as long as you take a look at
        the <code>bootstrap.py</code> and see where we are configuring Flask to
        say that all of our templates/views are stored
        at <code>mystripeapp/ui</code> . This means that the parameters passed
        to functions like<code>render_template</code> are always relative to
        the <code>mystripeapp/ui</code> directory.
      </p>
      <p><strong>View Structure</strong></p>
      <p>
        All views in the application currently inherit from a
        single <code>base.py</code> template file that provides the
        generic <code>&lt;head/&gt;</code> data for the application.
      </p>
      <code className="html">
        <pre>{`
<html>

<head>
    <title>mystripeapp</title>
    <link rel="shortcut icon" href="/static/images/favicon.ico"/>

    <link rel="stylesheet" href="/static/css/app.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <script src="https://js.stripe.com/v3/"></script>

    {% block head %}{% endblock %}
</head>

<body>
    <div class="container inner-wrapper">
        <h2>{% block title %}{% endblock %}</h2>
        {% block content %}{% endblock %}
    </div>
</body>

</html>
        `}</pre>
      </code>
      <code className="html">
        <pre>{`
{% extends "templates/base.html" %}

{% block title %}mystripeapp - your dashboard!{% endblock %}

{% block content %}
<div class="container">
    <div class="row">
        <ul>
            <li><a href="/logout">Logout</a></li>
        </ul>
    </div>

    <div class="row" style="margin: 1rem 0;">
        <div class="col-sm-12">
            <div class="card>
                <div class="card-header>
                    Profile
                </div>
                <div class="card-body>
                    <h5 class="card-title">{{ user.name }}</h5>
                    <p class="card-text">Email: {{ user.email }}</p>
                    <p class="card-text">Created: {{ user.created_at }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row" style="margin: 1rem 0;">
        <div class="col-sm-12">
            <div class="card>
                <div class="card-body></div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
        `}</pre>
      </code>
      <p>Within each view, you will also see different directives that are provided by jinja. When the <code>render_template</code> function is called in our routes, the code such as <code>{'{{ user.name }}'}</code> is evaluated as python server-side before getting served to the frontend.</p>
      <p>For a simple application like this, we just have a few views:</p>
      <ul>
          <li><code>dashboard.html</code></li>
          <li><code>landing.html</code></li>
          <li><code>auth/login.html</code></li>
          <li><code>auth/register.html</code></li>
      </ul>

      <hr/>

      <h3>Forms</h3>
      <p>We are using <code>Flask-WTF</code> which is an extension on top of the form system that is already provided in Flask. It makes form processing very easy.</p>
      <p>All forms in the system are defined in the same place. Since they relate nearly 1 to 1 with inputs/forms on the frontend, they are defined under <code>mystripeapp/ui/forms</code> .</p>
      <p>Let’s take a look at the <code>RegisterForm</code> class:</p>
      <code className="python">
        <pre>{`
import stripe
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, validators
from werkzeug.security import generate_password_hash
from mystripeapp import models, utils
from mystripeapp.bootstrap import db


class RegisterForm(FlaskForm):
    name = StringField(
      "Name",
      validators=[
        validators.DataRequired(),
        validators.Length(min=1, max=64)
      ]
    )
    email = StringField(
      "Email",
      validators=[
        validators.DataRequired(),
        validators.Email(),
        validators.Length(min=1, max=64),
      ]
    )
    password = PasswordField(
      "Password",
      validators=[
        validators.DataRequired(),
        validators.Length(min=8, max=64)
      ]
    )
    stripeToken = PasswordField("Stripe Token", validators=[validators.DataRequired()])
    lastFour = PasswordField("Last Four", validators=[validators.DataRequired()])

    def validate(self):
        """
        Adds additional validation to the form.

        :return {bool}: Returns True if successful.
        """
        rv = super().validate()
        if not rv:
            return False

        user = models.User.query.filter_by(email=self.email.data).first()
        if user is not None:
            self.email.errors.append("The email address has already been taken.")

        return True

    def register_to_stripe(self, user):
        """
        Registers a user to stripe.

        :param user {models.User}: The user to register to stripe.
        :return {tuple}: Returns the customer and the subscription created.
        """
        env = utils.environment()
        stripe.api_key = env["billing"]["stripe"]["token"]

        customer = stripe.Customer.create(
            description=self.name.data,
            source=self.stripeToken.data,
            metadata={"customer_code": user.id},
        )
        subscription = stripe.Subscription.create(
            customer=customer.id, items=[{"plan": env["billing"]["stripe"]["product"]}]
        )

        return customer, subscription

    def create_user(self):
        """
        Creates a new user from the form data.

        :return {models.User}: Returns the user record created.
        """
        user = models.User(
            name=self.name.data,
            email=self.email.data,
            password=self.password.data,
            stripe_token=self.stripeToken.data,
            last_four=self.lastFour.data,
        )

        stripe_data = self.register_to_stripe(user)
        user.stripe_customer_id = stripe_data[0].id

        db.session.add(user)
        db.session.commit()

        return user
        `}</pre>
      </code>
      <p>You can see that every form is defined as a class that inherits the general <code>FlaskForm</code> class.</p>
      <p>Each form has a list of attributes for the information that the form is expected to contain. In the case of the <code>RegisterForm</code> we have:</p>
      <ul>
          <li>name</li>
          <li>email</li>
          <li>password</li>
          <li>stripeToken</li>
          <li>lastFour</li>
      </ul>
      <p>Then we have a <code>validate</code> function which validates the data within the form. If you do not override <code>validate</code> then it performs default logic based on the type of fields and the <code>validators</code> listed on the field.</p>
      <p>For example, we have a password field which must be at least 8 characters long but not more than 64 characters long. The <code>FlaskForm</code> will handle this logic out of the box.</p>
      <code className="python">
        <pre>{`
password = PasswordField("Password",
    validators=[
        validators.DataRequired(),
        validators.Length(min=8, max=64),
    ]
)
        `}</pre>
      </code>
      <p>The <code>RegisterForm</code> just needs to provide some additional logic to ensure that there are no accounts being created with duplicate email addresses.</p>
      <p><strong>The Form Interface</strong></p>
      <p>Our html form will look like a fairly standard form. There are no hard requirements to get the form to work with the <code>FlaskForm</code> except that the input <code>name</code> attributes must match the attributes defined on the form object.</p>
      <code className="html">
        <pre>{`
<div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header">
          Register
        </div>
        <div class="card-body>
          <p class="card-subtitle mb-2 text-muted">
            Already have an account?
            <a href="/login">sign in here</a>
            Or
            <a href="/">go home</a>
          </p>

          <form>
            <div class="form-group">
              <input tpe="text
                name="name"
                class="form-control"
                value="{{ form.data.name or '' }}"
                placeholder="Name"
                pattern=".{1,64}"
                autofocus required>

              {% if form.errors and 'name' in form.errors %}
              <div class="form-errors" role="alert">
                {{ form.errors.name[0] }}
              </div>
              {% endif %}
            </div>

            <div class="form-group">
              <input type="email"
                name="email"
                class="form-control"
                value="{{ form.data.email or '' }}"
                placeholder="Email"
                pattern=".{1,64}"
                required/>

              {% if form.errors and 'email' in form.errors %}
              <div class="form-errors" role="alert">
                {{ form.errors.email[0] }}
              </div>
              {% endif %}
            </div>

            <div class="form-group">
              <input type="password"
                name="password"
                class="form-control"
                value=""
                placeholder="Password"
                pattern=".{8,64}"
                title="Minimum lenth of 8 characters"
                required/>

              {% if form.errors and 'password' in form.errors %}
              <div class="form-errors" role="alert">
                {{ form.errors.password[0] }}
              </div>
              {% endif }
            </div>

            <div class="form-group">
              <!-- A Stripe element will be inserted here dynamically via JS -->
              <div id="card-element"></div>

              <div id="card-errors" role="alert"
                {% if form.errors and 'stripeToken' in form.errors %}
                <div class="form-errors" role="alert">
                  {{ form.errors.stripeToken[0] }}
                </div>
                {% endif }
              </div>
            </div>

            <div class="form-group">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
        `}</pre>
      </code>
      <p><strong>The Form Routing</strong></p>
      <p>Then the final step in handling the form processing is the route. This is the glue that connects together the interface and the form object.</p>
      <p>For registration, whenever a user posts the registration form it hits the route <code>/register</code> as a <code>POST</code> request. Our route function just has to initialize our <code>RegisterForm</code> object, call the <code>validate_on_submit()</code> function, and then handle the success or failure.</p>
      <p>If the validation succeeds, then we can actually create a new <code>User</code> object, send an API request to Stripe, log the user in, and redirect them to their dashboard.</p>
      <p>If the validation fails, then we can redirect back to the form and display the errors to the user. Some of this is magically handled by Flask and Flask-WTF.</p>
      <code className="python">
        <pre>{`
@app.route("/register", methods=["GET", "POST"])
def register():
    if current_user.is_authenticated:
        return redirect("/dashboard")

    form = RegisterForm()
    if form.validate_on_submit():
        try:
            user = form.create_user()
            login_user(user)
            return redirect("/dashboard")
        except stripe.error.StripeError as e:
            form.stripeToken.errors.append(
                "There was a problem with the payment information."
            )

    try:
        return render_template("views/auth/register.html", form=form)
    except TemplateNotFound:
        abort(404)
        `}</pre>
      </code>

      <hr/>

      <h3>Stripe Integration</h3>
      <p>The application only has to handle two different request scenarios for Stripe via the API.</p>
      <p>One request to create a new customer/subscription when a new user registers.</p>
      <p>Another request to cancel the user subscription when they delete their account.</p>
      <p>Both of these are handled through the <code>stripe</code> python package that can be installed from pypi. The <code>RegisterForm</code> is a good example of how to make requests to Stripe.</p>
      <code className="python">
        <pre>{`
def register_to_stripe(self, user):
    env = utils.environment()
    stripe.api_key = env["billing"]["stripe"]["token"]

    customer = stripe.Customer.create(
        description=self.name.data,
        source=self.stripeToken.data,
        metadata={"customer_code": user.id},
    )

    subscription = stripe.Subscription.create(
        customer=customer.id,
        items=[{"plan": env["billing"]["stripe"]["product"]}]
    )

    return customer, subscription
        `}</pre>
      </code>
      <p>All we need to do is assign the api key from our environment variables, call <code>stripe.Customer.create(...)</code> and then call <code>stripe.Subscription.create(...)</code> after a user registers for the system.</p>

      {/* === */}

      <h2>Running Tests</h2>
      <p>The final thing to go over is how to run unit tests.</p>
      <p>I’m sure that you noticed at the top of this article that we have to typically run commands inside of the container. So we end up doing things like <code>{'docker exec -it $(docker ps -q --filter mystripe_app) {command}'}</code> instead of just running the command directly on our machine.</p>
      <p>The same applies for running tests. With Docker we do not have to deal with keeping all of the dependencies installed directly on our machine, so we will want to run the tests from within the container where the unit tests have access to all of the dependencies and the application source.</p>
      <p>That is why we are passing a container id to the <code>setup.py</code> command below.</p>
      <code className="console">
        <pre>{`
$ python3 setup.py test --container $(docker ps -q --filter name=mystripeapp_app)
        `}</pre>
      </code>
    </Article>
  </Layout>
)

Page.defaultProps = {
  meta: meta
}

export default Page
