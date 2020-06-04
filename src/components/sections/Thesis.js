import React from 'react';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';
import InvestmentFocus from '@sections/InvestmentFocus';
import NFrontProcess from '@sections/TheProcess';

const StyledSection = styled(Section)`
    padding-bottom: 0;
`;

const GRID = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    transition: transform 0.3s ease-in-out;
    margin-top: 5rem;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    text-align: center;
    position: relative;
    padding: 4rem 1.5rem 1rem;
    border: 1px solid #eaeaea;

    ${props =>
        props.alt &&
        `
        background-color: var(--accent-color);

    `};

    h4 {
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    p {
        font-size: 85%;
    }
`;

const Number = styled.div`
    position: absolute;
    top: 0;
    transform: translate3d(0, -50%, 0);
`;

export default () => {
    return (
        <>
            <Section>
                <Container>
                    <SectionTitle>
                        <h2>Business Model</h2>
                        <p>
                            nFront aligns with the company when it comes to risk
                            and payment for full time support. Unless a
                            successful transaction goes through, the support is
                            provided at zero cost.
                        </p>
                    </SectionTitle>
                    <GRID>
                        <Box className="rounded" alt>
                            <Number className="number">1</Number>
                            <h4>Geographies</h4>
                            <p>
                                Pan-European. Opportunistically review stand-out
                                opportunities in geographies with co-investors,
                                incl. the U.S.
                            </p>
                        </Box>
                        <Box className="rounded">
                            <Number className="number">2</Number>
                            <h4>Sectors</h4>
                            <p>
                                B2B & B2C technology companies with proven
                                monetization strategies and sustainable business
                                models
                            </p>
                        </Box>
                        <Box className="rounded" alt>
                            <Number className="number">3</Number>
                            <h4>Stages</h4>
                            <p>
                                Seed to Series-B stage companies raising €2m –
                                €20m
                            </p>
                        </Box>
                        <Box className="rounded">
                            <Number className="number">4</Number>
                            <h4>Characteristics</h4>
                            <p>
                                Validation/growth, differentiation, capital
                                efficiency, market size, ++
                            </p>
                        </Box>
                    </GRID>
                </Container>
            </Section>
            <NFrontProcess />
        </>
    );
};
