import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Link from '@common/link';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Cta from '@common/CTA';
import Footer from '@common/footer';
import Header from '@sections/Header';

import About from '@sections/About';
import Portfolio from '@sections/Portfolio';
import News from '@sections/News';
import Testimonials from '@sections/Testimonials';
import Wave from '@utils/divider/wave';
import Seo from '@utils/SEO';

const IndexPage = ({ data }) => {
    const contactUsRef = useRef(null);
    const aboutUsRef = useRef(null);
    const navRef = useRef(null);
    const frontPageRefs = {
        aboutUsRef: aboutUsRef,
        contactUsRef: contactUsRef,
    };
    // <Navbar frontPageRefs={frontPageRefs} ref={navRef} navRef={navRef} fluid />

    console.log('hehe', data);

    const { title, heroImage } = data.allContentfulPages.nodes[0];

    return (
        <Layout>
            <Seo title={title} />
            <Navbar
                ref={navRef}
                frontPageRefs={frontPageRefs}
                navRef={navRef}
                fluid
            />
            <Header heroImage={heroImage} />
            <About ref={aboutUsRef} />
            <Wave />
            <Portfolio />
            <News accent="alt2" limit="6" />
            <Wave />
            <Testimonials />
            <Cta ref={contactUsRef} id="contact">
                <h2>Contact</h2>
                <p>
                    Are you an early-to-growth stage company, with global
                    ambitions, looking for funding?
                    {/* <br/>Don't hesitate to reach out, we would be happy to dive in and see if we can help. */}
                </p>
                <Link to="/contact/">
                    <button className="button center mt-0">Get in touch</button>
                </Link>
            </Cta>
            <Wave accent="dark" />
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulPages(
            filter: { title: { eq: "Capital and Fundraising" } }
        ) {
            nodes {
                title
                heroImage {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    }
`;

export default IndexPage;
