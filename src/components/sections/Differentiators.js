import React from 'react';
import { Section, Container, SectionTitle } from '@styles/global';
import styled from 'styled-components';

const GRID = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }

    p {
        font-size: 90%;
    }

    svg {
        width: 120px;
        fill: var(--primary-color);
    }
`;

const Column = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    counter-increment: section;

    &::after {
        content: counter(section);
        position: absolute;
        top: -3rem;
        right: 0;
        font-size: 8rem;
        font-weight: 900;
        opacity: 0.1;
        color: var(--accent-color);
        z-index: auto;
    }

    &:hover::after {
        color: var(--border-color);
    }
`;

export default () => {
    return (
        <Section accent="alt">
            <Container>
                <SectionTitle>
                    <h2>Our Differentiators</h2>
                    <p>
                        nFront makes quality local software development
                        accessible to all, from startups to established
                        corporations
                    </p>
                    <hr />
                </SectionTitle>
                <GRID>
                    <Column>
                        <h3>Professional Development</h3>
                        <p>
                            nFront’s developers have over a decade of
                            enterprise-grade development experience. As a
                            result, scalable, modular and well document code,
                            easy to use as basis for continued development.
                        </p>
                    </Column>
                    <Column>
                        <h3>Deep Business Understanding</h3>
                        <p>
                            With backgrounds as investors, founders and
                            developers, nFront combines significant technical
                            expertise with deep commercial insight, enabling
                            nFront to build software applications with increased
                            investor attractiveness and stronger user-appeal
                        </p>
                    </Column>
                    <Column>
                        <h3>Extensive Experience</h3>
                        <p>
                            With network of over 150+ professional developers,
                            nFront uses its years of technical and business
                            expertise to set up your company and project for
                            success and growth.
                        </p>
                    </Column>
                    <Column>
                        <h3>Competitive Pricing</h3>
                        <p>
                            nFront uses its in-house developers to create
                            cutting-edge product, test, iterate, and makes local
                            top-tier development resources available to
                            startups, without breaking their bank.
                        </p>
                    </Column>
                </GRID>
            </Container>
        </Section>
    );
};
