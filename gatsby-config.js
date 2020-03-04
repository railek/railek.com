const path = require('path');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const sanityConfig = require('./sanity.config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Railek',
                description:
                    'Developer who also designs, with a interest in web technology and video games.',
                short_name: 'Railek',
                icon: 'src/images/icon.svg',
                icon_options: {
                    purpose: 'any maskable',
                },
                start_url: '/',
                background_color: '#000000',
                theme_color: '#ffffff',
                display: 'standalone',
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-netlify',
        'gatsby-plugin-netlify-cache',
        'gatsby-plugin-no-sourcemaps',
        'gatsby-plugin-eslint',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-stylelint',
            options: { files: ['**/*.{js,jsx}'] },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images'),
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                ...sanityConfig.sanity,
                token: process.env.GATSBY_SANITY_TOKEN,
                watchMode: !isProd,
                overlayDrafts: !isProd,
            },
        },
    ],
};
