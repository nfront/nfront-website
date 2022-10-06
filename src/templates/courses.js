import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { Section, Container } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Seo from '@utils/SEO';
import { OverlayText } from '../styles/global';
import DescriptionIcon from '@mui/icons-material/Description';
import StarRateIcon from '@mui/icons-material/StarRate';
import BookIcon from '@mui/icons-material/Book';
import CourseCard from '../components/common/courseSummaryCard';
import RelatedCourse from '../components/common/relatedCourse';

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
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

const CourseDetail = styled.div`
    width: 100%;
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
    margin-bottom: 50px;

    > iframe {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
    }
`;

const TabsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

const TabButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 30px;
`;

const TabButton = styled.button`
    background: #edeef3;
    color: black;
    width: 100%;
    height: 45px;
    border: 1px solid #edeef3;
    font-family: 'Poppins';
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transition: 0.5s;
        background: #2b4eff;
        border: 1px solid #2b4eff;
        color: white;
    }

    ${({ active }) =>
        active &&
        `
        color: white;
        background: #2b4eff;
    `}
`;

const Courses = ({ data }) => {
    const result = data.allContentfulCourses.nodes;
    console.log('🚀 ~ result', result);
    const types = [
        {
            icon: <DescriptionIcon />,
            title: 'Description',
            description: result.map(
                (courseDesc) =>
                    courseDesc.courseDescription?.childMarkdownRemark?.html
            ),
        },
        {
            icon: <BookIcon />,
            title: 'Classes',
            classes: result.map((courseClasses) =>
                courseClasses?.classes?.map((classes) => classes?.title)
            ),
        },
        {
            icon: <StarRateIcon />,
            title: 'Files',
            files: result.map((courseFiles) =>
                courseFiles?.files?.map((file) => file?.title)
            ),
        },
    ];
    const [active, setActive] = useState(0);

    return (
        <Layout>
            <Seo title={'title'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg" />
            <Section>
                {result.map((course) => {
                    return (
                        <StyledContainer>
                            <CourseDetail>
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
                                        {types.map((list, index) => {
                                            return (
                                                <TabButton
                                                    key={index}
                                                    active={active === index}
                                                    onClick={() =>
                                                        setActive(index)
                                                    }
                                                >
                                                    {list?.icon}
                                                    {list?.title}
                                                </TabButton>
                                            );
                                        })}
                                    </TabButtons>
                                </TabsContainer>
                                {types[active]?.description}
                                {types[active]?.classes}
                                {types[active]?.files}
                            </CourseDetail>
                            <div style={{ maxWidth: '345px' }}>
                                <CourseCard props={data.allContentfulCourses} />
                                <RelatedCourse
                                    props={data.allContentfulCourses}
                                />
                            </div>
                        </StyledContainer>
                    );
                })}
            </Section>
            <Footer />
        </Layout>
    );
};

export default Courses;

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
                files {
                    title
                }
            }
        }
    }
`;
