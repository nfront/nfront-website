import React from 'react';
import { graphql } from 'gatsby';
import Seo from '@utils/SEO';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import JobCategories from '@sections/JobCategories';
import EmployeeTestimonials from '@sections/EmployeeTestimonials';
import JobCities from '@sections/JobCities';
import RecentJobs from '@sections/RecentJobs';

const JobsPage = ({ data, location }) => {

    const { title: pageTitle, heroImage } =
        data.allContentfulPages.edges[0].node;

    const categories = data.allContentfulJobCategories.nodes;
    const cities = data.allContentfulJobCities.nodes;
    const jobs = data.allContentfulJobs.nodes;

    console.log('RENDER in JobsPage');

    return (
        <Layout>
            <Seo title={pageTitle} />
            <Navbar fluid location={location} />
            <Hero heroImage={heroImage}>
                <h2>Work with us</h2>
                <p>
                    Below follows a list of open positions. We look forward to
                    meeting you.
                </p>
            </Hero>
            <JobCategories jobs={jobs} categories={categories} />
            <JobCities jobs={jobs} cities={cities} />
            <EmployeeTestimonials />
            <RecentJobs jobs={jobs} categories={categories} cities={cities} />
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
