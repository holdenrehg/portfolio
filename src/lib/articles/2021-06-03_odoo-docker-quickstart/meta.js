import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2021-06-03_odoo-docker-quickstart',
    title: 'Quickstart to Working with Docker and Odoo',
    datePosted: '2021-06-03',
    subtitle: 'Practical quickstart steps for running Odoo within a Docker environment.',
    description: 'Practical quickstart steps for running Odoo within a Docker environment.',
    backgroundColor: '#047857',
    textDecorationColor: '#ffffff',
    contentSnippet: `
    <p>
      I've been asked a handful of times about
      my <a href="/blog/2019-01-27_dockerized-odoo-development">Dockerized Odoo</a> article. Even
      today 8 years after the release of Docker there's hesitation around developing with it.
      I completely understand that because Docker can be complex.
    </p>
    <p>
      Originally I wanted to cover the major topics, features, and pain points that I
      noticed as a developer working with Docker. That's where the <a href="/blog/2019-01-27_dockerized-odoo-development">Dockerized Odoo</a> article
      came from. Now I think I can help a certain type of developer by putting out a quickstart guide with
      simpler steps. This is targeted towards that developer who might not need every detail.
    </p>
    <p>
      So that's what I'm aiming to do here. Here's the most pragmatic quickstart guide to
      working with Odoo and Docker that I can come up with:
    </p>

    <h2>Installing Docker</h2>
    <p>
      For detailed instructions on getting setup in a specific environment...
    </p>
    `,
    tags: [Tags.Odoo, Tags.DevTools, Tags.Docker],
    related: [
        '2019-01-27_dockerized-odoo-development',
        '2019-03-09_odoo-down-for-maintenance',
        '2019-02-16_run-an-odoo-repl',
    ],
});
