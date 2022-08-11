import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { Section, Container, Overlay, OverlayText } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StyledContainer = styled(Container)`
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (min-width: ${(props) => props.theme.screen.md}) {
            max-width: 800px;
        }
        margin-bottom: 3rem;
    }
    iframe {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: 3rem 0;
    }
`;

export default ({ data }) => {
    const { title, body, heroImage, publishDate } = data.contentfulPost;
    const pluginImage = getImage(heroImage);

    return (
        <Layout>
            <SEO title={title} />
            <Navbar fluid />
            {heroImage != null && (
                <div style={{ display: 'grid' }}>
                    <GatsbyImage
                        image={pluginImage}
                        style={{
                            gridArea: '1/1',
                            height: `50vh`,
                            width: `100vw`,
                            backgroundColor: `transparent`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center center`,
                            display: `flex`,
                            alignItems: `center`,
                        }}
                    />
                    <Overlay />
                    <OverlayText className="text-light">
                        <p>{publishDate}</p>
                        <h2 className="mb-0">{title}</h2>
                    </OverlayText>
                </div>
            )}
            <Section>
                <StyledContainer>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: body.childMarkdownRemark.html,
                        }}
                    ></div>
                </StyledContainer>
            </Section>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query ($slug: String!) {
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
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
    }
`;
