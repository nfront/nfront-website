import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import Register from '../components/sections/Register';

export default () => {
    return (
        <Layout>
            <SEO title={'Register'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <Register />
            </Hero>
            <Footer />
        </Layout>
    );
};
