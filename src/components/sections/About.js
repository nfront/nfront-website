import React, { forwardRef } from 'react';
import Link from '@common/link';
import styled from 'styled-components';
import { Section, Container, Box } from '@styles/global';
import SweetSpot from '@sections/SweetSpot';
import Fade from '@common/fade';

const StyledSection = styled(Section)``;

const StyledGrid = styled(Container)`
    ${Box} {
        padding: 3rem 1.5rem;
    }
    p,
    h2 {
        color: white;
    }
`;

const About = forwardRef((props, ref) => {
    return (
        <>
            <StyledSection ref={ref} accent="alt2" id="about">
                <StyledGrid>
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
                </StyledGrid>
                <SweetSpot />
            </StyledSection>
        </>
    );
});

export default About;
