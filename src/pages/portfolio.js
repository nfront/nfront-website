import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import Portfolio from '../components/sections/Portfolio';

const portfolio = () => {
    const title = 'Portfolio';
    return (
        <Layout>
            <Seo title={'Portfolio'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>{title}</h2>
                <p>
                    We have had the privilege to invest across a range of stages
                    and sectors, and are incredibly proud of the rockstar
                    founders we work with!
                </p>
            </Hero>
            <Portfolio />
            <Footer />
        </Layout>
    );
};

export default portfolio;