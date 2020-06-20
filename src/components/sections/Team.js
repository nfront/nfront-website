import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container, Grid, SectionTitle } from '@styles/global';
import Wave from '@utils/divider/wave';

const PartnerGrid = styled(Grid)`
    /* margin-top: var(--spacer); */
    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(2, 1fr);
        /* margin-top: 3rem; */
    }
`;

const Divider = styled.hr`
    @media (min-width: ${props => props.theme.screen.md}) {
        border: 0;
        border-top: 1px solid rgba(225, 225, 225, 0.2);
        margin: 3rem auto;
    }
    border: 0;
    border-top: 0px;
`;

const Bio = styled.div`
    ${props =>
        props.fluid &&
        `
        grid-column-start: span 2;
    `};

    h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    h3 {
        font-size: 100%;
        font-weight: 500;
    }

    p {
        margin-bottom: 1rem;
        &:last-child {
            margin-bottom: 0rem;
        }
    }
`;

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "magnus.jpg" }) {
                    childImageSharp {
                        fixed(quality: 100, width: 300, height: 300) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    );
    return (
        <>
            <Section alt>
                <Container>
                    <SectionTitle>
                        <h2>nFront Team</h2>
                        <p>
                            nFront's team is focused on identifying a small
                            group of exceptional companies per year. Diving in
                            full-time, we work hard to provide the stand-out
                            founders of these companies with operational
                            support, capital and exceptional co-investors.
                        </p>
                    </SectionTitle>
                    <Divider></Divider>
                    <Grid>
                        <Img
                            className="rounded"
                            fixed={data.file.childImageSharp.fixed}
                            alt="Magnus Gaarder"
                        />
                        <Bio fluid>
                            <h2>Magnus Gaarder</h2>
                            <h3>Founding Partner</h3>
                            <p>
                                Previously an Investment Manager at VC fund
                                Nauta Capital in London. Magnus helped establish
                                the fund’s London presence and was responsible
                                for investments in Northern Europe.
                            </p>
                            <p>
                                Prior to Nauta, Magnus was a member of M&A
                                boutique Portico Capital's European arm and an
                                M&A-focused investment banker in New York.
                            </p>
                            <p>
                                Magnus has degrees in computer science and
                                finance from UPenn and NTNU, specialized in
                                machine learning and financial engineering.
                            </p>
                        </Bio>
                    </Grid>
                    <Divider></Divider>
                    <PartnerGrid>
                        <Bio>
                            <h2 class="mb-3">Investment Analysts</h2>
                            <p>
                                Analysts at nFront have backgrounds within
                                entrepreneurship, operations, investment banking
                                and consulting. They cover critical tasks such
                                as investment screening, market analysis,
                                co-investor outreach and materials for portfolio
                                companies. The analysts are nFront’s backbone,
                                united by a strong passion for technology and an
                                ambition to make a difference by bringing
                                support and capital to exceptional founders.
                            </p>
                        </Bio>
                        <Bio>
                            <h2 class="mb-3">Portfolio Mentors</h2>
                            <p>
                                Our team members have over the years built one
                                of Europe’s largest deal sharing and expert
                                networks. Mentors are selected individuals from
                                this network and include leading VCs, technology
                                experts and entrepreneurs. These passionate
                                people provide support to our portfolio
                                companies, share deal flow with our team members
                                and contribute with expert advice on new
                                investment prospects.
                            </p>
                        </Bio>
                    </PartnerGrid>
                </Container>
            </Section>
            <Wave shade />
        </>
    );
};
