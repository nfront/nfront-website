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

const ItemGrid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        margin-bottom: 0;
        color: #002e5f;
    }
    @media (min-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Text = styled.div`
    padding: 1rem;

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
        @media (min-width: ${(props) => props.theme.screen.md}) {
            min-height: 2.5rem;
        }
    }

    .label {
        font-weight: 500;
    }
    a {
        color: black;
        font-size: 0.95rem;
    }

    /* p:not(.label) {
        font-size: 16px;
    } */
    .know-details {
        margin-left: 1rem;
        text-align: right;

        font-size: 0.8rem;
        @media (min-width: ${(props) => props.theme.screen.lg}) {
            font-size: 1rem;
        }

        &:hover {
            color: var(--blue);
            .fa-arrow-right {
                margin-left: 10px;
                transition: all 0.3s ease-out 0s;
            }
        }
        .fa-arrow-right {
            margin-left: 5px;
        }
    }
`;

const Art = styled.div`
    overflow: hidden;
    .img-style {
        margin-bottom: 0;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
        transition: all 0.3s ease-out 0s;
        vertical-align: middle;

        @media (min-width: ${(props) => props.theme.screen.md}) {
            /* min-height: 240px; */
        }
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
            {classes.map((classes, key) => {
                const image = getImage(classes.coverImage);
                return (
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey={key}>
                            <Accordion.Header>
                                {classes?.course?.title}
                            </Accordion.Header>
                            <Accordion.Body>
                                {/* <Classes /> */}
                            <Art>
                                <GatsbyImage
                                    className="img-style"
                                    image={image}
                                    alt={classes.title}
                                />
                            </Art>
                            <Text>
                                <h3>{classes.title}</h3>
                                <hr />
                                <ItemGrid>
                                    <p className="category">
                                        {classes?.course?.title}
                                    </p>
                                    <Link
                                        className="know-details"
                                        to={`/academy/${classes.slug}`}
                                    >
                                        Know Details
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            size="1px"
                                        />
                                    </Link>
                                </ItemGrid>
                            </Text>
                            </Accordion.Body>
                            {/* <Accordion.Body>
                                {classes?.title}
                            </Accordion.Body> */}
                        </Accordion.Item>
                    </Accordion>
                );
            })}
            <Footer />
        </Layout>
    );
};

export default ClassesPage;
