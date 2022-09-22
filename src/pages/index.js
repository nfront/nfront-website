import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Cta from '@common/CTA';
import Footer from '@common/footer';
import Header from '@sections/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

/** */
import About from '@sections/About';
import Portfolio from '@sections/Portfolio';
import News from '@sections/News';
import Testimonials from '@sections/Testimonials';
import Wave from '@utils/divider/wave';
import Seo from '@utils/SEO';

const App = () => {    
    return (
    <Layout>
        <Seo title={'Capital and Fundraising'} />
        <Navbar fluid />
        <Header fileName="SH.jpg" />
        <About />
        <Wave />
        <Portfolio />
        <News accent="alt2" limit="6"/>
        <Wave />
        <Testimonials />
        <Cta id="contact">
            <h2>Contact</h2>
            <p>
                Are you an early-to-growth stage company, with global ambitions,
                looking for funding?
                {/* <br/>Don't hesitate to reach out, we would be happy to dive in and see if we can help. */}
            </p>
            <Link to="/contact/">
                <button className="button center mt-0">Get in touch</button>
            </Link>
        </Cta>
        <Wave accent="dark" />
        <Footer />
    </Layout>
);
}

export default App;