import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from 're-carousel';
import Buttons from '@utils/carousel/button';
import IndicatorDots from '@utils/carousel/indicator-dots';
import styled from 'styled-components';
import { Section, Container, Grid } from '@styles/global';
import useWindowSize from '@utils/hooks/useWindowSize';
import { useIsHome } from '@utils/hooks/useIsHome';
import ReadMore from '../../utils/readmore/ReadMore';

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)``;
const GRID = styled(Grid)`
    .grid-item {
        background: white;
        border: 1px solid var(--border-color);
    }
`;
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
    flex-flow: row nowrap;
    align-items: center;
    margin: 0 8%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
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
    const windowWidth = useWindowSize().width;
    const isMobile = windowWidth <= 575;
    const data = useStaticQuery(graphql`
        query {
            allContentfulCaseStudies {
                nodes {
                    brand
                    location
                    description {
                        description
                    }
                    icon {
                        file {
                            url
                        }
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
    const isHome = useIsHome().isHome;

    return (
        <StyledSection id="portfolio">
            {isHome ? (
                <>
                    {!isMobile ? (
                        <StyledContainer>
                            <Carousel
                                auto
                                loop
                                interval={7000}
                                widgets={[Buttons, IndicatorDots]}
                            >
                                {result.map(val => {
                                    const {
                                        brand,
                                        location,
                                        logo,
                                        cInvestors,
                                    } = val;
                                    const { description } = val.description;
                                    return (
                                        <Slide>
                                            <Art>
                                                <img
                                                    src={logo.fluid.src}
                                                    alt={brand}
                                                />
                                            </Art>
                                            <Text>
                                                <h2>{brand}</h2>
                                                <p className="label">
                                                    <span>HQ:</span> {location}
                                                </p>
                                                <FundList className="label">
                                                    <span>Lead Investors:</span>
                                                    <ul>
                                                        {cInvestors.map(
                                                            (
                                                                investor,
                                                                index
                                                            ) => (
                                                                <li key={index}>
                                                                    {investor}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </FundList>
                                                <p>{description}</p>
                                            </Text>
                                        </Slide>
                                    );
                                })}
                            </Carousel>
                        </StyledContainer>
                    ) : (
                        <StyledContainer>
                            {result.map(val => {
                                const {
                                    brand,
                                    location,
                                    logo,
                                    cInvestors,
                                } = val;
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
                                            <FundList className="label">
                                                <span>Lead Investors:</span>
                                                <ul>
                                                    {cInvestors.map(
                                                        (investor, index) => (
                                                            <li key={index}>
                                                                {investor}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </FundList>
                                            <p>{description}</p>
                                        </Text>
                                        <Divider />
                                    </>
                                );
                            })}
                        </StyledContainer>
                    )}
                </>
            ) : (
                <Container>
                    <GRID>
                        {result.map(val => {
                            const { brand, link, icon } = val;
                            console.log(val);
                            const { description } = val.description;
                            return (
                                <>
                                    {isMobile ? (
                                        <div class="flip-card grid-item">
                                            <div class="flip-card-front">
                                                <img
                                                    src={icon.file.url}
                                                    alt="Avatar"
                                                    style={{
                                                        width: '50%',
                                                        height: '50%',
                                                        objectFit: 'contain',
                                                    }}
                                                />
                                                <Text>
                                                    <ReadMore
                                                        link={link}
                                                        text={description}
                                                    />
                                                </Text>
                                            </div>
                                        </div>
                                    ) : (
                                        <div class="flip-card grid-item">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img
                                                        src={icon.file.url}
                                                        alt="Avatar"
                                                        style={{
                                                            width: '50%',
                                                            height: '50%',
                                                            objectFit:
                                                                'contain',
                                                        }}
                                                    />
                                                </div>
                                                <div class="flip-card-back">
                                                    <Text>
                                                        <h2>{brand}</h2>
                                                        <ReadMore
                                                            link={link}
                                                            text={description}
                                                        />
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </GRID>
                </Container>
            )}
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
