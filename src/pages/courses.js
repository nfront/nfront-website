import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import Courses from '../components/sections/Courses';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCourses {
                nodes {
                    # id
                    slug
                    title
                    price
                    author
                    coverImage {
                        fluid(quality: 100) {
                            src
                        }
                    }
                    courseCategories {
                        title
                        tagLine
                        icon {
                            fluid(maxHeight: 100, quality: 100) {
                                src
                            }
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulCourses.nodes;
    return (
        <Layout>
            <SEO title={'Courses'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>Courses</h2>
                <p>
                    We have had the privilege to invest across a range of stages
                    and sectors, and are incredibly proud of the rockstar
                    founders we work with!
                </p>
            </Hero>
            <Courses results={results} limit={'1000'} />
            <Footer />
        </Layout>
    );
};
