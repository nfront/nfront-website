import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';

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
                    }
                }
            }
        }
    `);

    const courses = data.allContentfulCourses.edges.map((edge) => edge.node);
    const classes = data.allContentfulClasses.edges.map((edge) => edge.node);

    const { title: pageTitle, heroImage } =
        data.allContentfulPages.edges[0].node;

    // const results = data.allContentfulClasses.edges;
    // console.log('results :>> ', results);
    // const [filteredClasses, setFilteredClasses] = useState([]);

    // const params = new URLSearchParams(location.search);
    // const course = params.get('course');
    // const title = params.get('title');

    // useEffect(() => {
    //     if (results.length && !course && !title) {
    //         setFilteredClasses(results);
    //         return;
    //     }
    //     if (course && title) {
    //         setFilteredClasses(
    //             results.filter(
    //                 (aClass) =>
    //                     aClass?.course?.slug === course &&
    //                     course?.title
    //                         .toLocaleLowerCase()
    //                         .includes(title.toLocaleLowerCase())
    //             )
    //         );
    //         return;
    //     }
    //     if (title) {
    //         setFilteredClasses(
    //             results.filter((aClass) =>
    //                 aClass?.title
    //                     .toLocaleLowerCase()
    //                     .includes(title.toLocaleLowerCase())
    //             )
    //         );
    //         return;
    //     }
    //     if (course) {
    //         setFilteredClasses(
    //             results.filter((aClass) => aClass?.course?.slug === course)
    //         );
    //         return;
    //     }
    // }, [results, course, title]);

    return (
        <Layout>
            <Seo title={pageTitle} />
            <Navbar fluid location={location} />
            <Hero heroImage={heroImage}>
                <div className="mb-m2">
                    <h2>Fundraising Academy</h2>
                    <p>
                        Everything you need for your next raise, in one place.
                    </p>
                    <Link to="/classes/">
                        <button className="button center">
                            View All Classes
                        </button>
                    </Link>
                </div>
            </Hero>
            <Courses limit="6" courses={courses} />
            <Classes limit="6" classes={classes} />
            <Footer />
        </Layout>
    );
};

export default Academy;
