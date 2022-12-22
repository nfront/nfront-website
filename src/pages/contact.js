import React from 'react';
import Layout from '@common/layout';
import Seo from '@utils/SEO';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Link from '@common/link';
import Contact from '@sections/Contact';
import { device, Section, Container } from '@styles/global';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const StyledSection = styled(Section)`
    padding: 5rem 0;
    @media ${device.tablet} {
        padding: 7rem 0;
    }
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    a {
        font-weight: 500;
    }
`;

const ContactPage = ({ data }) => {
    const { title, heroImage } = data.allContentfulPages.edges[0].node;

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            <Hero heroImage={heroImage}>
                <h2>{title}</h2>
                <p>
                    Please reach out below and we will get back to you as soon
                    as possible.
                </p>
            </Hero>
            <StyledSection>
                <Container>
                    <Grid>
                        <Contact />
                        <div className="">
                            <div class="label">Drop us an email at</div>
                            <p>info@nfrontventures.com</p>
                            <div class="label">Visit us at</div>
                            <p>
                                <Link href="https://goo.gl/maps/X1k1eo7YebbSehEP9">
                                    Tollbugata 24, 0157
                                    <br />
                                    Oslo, Norway
                                </Link>
                            </p>
                        </div>
                    </Grid>
                </Container>
            </StyledSection>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { slug: { eq: "contact-us" } }) {
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

export default ContactPage;
