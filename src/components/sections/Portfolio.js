import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { device, Section, Container, Grid, SectionTitle } from '@styles/global';
import useWindowSize from '@utils/hooks/useWindowSize';
import { useIsHome } from '@utils/hooks/useCheckLocation';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// import ReadMore from '../../utils/readmore/ReadMore';

import CustomSwiper from '@common/swiper';
import { SwiperSlide } from 'swiper/react';

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)`
`;

const StyledGrid = styled(Grid)`
    .grid-item {
        background: white;
        border: 1px solid var(--border-color);
    }
`;
const StyledContainer = styled(Container)`
    h2 {
        font-size: 1.5rem;
        margin-bottom: 5px;
        @media ${device.laptop} {
            font-size: 2rem;
        }
    }
`;

const Art = styled.div`
    @media ${device.mobileL} {
        flex: 0 1 50%;
    }
    text-align: center;
    .gatsby-image-wrapper img {
        max-height: 300px;
        margin-bottom: 1rem !important;
        @media ${device.laptop} {
            max-height: 400px;
        }
        @media ${device.mobileL} {
            margin-bottom: 0 !important;
        }
    }
`;

const Text = styled.div`
    @media ${device.mobileL} {
        flex: 0 1 50%;
    }

    p {
        font-size: 15px;
        span {
            font-weight: 700;
        }
    }

    p:last-child {
        @media ${device.mobileL} {
            margin-bottom: 0;
        }
    }

    p,
    h2 {
        text-align: center;
        @media ${device.mobileL} {
            text-align: left;
        }
    }

    .label {
        text-align: center;
        @media ${device.mobileL} {
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
    margin-bottom: 1.666rem;
    span {
        font-weight: 700;
    }
    ul {
        list-style-position: inside;
        list-style-type: none;
        @media ${device.mobileL} {
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

const Portfolio = (props) => {
    const { windowSize, isMobile } = useWindowSize();
    const { width: windowWidth } = windowSize;

    const swiperNavigation = windowWidth > device.laptop;

    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioCompanies {
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
                        gatsbyImageData
                    }
                    link
                    cInvestors
                }
            }
        }
    `);
    const result = data.allContentfulPortfolioCompanies.nodes;
    const isHome = useIsHome().isHome;

    return (
        <StyledSection id="portfolio">
            {isHome ? (
                <>
                    <SectionTitle>
                        <h2>Recent Transactions</h2>
                    </SectionTitle>
                    {!isMobile ? (
                        <StyledContainer>
                            <CustomSwiper row navigation={swiperNavigation}>
                                {result.map((val) => {
                                    const {
                                        brand,
                                        location,
                                        logo,
                                        cInvestors,
                                    } = val;
                                    const { description } = val.description;
                                    const image = getImage(logo);
                                    return (
                                        <SwiperSlide>
                                            <Art>
                                                <GatsbyImage
                                                    image={image}
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
                                        </SwiperSlide>
                                    );
                                })}
                            </CustomSwiper>
                        </StyledContainer>
                    ) : (
                        <StyledContainer>
                            {result.map((val) => {
                                const { brand, location, logo, cInvestors } =
                                    val;
                                const { description } = val.description;
                                const image = getImage(logo);
                                return (
                                    <>
                                        <Text>
                                            <h2>{brand}</h2>
                                            <p className="label">
                                                <span>HQ:</span> {location}
                                            </p>
                                            <Art>
                                                <GatsbyImage
                                                    image={image}
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
                    <StyledGrid>
                        {result.map((val) => {
                            const { brand, link, icon } = val;
                            const { description } = val.description;
                            return (
                                <>
                                    {isMobile ? (
                                        <div className="flip-card grid-item">
                                            <div className="flip-card-front">
                                                <img
                                                    src={icon.file.url}
                                                    alt="Avatar"
                                                    className="avatar"
                                                    style={{
                                                        width: '40%',
                                                        height: '40%',
                                                        objectFit: 'contain',
                                                    }}
                                                />

                                                <Text>
                                                    <a href={link}>
                                                        <p>{description}</p>
                                                        <a href={link}>
                                                            {'Learn More'}
                                                        </a>
                                                    </a>
                                                </Text>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flip-card grid-item">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
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

                                                <div className="flip-card-back">
                                                    <Text>
                                                        <a href={link}>
                                                            <h2>{brand}</h2>
                                                            <p>{description}</p>
                                                            <span>
                                                                {'Learn More'}
                                                            </span>
                                                        </a>{' '}
                                                        {/* <ReadMore
                                                            link={link}
                                                            text={description}
                                                        /> */}
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </StyledGrid>
                </Container>
            )}
        </StyledSection>
    );
};

export default Portfolio;
