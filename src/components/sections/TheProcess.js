import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slide from 'react-reveal/Slide';
import { Section, Container, SectionTitle } from '@styles/global';
import styled from 'styled-components';

const Step = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    counter-increment: section;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
        ${props =>
            props.accent === 'inverse' &&
            `
        
            ${Art} {
                grid-column: 2;
                grid-row: 1;  
                border-right: 0;
                border-left: 1px solid hsla(0, 0%, 74%, 0.3);
                margin-left: -1px;

                &::before {
                    left: -19px;
                }

                &::after {
                    left: -37px;
                }

            }
        `};
    }
`;

const Art = styled.div`
    width: 100%;
    position: relative;
    border-top: 1px solid hsla(0, 0%, 74%, 0.3);

    .gatsby-image-wrapper {
        width: 100%;
    }

    @media (min-width: ${props => props.theme.screen.sm}) {
        border-right: 1px solid hsla(0, 0%, 74%, 0.3);
        border-top: 0;
    }

    @media (min-width: ${props => props.theme.screen.md}) {
        .gatsby-image-wrapper {
            width: 70%;
            margin-left: 3rem;
        }
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        display: block;
        line-height: 36px;
        text-align: center;
        color: var(--accent-color);
        font-weight: 600;
        background-color: var(--secondary-color);
        border-radius: 50%;
        z-index: 99;
    }

    &:before {
        content: counter(section);
        top: -18px;
        right: 0;
        width: 36px;
        height: 36px;
        @media (min-width: ${props => props.theme.screen.sm}) {
            top: 0;
            right: -18px;
        }
    }
    &:after {
        top: -27px;
        right: -9px;
        width: 54px;
        height: 54px;
        opacity: 0.2;
        @media (min-width: ${props => props.theme.screen.sm}) {
            top: -18px;
            right: -36px;
            width: 72px;
            height: 72px;
        }
    }
`;

const Text = styled.div`
    padding: 3rem 0;
    @media (min-width: ${props => props.theme.screen.sm}) {
        padding: 0 3rem;
    }
    p,
    h3 {
        margin-bottom: 1rem;
    }

    .label {
        color: var(--orange);
    }
`;

const Timeline = styled.div``;

export const timelineImage = graphql`
    fragment timelineImage on File {
        childImageSharp {
            fluid(maxWidth: 420, maxHeight: 320) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                step1: file(relativePath: { eq: "step-1.png" }) {
                    ...timelineImage
                }
                step2: file(relativePath: { eq: "step-2.png" }) {
                    ...timelineImage
                }
                step3: file(relativePath: { eq: "step-3.png" }) {
                    ...timelineImage
                }
            }
        `
    );
    return (
        <Section accent='alt'>
            <Container>
                <SectionTitle>
                    <h2>The Process</h2>
                    <p>
                        nFront works with a small group of stand-out companies
                        per year, to enable successful fundraising rounds. The
                        support is full time, typically over 5-10 months. After
                        a 2-4 month preparation stage, investors are invited in
                        from a global deal-sharing network, built over 10 years
                        in VC. At close, nFront co-invests directly alongside
                        new investors.
                    </p>
                </SectionTitle>
                <Timeline>
                    <Step>
                        <Art>
                            <Slide left>
                                <Img
                                    fluid={data.step1.childImageSharp.fluid}
                                    alt=""
                                />
                            </Slide>
                        </Art>
                        <Text>
                            <Slide right>
                                <>
                                    <h3>Identification</h3>
                                    <p class="label">Month 1</p>
                                    <p>
                                        Identify company-specific VC readiness
                                        requirements, including raise timing,
                                        round size, likely valuation, potential
                                        operational changes, challenging
                                        diligence questions, required materials,
                                        and key metrics / benchmarks.
                                    </p>
                                </>
                            </Slide>
                        </Text>
                    </Step>
                    <Step accent="inverse">
                        <Art>
                            <Slide right>
                                <Img
                                    fluid={data.step2.childImageSharp.fluid}
                                    alt=""
                                />
                            </Slide>
                        </Art>
                        <Text>
                            <Slide left>
                                <>
                                    <h3>Preparation</h3>
                                    <p class="label">Month 2-3</p>
                                    <p>
                                        Draft materials customized for the
                                        targeted investor group, including
                                        story, differentiation, pitch deck,
                                        financial/operational models, cap. table
                                        scenario analysis, investor Q&A, answers
                                        to hard questions, and more. Train team
                                        on delivering story.
                                    </p>
                                </>
                            </Slide>
                        </Text>
                    </Step>
                    <Step>
                        <Art>
                            <Slide left>
                                <Img
                                    fluid={data.step3.childImageSharp.fluid}
                                    alt=""
                                />
                            </Slide>
                        </Art>
                        <Text>
                            <Slide right>
                                <>
                                    <h3>Live Process</h3>
                                    <p class="label">Month 4-7</p>
                                    <p>
                                        Identify and share with investors from
                                        deal sharing network of 400+ funds.
                                        Focus on those most likely to add value
                                        beyond capital and present strong terms.
                                        Support with Q&A and superpower the
                                        process. Early term sheet analysis.
                                    </p>
                                </>
                            </Slide>
                        </Text>
                    </Step>
                    <Step accent="inverse">
                        <Art>
                            <Slide right>
                                <Img
                                    fluid={data.step3.childImageSharp.fluid}
                                    alt=""
                                />
                            </Slide>
                        </Art>
                        <Text>
                            <Slide left>
                                <>
                                    <h3>Closing</h3>
                                    <p class="label">Month 8-10</p>
                                    <p>
                                        Provide insight on presented terms,
                                        support with investor / TS decision,
                                        present list of third party diligence
                                        document, help prepare diligence
                                        materials, guide third party DD with
                                        focus on a swift and efficient closing
                                        process.
                                    </p>
                                </>
                            </Slide>
                        </Text>
                    </Step>
                </Timeline>
            </Container>
        </Section>
    );
};
