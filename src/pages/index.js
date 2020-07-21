import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import CTA from '@common/CTA';
import Footer from '@common/footer';
import Header from '@sections/Header';

/** */
import About from '@sections/About';
import Portfolio from '@sections/Portfolio';
import News from '@sections/News';
import Testimonials from '@sections/Testimonials';
import Wave from '@utils/divider/wave';
import SEO from '@utils/SEO';

const App = () => (
    <Layout>
        <SEO title={'Capital and Fundraising'} />
        <Navbar fluid />
        <Header fileName="SH.jpg" />
        <About />
        <Wave />
        <Portfolio />
        <News accent="alt2" />
        <Wave />
        <Testimonials />
        <CTA id="contact">
            <h2>Contact</h2>
            <p>
                Are you an early-to-growth stage company, with global ambitions, looking for funding?
                {/* <br/>Don't hesitate to reach out, we would be happy to dive in and see if we can help. */}
            </p>
            <Link to="/contact/">
                <button className="button center mt-0">Get in touch</button>
            </Link>
        </CTA>
        <Wave accent="dark" />
        <Footer />
    </Layout>
);

export default App;
