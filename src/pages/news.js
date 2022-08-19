import React from 'react';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Seo from '@utils/SEO';

import News from '@sections/News';

const newsPage = () => {
    const title = "What's New?";
    return (
        <Layout>
            <Seo title={'News'} />
            <Navbar fluid />
            <Hero large fileName="LA.jpg">
                <h2>{title}</h2>
            </Hero>
            <News limit={'1000'} />
            <Footer />
        </Layout>
    );
};

export default newsPage;