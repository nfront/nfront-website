import React from 'react';
import styled from 'styled-components';
import { Container } from '@styles/global';

import { ReactComponent as IconOne } from '@images/nfront/industry.svg';
import { ReactComponent as IconTwo } from '@images/nfront/stage.svg';
import { ReactComponent as IconThree } from '@images/nfront/geography.svg';

const GRID = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    transition: transform 0.3s ease-in-out;

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }

    h3,
    h4 {
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    h3 {
        margin-bottom: 0.5rem;
    }
    h4 {
        color: var(--secondary-color);
    }
    svg {
        fill: var(--secondary-color);
        width: 100px;
        height: 100px;
    }

    .box {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(225, 225, 225, 0.2);
    }
`;

const Art = styled.div`
    padding: 2rem 0;
`;

const Text = styled.p`
    height: auto;
    font-size: 17px;
    @media (min-width: ${props => props.theme.screen.md}) {
        min-height: 170px;
    }
`;

export default () => {
    return (
        <Container>
            <GRID>
                <div class="box with-shadow">
                    <Art>
                        <IconOne />
                    </Art>
                    <h3>Industries</h3>
                    <h4>Software (B2B and B2C)</h4>
                    <Text>
                        Our core focus is on game-changing, capital efficient,
                        software propositions. We get excited by fast-growing,
                        scalable products operating in large markets not yet
                        disrupted by technology.
                    </Text>
                </div>
                <div class="box with-shadow">
                    <Art>
                        <IconTwo />
                    </Art>
                    <h3>Stage</h3>
                    <h4>Seed to Series-B</h4>
                    <Text>
                        Our sweet spot is companies raising between €1m and
                        €10m. For B2B SaaS platforms, we normally engage
                        somewhere between €800k and €4m in annual revenues.
                    </Text>
                </div>
                <div class="box with-shadow">
                    <Art>
                        <IconThree />
                    </Art>
                    <h3>Geographies</h3>
                    <h4>Europe and US</h4>
                    <Text>
                        Our core markets are northern Europe, Spain and the US.
                        Regardless of its home country, we only consider
                        companies with international ambitions and global
                        potential.
                    </Text>
                </div>
            </GRID>
        </Container>
    );
};
