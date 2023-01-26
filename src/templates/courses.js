import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Seo from '@utils/SEO';
import { OverlayText } from '../styles/global';
import DescriptionIcon from '@mui/icons-material/Description';
import StarRateIcon from '@mui/icons-material/StarRate';
import BookIcon from '@mui/icons-material/Book';
import LanguageIcon from '@mui/icons-material/Language';
import Europe from '@images/nfront/europe.jpg';
import FeedIcon from '@mui/icons-material/Feed';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VideocamIcon from '@mui/icons-material/Videocam';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CourseCard from '../components/common/courseSummaryCard';
import RelatedCourse from '../components/common/relatedCourse';

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
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
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
        transition: 0.5s;
        background: #2b4eff;
        color: white;
    }

    ${({ active }) =>
        active &&
        `
        color: white;
        background: #2b4eff;
    `}
`;

const ClassContainer = styled.div`
    background: #edeef3;
    padding: 15px;
    margin: 10px 0;
    font-size: 700;
    border-radius: 8px;
    .title {
        margin: 0;
    }
    .button {
        border-radius: 5px;
        padding: 3px 25px;
        margin-top: 10px;
        font-weight: 700;
        margin-left: 25px;
    }
`;

const FilesContainer = styled.div`
    width: 100%;
`;

const FilesDistribution = styled.div`
    border: 1px solid #edeef3;
    padding: 10px;
    font-size: 700;
    .reading {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .file-title {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        margin-left: 25px;
        gap: 10px;
    }
    .file-details {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        margin-right: 25px;
        gap: 10px;
        font-size: 17px;
        .files {
            background: #f2277e;
            color: white;
            padding: 0 11px;
            border-radius: 8px;
        }
    }
`;

const Courses = ({ data }) => {
    const {
        title,
        tagLine,
        introductionVideo,
        classes,
        courseDescription,
        files,
        relatedCourses,
    } = data.contentfulCourses;

    const types = [
        {
            icon: <DescriptionIcon />,
            title: 'Description',
            description: courseDescription,
        },
        {
            icon: <BookIcon />,
            title: 'Classes',
            classes: classes,
        },
        {
            icon: <StarRateIcon />,
            title: 'Files',
            files: files,
        },
    ];
    const [active, setActive] = useState(0);

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <OverlayText className="text-light">
                    <h2 className="mb-0">{title}</h2>
                </OverlayText>
            </Hero>
            <Section>
                <StyledContainer>
                    <CourseDetail>
                        <div>
                            <p className="category">{title}</p>
                        </div>
                        <CourseTagline>
                            <h2 className="mb-0">{tagLine}</h2>
                        </CourseTagline>
                        <IframeContainer>
                            <iframe
                                title="nFront Ventures Video Player"
                                src={introductionVideo?.url}
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
                                            onClick={() => setActive(index)}
                                        >
                                            {list?.icon}
                                            {list?.title}
                                        </TabButton>
                                    );
                                })}
                            </TabButtons>
                        </TabsContainer>
                        {types[active]?.description?.childMarkdownRemark?.html}
                        {types[active]?.classes?.map((classes, key) => {
                            return (
                                <ClassContainer>
                                    <h3 className="title">{`${key + 1}. ${
                                        classes?.title
                                    }`}</h3>
                                    <Link
                                        className="know-details"
                                        to={`/academy/${classes.slug}`}
                                    >
                                        <button className="button">
                                            Start
                                        </button>
                                    </Link>
                                </ClassContainer>
                            );
                        })}
                        {types[active]?.files?.map((files, key) => {
                            return (
                                <FilesContainer>
                                    <FilesDistribution>
                                        <div className="reading">
                                            <div className="file-title">
                                                <FeedIcon />
                                                Reading: {files?.title}
                                            </div>
                                            <div className="file-details">
                                                <WatchLaterIcon />
                                                14 minutes
                                                <button className="files">
                                                    2 questions
                                                </button>
                                            </div>
                                        </div>
                                    </FilesDistribution>
                                    <FilesDistribution>
                                        <div className="reading">
                                            <div className="file-title">
                                                <VideocamIcon />
                                                Video: {files?.title}
                                            </div>
                                            <div className="file-details">
                                                <WatchLaterIcon />
                                                14 minutes
                                                <button className="files">
                                                    2 questions
                                                </button>
                                            </div>
                                        </div>
                                    </FilesDistribution>
                                    <FilesDistribution>
                                        <div className="reading">
                                            <div className="file-title">
                                                <HeadphonesIcon />
                                                Audio: {files?.title}
                                            </div>
                                            <div className="file-details">
                                                <WatchLaterIcon />
                                                14 minutes
                                                <button className="files">
                                                    2 questions
                                                </button>
                                            </div>
                                        </div>
                                    </FilesDistribution>
                                    <FilesDistribution>
                                        <div className="reading">
                                            <div className="file-title">
                                                <FeedIcon />
                                                Reading: {files?.title}
                                            </div>
                                            <div className="file-details">
                                                <WatchLaterIcon />
                                                14 minutes
                                                <button className="files">
                                                    2 questions
                                                </button>
                                            </div>
                                        </div>
                                    </FilesDistribution>
                                </FilesContainer>
                            );
                        })}
                    </CourseDetail>
                    <div style={{ width: '450px' }}>
                        <CourseCard props={data.contentfulCourses} />
                        <RelatedCourse props={relatedCourses} />
                    </div>
                </StyledContainer>
            </Section>
            <Footer />
        </Layout>
    );
};

export default Courses;

export const query = graphql`
    query ($slug: String!) {
        contentfulCourses(slug: { eq: $slug }) {
            title
            tagLine
            slug
            courseDescription {
                childMarkdownRemark {
                    html
                }
            }
            classes {
                title
                slug
            }
            introductionVideo {
                url
            }
            files {
                title
            }
            icon {
                url
            }
            relatedCourses {
                ... on ContentfulCourses {
                    id
                    title
                    slug
                }
            }
        }
    }
`;
