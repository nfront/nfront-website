import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import Courses from '../components/sections/Courses';
import { useStaticQuery, graphql } from 'gatsby';

const CoursesPage = () => {
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
                        gatsbyImageData(
                            layout: CONSTRAINED
                        )
                    }
                    courseCategories {
                        title
                        tagLine
                        icon {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                height: 100
                            )
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulCourses.nodes;
    return (
        <Layout>
            <Seo title={'Courses'} />
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

export default CoursesPage;