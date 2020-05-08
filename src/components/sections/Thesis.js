import React from 'react';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';
import InvestmentFocus from '@sections/InvestmentFocus';

const GRID = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(3, 1fr);
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
        opacity: 0.5;
        color: var(--accent-color);
        z-index: -1;
    }

    &:hover::after {
        color: var(--border-color);
    }
`;

export default () => {
    return (
        <>
            <Section accent="alt">
                <Container>
                    <SectionTitle>
                        <h2>Our Thesis</h2>
                        <p>
                            nFront’s strategy is based on co-investing and
                            deal-sharing.
                        </p>
                        <p>
                            As part of the investment process, nFront brings in
                            leading Venture Capital funds and strategic
                            high-net-worth individuals as co-investors. With
                            smart capital and experienced advisors on board, the
                            stage is set for explosive growth and capital
                            efficient expansion.
                        </p>
                        <hr />
                    </SectionTitle>
                </Container>
                <InvestmentFocus />
            </Section>
            <Section>
                <Container>
                    <SectionTitle>
                        <h2>Our Value Add</h2>
                        <p>
                            As an early stage investor we strive to bring more
                            value than just capital. With combined investing,
                            entrepreneurship and technology experience, nFront’s
                            team members and advisors actively support portfolio
                            companies with strategic advice, technical resources
                            and relevant introductions, without getting in the
                            way of the management team.
                        </p>
                        <hr />
                    </SectionTitle>
                    <GRID>
                        <Column>
                            <h3>Capital</h3>
                            <p>
                                Help secure value-add capital at the right time,
                                via a global co-investor network.
                            </p>
                            <p>
                                Focus on capital efficiency increases the chance
                                of successful international expansion.
                            </p>
                        </Column>
                        <Column>
                            <h3> Developers</h3>
                            <p>
                                Pre-vetted, world-class software developers at
                                attractive rates, hand selected for your
                                project.
                            </p>
                            <p>
                                Save money and be more efficient with trained
                                developers used to working together.
                            </p>
                        </Column>
                        <Column>
                            <h3>Introductions</h3>
                            <p>
                                Actively make introductions to new potential
                                partners, suppliers and customers.
                            </p>
                            <p>
                                Investors’ credibility and relationships to
                                leading brands help open doors.
                            </p>
                        </Column>
                        <Column>
                            <h3>Efficiency</h3>
                            <p>
                                Provide strategic advice around operational
                                efficiency and professional governance.
                            </p>
                            <p>
                                Building culture and setting values early on
                                enhances growth and mitigates risks.
                            </p>
                        </Column>
                        <Column>
                            <h3>Recruitment</h3>
                            <p>
                                Introduce top candidates through a large network
                                of experienced individuals.
                            </p>
                            <p>
                                Focus on building balanced and dedicated teams
                                at the company and board levels.
                            </p>
                        </Column>
                        <Column>
                            <h3>Expansion</h3>
                            <p>
                                Advise on international expansion, including
                                successful strategies and typical pitfalls.
                            </p>
                            <p>
                                nFront’s team and advisors have done it before
                                and provide support when needed.
                            </p>
                        </Column>
                    </GRID>
                </Container>
            </Section>
        </>
    );
};
