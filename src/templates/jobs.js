import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { Section, Container, Overlay, OverlayText } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { FlexBox } from '../components/sections/Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faDollarSign,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

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
        svg {
            padding-right: 0.2rem;
        }
        h3 {
            margin-bottom: 0 !important;
        }
    }
    @media (min-width: ${props => props.theme.screen.xs}) {
        // margin-right: 3rem;
        // text-align: center;
    }
`;

const DetailedSection = styled.div`
    flex: 1 1 300px;
    @media (min-width: 708px) {
        margin-left: 1.5rem;
    }
    text-align: left;
`;
const StyledImg = styled(BgImage)`
    @media (min-width: ${props => props.theme.screen.xs}) {
        // margin-right: 3rem;
        /* text-align: left; */
    }
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
        body,
        heroImage,
        publishDate,
        profileImage,
        salary,
        experience,
        streetAddress,
    } = data.contentfulJobs;

    const pluginImageHero = getImage(heroImage);
    const pluginImageProfile = getImage(profileImage);

    return (
        <Layout>
            <SEO title={title} />
            <Navbar fluid />
            {heroImage != null && (
                <BgImage
                    image={pluginImageHero}
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
                </BgImage>
            )}
            <Section>
                <StyledContainer>
                    <ModifiedFlexBox>
                        <InfoSection>
                            <StyledImg
                                image={pluginImageProfile}
                                alt="profile image"
                            />
                            <div className="info-card">
                                <h2>Job Details</h2>
                                <h3>
                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        size="1x"
                                    />
                                    Address
                                </h3>
                                <p>{streetAddress}</p>
                                <h3>
                                    {' '}
                                    <FontAwesomeIcon
                                        icon={faDollarSign}
                                        size="1x"
                                    />{' '}
                                    <span>Salary</span>
                                </h3>
                                <p>{salary}</p>
                                <h3>
                                    {' '}
                                    <FontAwesomeIcon
                                        icon={faShieldAlt}
                                        size="1x"
                                    />
                                    Experience
                                </h3>
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
                    </ModifiedFlexBox>
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
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
            profileImage {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
    }
`;
