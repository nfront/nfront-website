import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import CTA from '@common/CTA';
import Wave from '@utils/divider/wave';

/** */
import Thesis from '@sections/Thesis';
import Mentors from '@sections/Mentors';
import Clients from '@sections/Clients';

export default () => (
    <Layout>
        <Navbar fluid />
        <Hero fileName="LA.jpg">
            <h2>nFront Ventures</h2>
            <p>
                We invest time and capital in exceptional entrepreneurs with groundbreaking ideas
            </p>
        </Hero>
        <Thesis />
        <Clients />
        <Wave />
        <Mentors />
        <CTA>
            <h2>Contact</h2>
            <p>
                Are you an early stage company looking to raise capital from
                local or top-tier international VC funds?
            </p>
            <Link to="/contact/">
                <button className="button">Get in touch</button>
            </Link>
        </CTA>
        <Wave accent="dark" />
        <Footer />
    </Layout>
);
