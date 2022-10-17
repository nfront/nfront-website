import React, { useRef } from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Cta from '@common/CTA';
import Wave from '@utils/divider/wave';
import Seo from '@utils/SEO';

/** */
import Thesis from '@sections/Thesis';
// import NFrontProcess from '@sections/TheProcess';
import CoInvestors from '@sections/CoInvestors';
import Testimonials from '@sections/Testimonials';

const ThesisPage = () => {
    const coInvestorsRef = useRef(null);
    const thesisRefs = { coInvestorsRef: coInvestorsRef };

    return (
        <Layout>
            <Seo title={'Thesis'} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>nFront Ventures</h2>
                <p>
                    We invest time and capital in exceptional entrepreneurs with
                    groundbreaking ideas.
                </p>
            </Hero>
            <Thesis thesisRefs={thesisRefs} />
            <CoInvestors ref={thesisRefs.coInvestorsRef} />
            <Testimonials />
            <Cta>
                <h2>Contact</h2>
                <p>
                    Are you an early-to-growth stage company looking to raise
                    capital from local or top-tier international VC funds?
                </p>
                <Link to="/contact/">
                    <button className="button center mt-0">Get in touch</button>
                </Link>
            </Cta>
            <Wave accent="dark" />
            <Footer />
        </Layout>
    );
};

export default ThesisPage;
