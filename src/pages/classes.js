import React, { useEffect, useState } from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import Classes from '../components/sections/Classes';
import { useStaticQuery, graphql } from 'gatsby';

const ClassesPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulClasses {
                nodes {
                    # id
                    slug
                    title
                    price
                    author
                    coverImage {
                        gatsbyImageData
                    }
                    course {
                        title
                        tagLine
                        icon {
                            gatsbyImageData(height: 100)
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulClasses.nodes;
    return (
        <Layout>
            <Seo title={'Classes'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>Classes</h2>
                <p>
                    We have had the privilege to invest across a range of stages
                    and sectors, and are incredibly proud of the rockstar
                    founders we work with!
                </p>
            </Hero>
            <Classes results={results} limit={'1000'} />
            <Footer />
        </Layout>
    );
};

export default ClassesPage;
