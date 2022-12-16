import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '@common/layout';
import Menu from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Link from '@common/link';
import Contact from '@sections/Contact';
import Seo from '@utils/SEO';
import { Section, Container } from '@styles/global';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;

    @media (min-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }

    a {
        font-weight: 500;
    }

    .button {
        border-radius: 0;
    }
`;

const ThanksPage = ({ data }) => {
    const { title, heroImage } = data.allContentfulPages.edges[0].node;

    return (
        <Layout>
            <Seo title={title} />
            <Menu fluid />
            <Hero heroImage={heroImage}>
                <h2>{title}</h2>
                <p>
                    We appreciate you contacting us. We will be in touch as soon
                    as possible.
                </p>
            </Hero>
            <Section>
                <Container>
                    <Grid>
                        <Contact />
                        <div className="">
                            <div class="label">Drop us an email at</div>
                            <p>info@nfrontventures.com</p>
                            <div class="label">Visit us at</div>
                            <p>
                                <Link to="https://goo.gl/maps/X1k1eo7YebbSehEP9">
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
