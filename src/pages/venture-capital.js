import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import CTA from '@common/CTA';
import Wave from '@utils/divider/wave';
import SEO from '@utils/SEO';

/** */
import Thesis from '@sections/Thesis';
// import NFrontProcess from '@sections/TheProcess';
import CoInvestors from '@sections/CoInvestors';
import Testimonials from '@sections/Testimonials';

export default () => (
    <Layout>
        <SEO title={'Thesis'} />
        <Navbar fluid />
        <Hero fileName="LA.jpg">
            <h2>nFront Ventures</h2>
            <p>
                We invest time and capital in exceptional entrepreneurs with
                groundbreaking ideas.
            </p>
        </Hero>
        <Thesis />
        {/* <NFrontProcess /> */}
        <CoInvestors />
        <Testimonials />
        <CTA>
            <h2>Contact</h2>
            <p>
                Are you an early-to-growth stage company looking to raise
                capital from local or top-tier international VC funds?
            </p>
            <Link to="/contact/">
                <button className="button center mt-0">Get in touch</button>
            </Link>
        </CTA>
        <Wave accent="dark" />
        <Footer />
    </Layout>
);
