import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Carousel from 're-carousel';

// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';

// import IndicatorDots from '@utils/carousel/indicator-dots';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';
import useWindowSize from '@utils/hooks/useWindowSize';

const REVIEW = [
    {
        name: 'Rune Skog, Co-Founder & CEO of Yellowsack',
        image: 'rune-skog.png',
        line1: 'nFront was instrumental in helping us achieve an oversubscribed Seed round with truly standout investors.',
        line2: 'Their support helped speed up the process, eliminate risk and secure strong terms.',
    },
    {
        name: 'Iiro Kormi, Co-Founder & CEO of Zadaa',
        image: 'iiro-kormi.png',
        line1: 'Working with nFront on our Series-A was a value-creating and result-focused experience.',
        line2: 'Their team dived deep and fully met our goals and expectations. I have no hesitation recommending them to other founders.',
    },
];

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)`
    padding-top: 3rem;
`;

const StyledContainer = styled(Container)`
    /* height: 500px;

    @media (min-width: ${(props) => props.theme.screen.sm}) {
        height: 400px;
    } */
`;

const Art = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    .gatsby-image-wrapper {
        display: inline-block;
    }
    img {
        border-radius: 50%;
    }
`;

const CustomSwiper = styled(Swiper)`
    .swiper-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        padding: 0 4rem 2rem;
        // height: 100%;
        @media (min-width: ${(props) => props.theme.screen.desktop}) {
            padding: 4rem 0;
        }
    }
`;

const swiperSettings = {
    modules: [Pagination, A11y, Autoplay],
    // navigation: true,
    a11y: true,
    pagination: true,
    // scrollbar: true,
    rewind: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 500,
    slidesPerView: 1,
    grabCursor: true,
};

const Testimonials = () => {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { sourceInstanceName: { eq: "testimonials" } }
                ) {
                    edges {
                        node {
                            relativePath
                            childImageSharp {
                                gatsbyImageData(layout: FIXED, width: 96)
                            }
                        }
                    }
                }
            }
        `
    );

    const windowWidth = useWindowSize().width;
    const isMobile = windowWidth <= 1199;

    return (
        <StyledSection>
            <SectionTitle>
                <h2>Testimonials</h2>
            </SectionTitle>
            <StyledContainer>
                <CustomSwiper {...swiperSettings}>
                    {REVIEW.map(({ name, image, line1, line2 }) => {
                        const img = data.placeholderImage.edges.find(
                            ({ node }) => node.relativePath === image
                        ).node;
                        const pluginImage = getImage(img);
                        return (
                            <SwiperSlide>
                                <Art>
                                    <GatsbyImage
                                        image={pluginImage}
                                        alt={name}
                                    />
                                </Art>
                                <p>
                                    {line1}
                                    <br />
                                    {line2}
                                </p>
                                <p className="label">{name}</p>
                            </SwiperSlide>
                        );
                    })}
                </CustomSwiper>
            </StyledContainer>
        </StyledSection>
    );
};

export default Testimonials;
