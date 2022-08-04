import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { Section, Container, Overlay, OverlayText } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import BackgroundImage from 'gatsby-background-image';
import { FlexBox } from '../components/sections/Team';
import { INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const StyledContainer = styled(Container)`
    text-align: center;
    @media (min-width: ${props => props.theme.screen.xs}) {
        text-align: left;
    }
`;

const DetailedSection = styled.div`
    flex: 1 1 300px;
    @media (min-width: 708px) {
        margin-left: 1.5rem;
    }
    text-align: left;
`;

const ModifiedFlexBox = styled(FlexBox)`
    padding: 0;
    @media (min-width: ${props => props.theme.screen.xs}) {
        padding: 0 1.5rem;
    }
`;

const IframeContainer = styled.span`
    padding-bottom: 56.25%;
    position: relative;
    display: block;
    width: 100%;

    > iframe {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const VideoHolder = styled.div``;

export default ({ data }) => {
    const {
        title,
        coverImage,
        body,
        courseCategories,
    } = data.contentfulCourses;
    const website_url = 'vimeo.com';
    const options = {
        renderNode: {
            [INLINES.HYPERLINK]: node => {
                if (node.data.uri.indexOf('youtu') !== -1) {
                    return (
                        <IframeContainer>
                            <iframe
                                title="nFront Ventures Video Player"
                                src={node.data.uri}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </IframeContainer>
                    );
                } else if (node.data.uri.indexOf('vimeo.com') !== -1) {
                    return (
                        <IframeContainer>
                            <iframe
                                title="Unique Title 001"
                                src={node.data.uri}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </IframeContainer>
                    );
                } else
                return (
                    <a
                        href={node.data.uri}
                        target={`${
                            node.data.uri.startsWith(website_url)
                                ? '_self'
                                : '_blank'
                        }`}
                        rel={`${
                            node.data.uri.startsWith(website_url)
                                ? ''
                                : 'noopener noreferrer'
                        }`}
                    >
                        {node.content[0].value}
                    </a>
                );
            },
        },
    };
    return (
        <Layout>
            <SEO title={title} />
            <Navbar fluid />
            {coverImage != null && (
                <BackgroundImage
                    fluid={coverImage.fluid}
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
                        <h2 className="mb-0">{title}</h2>
                    </OverlayText>
                </BackgroundImage>
            )}
            <Section>
                <StyledContainer>
                    <ModifiedFlexBox>
                        <DetailedSection>
                            <p className="category">{courseCategories.title}</p>
                            <div>
                                {documentToReactComponents(body.json, options)}
                            </div>
                        </DetailedSection>
                    </ModifiedFlexBox>
                </StyledContainer>
            </Section>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        contentfulCourses(slug: { eq: $slug }) {
            title
            slug
            courseCategories {
                title
            }
            body {
                json
            }
            coverImage {
                fluid(quality: 100) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;
