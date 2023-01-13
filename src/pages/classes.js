import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { push } from 'gatsby-link';
import { Field, Form, Formik } from 'formik';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import Link from '@common/link';
import Class from '@components/common/class';
import { Grid, Container } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    @media ${breakpoints.laptop} {
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

const StyledGrid = styled(Grid)`
    .grid-item {
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
        position: relative;
        cursor: pointer;
        &::after {
            background-size: center;
            background-repeat: no-repeat;
            background-position: bottom;
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -1;
        }
    }
    .grid-item:hover {
        box-shadow: 0 0 42px 6px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
    }
`;

const StyledContainer = styled(Container)`
    text-align: center;
    padding: 0 1rem;
    margin-top: 15px;
    margin-bottom: 15px;
    @media ${breakpoints.mobileL} {
        text-align: left;
    }
`;

const ClassesPage = ({ data, location }) => {

    const { title: pageTitle, heroImage } = data.allContentfulPages.edges[0].node;
    
    const params = new URLSearchParams(location.search);
    const title = params.get('title');

    const classes = data.allContentfulClasses.nodes;

    // let uniqueChars = [];
    // classes.forEach((element) => {
    //     if (!uniqueChars.includes(element?.course?.title)) {
    //         uniqueChars.push(element?.course?.title);
    //     }
    // });

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
            <Seo title={pageTitle} />
            <Navbar fluid location={location}/>
            <Hero heroImage={heroImage}>
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
                                    <Link
                                        href="#contact"
                                        onClick={handleSubmit}
                                        className="button"
                                    >
                                        Submit
                                    </Link>
                                </FormFields>
                            </Form>
                        )}
                    </Formik>
                </SearchBox>
            </Hero>
            {result.map((courses, key) => {
                return (
                    <StyledContainer>
                        <Accordion key={key}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{courses?.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <StyledGrid>
                                    {courses?.classes?.map((courseClass) => {
                                        return <Class results={courseClass} />;
                                    })}
                                </StyledGrid>
                            </AccordionDetails>
                        </Accordion>
                    </StyledContainer>
                );
            })}
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { slug: { eq: "classes" } }) {
            nodes {
                title
                heroImage {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
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
`;

export default ClassesPage;
