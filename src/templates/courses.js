import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Seo from '@utils/SEO';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Divider,
    Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import LanguageIcon from '@mui/icons-material/Language';
import Europe from '@images/nfront/europe.jpg';

const StyledContainer = styled(Container)`
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media ${breakpoints.laptop} {
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

const courses = ({ data }) => {
    
    return (
        <Layout>
            <Seo title={'title'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg" />
            <Section>
                <StyledContainer>
                    <Card sx={{ maxWidth: 345 }}>
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
                                    Course : Financial Modelling
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
                </StyledContainer>
            </Section>
            <Footer />
        </Layout>
    );
};

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
