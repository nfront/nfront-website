import React from 'react';
import styled from 'styled-components';
import { Section, Container, Box, SectionTitle } from '@styles/global';
import InvestmentFocus from '@sections/InvestmentFocus';
import NFrontProcess from '@sections/TheProcess';

import { ReactComponent as IconOne } from '@images/nfront/global.svg';
import { ReactComponent as IconTwo } from '@images/nfront/graph.svg';
import { ReactComponent as IconThree } from '@images/nfront/geography.svg';

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

const Item = styled(Box)`
    border: 1px solid var(--border-color);
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
        margin-bottom: 0;
    }
`;

const Art = styled.div`
    svg {
        fill: var(--secondary-color);
        width: 70px;
        height: 70px;
    }
    margin-bottom: 2rem;
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
                        <Item alt>
                            <Art>
                                <IconThree />
                            </Art>
                            <h4>Geographies</h4>
                            <p>
                                Pan-European. Opportunistically review stand-out
                                opportunities in geographies with co-investors,
                                incl. the U.S.
                            </p>
                        </Item>
                        <Item>
                            <Art>
                                <IconOne />
                            </Art>
                            <h4>Sectors</h4>
                            <p>
                                B2B & B2C technology companies with proven
                                monetization strategies and sustainable business
                                models.
                            </p>
                        </Item>
                        <Item alt>
                            <Art>
                                <IconTwo />
                            </Art>
                            <h4>Stages</h4>
                            <p>
                                Seed to Series-B stage companies raising €2m –
                                €20m in annual revenue.
                            </p>
                        </Item>
                        <Item>
                            <Art>
                                <IconOne />
                            </Art>
                            <h4>Characteristics</h4>
                            <p>
                                Validation/growth, differentiation, capital
                                efficiency, market size, ++
                            </p>
                        </Item>
                    </GRID>
                </Container>
            </Section>
            <NFrontProcess />
        </>
    );
};
