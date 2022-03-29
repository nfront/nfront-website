import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import Portfolio from '../components/sections/Portfolio';

export default () => {
    const title = "Portfolio's";
    return (
        <Layout>
            <SEO title={'Portfolios'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>{title}</h2>
            </Hero>
            <Portfolio />
            <Footer />
        </Layout>
    );
};
