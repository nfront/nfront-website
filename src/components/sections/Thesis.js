import React from 'react';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';
import InvestmentFocus from '@sections/InvestmentFocus';
import Timeline from '@sections/Timeline';
import NFrontProcess from '@sections/NFrontProcess';

const StyledSection = styled(Section)`
    padding-bottom: 0;
`;

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

const ThesisDesc = styled.div`
    text-align: left;
    h3 {
        color: var(--secondary-color);
        margin-bottom: 0rem;
        font-size: 100%;
    }
    p {
        height: auto;
        font-size: 17px;
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
            <Section shade>
                <Container>
                    <SectionTitle>
                        <h2>Our Thesis</h2>
                        <p>
                            nFront works with a small group of stand-out
                            companies per year, to enable successful fundraising
                            rounds. The support is full time, typically over
                            5-10 months. After a 2-4 month preparation stage,
                            investors are invited in from a global deal-sharing
                            network, built over 10 years in VC. At close, nFront
                            co-invests directly alongside new investors.
                        </p>
                        <hr />
                    </SectionTitle>
                </Container>
                <InvestmentFocus />
            </Section>
            <StyledSection>
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
                    </SectionTitle>
                    <Timeline />
                </Container>
                <NFrontProcess />
            </StyledSection>
        </>
    );
};
