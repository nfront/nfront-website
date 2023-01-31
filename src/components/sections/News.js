import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from '@common/link';
import Image from '@common/image'
import { Section, Container, Grid, SectionTitle, ArtContainer } from '@styles/global';
import { useIsHome } from '@utils/hooks/useCheckLocation';

/** use if you need to style your section differently, otherwise leave it empty */
// const StyledSection = styled(Section)`
//     padding-bottom: 6rem;
// `;

// ALLWAYS USE IMAGES THAT ARE 16:9 FOR NEWS (PPT SLIDE SIZE. USE PPT TO MAKE IT.)

export default function News(props) {
    const { limit } = props;
    const data = useStaticQuery(graphql`
        query {
            allContentfulNewsPosts(sort: {publishDate: DESC}, limit: 1000) {
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
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulNewsPosts.edges;
    const isHome = useIsHome().isHome;
    return (
        <Section {...props}>
            <SectionTitle>
                <h2>News</h2>
            </SectionTitle>
            <Container>
                <Grid minWidth="300px" minHeight="" gap="1.3rem">
                    {results.slice(0, limit).map(({ node: news }) => {
                        return (
                            <div key={news.id} className="rounded-and-shadow bg-white">
                                <Link to={`/news/${news.slug}`}>
                                    <ArtContainer roundedTop className="mb-0">
                                        <Image
                                            image={news.heroImage}
                                            alt={news.title}
                                        />
                                    </ArtContainer>
                                    <div className="p-1">
                                        <h4 className="light-bold mb-03">{news.title}</h4>
                                        <label className="mb-2">
                                            {news.publishDate}
                                        </label>
                                        <p className="small-font mb-0">
                                            {
                                                news.metaDescription
                                                    .childMarkdownRemark.excerpt
                                            }
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </Grid>
            </Container>
            {isHome && (
                <Link to="/news/" display="block" className="mt-3">
                    <button className="button center">View All News</button>
                </Link>
            )}
        </Section>
    );
}
