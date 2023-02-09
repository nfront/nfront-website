const path = require('path');
require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: `nFront Ventures`,
        siteUrl: `https://nfrontventures.com`,
        description: `nFront Ventures - Provides capital and operational support to companies across various stages.`,
        keywords: ``,
        author: ``,
        social: {
            twitter: ``,
        },
    },

    plugins: [
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `team`,
                path: `${__dirname}/src/images/team`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `testimonials`,
                path: `${__dirname}/src/images/testimonials`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `art`,
                path: `${__dirname}/src/images/art`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `logo`,
                path: `${__dirname}/src/images/logos`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/gatsby-config.js`,
            },
        },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `slide`,
        //         path: `${__dirname}/src/images/slider`,
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `nfront`,
                path: `${__dirname}/src/images/nfront`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-svgr`,
        `gatsby-plugin-image`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`, `avif`],
                    placeholder: `blurred`,
                    quality: 100,
                    breakpoints: [750, 1080, 1366, 1920, 2048],
                },
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-inline-svg`,
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@common': path.resolve(__dirname, 'src/components/common'),
                    '@context': path.resolve(__dirname, 'src/components/context'),
                    '@images': path.resolve(__dirname, 'src/images'),
                    '@pages': path.resolve(__dirname, 'src/pages'),
                    '@sections': path.resolve(
                        __dirname,
                        'src/components/sections'
                    ),
                    '@styles': path.resolve(__dirname, 'src/styles/'),
                    '@utils': path.resolve(__dirname, 'src/utils/'),
                    '@static': path.resolve(__dirname, 'static/'),
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `nFront Ventures`,
                short_name: `nFront`,
                start_url: `/`,
                background_color: `#0C1729`,
                theme_color: `#0C1729`,
                display: `minimal-ui`,
                icon: `static/favicon.svg`,
            },
        },
        'gatsby-plugin-offline',
    ],
};
