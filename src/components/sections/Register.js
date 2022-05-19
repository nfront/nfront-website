import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';
import Fade from 'react-reveal/Fade';
import { Formik, Form, Field } from 'formik';
import { Link } from 'gatsby';
const StyledSection = styled.div``;

const FormFields = styled(Container)`
    // margin: 1rem;
    input {
        color: white;
        border-radius: 4px;
        font-size: 16px;
        padding: 13px 15px;
        margin: 1rem 0;
        ::placeholder {
            color: white;
        }
    }
`;
const Actions = styled.div``;

function Register() {
    return (
        <StyledSection>
            {' '}
            <Section>
                <Container>
                    <Fade top>
                        <div>
                            <h2>Register </h2>
                        </div>
                    </Fade>
                    <Formik
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {() => (
                            <Form>
                                <FormFields>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                    <Actions>
                                        <button
                                            className="button"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </Actions>
                                </FormFields>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Section>{' '}
        </StyledSection>
    );
}

export default Register;
