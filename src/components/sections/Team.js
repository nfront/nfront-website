import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@utils/externalLink';
import { Section, Container, SectionTitle } from '@styles/global';
import Strapbox from '@common/strapbox';

const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    grid-gap: 24px;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }
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
            <Strapbox>
                <h2 className="text-uppercase mb-0">NFront Team</h2>
            </Strapbox>
            <Section id="team" alt>
                <Container style={{ position: 'relative' }}>
                    <TeamGrid>
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
                    </TeamGrid>
                    <hr />
                    <TeamGrid>
                        <Bio>
                            <h2>Team 1</h2>
                            <h3>Partner</h3>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </Bio>
                        <Bio>
                            <h2>Team 2</h2>
                            <h3>Partner</h3>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </Bio>
                        <Bio>
                            <h2>Team 3</h2>
                            <h3>Partner</h3>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </Bio>
                    </TeamGrid>
                </Container>
            </Section>
        </>
    );
};
