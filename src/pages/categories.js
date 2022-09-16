import React, { useEffect, useState } from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
// import Courses from '../components/sections/Courses';
import { useStaticQuery, graphql } from 'gatsby';
// import Categories from '../components/sections/Categories';

export default location => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCourses {
                nodes {
                    title
                    slug
                }
            }
        }
    `);
    const results = data.allContentfulCoursesCategories.nodes;
    const params = new URLSearchParams(window.location.search);
    const releventCategories = params.get('releventCourseCategory');
    const [filterCategories, setFilteredCategories] = useState(results);
    // console.log("🚀 ~ filterCategories", filterCategories)

    useEffect(() => {
        if (releventCategories && filterCategories?.length) {
            setFilteredCategories([
                ...filterCategories.filter(
                    category =>
                        category?.title === releventCategories
                ),
            ]);
        }
    }, [releventCategories]);
    return (
        <Layout>
            <SEO title={'Categories'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>Categories</h2>
                <p>
                    We have had the privilege to invest across a range of stages
                    and sectors, and are incredibly proud of the rockstar
                    founders we work with!
                </p>
            </Hero>
            {/* <Categories
                results={filterCategories}
                releventCategories={releventCategories}
                limit={'1000'}
            /> */}
            <Footer />
        </Layout>
    );
};
