import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Class from '@components/common/class';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Link from '@common/link';
import TabContainer from '@common/tabContainer';
import FileList from '@common/fileList';

import Seo from '@utils/SEO';
import useWindowSize from '@utils/hooks/useWindowSize';

import {
    Section,
    SectionTitle,
    Container,
    Sticky,
    GridLayoutWrapper,
    GridLayoutContent,
    GridLayoutSide,
    Divider,
} from '@styles/global';

import * as breakpoints from '@styles/scss/_breakpoints.module.scss';

import CourseCard from '@common/courseSummaryCard';
import RelatedCourse from '@common/relatedCourse';
import Fade from '@common/fade';

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';

import Stack from '@mui/material/Stack';

const StyledContainer = styled(Container)`
    text-align: center;

    @media ${breakpoints.mobileL} {
        text-align: left;
    }

    #courseDescription {
        p {
            margin: 0;
        }
    }

    iframe {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;

        max-width: var(--max-width);

        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Courses = ({ data, location }) => {
    const { isMobile } = useWindowSize();

    const {
        title,
        tagLine,
        introductionVideo,
        classes,
        courseDescription,
        files,
        relatedCourses,
    } = data.contentfulCourses;

    const tabs = [
        {
            icon: <HomeIcon className="vertical-middle" />,
            title: 'Description',
            content: (
                <div
                    id="courseDescription"
                    dangerouslySetInnerHTML={{
                        __html: courseDescription.childMarkdownRemark.html,
                    }}
                ></div>
            ),
        },
        {
            icon: <SchoolIcon className="vertical-middle" />,
            title: 'Classes',
            content: (
                <Stack direction="column" spacing={2}>
                    {classes?.map((aClass, index) => {
                        return (
                            <Class
                                key={aClass.slug}
                                aClass={aClass}
                                courseTitle={title}
                                index={index}
                            />
                        );
                    })}
                </Stack>
            ),
        },
        {
            icon: <DescriptionIcon className="vertical-middle" />,
            title: 'Files',
            content: <FileList files={files} courseTitle={title} />,
        },
    ];

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid threshold={0} />
            <Section className="py-6">
                <StyledContainer>
                    <SectionTitle className="p-0 mb-2 text-left">
                        <div className="mb-1">
                            <Link
                                to="/academy/"
                                className="small-font hover-bold"
                            >
                                <span className="mr-05">Home</span>
                            </Link>
                            <span className="link-button">|</span>
                            <Link
                                to="/academy/"
                                className="small-font hover-bold"
                            >
                                <span className="ml-05">All classes</span>
                            </Link>
                        </div>
                    </SectionTitle>
                    <GridLayoutWrapper side="right" className="center-mobile">
                        <GridLayoutContent>
                            <Fade left>
                                <SectionTitle className="p-0 mb-2 text-left">
                                    <p className="category--blue mb-1 rounded xs-font">
                                        {title}
                                    </p>
                                    <h2 className="mb-0">{tagLine}</h2>
                                </SectionTitle>
                            </Fade>
                            <iframe
                                title="Raise Academy Video Player"
                                src={introductionVideo?.url}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>

                            <TabContainer tabs={tabs} />
                        </GridLayoutContent>
                        <GridLayoutSide maxWidth="50rem">
                            <Sticky top={`100px`}>
                                <CourseCard courses={data.contentfulCourses} />
                                {!isMobile ? (
                                    <RelatedCourse
                                        relatedCourses={relatedCourses}
                                    />
                                ) : null}
                            </Sticky>
                        </GridLayoutSide>
                        {isMobile ? <Divider className="m-0" /> : null}
                        {isMobile ? (
                            <RelatedCourse relatedCourses={relatedCourses} />
                        ) : null}
                    </GridLayoutWrapper>
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
                coverImage {
                    url
                    mimeType
                    gatsbyImageData
                }
            }
            introductionVideo {
                url
            }
            files {
                title
                fileAsset {
                    filename
                    publicUrl
                }
                relatedClasses {
                    slug
                    title
                }
            }
            icon {
                mimeType
                url
                gatsbyImageData(width: 100)
            }
            relatedCourses {
                ... on ContentfulCourses {
                    id
                    title
                    slug
                    icon {
                        mimeType
                        url
                        gatsbyImageData(width: 100)
                    }
                }
            }
        }
    }
`;
