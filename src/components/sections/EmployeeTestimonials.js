import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';
import { SwiperSlide } from 'swiper/react';

import CustomSwiper from '@common/swiper';
import Image from '@common/image';
import { device, SectionTitle, Container, Section, ArtContainer } from '@styles/global';
import useWindowSize from '@utils/hooks/useWindowSize';

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)`
    padding-bottom: 3rem;
`;

const StyledContainer = styled(Container)`
    .swiper-slide-active .tooltip {
        background-color: var(--primary-color);
        color: white;
        position: relative;
        transition: all 0.5s;
    }
    .swiper-slide-active .tooltip::after {
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid var(--primary-color);
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        transform: translate(-50%, -0%);
    }
    .tooltip {
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 2rem;
        @media ${device.laptop} {
            font-size: 14px;
        }
    }
`;

export default function EmployeeTestimonials() {
    const { windowSize, isMobile } = useWindowSize();
    const { width: windowWidth } = windowSize;

    const swiperSettings = {
        slidesPerView: windowWidth > device.laptopL ? 3 : 1,
        loopAdditionalSlides: 5,
        centeredSlides: true
    };

    const data = useStaticQuery(graphql`
        query {
            allContentfulEmployeeTestimonials {
                nodes {
                    title
                    tooltip {
                        childMarkdownRemark {
                            excerpt(pruneLength: 200)
                        }
                    }
                    candidate
                    avatar {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const results = data.allContentfulEmployeeTestimonials.nodes;

    return (
        <StyledSection>
            <SectionTitle>
                <h2>Testimonials</h2>
                <p>Feedback from previous and existing colleagues</p>
            </SectionTitle>
            <StyledContainer>
                <CustomSwiper spacing={3} settings={swiperSettings}>
                    {results.map(({ title, candidate, avatar, tooltip }) => {
                        const image = getImage(avatar);
                        return (
                            <SwiperSlide key={title}>
                                <p className="tooltip">
                                    {' '}
                                    {tooltip.childMarkdownRemark.excerpt}
                                </p>
                                <ArtContainer>
                                    <Image
                                        image={image}
                                        alt={candidate}
                                        className="circled"
                                    />
                                </ArtContainer>
                                <p className="label">{candidate}</p>
                            </SwiperSlide>
                        );
                    })}
                </CustomSwiper>
            </StyledContainer>
        </StyledSection>
    );
}
