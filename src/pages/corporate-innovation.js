import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import CTA from '@common/CTA';
import Wave from '@utils/divider/wave';
import TheProcess from '@sections/OurProcess';

export default () => (
    <Layout>
        <Navbar fluid />
        <Hero fileName="LA.jpg">
            <h2>Corporate Innovation</h2>
            <p>
                We help brainstorm ideas, organize workshops, build prototypes
                and implement fully scalable and market-ready solutions.
            </p>
        </Hero>
        <CTA>
            <h2>Game-Changing Innovation Support</h2>
            <p>
                Today, technology affects all industries. To stay on top of
                competition and to keep processes running as efficiently as
                possible, a focus on innovation and new technology is important.
            </p>
            <p>
                We help brainstorm ideas, organize workshops, build prototypes
                and implement fully scalable and market-ready solutions.
            </p>
        </CTA>
        <Wave alt />
        <TheProcess /* 10 steps process */ />
        <CTA>
            <h3>
                Looking for <span>FREE ADVICE?</span>
            </h3>
            <p>
                A free one hour consulation with our designers, engineers, and
                product people. You will get actionable advice on how to tackle
                your current design or technology challenges and where to focus
                your efforts to deliver a better product.
            </p>
            <p>
                <span>
                    No costs. No obligations. Just come and learn from us.
                </span>
            </p>
            <Link to="/contact/">
                <button className="button">Apply Now</button>
            </Link>
        </CTA>
        <Wave accent="dark" />
        <Footer />
    </Layout>
);
