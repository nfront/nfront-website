import React, { useRef } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Cta from '@common/CTA';
import Wave from '@utils/divider/wave';
import Seo from '@utils/SEO';
import Thesis from '@sections/Thesis';
import CoInvestors from '@sections/CoInvestors';
import TransactionTestimonials from '@sections/TransactionTestimonials';

const ThesisPage = ({ data }) => {
    const coInvestorsRef = useRef(null);
    const thesisRefs = { coInvestorsRef: coInvestorsRef };
    const navRef = useRef(null);

    const { title, heroImage } = data.allContentfulPages.edges[0].node;

    return (
        <Layout>
            <Seo title={title} />
            <Navbar ref={navRef} fluid />
            <Hero heroImage={heroImage}>
                <h2>nFront Ventures</h2>
                <p>
                    We invest time and capital in exceptional entrepreneurs with
                    groundbreaking ideas.
                </p>
            </Hero>
            <Thesis navRef={navRef} thesisRefs={thesisRefs} />
            <CoInvestors ref={thesisRefs.coInvestorsRef} />
            <TransactionTestimonials />
            <Cta>
                <h2>Contact</h2>
                <p>
                    Are you an early-to-growth stage company looking to raise
                    capital from local or top-tier international VC funds?
                </p>
                <Link to="/contact/">
                    <button className="button center mt-0">Get in touch</button>
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
