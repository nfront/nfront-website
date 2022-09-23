import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import Classes from '../components/sections/Classes';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from '@styles/global';
import { Field, Form, Formik } from 'formik';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { push } from 'gatsby-link';
import Accordion from 'react-bootstrap/Accordion';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Class from '../components/common/class';

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
            allContentfulClasses {
                nodes {
                    title
                    slug
                    course {
                        title
                        slug
                    }
                    coverImage {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
        }
    `);
    const params = new URLSearchParams(location.search);
    const title = params.get('title');
    const classes = data.allContentfulClasses.nodes;

    // let uniqueChars = [];
    // classes.forEach((element) => {
    //     if (!uniqueChars.includes(element?.course?.title)) {
    //         uniqueChars.push(element?.course?.title);
    //     }
    // });
    // console.log('🚀 ~ uniqueChars', uniqueChars);

    const result = Object.values(
        classes?.reduce((acc, clas) => {
            acc[clas?.course?.title] = acc[clas?.course?.title] || {
                title: clas?.course?.title,
                classes: [],
            };
            acc[clas?.course?.title].classes.push(clas);
            return acc;
        }, {})
    );

    return (
        <Layout>
            <Seo title={'Classes'} />
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
                            const { title } = values;

                            const searchParams = {};
                            if (title) {
                                searchParams['title'] = title;
                            }

                            push(
                                `/courses?${new URLSearchParams(
                                    searchParams
                                ).toString()}`
                            );
                        }}
                        initialValues={{ title }}
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
            {result.map((courses, key) => {
                return (
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey={key}>
                            <Accordion.Header>
                                {courses?.title}
                            </Accordion.Header>
                            <Accordion.Body>
                                {courses?.classes?.map((courseClass) => {
                                    return(
                                        <Class results={courseClass} />
                                    )
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                );
            })}
            <Footer />
        </Layout>
    );
};

export default ClassesPage;
