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
import Img from 'gatsby-image';

const StyledContainer = styled(Container)`
    text-align: center;
    @media (min-width: ${props => props.theme.screen.xs}) {
        text-align: left;
    }
`;
const InfoSection = styled.div`
    flex: 0 1 300px;
    margin-right: 0rem;
    margin-bottom: 1.5rem;
    .info-card {
        border: 1px solid #ebedf2;
        border-radius: 4px;
        margin-top: 1rem;
        padding: 1rem;
        h3 {
            margin-bottom: 0 !important;
        }
    }
    @media (min-width: ${props => props.theme.screen.xs}) {
        // margin-right: 3rem;
        /* text-align: left; */
    }
`;

const DetailedSection = styled.div`
    flex: 1 1 400px;
    margin-left: 1.5rem;
`;
const StyledImg = styled(Img)`
    @media (min-width: ${props => props.theme.screen.xs}) {
        // margin-right: 3rem;
        /* text-align: left; */
    }
`;
export default ({ data }) => {
    console.log(data);
    const {
        title,
        body,
        heroImage,
        publishDate,
        profileImage,
        salary,
        experience,
        streetAddress,
    } = data.contentfulJobs;
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
                <StyledContainer>
                    <FlexBox>
                        <InfoSection>
                            <StyledImg
                                fluid={profileImage.fluid}
                                alt="profile image"
                            />{' '}
                            <div className="info-card">
                                <h2>Job Details</h2>
                                <h3>Address</h3>
                                <p>{streetAddress}</p>
                                <h3>Salary</h3>
                                <p>{salary}</p>
                                <h3>Experience</h3>
                                <p>{experience}</p>
                            </div>
                        </InfoSection>
                        <DetailedSection>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: body.childMarkdownRemark.html,
                                }}
                            ></div>
                        </DetailedSection>
                    </FlexBox>
                </StyledContainer>
            </Section>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        contentfulJobs(slug: { eq: $slug }) {
            title
            publishDate(fromNow: true)
            slug
            salary
            experience
            streetAddress
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
            profileImage {
                fluid(quality: 100) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;
