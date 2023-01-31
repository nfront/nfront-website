import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Wave from '@utils/divider/wave';
import Seo from '@utils/SEO';

import Mentors from '@sections/Mentors';
import Team from '@sections/Team';

const TeamPage = ({ data, location }) => {
    const { title, heroImage } = data.allContentfulPages.edges[0].node;

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid location={location}/>
            <Hero heroImage={heroImage} alt={title}>
                <h2>Team & Mentors</h2>
                <p>
                    Mentors are available to portfolio companies, including
                    world-class founders, technology experts and VC investors.
                </p>
            </Hero>
            <Team />
            <Mentors />
            <Wave accent="dark" />
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { slug: { eq: "team-and-mentors" } }) {
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

export default TeamPage;
