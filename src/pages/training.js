import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';

export default () => {
    return (
        <Layout>
            <SEO title={'Training'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h1>Training</h1>
            </Hero>
            <Footer />
        </Layout>
    );
};
