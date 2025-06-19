## Documentation

### Setting up

Install npm dependencies:

```console
$ npm install
$ npx playwright install
```

### Developing

```console
$ npm run dev

# or open a browser tab
$ npm run dev -- --open
```

### Building

For production builds:

```console
$ npm run build
```

To preview it locally:

```console
$ npm run preview
```

### Endpoints

There are a couple of routing API endpoints that I use for the blog.

-   `/blog/[slug].raw`
-   `/blog/all.raw`

These are used to fetch a single article's data, or data for every article.

### Writing a new article

All of the article content is stored in `src/lib/articles/`. To write a new article:

#### 1. Create a new directory.

The name of the directory will match the url slug. All past articles follow the format `{year}-{month}-{date}_{summary}`. For example, `2021-08-16_odoo-patterns-humble-object`. That article will be available at `/blog/2021-08-16_odoo-patterns-humble-object`.

#### 2. Add a `meta.js`.

Inside of the article directory create `meta.js`:

```js
import { Meta, Tags } from '$lib/blog';

export default new Meta({
    id: '2021-09-09_how-i-manage-local-development-odoo-projects',
    title: 'How I manage hundreds of local development Odoo projects',
    datePosted: '2021-09-09 14:02:00',
    coverImage: '/images/articles/how-i-manage-local-development-odoo-projects/cover.jpg',
    thumbnailImage: '/images/articles/how-i-manage-local-development-odoo-projects/cover-min.jpg',
    description: 'I documented my process for managing Odoo projects for local development.',
    contentSnippet: `
    <p>
        <span class="first-letter">O</span>doo development has a unique set of problems
        that I have not dealt with in any other web development project. The
        main issue in my experience stems from yearly, non backwards compatible
        upgrades.
    </p>
    `,
    tags: [Tags.OpenSource, Tags.Python, Tags.Odoo, Tags.SoftwareCraftsmanship],
    related: [
        '2021-06-03_odoo-docker-quickstart',
        '2016-03-03_managing-multiple-odoo-instances',
        '2021-08-16_odoo-patterns-humble-object',
    ],
});
```

#### 3. Create a static folder if needed.

The static images for articles are stored in `static/images/articles`. If the article has a cover image or thumbnail, put those here.

#### 4. Create a `Content.svelte`.

Pure html. Simple as that.
