import React, { useEffect, useState } from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import Classes from '../components/sections/Classes';
import { useStaticQuery, graphql } from 'gatsby';
import Courses from '../components/sections/Courses';
import styled from 'styled-components';
import { Container } from '@styles/global';
import { Field, Form, Formik } from 'formik';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { push } from 'gatsby-link';

const SearchBox = styled(Container)`
    background-color: white;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);
    .button {
        height: fit-content;
        display: inline-block;
        margin: 0.5rem 0;
    }
    a:focus,
    a:active,
    a:hover {
        color: initial;
    }
`;

const FormFields = styled(Container)`
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;
    justify-items: center;
    align-items: center;
    @media (min-width: ${(props) => props.theme.screen.lg}) {
        display: flex;
    }
    input,
    select,
    button {
        margin: 8px 10px;
    }
    select {
        padding: 8px 10px;
        display: inline-block;
        box-sizing: border-box;
        padding: 0.5em 2em 0.5em 0.5em;
        font: inherit;
        line-height: inherit;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        background-color: transparent;
        appearance: none;
        background-repeat: no-repeat;
        background-image: linear-gradient(
                45deg,
                transparent 50%,
                currentColor 50%
            ),
            linear-gradient(135deg, currentColor 50%, transparent 50%);
        background-position: right 15px top 1em, right 10px top 1em;
        background-size: 5px 5px, 5px 5px;
    }
    input::placeholder {
        color: var(--text-color) !important;
    }
    input,
    select {
        border: none;
        color: var(--text-color) !important;
        width: 100%;
        border-bottom: 1px solid var(--button-color);
    }
`;

const ClassesPage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCourses {
                nodes {
                    title
                    slug
                }
            }
            allContentfulCategories {
                nodes {
                    title
                    positions
                    coverImg {
                        gatsbyImageData(
                            width: 100
                        )
                    }
                    slug
                }
            }
        }
    `);
    const params = new URLSearchParams(location.search);
    const title = params.get('title');
    const results = data.allContentfulCourses.nodes;
    console.log(results);
    // useEffect(() => {
    //     if (title) {
    //         setFilteredJobs(
    //             jobs.filter(job =>
    //                 job?.title
    //                     .toLocaleLowerCase()
    //                     .includes(title.toLocaleLowerCase())
    //             )
    //         );
    //         return;
    //     }
    // }, [ title]);

    return (
        <Layout>
            <Seo title={'Courses'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>Courses</h2>
                <p>
                    We have had the privilege to invest across a range of stages
                    and sectors, and are incredibly proud of the rockstar
                    founders we work with!
                </p>
                <SearchBox>
                    <Formik
                        onSubmit={(values) => {
                            const { title, category } = values;

                            const searchParams = {};
                            if (title) {
                                searchParams['title'] = title;
                            }
                            if (category) {
                                searchParams['category'] = category;
                            }

                            push(
                                `/jobs?${new URLSearchParams(
                                    searchParams
                                ).toString()}`
                            );
                        }}
                        initialValues={{ title, category }}
                        enableReinitialize
                    >
                        {({ values, handleSubmit }) => (
                            <Form style={{ marginBottom: '0' }}>
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
                                        name="category"
                                        value={values.category}
                                    >
                                        <option
                                            value=""
                                            disabled
                                            selected
                                        >
                                            Select category
                                        </option>
                                        <option value={''}>None</option>
                                        {categories.map(category => {
                                            const {
                                                title,
                                                slug,
                                            } = category;
                                            return (
                                                <option value={slug}>
                                                    {title}
                                                </option>
                                            );
                                        })}
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
                </SearchBox>
            </Hero>
            <Courses courses={courses} limit={'1000'} />
            <Footer />
        </Layout>
    );
};

export default ClassesPage;
