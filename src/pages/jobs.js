import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import SEO from '@utils/SEO';
import { Container } from '@styles/global';
import Jobs from '@components/sections/Jobs';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import Footer from '@common/footer';
import { useStaticQuery, graphql } from 'gatsby';

const JobSection = styled.div`
    .gatsby-image-wrapper {
        min-height: 100vh;
    }
`;
const SearchBox = styled(Container)`
    background-color: white;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);
    .button {
        height: fit-content;
        padding: 0.5rem 1rem;
    }
`;
const FormFields = styled(Container)`
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;
    justify-item: center;
    @media (min-width: ${props => props.theme.screen.lg}) {
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
const JobHeaderSection = styled.div`
    span {
        color: var(--yellow);
    }
    margin-bottom: -2rem;
`;
export default () => {
    const citiesData = useStaticQuery(graphql`
        query {
            allContentfulCities {
                nodes {
                    title
                }
            }
            allContentfulCategories {
                nodes {
                    title
                }
            }
        }
    `);
    const categoriesResults = citiesData.allContentfulCategories.nodes;
    const resultsCities = citiesData.allContentfulCities.nodes;
    return (
        <Layout>
            <JobSection>
                <SEO title={'Jobs'} />
                <Navbar fluid />
                <Hero fileName="LA.jpg">
                    <JobHeaderSection>
                        <h2>Work with us</h2>
                        <p>
                            Below follows a list of open positions. We look
                            forward to meeting you.
                        </p>
                        <SearchBox>
                            {' '}
                            <Formik>
                                <Form>
                                    <FormFields>
                                        <Field
                                            type="text"
                                            name="title"
                                            id="title"
                                            placeholder="Job Title, Keywords, or Phrase"
                                            autoComplete="off"
                                        />
                                        <Field component="select" name="cities">
                                            {categoriesResults.map(val => {
                                                const { title } = val;
                                                return (
                                                    <option value={title}>
                                                        {title}
                                                    </option>
                                                );
                                            })}
                                        </Field>
                                        <Field component="select" name="cities">
                                            {resultsCities.map(val => {
                                                const { title } = val;
                                                return (
                                                    <option value={title}>
                                                        {title}
                                                    </option>
                                                );
                                            })}
                                        </Field>
                                        <button
                                            className="button"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </FormFields>
                                </Form>
                            </Formik>
                        </SearchBox>
                    </JobHeaderSection>
                </Hero>
                <Jobs />
                <Footer />
            </JobSection>
        </Layout>
    );
};
