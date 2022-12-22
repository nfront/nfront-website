import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { device, Section, Container } from '@styles/global';
import Hero from '@common/hero';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FlexBox } from '../components/sections/Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faDollarSign,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled(Container)`
    text-align: center;
    @media ${device.mobileL} {
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
    @media ${device.mobileL} {
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
const StyledImg = styled(GatsbyImage)`
    @media ${device.mobileL} {
        // margin-right: 3rem;
        /* text-align: left; */
    }
`;
const ModifiedFlexBox = styled(FlexBox)`
    padding: 0;
    @media ${device.mobileL} {
        padding: 0 1.5rem;
    }
`;
const jobs = ({ data }) => {
    const {
        title,
        body,
        heroImage,
        publishDate,
        icon,
        salary,
        experience,
        streetAddress,
    } = data.contentfulJobs;

    const iconImage = getImage(icon);

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            {heroImage != null && (
                <Hero heroImage={heroImage} height='short' small>
                    <p>{publishDate}</p>
                    <h2 className="mb-0">{title}</h2>
                </Hero>
            )}
            <Section>
                <StyledContainer>
                    <ModifiedFlexBox>
                        <InfoSection>
                            <StyledImg image={iconImage} alt="profile image" />
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

export default jobs;

export const query = graphql`
    query ($slug: String!) {
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
                gatsbyImageData
            }
            icon {
                gatsbyImageData
            }
        }
    }
`;
