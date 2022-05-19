import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';
import Fade from 'react-reveal/Fade';
import { Formik, Form, Field } from 'formik';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';

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
const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-itens: center;
    a {
        display: flex;
        text-decoration: none;
        color: white;
        align-items: center;
    }
`;

function Login() {
    // const handleSubmit = () => {
    //     navigate('/training');
    // };
    return (
        <StyledSection>
            <Section>
                <Container>
                    <Fade top>
                        <div>
                            <h2>Sign in </h2>
                        </div>
                    </Fade>
                    <Formik
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {({ values }) => (
                            <Form
                                onSubmit={event => {
                                    event.preventDefault();
                                    // TODO: do something with form values
                                    navigate('/training', {
                                        replace: true,
                                    });
                                }}
                            >
                                <FormFields>
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
                                        <Link to="/register">
                                            Create Account
                                        </Link>
                                        <button
                                            className="button"
                                            type="submit"
                                            // onClick={handleSubmit}
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

export default Login;
