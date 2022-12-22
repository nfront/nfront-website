import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { push } from 'gatsby-link';
import { device, Container } from '@styles/global';
import Seo from '@utils/SEO';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Link from '@common/link';
import JobCategories from '@sections/JobCategories';
import EmployeeTestimonials from '@sections/EmployeeTestimonials';
import JobCities from '@sections/JobCities';
import RecentJobs from '@sections/RecentJobs';

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
    @media ${device.laptop} {
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
const JobsPage = ({ data, location }) => {
    const [filteredJobs, setFilteredJobs] = useState([]);
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const city = params.get('city');
    const title = params.get('title');

    // const heroImage = data.allContentfulJobPages.heroImage;
    // const pageTitle = data.allContentfulJobPages.title;

    const { title: pageTitle, heroImage } = data.allContentfulPages.edges[0].node;

    const categories = data.allContentfulJobCategories.nodes;
    const cities = data.allContentfulJobCities.nodes;
    const jobs = data.allContentfulJobs.nodes;

    const getPositionCount = (slug, type) => {
        switch (type) {
            case 'city':
                return cities.filter((city) => city.slug === slug).length;
            case 'category':
                return categories.filter((cat) => cat.slug === slug).length;
            default:
                return null;
        }
    };

    useEffect(() => {
        if (jobs.length && !category && !city && !title) {
            setFilteredJobs(jobs);
            return;
        }
        if (category && city) {
            setFilteredJobs(
                jobs.filter(
                    (job) =>
                        job?.city?.slug === city &&
                        job?.categories?.slug === category
                )
            );
            return;
        }
        if (category && city && title) {
            setFilteredJobs(
                jobs.filter(
                    (job) =>
                        job?.city?.slug === city &&
                        job?.categories?.slug === category &&
                        job?.title
                            .toLocaleLowerCase()
                            .includes(title.toLocaleLowerCase())
                )
            );
            return;
        }
        if (title) {
            setFilteredJobs(
                jobs.filter((job) =>
                    job?.title
                        .toLocaleLowerCase()
                        .includes(title.toLocaleLowerCase())
                )
            );
            return;
        }
        if (city) {
            setFilteredJobs(jobs.filter((job) => job?.city?.slug === city));
            return;
        }
        if (category) {
            setFilteredJobs(
                jobs.filter((job) => job?.categories?.slug === category)
            );
            return;
        }
    }, [jobs, city, category, title]);

    return (
        <Layout>
            <Seo title={pageTitle} />
            <Navbar fluid />
            <Hero heroImage={heroImage} height='long'>
                <JobHeaderSection>
                    <h2>Work with us</h2>
                    <p>
                        Below follows a list of open positions. We look forward
                        to meeting you.
                    </p>
                    <SearchBox>
                        {' '}
                        <Formik
                            onSubmit={(values) => {
                                const { city, category, title } = values;

                                const searchParams = {};
                                if (city) {
                                    searchParams['city'] = city;
                                }
                                if (category) {
                                    searchParams['category'] = category;
                                }
                                if (title) {
                                    searchParams['title'] = title;
                                }

                                push(
                                    `/jobs?${new URLSearchParams(
                                        searchParams
                                    ).toString()}`
                                );
                            }}
                            initialValues={{ title, city, category }}
                            enableReinitialize
                        >
                            {({ values, handleSubmit }) => (
                                <Form>
                                    <FormFields>
                                        <Field
                                            type="text"
                                            name="title"
                                            id="title"
                                            placeholder="Job Title, Keywords, or Phrase"
                                            autoComplete="off"
                                            value={values.title}
                                        />
                                        <Field
                                            component="select"
                                            name="category"
                                            value={values.category}
                                        >
                                            <option value="" disabled selected>
                                                Select category
                                            </option>
                                            <option value={''}>None</option>
                                            {categories.map((category) => {
                                                const { title, slug } =
                                                    category;
                                                return (
                                                    <option value={slug}>
                                                        {title}
                                                    </option>
                                                );
                                            })}
                                        </Field>
                                        <Field
                                            component="select"
                                            name="city"
                                            value={values.city}
                                        >
                                            <option value="" disabled selected>
                                                Select city
                                            </option>{' '}
                                            <option value={''}>None</option>
                                            {cities.map((city) => {
                                                const { title, slug } = city;
                                                return (
                                                    <option value={slug}>
                                                        {title}
                                                    </option>
                                                );
                                            })}
                                        </Field>
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
                </JobHeaderSection>
            </Hero>
            <JobCategories
                categories={categories}
                getPositionCount={getPositionCount}
            />
            <JobCities cities={cities} getPositionCount={getPositionCount} />
            <EmployeeTestimonials />
            <RecentJobs jobs={filteredJobs} />
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { slug: { eq: "jobs" } }) {
            edges {
                node {
                    title
                    slug
                    heroImage {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
        allContentfulJobCategories {
            nodes {
                title
                positions
                coverImg {
                    gatsbyImageData
                }
                slug
            }
        }
        allContentfulJobCities {
            nodes {
                title
                totalJobs
                featuredImage {
                    gatsbyImageData
                }
                slug
            }
        }
        allContentfulJobs {
            nodes {
                title
                streetAddress
                slug
                price {
                    min
                    max
                }
                city {
                    title
                    slug
                }
                categories {
                    title
                    slug
                }
                availablity
                icon {
                    gatsbyImageData
                }
            }
        }
    }
`;

export default JobsPage;
