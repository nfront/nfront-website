import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from 're-carousel';
import Buttons from '@utils/carousel/button';
import IndicatorDots from '@utils/carousel/indicator-dots';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';
import { useWindowWidth } from '@utils/hooks/useIsMobile';

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)``;

const StyledContainer = styled(Container)`
    padding: 0 2.5rem;

    @media (min-width: ${props => props.theme.screen.sm}) {
        height: 400px;
    }
    @media (min-width: ${props => props.theme.screen.md}) {
        height: 500px;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 5px;
        @media (min-width: ${props => props.theme.screen.md}) {
            font-size: 2rem;
        }
    }
`;

const Slide = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    justify-items: center;
    overflow: hidden;
`;

const Text = styled.div`
    p {
        font-size: 16px;
    }
    .label {
        font-size: 12px;
    }
`;

const Art = styled.div`
    width: 100%;
`;

export default () => {
    const isMobile =
        typeof window !== 'undefined' && useWindowWidth() <= 575; /** */
    const data = useStaticQuery(graphql`
        query {
            allContentfulCaseStudies(filter: { type: { in: "Development" } }) {
                nodes {
                    brand
                    location
                    description {
                        description
                    }
                    logo {
                        fluid(maxHeight: 500) {
                            srcWebp
                        }
                    }
                    link
                }
            }
        }
    `);
    const result = data.allContentfulCaseStudies.nodes;
    return (
        <StyledSection id="portfolio">
            <SectionTitle>
                <h2>Case Studies</h2>
            </SectionTitle>
            <StyledContainer>
                {!isMobile ? (
                    <Carousel auto loop widgets={[Buttons, IndicatorDots]}>
                        {result.map(val => {
                            const { brand, location, logo } = val;
                            const { description } = val.description;
                            return (
                                <Slide>
                                    <Art>
                                        <img
                                            src={logo.fluid.srcWebp}
                                            alt={brand}
                                        />
                                    </Art>
                                    <Text>
                                        <h2>{brand}</h2>
                                        <p className="label">
                                            Location: {location}
                                        </p>
                                        <p>{description}</p>
                                    </Text>
                                </Slide>
                            );
                        })}
                    </Carousel>
                ) : (
                    <>
                        {result.map(val => {
                            const { brand, location, logo } = val;
                            const { description } = val.description;
                            return (
                                <>
                                    <Text>
                                        <h2>{brand}</h2>
                                        <p className="label">
                                            Location: {location}
                                        </p>
                                        <p>{description}</p>
                                    </Text>
                                    <Art>
                                        <img
                                            src={logo.fluid.srcWebp}
                                            alt={brand}
                                        />
                                    </Art>
                                    <hr />
                                </>
                            );
                        })}
                    </>
                )}
            </StyledContainer>
        </StyledSection>
    );
};
