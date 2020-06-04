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
        initialValues={{ name: '', email: '', message: '' }}
        validate={values => {
            let errors = {};
            if (!values.name) {
                errors.name = 'Name is required';
            } else if (values.name.length < 3) {
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
                errors.message = 'Say something, maybe?';
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
                    <label htmlFor="name">Name</label>
                    <Field
                        type="text"
                        name="name"
                        className={
                            errors.name && touched.name ? ' has-error' : ''
                        }
                        autocomplete="off"
                    />
                    <ErrorMessage
                        name="name"
                        component="code"
                        className="error-message"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email </label>
                    <Field
                        type="email"
                        name="email"
                        className={
                            errors.email && touched.email ? ' has-error' : ''
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
                        rows="4"
                        name="message"
                        className={
                            errors.message && touched.message
                                ? ' has-error'
                                : ''
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
