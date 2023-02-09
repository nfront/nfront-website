import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Link from '@common/link';

import Seo from '@utils/SEO';

import Courses from '@sections/Courses';
import Classes from '@sections/Classes';

const Academy = ({ location, user }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPages(filter: { slug: { eq: "academy" } }) {
                edges {
                    node {
                        heroImage {
                            title
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
            allContentfulClasses {
                edges {
                    node {
                        # id
                        slug
                        title
                        author
                        coverImage {
                            url
                            mimeType
                            gatsbyImageData
                        }
                        course {
                            title
                            tagLine
                            slug
                            icon {
                                url
                                mimeType
                                gatsbyImageData(height: 100)
                            }
                        }
                    }
                }
            }
            allContentfulCourses {
                edges {
                    node {
                        slug
                        title
                        tagLine
                        courseDescription {
                            courseDescription
                        }
                        relatedCourses {
                            ... on ContentfulCourses {
                                id
                                slug
                            }
                        }
                        language
                        icon {
                            url
                            mimeType
                            gatsbyImageData(width: 100)
                        }
                        files {
                            title
                            fileAsset {
                                filename
                                publicUrl
                            }
                            relatedClasses {
                                slug
                                title
                            }
                        }
                    }
                }
            }
        }
    `);

    const courses = data.allContentfulCourses.edges.map((edge) => edge.node);
    const classes = data.allContentfulClasses.edges.map((edge) => edge.node);

    const { title: pageTitle, heroImage } =
        data.allContentfulPages.edges[0].node;

    return (
        <Layout>
            <Seo title={pageTitle} />
            <Navbar fluid location={location} />
            <Hero heroImage={heroImage} alt={pageTitle}>
                <div className="mb-m2">
                    <h2>Fundraising Academy</h2>
                    <p>
                        Everything you need for your next raise, in one place.
                    </p>
                    <Link to="/classes/" display="block" className="mt-3">
                        <button className="button center">
                            View All Classes
                        </button>
                    </Link>
                </div>
            </Hero>
            <Courses limit="6" courses={courses} classes={classes} />
            <Classes limit="6" classes={classes} />
            <Footer />
        </Layout>
    );
};

export default Academy;
