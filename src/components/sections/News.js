import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Section, Container, Grid, SectionTitle } from '@styles/global';
import styled from 'styled-components';
import { useIsHome } from '@utils/hooks/useIsHome';

const GRID = styled(Grid)`
    .grid-item {
        background: white;
        border: 1px solid var(--border-color);
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

    p:not(.label) {
        font-size: 16px;
    }
`;

const Art = styled.div`
    img {
        height: auto;
        margin-bottom: 0;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;

        @media (min-width: ${props => props.theme.screen.md}) {
            min-height: 240px;
        }
    }
`;

export default function News(props) {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPost(
                sort: { order: DESC, fields: publishDate }
                limit: 6
            ) {
                edges {
                    node {
                        id
                        slug
                        title
                        publishDate(formatString: "MMMM DD, YYYY")
                        metaDescription {
                            childMarkdownRemark {
                                excerpt
                            }
                        }
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
    const isHome = useIsHome().isHome;
    return (
        <Section {...props}>
            <SectionTitle>
                <h2>News</h2>
            </SectionTitle>
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
                                    <p className="label">{news.publishDate}</p>
                                    <h3>{news.title}</h3>
                                    <p>
                                        {
                                            news.metaDescription
                                                .childMarkdownRemark.excerpt
                                        }
                                    </p>
                                </Text>
                            </Link>
                        </div>
                    ))}
                </GRID>
            </Container>
            {isHome && (
                <Link to="/news/">
                    <button className="button center">View All News</button>
                </Link>
            )}
        </Section>
    );
}
