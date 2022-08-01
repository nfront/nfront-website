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
export default ({ data }) => {
    const {
        title,
        description,
        coverImage,
        body,
        courseCategories,
    } = data.contentfulCourses;
    console.log(body.json.content);
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
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        description.childMarkdownRemark.html,
                                }}
                            ></div>
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
            description {
                childMarkdownRemark {
                    html
                }
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
