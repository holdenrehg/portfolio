## Documentation

### Setting up

Install npm dependencies:

```console
$ npm install
```

### Developing

```console
$ npm run dev

# or open a browser tab
$ npm run dev -- --open
```

### Endpoints

There are a couple of routing API endpoints that I use for the blog.

-   `/blog/[slug].raw`
-   `/blog/all.raw`

These are used to fetch a single article's data, or data for every article.
