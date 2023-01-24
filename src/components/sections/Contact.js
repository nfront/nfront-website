import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { navigate } from 'gatsby';

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
}

const ContactForm = () => (
    <Formik
        initialValues={{ firstname: '', lastname: '', email: '', message: '' }}
        validate={values => {
            let errors = {};
            if (!values.firstname || !values.firstname) {
                errors.name = 'Name is required';
            } else if (values.firstname.length < 3 || values.lastname.length < 3) {
                errors.name = 'Name is too short';
            }
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            if (!values.message) {
                errors.message = 'What is your message?';
            } else if (values.message.length < 20) {
                errors.message = 'Message is too short';
            }
            return errors;
        }}
        onSubmit={values => {
            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({
                    'form-name': 'Contact Form',
                    ...values,
                }),
            })
                .then(navigate('/thanks'))
                .catch(error => alert(error));
        }}
    >
        {({ isSubmitting, errors, touched }) => (
            <Form name="Contact Form" data-netlify="true" action="/thanks">
                <input type="hidden" name="form-name" value="Contact Form" />
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <Field
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Your First Name"
                        className={
                            errors.name && touched.name ? 'x-100 has-error' : 'x-100'
                        }
                        autocomplete="off"
                    />
                    <ErrorMessage
                        name="firstname"
                        component="code"
                        className="error-message"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Your Last Name"
                        className={
                            errors.name && touched.name ? 'x-100 has-error' : 'x-100'
                        }
                        autocomplete="off"
                    />
                    <ErrorMessage
                        name="lastname"
                        component="code"
                        className="error-message"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email </label>
                    <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className={
                            errors.email && touched.email ? 'x-100 has-error' : 'x-100'
                        }
                        autocomplete="off"
                    />
                    <ErrorMessage
                        name="email"
                        component="code"
                        className="error-message"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <Field
                        component="textarea"
                        rows="6"
                        name="message"
                        id="message"
                        className={
                            errors.message && touched.message
                                ? 'x-100 has-error'
                                : 'x-100'
                        }
                    />
                    <ErrorMessage
                        name="message"
                        component="code"
                        className="error-message"
                    />
                </div>
                <button className="button" type="submit">
                    Submit
                </button>
            </Form>
        )}
    </Formik>
);

export default ContactForm;
