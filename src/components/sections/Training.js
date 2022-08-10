import React, { useEffect, useState } from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import SEO from '@utils/SEO';
import Footer from '@common/footer';
import Courses from './Courses';
import CoursesCategories from './CoursesCategories';
import { useStaticQuery, graphql, push, Link } from 'gatsby';
import { FormFields, SearchBox } from '../../pages/jobs';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { useIsTraining } from '@utils/hooks/useIsHome';
export const TrainingSection = styled.div`
    .gatsby-image-wrapper {
        min-height: 100vh;
    }
`;
const JobHeaderSection = styled.div`
    margin-bottom: -2rem;
`;
export default ({ location, user }) => {
    // console.log(user);
    const [filteredCourses, setFilteredCourses] = useState([]);

    const params = new URLSearchParams(location.search);
    const courseCategory = params.get('courseCategory');
    const title = params.get('title');
    const data = useStaticQuery(graphql`
        query {
            allContentfulCoursesCategories {
                nodes {
                    title
                    slug
                }
            }
            allContentfulCourses {
                nodes {
                    # id
                    slug
                    title
                    price
                    author
                    coverImage {
                        gatsbyImageData(
                            layout: CONSTRAINED
                        )
                    }
                    courseCategories {
                        title
                        tagLine
                        slug
                        icon {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                height: 100
                            )
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulCourses.nodes;
    const courseCategories = data.allContentfulCoursesCategories.nodes;
    const isTraining = useIsTraining().isTraining;
    useEffect(() => {
        if (results.length && !courseCategory && !title) {
            setFilteredCourses(results);
            return;
        }
        if (courseCategory && title) {
            setFilteredCourses(
                results.filter(
                    course =>
                        course?.courseCategories?.slug === courseCategory &&
                        course?.title
                            .toLocaleLowerCase()
                            .includes(title.toLocaleLowerCase())
                )
            );
            return;
        }
        if (title) {
            setFilteredCourses(
                results.filter(course =>
                    course?.title
                        .toLocaleLowerCase()
                        .includes(title.toLocaleLowerCase())
                )
            );
            return;
        }
        if (courseCategory) {
            setFilteredCourses(
                results.filter(
                    course => course?.courseCategories?.slug === courseCategory
                )
            );
            return;
        }
    }, [results, courseCategory, title]);
    return (
        <Layout>
            <SEO title={'Training'} />
            <Navbar fluid />
            <TrainingSection>
                <Hero fileName="LA.jpg">
                    <JobHeaderSection>
                        <h2>Online Tutorial From Top Instructor.</h2>
                        <p>
                            Meet university and cultural institutions, who'll
                            share their experience.
                        </p>
                        {/* {isTraining && ( */}
                        <Link to="/courses/">
                            <button className="button center">
                                View All Courses
                            </button>
                        </Link>

                        {/* )} */}
                        {/* <SearchBox>
                            <Formik
                                onSubmit={values => {
                                    const { courseCategory, title } = values;

                                    const searchParams = {};
                                    if (courseCategory) {
                                        searchParams[
                                            'courseCategory'
                                        ] = courseCategory;
                                    }
                                    if (title) {
                                        searchParams['title'] = title;
                                    }

                                    push(
                                        `/training?${new URLSearchParams(
                                            searchParams
                                        ).toString()}`
                                    );
                                }}
                                initialValues={{ title, courseCategory }}
                                enableReinitialize
                            >
                                {({ values, handleSubmit }) => (
                                    <Form>
                                        <FormFields>
                                            <Field
                                                type="text"
                                                name="title"
                                                id="title"
                                                placeholder="Job Title, Keywords, or Phrase"
                                                autoComplete="off"
                                                value={values.title}
                                            />
                                            <Field
                                                component="select"
                                                name="courseCategory"
                                                value={values.courseCategory}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                >
                                                    Select category
                                                </option>
                                                <option value={''}>None</option>
                                                {courseCategories.map(
                                                    category => {
                                                        const {
                                                            title,
                                                            slug,
                                                        } = category;
                                                        return (
                                                            <option
                                                                value={slug}
                                                            >
                                                                {title}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                            </Field>
                                            <AnchorLink
                                                href="#contact"
                                                onClick={handleSubmit}
                                                className="button"
                                            >
                                                Submit
                                            </AnchorLink>
                                        </FormFields>
                                    </Form>
                                )}
                            </Formik>
                        </SearchBox> */}
                    </JobHeaderSection>
                </Hero>
            </TrainingSection>
            <CoursesCategories results={results} />
            <Courses limit="6" results={filteredCourses} />
            <Footer />
        </Layout>
    );
};
