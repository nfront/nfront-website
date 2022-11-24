import React from 'react';
import Layout from '@common/layout';
import Seo from '@utils/SEO';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Contact from '@sections/Contact';
import ExternalLink from '@utils/externalLink';
import { Section, Container } from '@styles/global';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const StyledSection = styled(Section)`
    padding: 5rem 0;
    @media (min-width: ${(props) => props.theme.screen.sm}) {
        padding: 7rem 0;
    }
`;
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
`;

const ContactPage = ({ data }) => {
    const { title, heroImage } = data.allContentfulPages.nodes[0];

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
                                <ExternalLink href="https://goo.gl/maps/X1k1eo7YebbSehEP9">
                                    Tollbugata 24, 0157
                                    <br />
                                    Oslo, Norway
                                </ExternalLink>
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
        allContentfulPages(filter: { title: { eq: "Contact Us" } }) {
            nodes {
                title
                heroImage {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    }
`;

export default ContactPage;
