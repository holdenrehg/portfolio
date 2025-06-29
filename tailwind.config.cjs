const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],
    variants: {},
    plugins: [],
    theme: {
        fontSize: {
            xs: '0.75rem',
            sm: '0.98rem',
            base: '1.06rem',
            lg: '1.135rem',
            xl: '1.45rem',
            '2xl': '1.6rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },

        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            article: '0.008em',
            normal: '0.03em',
            wide: '0.05em',
            wider: '0.075em',
            widest: '0.125em',
        },

        extend: {
            spacing: {
                72: '18rem',
                80: '20rem',
                88: '22rem',
                96: '24rem',
                104: '26rem',
                112: '28rem',
                224: '56rem',
                256: '64rem',
            },

            fontSize: {
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
                article: '1.2rem',
            },

            opacity: {
                90: '0.9',
                80: '0.8',
            },

            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
            },

            colors: {
                gray: colors.coolGray,
                orange: colors.orange,
                indigo: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#3c366b',
                },
            },
        },
    },
};
