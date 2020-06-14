import React from 'react';
import styled from 'styled-components';
import { Section, Container, Grid, Box, SectionTitle } from '@styles/global';

/** */
import NFrontProcess from '@sections/TheProcess';

/** */
import { ReactComponent as IconOne } from '@images/nfront/global.svg';
import { ReactComponent as IconTwo } from '@images/nfront/graph.svg';
import { ReactComponent as IconThree } from '@images/nfront/geography.svg';
import { ReactComponent as IconFour } from '@images/nfront/speed.svg';

const GRID = styled(Grid)`
    grid-gap: 10px;

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Item = styled(Box)`
    border: 1px solid var(--border-color);
    text-align: center;

    ${props =>
        props.alt &&
        `
        background-color: var(--accent-color);

    `};

    @media (min-width: ${props => props.theme.screen.md}) {
        text-align: left;
    }

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
    padding: 0 0 1.6rem 0;
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
                                <IconFour />
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
