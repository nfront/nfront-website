import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { Section, Container } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Seo from '@utils/SEO';
import { Grid } from '../styles/global';
import CourseCard from '../components/common/courseSummaryCard';
import RelatedCourse from '../components/common/relatedCourse';

const StyledContainer = styled(Container)`
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (min-width: ${(props) => props.theme.screen.md}) {
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

const StyledGrid = styled(Grid)`
    .grid-item {
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
        position: relative;
        cursor: pointer;
        &::after {
            background-size: center;
            background-repeat: no-repeat;
            background-position: bottom;
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -1;
        }
    }
    .grid-item:hover {
        box-shadow: 0 0 42px 6px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
    }
`;

const courses = ({ data }) => {
    const result = data.allContentfulCourses.edges;
    // const res = result.map((course) => course?.node);

    return (
        <Layout>
            <Seo title={'title'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg" />
            <Section>
                <div style={{ maxWidth: '345px' }}>
                    <CourseCard props={result} />
                    <RelatedCourse props={result} />
                </div>
            </Section>
            <Footer />
        </Layout>
    );
};

{
    /* <StyledGrid>
        {result?.map((course, key) => {
            return (
                <Card sx={{ maxWidth: 345 }} key={key}>
                    <CardActionArea>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                textAlign="center"
                            >
                                Course Summary
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            image={Europe}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'end',
                                }}
                            >
                                <HomeIcon />
                                Course : {course?.node?.title}
                            </Typography>
                            <Divider
                                style={{
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                }}
                            />
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'end',
                                }}
                            >
                                <BookIcon />
                                Classes : 5
                            </Typography>
                            <Divider
                                style={{
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                }}
                            />
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'end',
                                }}
                            >
                                <LanguageIcon />
                                Language : English
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            );
        })}
    </StyledGrid> */
}

export default courses;

export const query = graphql`
    query {
        allContentfulCourses {
            edges {
                node {
                    id
                    slug
                    title
                }
            }
        }
    }
`;
