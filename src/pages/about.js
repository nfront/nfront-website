import React from 'react';
// import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import CTA from '@common/CTA';
import Hero from '@common/hero';
import Footer from '@common/footer';
import SEO from '@utils/SEO';
import Wave from '@utils/divider/wave';
// import { Section } from '@styles/global';

// const Highlight = styled.span`
//     background: var(--accent-color);
//     color: var(--primary-color);
//     padding: 2px 5px;
// `;

export default () => {
    const title = 'About Us';
    return (
        <Layout>
            <SEO title={title} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>{title}</h2>
                <p>
                    nFront brings <span>venture capital</span> to fast-growing
                    companies and <span>software development</span> to
                    businesses across all stages
                </p>
            </Hero>
            <CTA>
                <h2>Contact</h2>
                <p>
                    Are you an early stage company looking for funding or any
                    business in need of expert software development resources?
                </p>
                <Link to="/contact/">
                    <button className="button">Get in touch</button>
                </Link>
            </CTA>
            <Wave accent="dark" />
            <Footer />
        </Layout>
    );
};
