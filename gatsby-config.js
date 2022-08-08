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
                forceFullSync: true,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-svgr`,
        `gatsby-plugin-image`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-background-image`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-inline-svg`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@common': path.resolve(__dirname, 'src/components/common'),
                    '@images': path.resolve(__dirname, 'src/images'),
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
