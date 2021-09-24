/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
    },

    preprocess: {
        style: async ({ content, attributes }) => {
            if (attributes.lang !== 'text/postcss') {
                return;
            }

            return new Promise((resolve, reject) => {
                resolve({ code: '', map: '' });
            });
        },
    },
};

export default config;
