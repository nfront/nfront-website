import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import SEO from '@utils/SEO';
import { Container } from '@styles/global';
import Jobs from '@components/sections/Jobs';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

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
    button {
        margin: 8px 10px;
    }
    input {
        border: none;
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
    return (
        <Layout>
            <JobSection>
                <SEO title={'Jobs'} />
                <Navbar fluid />
                <Hero fileName="LA.jpg">
                    <JobHeaderSection>
                        <h2>
                            Search Between More Then <span>50,000</span> Open
                            Jobs.
                        </h2>
                        <p>
                            Please reach out below and we will get back to you
                            as soon as possible.
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
                                            autocomplete="off"
                                        />
                                        <Field
                                            type="text"
                                            name="location"
                                            id="location"
                                            placeholder="City, State or ZIP"
                                            autocomplete="off"
                                        />
                                        <Field
                                            type="select"
                                            name="type"
                                            id="type"
                                            placeholder="Select Selector"
                                        />
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
            </JobSection>
        </Layout>
    );
};
