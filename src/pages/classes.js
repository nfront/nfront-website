import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import Class from '@components/common/class';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Fade from '@common/fade';
import { Section, SectionTitle, Container, FlexRow } from '@styles/global';
import Seo from '@utils/SEO';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Object mapping courses to classes
// const coursesToClassesMap = (classList) => {
//     return classList?.reduce((coursesObj, currentClass) => {
//         coursesObj[currentClass?.course.slug] = coursesObj[currentClass?.course.slug] || {
//             course: currentClass?.course,
//             classes: [],
//         };
//         coursesObj[currentClass?.course.slug].classes.push(currentClass);
//         return coursesObj;
//     }, {});
// }

const coursesToClassesMap = (classList) => {
    return classList.reduce((courseList, aClass) => {
        !courseList.some((course) => course.slug === aClass.course.slug)
            ? courseList.push({ ...aClass.course, classList: [] })
            : courseList
                  .find((course) => course.slug === aClass.course.slug)
                  .classList.push(aClass);

        return courseList;
        // courseObj[aClass.course.slug] = courseObj[aClass.course.slug] || {...aClass.course, classList: []};
        // courseObj[aClass.course.slug].classList.push(aClass);
        // return courseObj;
    }, []);
};

const ClassesPage = ({ data, location }) => {
    const { title: pageTitle } = data.allContentfulPages.edges[0].node;

    const classList = data.allContentfulClasses.edges.map((edge) => edge.node);

    const courses = useMemo(() => coursesToClassesMap(classList), [classList]);

    console.log('courses', courses);

    return (
        <Layout>
            <Seo title={pageTitle} />
            <Navbar fluid threshold={0} />
            <Section className="pt-6">
                <Fade top>
                    <SectionTitle>
                        <div>
                            <h2>Classes</h2>
                            <p>
                                Search and explore our large library of
                                fundrasing classes. <br /> Each class is built
                                on knowledge and best practices from top-tier VC
                                and PE funds.
                            </p>
                        </div>
                    </SectionTitle>
                </Fade>
                <Container className="center-mobile">
                    {courses.map((course) => {
                        
                        const {
                            title: courseTitle,
                            icon: courseIcon,
                            slug: courseSlug,
                            classList,
                        } = course;

                        return (
                            <Accordion key={courseSlug}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{courseTitle}</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    style={{ maxWidth: '50rem' }}
                                    className="center pb-15 px-15"
                                >
                                    <FlexRow basis="100%">
                                        <Class
                                            aCourse={course}
                                            courseTitle={courseTitle}
                                            index={0}
                                        />
                                        {classList.map((aClass, index) => {
                                            return (
                                                <Class
                                                    key={aClass.slug}
                                                    aClass={aClass}
                                                    courseTitle={courseTitle}
                                                    index={index}
                                                />
                                            );
                                        })}
                                    </FlexRow>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </Container>
            </Section>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { slug: { eq: "classes" } }) {
            edges {
                node {
                    title
                    heroImage {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
        allContentfulClasses {
            edges {
                node {
                    slug
                    title
                    coverImage {
                        url
                        mimeType
                        gatsbyImageData
                    }
                    course {
                        title
                        slug
                        tagLine
                        icon {
                            url
                            mimeType
                            gatsbyImageData(height: 100)
                        }
                        files {
                            title
                            fileAsset {
                                filename
                                publicUrl
                            }
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
            }
        }
    }
`;

export default ClassesPage;
