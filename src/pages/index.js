import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import CTA from '@common/CTA';
import Footer from '@common/footer';
import Header from '@sections/Header';
import About from '@sections/About';
import CaseStudy from '@sections/CaseStudy';
import Wave from '@utils/divider/wave';

const App = () => (
    <Layout>
        <Navbar fluid />
        <Header fileName="NY.jpg" />
        <About />
        <Wave />
        <CaseStudy />
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

export default App;
