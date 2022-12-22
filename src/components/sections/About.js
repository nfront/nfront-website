import React, { forwardRef } from 'react';
import Link from '@common/link';
import { Section, Container } from '@styles/global';
import SweetSpot from '@sections/SweetSpot';
import Fade from '@common/fade';

const About = forwardRef((props, ref) => {
    return (
        <Section ref={ref} accent="alt" id="about">
            <Container className="text-white">
                <Fade top>
                    <h2>Support and Capital</h2>
                    <p>
                        nFront Ventures provides operational support and
                        capital to a small group of stand-out companies per
                        year. The 5-10 month support programs help
                        exceptional teams prepare and execute strong
                        fundraising processes. At the end of the process,
                        nFront participates as a co-investor.
                    </p>
                    <Link to="/thesis/">
                        <button className="button small">
                            Find out more
                        </button>
                    </Link>
                </Fade>
            </Container>
            <SweetSpot />
        </Section>
    );
});

export default About;
