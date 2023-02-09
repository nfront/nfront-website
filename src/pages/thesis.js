import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Cta from '@common/CTA';
import Link from '@common/link';
import Wave from '@utils/divider/wave';
import Seo from '@utils/SEO';
import Thesis from '@sections/Thesis';
import CoInvestors from '@sections/CoInvestors';
import TransactionTestimonials from '@sections/TransactionTestimonials';

const ThesisPage = ({ data, location }) => {

    const { title, heroImage } = data.allContentfulPages.edges[0].node;

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid location={location} />
            <Hero heroImage={heroImage} alt={title}>
                <h2>nFront Ventures</h2>
                <p>
                    We invest time and capital in exceptional entrepreneurs with
                    groundbreaking ideas.
                </p>
            </Hero>
            <Thesis />
            <CoInvestors />
            <TransactionTestimonials />
            <Cta>
                <h2>Contact</h2>
                <p>
                    Are you an early-to-growth stage company looking to raise
                    capital from local or top-tier international VC funds?
                </p>
                <Link to="/contact/" display="block" className="mt-3">
                    <button className="button center">Get in touch</button>
                </Link>
            </Cta>
            <Wave accent="dark" />
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { slug: { eq: "thesis" } }) {
            edges {
                node {
                    title
                    slug
                    heroImage {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;

export default ThesisPage;
