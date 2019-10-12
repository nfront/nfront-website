import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';
import InvestmentFocus from '@sections/InvestmentFocus';
import SoftwareDev from '@sections/SoftwareDev';

import { ReactComponent as ImgOne } from '@images/art/VC.svg';
import { ReactComponent as ImgTwo } from '@images/art/software.svg';

const StyledSection = styled(Section)``;

const Grid = styled(Container)`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 100px;
    align-items: center;
    justify-items: center;

    ${props =>
        props.inverse &&
        `
        grid-template-columns: 2fr 3fr;        
    `};

    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: 1fr;

        ${props =>
            props.inverse &&
            `
            ${Art} {
              order: 2;
            }
        `}
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
        <StyledSection id="capital">
            <Grid>
                <div>
                    <h2>Venture Capital</h2>
                    <p>
                        We co-invest in exceptional entrepreneurs and
                        ground-breaking companies alongside leading venture
                        capital funds and high-net-worth individuals.
                    </p>
                    <Link to="/venture-capital/">
                        <button className="button small">Find out more</button>
                    </Link>
                </div>
                <Art>
                    <ImgOne />
                </Art>
            </Grid>
            <InvestmentFocus />
        </StyledSection>
        <StyledSection accent="alt" id="development">
            <Grid inverse>
                <Art>
                    <ImgTwo />
                </Art>
                <div>
                    <h2>Software Development</h2>
                    <p>
                        nFront fully handles end-to-end software development
                        projects ranging from initial app prototypes and
                        high-quality MVPs, to complex and massively scalable
                        software platforms. If you prefer to hire pre-vetted
                        superstar developers for your in-house use, no problem,
                        we got your back.
                    </p>
                </div>
            </Grid>
            <SoftwareDev />
        </StyledSection>
    </>
);

export default About;
