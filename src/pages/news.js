import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';

import News from '@sections/News';

export default () => {
    const title = "What's New";
    return (
        <Layout>
            <SEO title={title} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>{title}</h2>
            </Hero>
            <News />
            <Footer />
        </Layout>
    );
};
