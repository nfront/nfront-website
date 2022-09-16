import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Wave from '@utils/divider/wave';
import Seo from '@utils/SEO';

/** */
import Mentors from '@sections/Mentors';
import Team from '@sections/Team';

const team = () => (
    <Layout>
        <Seo title={'Team & Mentors'} />
        <Navbar fluid />
        <Hero fileName="LA.jpg">
            <h2>Team & Mentors</h2>
            <p>
                Mentors are available to portfolio companies, including
                world-class founders, technology experts and VC investors.
            </p>
        </Hero>
        <Team />
        <Mentors />
        <Wave accent="dark" />
        <Footer />
    </Layout>
);

export default team;