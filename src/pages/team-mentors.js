import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Wave from '@utils/divider/wave';
import Seo from '@utils/SEO';

import Mentors from '@sections/Mentors';
import Team from '@sections/Team';

const TeamPage = ({ data }) => {
    const { title, heroImage } = data.allContentfulPages.nodes[0];

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            <Hero heroImage={heroImage}>
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
        allContentfulPages(filter: { title: { eq: "Team and Mentors" } }) {
            nodes {
                title
                heroImage {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    }
`;

export default TeamPage;
