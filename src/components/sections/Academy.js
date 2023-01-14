import React, { useEffect, useState } from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Seo from '@utils/SEO';
import Footer from '@common/footer';
import Courses from '@sections/Courses';
import Classes from '@sections/Classes';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

export const AcademySection = styled.div`
    /* .gatsby-image-wrapper {
        min-height: 100vh;
    } */
`;

const AcademyHeaderSection = styled.div`
    margin-bottom: -2rem;
`;

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
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                        course {
                            title
                            tagLine
                            slug
                            icon {
                                publicUrl
                                mimeType
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    height: 100
                                )
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
                    }
                }
            }
        }
    `);

    const courses = data.allContentfulCourses.edges.map((edge) => edge.node);
    const classes = data.allContentfulClasses.edges.map((edge) => edge.node);

    const { title: pageTitle, heroImage } =
        data.allContentfulPages.edges[0].node;

    const results = data.allContentfulClasses.edges;
    console.log('results :>> ', results);
    const [filteredClasses, setFilteredClasses] = useState([]);

    const params = new URLSearchParams(location.search);
    const course = params.get('course');
    const title = params.get('title');

    useEffect(() => {
        if (results.length && !course && !title) {
            setFilteredClasses(results);
            return;
        }
        if (course && title) {
            setFilteredClasses(
                results.filter(
                    (aClass) =>
                        aClass?.course?.slug === course &&
                        course?.title
                            .toLocaleLowerCase()
                            .includes(title.toLocaleLowerCase())
                )
            );
            return;
        }
        if (title) {
            setFilteredClasses(
                results.filter((aClass) =>
                    aClass?.title
                        .toLocaleLowerCase()
                        .includes(title.toLocaleLowerCase())
                )
            );
            return;
        }
        if (course) {
            setFilteredClasses(
                results.filter((aClass) => aClass?.course?.slug === course)
            );
            return;
        }
    }, [results, course, title]);

    return (
        <Layout>
            <Seo title={pageTitle} />
            <Navbar fluid />
            <AcademySection>
                <Hero heroImage={heroImage}>
                    <AcademyHeaderSection>
                        <h2>Fundraising Academy</h2>
                        <p>
                            Everything you need for your next raise, in one place.
                        </p>
                        <Link to="/classes/">
                            <button className="button center">
                                View All Classes
                            </button>
                        </Link>
                    </AcademyHeaderSection>
                </Hero>
            </AcademySection>
            <Courses limit="6" results={courses} />
            <Classes limit="6" results={filteredClasses} />
            <Footer />
        </Layout>
    );
};

export default Academy;
