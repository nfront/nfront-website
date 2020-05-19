import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Section, Container, Box } from '@styles/global';
import InvestmentFocus from '@sections/InvestmentFocus';
import Fade from 'react-reveal/Fade';
import SoftwareDev from '@sections/SoftwareDev';
import { ReactComponent as ImgOne } from '@images/art/VC.svg';
// import { ReactComponent as ImgOne } from '@images/logos/nfront-icon.svg';
import { ReactComponent as ImgTwo } from '@images/art/software.svg';

const StyledSection = styled(Section)``;

// const ArtOne = styled.figure`
//   text-align: right;

//   svg {
//     width: 50%;
//     height: auto;
//     margin-right: 15%;
//   }
// `;

const GRID = styled(Container)`
    ${Box} {
        padding: 3rem 1.5rem;
    }
`;

const Art = styled.figure`
    svg {
        width: 100%;
        height: auto;
    }
`;

const About = () => (
    <>
        <StyledSection shade id="about">
            <GRID>
                <Fade top>
                    <Box>
                        <h2>Support and Capital</h2>
                        <p>
                            nFront provides operational support and capital to a
                            small group of stand-out companies per year. The
                            5-10 month support programs help exceptional teams
                            prepare and execute strong fundraising processes. At
                            the end of the process, nFront participates as
                            co-investors.
                        </p>
                        <Link to="/venture-capital/">
                            <button className="button small">
                                Find out more
                            </button>
                        </Link>
                    </Box>
                </Fade>
            </GRID>
            <InvestmentFocus />
        </StyledSection>
    </>
);

export default About;
