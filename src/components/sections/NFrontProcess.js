import React from 'react';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import { Section, SectionTitle } from '@styles/global';

import { ReactComponent as IconOne } from '@images/nfront/research.svg';
import { ReactComponent as IconTwo } from '@images/nfront/launch.svg';
import { ReactComponent as IconThree } from '@images/nfront/speed.svg';
import { ReactComponent as IconFour } from '@images/nfront/solution.svg';

const StyledSection = styled(Section)`
    padding-bottom: 0;
`;

const GRID = styled.div`
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr;
    min-height: 50vh;
    align-items: center;
    justify-items: center;

    ${props =>
        props.accent === 'inverse' &&
        `
            background: var(--accent-color);
    `};

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(2, 1fr);
        min-width: 100%;
        ${props =>
            props.accent === 'inverse' &&
            `
        
            ${Text} {
                grid-column: 2;
                grid-row: 1;  

                &::before {
                    left: -40px;
                }

                ${Icon} {
                    left: -22.5px;
                }

            }

            ${Art} {
                grid-column: 1;
                grid-row: 1; 
                border-right: 1.5px solid hsla(0,0%,74%,.2);
            }
        `};
    }
`;

const Text = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4rem;

    @media (min-width: ${props => props.theme.screen.md}) {
        min-height: 50vh;
        min-width: 50vw;
        &::before {
            content: '';
            border: 1.5px solid hsla(0, 0%, 74%, 0.3);
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            top: -40px;
            right: -40px;
            background-color: var(--secondary-color);
        }
    }
`;

const Art = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 120px;
    font-weight: 900;
    color: hsla(0, 0%, 74%, 0.2);
    grid-column: 1;
    grid-row: 1;
    border-left: 1.5px solid hsla(0, 0%, 74%, 0.2);
    height: 100%;
    @media (min-width: ${props => props.theme.screen.md}) {
        min-height: 50vh;
        grid-column: 2;
    }
`;

const Icon = styled.div`
    position: absolute;
    top: -22.5px;
    right: -22.5px;
    svg {
        position: relative;
        fill: var(--alt-color);
        width: 45px;
        height: 45px;
    }
`;

export default () => {
    return (
        <StyledSection>
            <GRID>
                <Slide left>
                    <Text>
                        <ul class="styled">
                            <h3>Identification</h3>
                            <li>Fund raising materials</li>
                            <li>Hard DD questions</li>
                            <li>valuation</li>
                            <li>size</li>
                            <li>++</li>
                        </ul>
                        <Icon>
                            <IconOne />
                        </Icon>
                    </Text>
                </Slide>
                <Art>1</Art>
            </GRID>
            <GRID accent="inverse">
                <Slide right>
                    <Text>
                        <ul class="styled">
                            <h3>Preparation</h3>
                            <li>Story</li>
                            <li>KPIs</li>
                            <li>Team training</li>
                            <li>IM</li>
                            <li>Financial models</li>
                            <li>++</li>
                        </ul>
                        <Icon>
                            <IconTwo />
                        </Icon>
                    </Text>
                </Slide>
                <Art>2</Art>
            </GRID>
            <GRID>
                <Slide left>
                    <Text>
                        <ul class="styled">
                            <h3>Live Process</h3>
                            <li>Identity investors</li>
                            <li>Run outreach</li>
                            <li>Guide Q&A</li>
                            <li>++</li>
                        </ul>
                        <Icon>
                            <IconThree />
                        </Icon>
                    </Text>
                </Slide>
                <Art>3</Art>
            </GRID>
            <GRID accent="inverse">
                <Slide right>
                    <Text>
                        <ul class="styled">
                            <h3>Closing</h3>
                            <li>Secure team sheets</li>
                            <li>Analyze terms</li>
                            <li>Guide third-party DD</li>
                            <li>++</li>
                        </ul>
                        <Icon>
                            <IconFour />
                        </Icon>
                    </Text>
                </Slide>
                <Art>4</Art>
            </GRID>
        </StyledSection>
    );
};
