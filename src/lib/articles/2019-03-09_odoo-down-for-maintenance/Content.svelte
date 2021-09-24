<p>
    <span class="first-letter">F</span>or every Odoo instance I configure, I add a Down For Maintenence page
    that displays when any 50x HTTP error occurs. This gives more information than a generic error page from
    the web server. That error page can really scare people when they don’t know what’s going on behind the
    scenes.
</p>

<h2>The web server (Nginx)</h2>
<p>
    I’m using Nginx in this example, but it’s possible via any web server you are using. You can quickly
    install nginx on linux via <code>sudo apt install nginx</code> .
</p>
<p>
    Here is an example of a very simple virtual host file located at <code
        >/etc/nginx/sites-enabled/my.website.com.conf</code
    > on our server:
</p>
<code class="nginx">
    <pre>{`
server {
    listen 80;
    server_name my.website.com;
    client_max_body_size 128M;

    location / {
        proxy_pass http://localhost:20102;
    }

    location /longpolling/ {
        proxy_pass http://localhost:20103;
    }

    location ~ /[a-zA-Z0-9_-]*/static/ {
        proxy_pass http://localhost:20102;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
        internal;
    }
}
        `}</pre>
</code>
<p>
    You’ll notice that we do not have https configured because it’s listening on port 80, we are using a
    domain name of <code>my.website.com</code> , and we are assuming that there is an Odoo instance running on
    the server with an <code>xmlrpcport</code> of 20102 and a <code>longpolling_port</code>
    of 20103.
</p>
<p>Below those common configurations is where we are setting up our Down For Maintenence HTML page.</p>
<code class="nginx">
    <pre>{`
error_page 500 502 503 504 /50x.html;
location = /50x.html {
    root /usr/share/nginx/html;
    internal;
}
        `}</pre>
</code>
<p>
    This says that any time a 500, 502, 503, or 504 error occurs, show the user the HTML page located at <code
        >/usr/share/nginx/html/50x.html</code
    > .
</p>

<h2>The HTML</h2>
<p>
    Now let’s check out the HTML. This really can be anything you’d like, but as a simple example, I’m using a <a
        href="https://gist.github.com/pitch-gist/2999707"
        rel="noreferrer"
        target="_blank">popular gist available</a
    > that I just slightly modified.
</p>
<code class="html">
    <pre>{`
<!doctype html>
<title>Site Maintenance</title>

<style ✂prettier:content✂="CmJvZHkgewogICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgcGFkZGluZzogMTUwcHg7CiAgICBmb250OiAyMHB4ICdIZWx2ZXRpY2EnLCBzYW5zLXNlcmlmOwogICAgY29sb3I6ICMzMzMzMzM7Cn0KCmgxIHsKICAgIGZvbnQtc2l6ZTogNTBweDsKfQoKYXJ0aWNsZSB7CiAgICBkaXNwbGF5OiBibG9jazsKICAgIHRleHQtYWxpZ246IGxlZnQ7CiAgICB3aWR0aDogNjUwcHg7CiAgICBtYXJnaW46IDAgYXV0bzsKfQoKYSB7CiAgICBjb2xvcjogI2RjODEwMDsKICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKfQoKYTpob3ZlciB7CiAgICBjb2xvcjogIzMzMzMzMzsKICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKfQo=" ✂prettier:content✂="" ✂prettier:content✂=""></style>

<article>
    <h1>We will be back soon!</h1>
    <div>
        <p>
            Sorry for the inconvienence but we are performing some maintenence
            right now. Please <a href="mailto:myemail@gmail.com">contact us</a>
            if you need something, otherwise we will be back online shortly!
        </p>
        <p>- The Team</p>
    </div>
</article>
        `}</pre>
</code>
<p>
    Keep things simple to start. A short paragraph that explains that there’s something going on and that we
    are working on it. If anyone needs to reach out, they can send an email to us.
</p>

<h2>End result</h2>
<p>
    You can test it out by taking down your Odoo instance. Depending on how your Odoo instance is configured,
    you may run a <code>sudo service odoo stop</code> or if you
    <a href="/blog/2019-01-27_dockerized-odoo-development">happen to be using Docker</a>
    (which I recommend) then you may run a <code>{'docker stop {my_container}'}</code> or
    <code>docker-compose stop</code> .
</p>
<p>
    Either way, once the instance is down then you can navigate to your URL. In the example, that would be
    http://my.website.com.
</p>
<p>You’ll see your HTML page:</p>
<figure>
    <img src="/images/articles/odoo-down-for-maintenance/back-soon.png" alt="" />
</figure>
