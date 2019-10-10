import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import CTA from '@common/CTA';
import Strapbox from '@common/strapbox';
import Wave from '@utils/divider/wave';

/** */
import CaseStudy from '@sections/CaseStudyAlt';
import Differentiators from '@sections/Differentiators';
import TechWeUse from '@sections/TechWeUse';
import WhoWeCanHelp from '@sections/WhoWeCanHelp';
import HowWeWork from '@sections/HowWeWork';
import OurExpertise from '@sections/OurExpertise';

export default () => (
    <Layout>
        <Navbar fluid />
        <Hero fileName="LA.jpg">
            <h2>Outsource Development</h2>
            <p>
                We tackle outsourced development projects ranging from initial
                prototypes and high-quality MVPs at speed, to complex and
                massively scalable software platforms
            </p>
        </Hero>
        <WhoWeCanHelp />
        <Strapbox>
            <p>nFront Bridges the Gap Between Business and Technology</p>
        </Strapbox>
        <OurExpertise />
        <Differentiators />
        <TechWeUse />
        <HowWeWork />
        <CaseStudy />
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
                <button className="button">Get in touch</button>
            </Link>
        </CTA>
        <Wave accent="dark" />
        <Footer />
    </Layout>
);
