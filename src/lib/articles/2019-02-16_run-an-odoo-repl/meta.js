import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2019-02-16_run-an-odoo-repl',
    title: 'Run an Odoo REPL / IPython prompt',
    subtitle: 'One of the most useful things in Odoo',
    datePosted: '2019-02-16',
    coverImage: '/images/articles/run-an-odoo-repl/cover.png',
    thumbnailImage: '/images/articles/run-an-odoo-repl/cover-min.jpg',
    description: `
        In Odoo, you have the ability to run Odoo as a web server and access it via
        a GUI, but you can also run a python REPL with all of the Odoo modules
        loaded in as globals. This is extremely helpful for debugging and for
        learning.
    `,
    contentSnippet: `
    <p>In Odoo, you have the ability to run Odoo as a web server and access it via a GUI, but you can also run a python REPL with all of the Odoo modules loaded in as globals. This is extremely helpful for debugging and for learning.</p>
    <p>For example, you could start up the shell, query for information via env/search/browse commands, run individual functions, access variables and properties associated with core classes, load in new functions if needed for testing, etc.</p>
    <h2>How to run an Odoo shell</h2>
    <p>Let’s break down the command:</p>
    <code>
      $ ./odoo-bin shell \\
        -c /etc/odoo.conf \\
        --xmlrpc-port=8888 \\
        --longpolling-port=8899 \\
        -d odoo
    </code>
    <h3><strong>./odoo-bin shell</strong></h3>
    <p><code>odoo-bin</code> is the executable in the root directory of the core Odoo project. This is how you run an Odoo instance...</p>
    `,
    tags: [Tags.OpenSource, Tags.Odoo, Tags.Erp, Tags.Python, Tags.Software],
    related: [
        '2016-10-23_upgrade-odoo-apps-from-command-line',
        '2019-04-26_becoming-a-superuser-in-odoo',
        '2020-03-29_daily-odoo-team-routine',
    ],
});
