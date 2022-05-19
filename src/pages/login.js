import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import Login from '../components/sections/Login';

export default () => {
    return (
        <Layout>
            <SEO title={'Login'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <Login />
            </Hero>
            <Footer />
        </Layout>
    );
};
