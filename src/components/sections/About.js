import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';
import InvestmentFocus from '@sections/InvestmentFocus';
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

const Grid = styled(Container)`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 100px;
    align-items: center;
    justify-items: center;

    ${props =>
        props.inverse &&
        `
        // grid-template-columns: 2fr 3fr;
        grid-template-columns: 3fr 1fr;
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

    padding-bottom: 2.334rem;
`;

const Art = styled.figure`
    svg {
        width: 100%;
        height: auto;
    }
`;

const About = () => (
    <>
        <StyledSection accent="alt" id="about">
            <Grid inverse>
                {/* <Art>
                    <ImgTwo />
                </Art> */}
                <div>
                    <h2>Support and Capital</h2>
                    <p>
                        nFront provides operational support and capital to a small group of stand-out companies per year. The 5-10 month support programs help exceptional teams prepare and execute strong fundraising processes.
                        At the end of the process, nFront participates as co-investors.
                    </p>
                    <Link to="/venture-capital/">
                        <button className="button small">Find out more</button>
                    </Link>
                </div>
            </Grid>
            <InvestmentFocus />
        </StyledSection>
    </>
);

export default About;
