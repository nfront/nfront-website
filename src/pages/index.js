import React from 'react';
import { graphql } from 'gatsby';

import Link from '@common/link';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Cta from '@common/CTA';
import Footer from '@common/footer';
import Header from '@sections/Header';

import About from '@sections/About';
import Portfolio from '@sections/Portfolio';
import News from '@sections/News';
import TransactionTestimonials from '@sections/TransactionTestimonials';
import Wave from '@utils/divider/wave';
import Seo from '@utils/SEO';

const IndexPage = ({ data, location }) => {

    const { title, heroImage } = data.allContentfulPages.edges[0].node;

    return (
        <Layout>
            <Seo title={title} />
            <Navbar
                fluid
                location={location}
            />
            <Header heroImage={heroImage} />
            <About />
            <Wave />
            <Portfolio />
            <News accent="alt" limit="6" />
            <Wave />
            <TransactionTestimonials />
            <Cta id="contact">
                <h2>Contact</h2>
                <p>
                    Are you an early-to-growth stage company, with global
                    ambitions, looking for funding?
                    {/* <br/>Don't hesitate to reach out, we would be happy to dive in and see if we can help. */}
                </p>
                <Link to="/contact/" display="block" className="mt-3">
                    <button className="button center">
                        Get in touch
                    </button>
                </Link>
            </Cta>
            <Wave accent="dark" />
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(
            filter: { slug: { eq: "capital-and-fundraising" } }
        ) {
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

export default IndexPage;
