import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@common/layout';
import { Section, Container, Overlay, OverlayText } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import BackgroundImage from 'gatsby-background-image';

export default ({ data }) => {
    const { title, body, heroImage, publishDate } = data.contentfulPost;
    return (
        <Layout>
            <SEO title={title} />
            <Navbar fluid />
            {heroImage != null && (
                <BackgroundImage
                    fluid={heroImage.fluid}
                    style={{
                        height: `50vh`,
                        width: `100vw`,
                        backgroundColor: `transparent`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center center`,
                        display: `flex`,
                        alignItems: `center`,
                    }}
                >
                    <Overlay />
                    <OverlayText className="text-light">
                        <p>{publishDate}</p>
                        <h2 className="mb-0">{title}</h2>
                    </OverlayText>
                </BackgroundImage>
            )}
            <Section>
                <Container>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: body.childMarkdownRemark.html,
                        }}
                    ></div>
                </Container>
            </Section>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        contentfulPost(slug: { eq: $slug }) {
            title
            publishDate(fromNow: true)
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
            heroImage {
                fluid(quality: 100) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;
