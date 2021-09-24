import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2020-01-29_chaining-context-managers-for-mocks',
    title: 'Chaining ContextManager values when mocking tests',
    datePosted: '2020-01-29',
    coverImage: '/images/articles/chaining-context-managers-for-mocks/cover.jpg',
    thumbnailImage: '/images/articles/chaining-context-managers-for-mocks/cover-min.jpg',
    description: 'Using context managers to make your tests and mock a little easier to understand.',
    contentSnippet: `
    <p>
      Recently, I’ve used<code>unittest.mock.patch</code>to mock connections
      to external services while developing a Django app. While writing the
      tests, I found myself, repeatedly writing code that looks like:
    </p>
    <code>
    def test_valid_connection_has_connected_status():
      with mock.patch("myapp.connection", MockConnection):
        with mock.patch("myapp.authenticator", MockAuthenticator):
          assertTrue(connect().is_connected)
          assertEqual(connect().status, "connected")
    </code>
    <p>
      It’s not a huge deal at first, but as you add more use cases things
      really bloat up. I wanted utilities with a clear interface for the team
      to prevent mistakes, to make the tests more readable, and to save a few
      characters. Generally, the solution to, either with variables or
      functions, dynamically chain together context managers wasn’t perfectly
      clear (at least it wasn’t to me).
    </p>
    <blockquote>
      If you aren’t familiar with context managers, go read through the
      <a
        href="https://docs.python.org/3.7/reference/datamodel.html#context-managers"
        rel="noreferrer"
        target="_blank">data model docs</a>
      and the
      <a
        href="https://docs.python.org/3.7/reference/compound_stmts.html#the-with-statement"
        rel="noreferrer"
        target="_blank">language reference docs on the with statement</a>.
    </blockquote>
    <h2>Variables</h2>
    <p>One potential solution we have is to pull out some common variables.</p>
    <p>
      Looking back at our example, we may want to split out the
      authenticators so that we can easily handle both authenticated and
      unauthenticated scenarios.
    </p>
    `,
    tags: [Tags.Python, Tags.WebDevelopment, Tags.UnitTesting, Tags.SoftwareTesting, Tags.Refactoring],
    related: [
        '2020-03-29_daily-odoo-team-routine',
        '2019-08-09_whats-in-python3.8',
        '2019-09-17_simple-business-manifesto',
    ],
});
