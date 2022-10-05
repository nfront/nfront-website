import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { Section, Container } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Seo from '@utils/SEO';
import { OverlayText } from '../styles/global';
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

const CourseSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const CourseTagline = styled(OverlayText)`
    padding: 0;
    display: block;
    text-align: left;
`;

const IframeContainer = styled.span`
    padding-bottom: 56.25%;
    position: relative;
    display: block;
    width: 100%;

    > iframe {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
    }
`;

const TabsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const TabButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 15px;
    margin-top: 30px;
`;

const TabButton = styled.button`
    background: blue;
    color: black;
    width: 105px;
    height: 35px;
    border: 1px solid blue;
    border-radius: 6px;
    font-family: 'Poppins';
    font-size: 14px;
    cursor: pointer;

    &:hover {
        transition: 0.5s;
        background: blue;
        color: white;
    }
`;

const courses = ({ data }) => {
    const result = data.allContentfulCourses.nodes;

    return (
        <Layout>
            <Seo title={'title'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg" />
            <Section>
                <StyledContainer>
                    {result.map((course) => {
                        return (
                            <>
                                <div>
                                    <p className="category">{course?.title}</p>
                                </div>
                                <CourseTagline>
                                    <h2 className="mb-0">{course?.tagLine}</h2>
                                </CourseTagline>
                                <IframeContainer>
                                    <iframe
                                        title="nFront Ventures Video Player"
                                        src={course?.introductionVideo?.url}
                                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </IframeContainer>
                                <TabsContainer>
                                    <TabButtons>
                                        <TabButton>dsadasd</TabButton>
                                        <TabButton>dsadasd</TabButton>
                                        <TabButton>dsadasd</TabButton>
                                        <TabButton>dsadasd</TabButton>
                                    </TabButtons>
                                </TabsContainer>
                            </>
                        );
                    })}
                    <div style={{ maxWidth: '345px' }}>
                        {/* <CourseCard props={data.allContentfulCourses} />
                        <RelatedCourse props={data.allContentfulCourses} /> */}
                    </div>
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
            nodes {
                title
                tagLine
                courseDescription {
                    childMarkdownRemark {
                        html
                    }
                }
                classes {
                    title
                }
                introductionVideo {
                    url
                }
            }
        }
    }
`;
