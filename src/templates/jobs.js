import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '@common/layout';
import Hero from '@common/hero';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Image from '@common/image';

import { Section, Container, ArtContainer, Sticky } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import Seo from '@utils/SEO';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faDollarSign,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled(Container)`
    text-align: center;
    @media ${breakpoints.mobileL} {
        text-align: left;
    }
    p {
        margin-bottom: 1rem;
    }
    h2,
    h3,
    h4,
    ul {
        margin-bottom: 1.5rem;
    }
`;

const Content = styled.div`
    h3 {
        font-weight: 500;
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

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            {heroImage != null && (
                <Hero heroImage={heroImage} height="short" small>
                    {/* <p className="mb-0">{publishDate}</p> */}
                    <h2 className="mb-0">{title}</h2>
                </Hero>
            )}
            <Section>
                <StyledContainer>
                    <div className="grid-layout-wrapper--left center-mobile">
                        <div className="grid-layout-side">
                            <ArtContainer>
                                <Image image={icon} alt={title} />
                            </ArtContainer>
                            <Sticky top="5.5rem" className="info-card grey-border p-15 m-0">
                                <h3>Job Details</h3>
                                <h4 className="mb-03 light-bold">
                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        size="1x"
                                    />{' '}
                                    Address
                                </h4>
                                <p className="mb-1">{streetAddress}</p>
                                <h4 className="mb-03 light-bold">
                                    <FontAwesomeIcon
                                        icon={faDollarSign}
                                        size="1x"
                                    />{' '}
                                    Salary
                                </h4>
                                <p className="mb-1">{salary}</p>
                                <h4 className="mb-03 light-bold">
                                    <FontAwesomeIcon
                                        icon={faShieldAlt}
                                        size="1x"
                                    />{' '}
                                    Experience
                                </h4>
                                <p className="mb-0">{experience}</p>
                            </Sticky>
                        </div>
                        <Content className="grid-layout-content">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: body.childMarkdownRemark.html,
                                }}
                            ></div>
                        </Content>
                    </div>
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
                url
                mimeType
                title
                gatsbyImageData(layout: FULL_WIDTH)
            }
            icon {
                title
                gatsbyImageData(width: 200)
            }
        }
    }
`;
