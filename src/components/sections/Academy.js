import React, { useEffect, useState } from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Seo from '@utils/SEO';
import Footer from '@common/footer';
import Courses from './Courses';
import Classes from './Classes';
import { useStaticQuery, graphql, Link } from 'gatsby';
// import { FormFields, SearchBox } from '../../pages/jobs';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';
// import { useIsAcademy } from '@utils/hooks/useCheckLocation';
export const AcademySection = styled.div`
    /* .gatsby-image-wrapper {
        min-height: 100vh;
    } */
`;
const AcademyHeaderSection = styled.div`
    margin-bottom: -2rem;
`;
const Academy = ({ location, user }) => {
    const [filteredClasses, setFilteredClasses] = useState([]);

    const params = new URLSearchParams(location.search);
    const course = params.get('course');
    const title = params.get('title');
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulCourses {
                nodes {
                    title
                    slug
                }
            }
            allContentfulClasses {
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
                    course {
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
    const results = data.allContentfulClasses.nodes;
    // const courseCategories = data.allContentfulClassesCategories.nodes;
    // const isAcademy = useIsAcademy().isAcademy;
    useEffect(() => {
        if (results.length && !course && !title) {
            setFilteredClasses(results);
            return;
        }
        if (course && title) {
            setFilteredClasses(
                results.filter(
                    aClass =>
                        aClass?.course?.slug === course &&
                        course?.title
                            .toLocaleLowerCase()
                            .includes(title.toLocaleLowerCase())
                )
            );
            return;
        }
        if (title) {
            setFilteredClasses(
                results.filter(aClass =>
                    aClass?.title
                        .toLocaleLowerCase()
                        .includes(title.toLocaleLowerCase())
                )
            );
            return;
        }
        if (course) {
            setFilteredClasses(
                results.filter(
                    aClass => aClass?.course?.slug === course
                )
            );
            return;
        }
    }, [results, course, title]);
    return (
        <Layout>
            <Seo title={'Fundraising Academy'} />
            <Navbar fluid />
            <AcademySection>
                <Hero fileName="LA.jpg">
                    <AcademyHeaderSection>
                        <h2>Online Tutorial From Top Instructor.</h2>
                        <p>
                            Meet university and cultural institutions, who'll
                            share their experience.
                        </p>
                        {/* {isAcademy && ( */}
                        <Link to="/courses/">
                            <button className="button center">
                                View All Classes
                            </button>
                        </Link>

                        {/* )} */}
                        {/* <SearchBox>
                            <Formik
                                onSubmit={values => {
                                    const { course, title } = values;

                                    const searchParams = {};
                                    if (course) {
                                        searchParams[
                                            'course'
                                        ] = course;
                                    }
                                    if (title) {
                                        searchParams['title'] = title;
                                    }

                                    push(
                                        `/academy?${new URLSearchParams(
                                            searchParams
                                        ).toString()}`
                                    );
                                }}
                                initialValues={{ title, course }}
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
                                                name="course"
                                                value={values.course}
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
                    </AcademyHeaderSection>
                </Hero>
            </AcademySection>
            <Courses results={results} />
            <Classes limit="6" results={filteredClasses} />
            <Footer />
        </Layout>
    );
};

export default Academy;