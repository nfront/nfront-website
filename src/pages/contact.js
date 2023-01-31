import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Link from '@common/link';
import { Section, Container, Grid } from '@styles/global';
import Contact from '@sections/Contact';
import Seo from '@utils/SEO';


const ContactPage = ({ data, location }) => {
    const { title, heroImage } = data.allContentfulPages.edges[0].node;

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid location={location}/>
            <Hero heroImage={heroImage} alt={title}>
                <h2>{title}</h2>
                <p>
                    Please reach out below and we will get back to you as soon
                    as possible.
                </p>
            </Hero>
            <Section>
                <Container>
                    <Grid>
                        <Contact />
                        <div className="">
                            <div class="label">Drop us an email at</div>
                            <p>info@nfrontventures.com</p>
                            <div class="label">Visit us at</div>
                            <p>
                                <Link className="light-bold" href="https://goo.gl/maps/X1k1eo7YebbSehEP9">
                                    Tollbugata 24, 0157
                                    <br />
                                    Oslo, Norway
                                </Link>
                            </p>
                        </div>
                    </Grid>
                </Container>
            </Section>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(filter: { slug: { eq: "contact-us" } }) {
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
    }
`;

export default ContactPage;
