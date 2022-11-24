import React from 'react';
import styled from 'styled-components';
import { Section, Container, Grid, Box, SectionTitle } from '@styles/global';
import Link from '@common/link';

/** */
import { ReactComponent as IconOne } from '@images/nfront/global.svg';
import { ReactComponent as IconTwo } from '@images/nfront/graph.svg';
import { ReactComponent as IconThree } from '@images/nfront/geography.svg';
import { ReactComponent as IconFour } from '@images/nfront/speed.svg';

const StyledGrid = styled(Grid)`
    grid-gap: 10px;

    @media (min-width: ${(props) => props.theme.screen.md}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Item = styled(Box)`
    border: 1px solid var(--border-color);
    text-align: center;

    ${(props) =>
        props.alt &&
        `
        background-color: var(--accent-color);

    `};

    @media (min-width: ${(props) => props.theme.screen.md}) {
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

const thesis = (props) => {
    const { coInvestorsRef } = props.thesisRefs;
    const { navRef } = props;

    return (
        <>
            <Section>
                <SectionTitle>
                    <h2>About Us</h2>
                    <p>
                        nFront provides a small group of exceptional companies
                        per year with in-depth fundraising support and capital.
                    </p>
                    <p>
                        With one of Europe's largest{' '}
                        <Link
                            to="#co-investors"
                            navRef={navRef}
                            anchorRef={coInvestorsRef}
                        >
                            deal-sharing
                        </Link>{' '}
                        networks and{' '}
                        <Link to="/team-mentors/#mentors">mentors</Link> ranging
                        from top-tier VCs to technology influencers and
                        corporate decision makers, nFront strives to provide
                        deep and transformative value to its companies, both
                        throughout fundraising and after.
                    </p>
                </SectionTitle>
                <Container>
                    <StyledGrid>
                        <Item alt>
                            <Art>
                                <IconThree />
                            </Art>
                            <h4>Geographies</h4>
                            <p>
                                Due to a strong deal-sharing network, nFront
                                looks at companies across Europe. Stand-out
                                opportunities in the U.S. are also considered.
                            </p>
                        </Item>
                        <Item>
                            <Art>
                                <IconOne />
                            </Art>
                            <h4>Sectors</h4>
                            <p>
                                B2B & B2C technology companies, including
                                FinTech, digital health, cyber security,
                                marketplaces, future of work, tech-enabled
                                services and more.
                            </p>
                        </Item>
                        <Item alt>
                            <Art>
                                <IconTwo />
                            </Art>
                            <h4>Stages</h4>
                            <p>
                                Seed to Series-B stage companies, looking to
                                raise between €1m and €20m. These startups
                                typically generate €500k - €5m in ARR.
                            </p>
                        </Item>
                        <Item>
                            <Art>
                                <IconFour />
                            </Art>
                            <h4>Characteristics</h4>
                            <p>
                                Varies from case to case, but important features
                                include validation/growth (i.e. need),
                                differentiation, capital efficiency and market
                                size / trends.
                            </p>
                        </Item>
                    </StyledGrid>
                </Container>
            </Section>
        </>
    );
};

export default thesis;
