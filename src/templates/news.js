import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import Hero from '@common/hero';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import { Section, Container } from '@styles/global';

const StyledContainer = styled(Container)`
    img {
        max-width: 800px;

        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 3rem;
    }
    iframe {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
        
        max-width: 800px;

        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: 3rem 0;
    }
    ul {
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
    }
`;

const news = ({ data }) => {
    const { title, body, heroImage, publishDate } = data.contentfulNewsPosts;

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            {heroImage != null && (
                <Hero heroImage={heroImage} height="short" small>
                    <p className="mb-0">{publishDate}</p>
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
                title
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
    }
`;
