import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2019-04-26_becoming-a-superuser-in-odoo',
    title: 'Becoming a superuser in Odoo 12',
    subtitle: "It's a little different from before",
    datePosted: '2019-04-26',
    coverImage: '/images/articles/becoming-a-superuser-in-odoo/cover.jpg',
    thumbnailImage: '/images/articles/becoming-a-superuser-in-odoo/cover-min.jpg',
    description:
        'Superuser has all of the power in Odoo and there can only be one, so we need to understand it well as developers.',
    contentSnippet: `
    <p>In older versions of Odoo, prior to version 12.0, every instance was created with a default user called Administrator with a primary database id of 1.</p>
    <p>In the code, you’ll find this little gem:</p>
    <code>
      # The hard-coded super-user id (a.k.a. administrator, or root user).

      SUPERUSER_ID = 1
    </code>
    <h2>Easy but dangerous</h2>
    <p>This made things easy for developers. Most developers probably always logged in as the administrator user, especially on their local environments. So every time they logged in they had full access to all resources. Maybe you still had to add a certain group here or there, but generally you have access to everything.</p>
    <p>This also used to make things dangerous...</p>
    `,
    tags: [Tags.Odoo, Tags.Erp, Tags.Python, Tags.SoftwareTesting],
    related: [
        '2019-07-01_clicking-everywhere-in-odoo',
        '2019-07-13_ten-ways-to-prevent-tech-debt',
        '2019-02-02_writing-tests-in-odoo',
    ],
});
