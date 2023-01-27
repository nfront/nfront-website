import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import {
    Section,
    Container,
    Grid,
    SectionTitle,
    FlexColumn,
    ArtContainer,
    BulletList,
} from '@styles/global';
import Image from '@common/image';
import Link from '@common/link';
import CustomSwiper from '@common/swiper';
import useWindowSize from '@utils/hooks/useWindowSize';
import { useIsHome } from '@utils/hooks/useCheckLocation';
import { breakpointToPxNum } from '@utils/utils';

const Divider = styled.hr`
    align-self: stretch;
`;

const Portfolio = () => {
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
                        url
                        mimeType
                        gatsbyImageData(width: 500)
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
        <Section id="portfolio">
            {isHome ? (
                <PortfolioSlider result={result} />
            ) : (
                <PortfolioGrid result={result} />
            )}
        </Section>
    );
};

const PortfolioSlider = ({ result }) => {
    const { windowSize, isMobile } = useWindowSize();
    const { width: windowWidth } = windowSize;

    const isLaptopSize = windowWidth > breakpointToPxNum('tablet');

    return (
        <>
            <SectionTitle>
                <h2>Recent Transactions</h2>
            </SectionTitle>
            {!isMobile ? (
                <Container>
                    <CustomSwiper row wrap navigation={isLaptopSize}>
                        {result.map((val) => {
                            const {
                                brand,
                                location,
                                logo,
                                cInvestors,
                                description: { description },
                            } = val;
                            return (
                                <SwiperSlide key={brand}>
                                    <ArtContainer
                                        maxHeight="300px"
                                        maxHeightLaptop="400px"
                                        itemBasis="50%"
                                        className={`mb-15-latop ${
                                            isLaptopSize ? 'pr-1' : ''
                                        }`}
                                    >
                                        <Image image={logo} alt={brand} />
                                    </ArtContainer>
                                    <FlexColumn
                                        itemBasis="50%"
                                        className="center-tablet"
                                    >
                                        {isLaptopSize ? (
                                            <h2 className="mb-03">{brand}</h2>
                                        ) : (
                                            <h3 className="mb-03">{brand}</h3>
                                        )}
                                        <p className="label xs-font mb-15">
                                            <span className="bold">HQ:</span>{' '}
                                            {location}
                                        </p>
                                        <BulletList
                                            className={`label xs-font mb-15 ${
                                                isLaptopSize ? '' : ''
                                            }`}
                                        >
                                            <span>{`Lead Investors${
                                                isLaptopSize ? ':' : ''
                                            }`}</span>
                                            <ul>
                                                {cInvestors.map(
                                                    (investor, index) => (
                                                        <li key={index}>
                                                            {investor}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </BulletList>
                                        <p className="small-font margin-laptop">
                                            {description}
                                        </p>
                                    </FlexColumn>
                                </SwiperSlide>
                            );
                        })}
                    </CustomSwiper>
                </Container>
            ) : (
                <Container>
                    {result.map((val, index, { length }) => {
                        const {
                            brand,
                            location,
                            logo,
                            cInvestors,
                            description: { description },
                        } = val;
                        return (
                            <FlexColumn
                                key={brand}
                                alignItems="center"
                                className="center-tablet"
                            >
                                <h3 className="mb-03">{brand}</h3>
                                <p className="label xs-font mb-15 ">
                                    <span className="bold">HQ:</span> {location}
                                </p>
                                <ArtContainer
                                    maxHeight="300px"
                                    maxHeightLaptop="400px"
                                >
                                    <Image image={logo} alt={brand} />
                                </ArtContainer>
                                <BulletList className="label xs-font mb-15">
                                    <span>{`Lead Investors${
                                        isLaptopSize ? ':' : ''
                                    }`}</span>
                                    <ul>
                                        {cInvestors.map((investor, index) => (
                                            <li key={index}>{investor}</li>
                                        ))}
                                    </ul>
                                </BulletList>
                                <p className="small-font">{description}</p>
                                {index !== length - 1 && <Divider />}
                            </FlexColumn>
                        );
                    })}
                </Container>
            )}
        </>
    );
};

// For some reason, adding "display: flex" with "justify-content: center" will cause text to
// nudge when it rotated (flip-card) upon hover, so we use normal divs with padding on each sub-element.
const PortfolioGrid = ({ result }) => {
    const { isMobile } = useWindowSize();

    return (
        <Container>
            <Grid minWidth="320px">
                {result.map((val) => {
                    const {
                        brand,
                        link,
                        icon,
                        description: { description },
                    } = val;
                    return isMobile ? (
                        <FlexColumn
                            gap="2.5rem"
                            alignItems="center"
                            className="grey-border py-15 px-25"
                            key={brand}
                        >
                            <ArtContainer
                                maxWidth="min(70%, 12rem)"
                                maxHeight="8rem"
                                className="mb-0"
                            >
                                <Image image={icon} alt={`${brand} logo`} />
                            </ArtContainer>

                            <p className="small-font center mb-0">
                                {description}
                            </p>
                            <Link className="small-font light-bold" to={link}>
                                {'Learn More'}
                            </Link>
                        </FlexColumn>
                    ) : (
                        <div
                            key={brand}
                            className="grey-border flip-card center-tablet"
                        >
                            <div gap="1rem" className="flip-card-front p-15">
                                <ArtContainer
                                    maxWidth="min(70%, 12rem)"
                                    maxHeight="8rem"
                                    className="mb-0"
                                >
                                    <Image image={icon} alt={`${brand} logo`} />
                                </ArtContainer>
                            </div>

                            <div
                                gap="1rem"
                                className="flip-card-back py-15 px-15"
                            >
                                <Link to={link}>
                                    <h2 className="mb-1">{brand}</h2>
                                    <p className="small-font mb-1">
                                        {description}
                                    </p>
                                    <Link
                                        className="small-font light-bold"
                                        to={link}
                                    >
                                        {'Learn More'}
                                    </Link>
                                </Link>
                                {/* <ReadMore
                                    link={link}
                                    text={description}
                                /> */}
                            </div>
                        </div>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default Portfolio;
