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
    /* height: 400px; */

    @media (min-width: ${props => props.theme.screen.xs}) {
        height: 500px;
    }
    /* @media (min-width: ${props => props.theme.screen.md}) {
        height: 500px;
    } */

    h2 {
        font-size: 1.5rem;
        margin-bottom: 5px;
        @media (min-width: ${props => props.theme.screen.md}) {
            font-size: 2rem;
        }
    }
`;

const Slide = styled.div`
    display: flex;
    /* display: flex; */
    /* grid-template-columns: 2fr 2fr; */
    flex-flow: row nowrap;
    align-items: center;
    /* align-content: center; */
    /* overflow: hidden; */
    margin: 0 8%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    /* height: 100%; */
`;

const Art = styled.div`
    @media (min-width: ${props => props.theme.screen.xs}) {
        flex: 0 1 50%;
    }
    text-align: center;
    img {
        max-height: 300px;
        @media (min-width: ${props => props.theme.screen.md}) {
            max-height: 400px;
        }
        @media (min-width: ${props => props.theme.screen.xs}) {
            margin-bottom: 0;
        }
    }
`;

const Text = styled.div`
    @media (min-width: ${props => props.theme.screen.xs}) {
        flex: 0 1 50%;
    }

    p {
        font-size: 16px;
        span {
            font-weight: 700;
        }
    }

    p:last-child {
        @media (min-width: ${props => props.theme.screen.xs}) {
            margin-bottom: 0;
        }
    }

    p,
    h2 {
        text-align: center;
        @media (min-width: ${props => props.theme.screen.xs}) {
            text-align: left;
        }
    }

    .label {
        text-align: center;
        @media (min-width: ${props => props.theme.screen.xs}) {
            text-align: left;
        }
        font-size: 12px;
    }
`;

const Divider = styled.hr`
    &:last-child {
        display: none;
    }
`;

const FundList = styled.div`
    @media (min-width: ${props => props.theme.screen.xs}) {
        /* margin-top: -1.666rem; */
    }
    margin-bottom: 1.666rem;
    span {
        font-weight: 700;
    }
    ul {
        list-style-position: inside;
        list-style-type: none;
        @media (min-width: ${props => props.theme.screen.xs}) {
            list-style-type: inherit;
        }
        padding: 0;
        margin: 0;
        li {
            padding: 0rem;
            margin: 0rem;
        }
    }
`;

export default () => {
    const isMobile =
        typeof window !== 'undefined' && useWindowWidth() <= 575; /** */
    const data = useStaticQuery(graphql`
        query {
            allContentfulCaseStudies {
                nodes {
                    brand
                    location
                    description {
                        description
                    }
                    logo {
                        fluid(maxHeight: 500) {
                            src
                        }
                    }
                    link
                    cInvestors
                }
            }
        }
    `);
    const result = data.allContentfulCaseStudies.nodes;
    return (
        <StyledSection id="portfolio">
            <SectionTitle>
                <h2>Recent Portfolio Companies</h2>
            </SectionTitle>
            <StyledContainer>
                {!isMobile ? (
                    <Carousel
                        auto
                        loop
                        interval={7000}
                        widgets={[Buttons, IndicatorDots]}
                    >
                        {result.map(val => {
                            const { brand, location, logo, cInvestors } = val;
                            const { description } = val.description;
                            return (
                                <Slide>
                                    <Art>
                                        <img src={logo.fluid.src} alt={brand} />
                                    </Art>
                                    <Text>
                                        <h2>{brand}</h2>
                                        <p className="label">
                                            <span>HQ:</span> {location}
                                        </p>
                                        <FundList className="label">
                                            <span>Lead Investors:</span>
                                            <ul>
                                                {cInvestors.map((investor, index) => (
                                                    <li key={index}>
                                                        {investor}
                                                    </li>
                                                ))}
                                            </ul>
                                        </FundList>
                                        <p>{description}</p>
                                    </Text>
                                </Slide>
                            );
                        })}
                    </Carousel>
                ) : (
                    <>
                        {result.map(val => {
                            const { brand, location, logo, cInvestors } = val;
                            const { description } = val.description;
                            return (
                                <>
                                    <Text>
                                        <h2>{brand}</h2>
                                        <p className="label">
                                            <span>HQ:</span> {location}
                                        </p>
                                        <Art>
                                            <img
                                                src={logo.fluid.src}
                                                alt={brand}
                                            />
                                        </Art>

                                        <p>{description}</p>
                                        <FundList className="label">
                                            <span>Lead Investors:</span>
                                            <ul>
                                                {cInvestors.map((investor, index) => (
                                                    <li key={index}>
                                                        {investor}
                                                    </li>
                                                ))}
                                            </ul>
                                        </FundList>
                                    </Text>
                                    <Divider />
                                </>
                            );
                        })}
                    </>
                )}
            </StyledContainer>
        </StyledSection>
    );
};

/** 
 *                                      
<Link to={link}>
    <button className="button small">
        View Case Study
    </button>
</Link>
 */
