import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Section, Container, Grid, SectionTitle } from '@styles/global';
import styled from 'styled-components';
import { useIsHome } from '@utils/hooks/useCheckLocation';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StyledGrid = styled(Grid)`
    .grid-item {
        background: white;
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }
`;

const Text = styled.div`
    padding: 1rem;
    @media (min-width: ${(props) => props.theme.screen.md}) {
        min-height: 300px;
    }

    h3 {
        font-size: 100%;
        font-weight: 500;
        margin-bottom: 0.4rem;
    }

    .label {
        font-weight: 500;
    }

    p:not(.label) {
        font-size: 16px;
    }
`;

const Art = styled.div`
    img {
        /* height: auto; */
        margin-bottom: 0;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;

        @media (min-width: ${(props) => props.theme.screen.md}) {
            /* min-height: 240px; */
        }
    }
`;

// ALLWAYS USE IMAGES THAT ARE 16:9 FOR NEWS (PPT SLIDE SIZE. USE PPT TO MAKE IT.)

export default function News(props) {
    const { limit } = props;
    const data = useStaticQuery(graphql`
        query {
            allContentfulNewsPosts(
                sort: { order: DESC, fields: publishDate }
                limit: 1000
            ) {
                edges {
                    node {
                        id
                        slug
                        title
                        publishDate(formatString: "MMMM DD, YYYY")
                        metaDescription {
                            childMarkdownRemark {
                                excerpt(pruneLength: 200)
                            }
                        }
                        heroImage {
                            gatsbyImageData(layout: FULL_WIDTH)
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
                <StyledGrid>
                    {results.slice(0, limit).map(({ node: news }) => {
                        const image = getImage(news.heroImage)
                        return (
                            <div key={news.id} className="grid-item">
                                <Link to={`/news/${news.slug}`}>
                                    <Art>
                                        <GatsbyImage
                                            image={image}
                                            alt={news.title}
                                        />
                                    </Art>
                                    <Text>
                                        <h3>{news.title}</h3>
                                        <p className="label">
                                            {news.publishDate}
                                        </p>
                                        <p>
                                            {
                                                news.metaDescription
                                                    .childMarkdownRemark.excerpt
                                            }
                                        </p>
                                    </Text>
                                </Link>
                            </div>
                        );
                    })}
                </StyledGrid>
            </Container>
            {isHome && (
                <Link to="/news/">
                    <button className="button center">View All News</button>
                </Link>
            )}
        </Section>
    );
}
