import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Link from '@common/link';
import Seo from '@utils/SEO';
import Contact from '@sections/Contact';
import { Section, Container, Grid } from '@styles/global';

const ThanksPage = ({ data, location }) => {
    const { title, heroImage } = data.allContentfulPages.edges[0].node;

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid location={location} />
            <Hero heroImage={heroImage} alt={title}>
                <h2>{title}</h2>
                <p>
                    We appreciate you contacting us. We will be in touch as soon
                    as possible.
                </p>
            </Hero>
            <Section>
                <Container>
                    <Grid>
                        <div className="">
                            <div class="label">Drop us an email at</div>
                            <p>info@nfrontventures.com</p>
                            <div class="label">Visit us at</div>
                            <p>
                                <Link
                                    className="light-bold"
                                    href="https://goo.gl/maps/X1k1eo7YebbSehEP9"
                                >
                                    Tollbugata 24, 0157
                                    <br />
                                    Oslo, Norway
                                </Link>
                            </p>
                        </div>
                    </Grid>
                </Container>
            </Section>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { slug: { eq: "thank-you" } }) {
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

export default ThanksPage;
