import React from 'react';
import { graphql } from 'gatsby';

import Class from '@components/common/class';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Fade from '@common/fade';
import { Section, SectionTitle, Container, FlexRow } from '@styles/global';
import Seo from '@utils/SEO';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ClassesPage = ({ data, location }) => {
    const { title: pageTitle, heroImage } =
        data.allContentfulPages.edges[0].node;

    const params = new URLSearchParams(location.search);
    const title = params.get('title');

    const classList = data.allContentfulClasses.edges.map((edge) => edge.node);

    const classes = Object.values(
        classList?.reduce((acc, clas) => {
            acc[clas?.course?.title] = acc[clas?.course?.title] || {
                title: clas?.course?.title,
                classes: [],
            };
            acc[clas?.course?.title].classes.push(clas);
            return acc;
        }, {})
    );

    return (
        <Layout>
            <Seo title={pageTitle} />
            <Navbar fluid threshold={0} />
            <Section className="pt-6">
                <Fade top>
                    <SectionTitle>
                        <div>
                            <h2>Classes</h2>
                            <p>
                                Search and explore our large library of
                                fundrasing classes. <br /> Each class is built
                                on knowledge and best practices from top-tier VC
                                and PE funds.
                            </p>
                        </div>
                    </SectionTitle>
                </Fade>
                <Container className="center-mobile">
                    {classes.map((courses, key) => {
                        return (
                            <Accordion key={key}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{courses?.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    style={{ maxWidth: '50rem' }}
                                    className="center pb-15 px-15"
                                >
                                    <FlexRow basis="100%">
                                        {courses?.classes.map(
                                            (aClass, index) => {
                                                return (
                                                    <Class
                                                        key={aClass.slug}
                                                        aClass={aClass}
                                                        courseTitle={
                                                            courses?.title
                                                        }
                                                        index={index}
                                                    />
                                                );
                                            }
                                        )}
                                    </FlexRow>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </Container>
            </Section>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { slug: { eq: "classes" } }) {
            edges {
                node {
                    title
                    heroImage {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
        allContentfulClasses {
            edges {
                node {
                    slug
                    title
                    coverImage {
                        url
                        mimeType
                        gatsbyImageData
                    }
                    course {
                        title
                        slug
                        tagLine
                        icon {
                            url
                            mimeType
                            gatsbyImageData(height: 100)
                        }
                        files {
                            title
                            fileAsset {
                                filename
                                publicUrl
                            }
                        }
                        relatedCourses {
                            ... on ContentfulCourses {
                                id
                                title
                                slug
                                icon {
                                    mimeType
                                    url
                                    gatsbyImageData(width: 100)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default ClassesPage;
