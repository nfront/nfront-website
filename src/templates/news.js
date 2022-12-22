import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { device, Section, Container } from '@styles/global';
import Hero from '@common/hero';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Seo from '@utils/SEO';

const StyledContainer = styled(Container)`
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media ${device.laptop} {
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

const news = ({ data }) => {
    const { title, body, heroImage, publishDate } = data.contentfulNewsPosts;

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

export default news;

export const query = graphql`
    query ($slug: String!) {
        contentfulNewsPosts(slug: { eq: $slug }) {
            title
            publishDate(fromNow: true)
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
            heroImage {
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
    }
`;
