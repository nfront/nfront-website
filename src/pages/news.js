import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Seo from '@utils/SEO';

import News from '@sections/News';

const NewsPage = ({ data }) => {
    const { title, heroImage } = data.allContentfulPages.nodes[0];

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            <Hero large heroImage={heroImage}>
                <h2>{title}</h2>
            </Hero>
            <News limit={'1000'} />
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { title: { eq: "nFront News" } }) {
            nodes {
                title
                heroImage {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    }
`;

export default NewsPage;
