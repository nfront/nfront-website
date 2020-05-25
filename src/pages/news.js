import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';

const GRID = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    transition: transform 0.3s ease-in-out;

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-item {
        background: white;
        border: 1px solid #e7eaf3;
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }
`;

const Text = styled.div`
    padding: 1rem;

    h3 {
        font-size: 100%;
        font-weight: 500;
    }

    p {
        font-size: 16px;
        margin-bottom: 0;
    }
    .label {
        font-size: 12px;
    }
`;

const Art = styled.div`
    img {
        margin-bottom: 0;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
    }
`;

export default () => {
    const title = "What's New";
    const data = useStaticQuery(graphql`
        query {
            allContentfulPost(limit: 1000) {
                edges {
                    node {
                        id
                        slug
                        title
                        publishDate(fromNow: true)
                        heroImage {
                            fluid(quality: 100) {
                                src
                            }
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulPost.edges;
    return (
        <Layout>
            <SEO title={title} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>{title}</h2>
            </Hero>
            <Section>
                <Container>
                    <GRID>
                        {results.map(({ node: news }) => (
                            <div key={news.id} className="grid-item">
                                <Link to={`/news/${news.slug}`}>
                                    <Art>
                                        <img
                                            src={news.heroImage.fluid.src}
                                            alt={news.title}
                                        />
                                    </Art>
                                    <Text>
                                        <h3>{news.title}</h3>

                                        <p>{news.publishDate}</p>
                                    </Text>
                                </Link>
                            </div>
                        ))}
                    </GRID>
                </Container>
            </Section>
            <Footer />
        </Layout>
    );
};
