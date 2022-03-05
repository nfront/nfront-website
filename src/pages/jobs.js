import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import { Section, Container, Box, SectionTitle } from '@styles/global';
import Fade from 'react-reveal/Fade';
import Jobs from '../components/sections/Jobs';
import { HeaderText } from '../components/sections/Header';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    justify-item: center;
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
`;
export default () => {
    // const title = ' Search Between More Then 50,000 Open Jobs.';
    return (
        <Layout>
            <SEO title={'Jobs'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <JobHeaderSection>
                    <h2>
                        Search Between More Then <span>50,000</span> Open Jobs.
                    </h2>
                    <p>
                        Please reach out below and we will get back to you as
                        soon as possible.
                    </p>
                    <SearchBox>
                        {' '}
                        <Formik>
                            <Form
                                name="Contact Form"
                                // data-netlify="true"
                                // action="/thanks"
                            >
                                <FormFields>
                                    <Field
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Job Title, Keywords, or Phrase"
                                        // className={
                                        //     errors.name && touched.name
                                        //         ? ' has-error'
                                        //         : ''
                                        // }
                                        autocomplete="off"
                                    />
                                    <ErrorMessage
                                        name="firstname"
                                        component="code"
                                        className="error-message"
                                    />
                                    <Field
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        placeholder="City, State or ZIP"
                                        // className={
                                        //     errors.name && touched.name
                                        //         ? ' has-error'
                                        //         : ''
                                        // }
                                        autocomplete="off"
                                    />
                                    {/* <ErrorMessage
                                            name="lastname"
                                            component="code"
                                            className="error-message"
                                        /> */}
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        select
                                        placeholder="Select Selector"
                                        // className={
                                        //     errors.email && touched.email
                                        //         ? ' has-error'
                                        //         : ''
                                        // }
                                        autocomplete="off"
                                    />
                                    {/* <ErrorMessage
                                            name="email"
                                            component="code"
                                            className="error-message"
                                        /> */}
                                    {/* </div> */}
                                    <button className="button" type="submit">
                                        Submit
                                    </button>
                                </FormFields>
                            </Form>
                        </Formik>
                    </SearchBox>
                </JobHeaderSection>

                {/* <h2>{title}</h2>
                <JobHeaderSection id="top">
                    <div>
                        <Fade bottom>
                            <HeaderText>
                                Search Between More Then <span>50,000</span>{' '}
                                Open Jobs.
                                <p>
                                    Find Jobs, Employment & Career Opportunities
                                </p>
                            </HeaderText>
                        </Fade>
                    </div>
                    <SearchBox>box</SearchBox>
                </JobHeaderSection> */}
            </Hero>
            <Jobs />
            <Footer />
        </Layout>
    );
};
