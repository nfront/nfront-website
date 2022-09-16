import React from 'react';
import { SectionTitle, Container } from '@styles/global';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import useWindowSize from '@utils/hooks/useWindowSize';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function EmployeeTestimonials() {
    const StyledContainer = styled(Container)`
        padding: 0 2.5rem;
        .slick-center .tooltip {
            background-color: var(--primary-color);
            color: white;
            position: relative;
            transition: all 0.5s;
        }
        .slick-center .tooltip::after {
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 15px solid  var(--primary-color);
            content: "";
            position: absolute;
            bottom: -15px;
            left: 50%;
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            /* border-top: 15px solid var9--white); */
            transform: translate(-50%,-0%);
        }
        .tooltip {
            border-radius: 10px;
            padding: 1rem;
            margin-bottom: 2rem;
            @media (min-width: ${props => props.theme.screen.lg}) {
                font-size: 14px;
            }
        }
        // height: 500px;
        p {
            margin: 0;
        }
        @media (min-width: ${props => props.theme.screen.md}) {
            height: 350px;
        }
        @media (min-width: ${props => props.theme.screen.lg}) {
            height: 500px;
        }
    `;
    const SectionContainer = styled(Container)`
        padding-top: 6rem;
    `;

    const Slide = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        height: 100%;
        @media (min-width: ${props => props.theme.screen.sm}) {
            padding: 0 2rem;
        }
    `;

    const Art = styled.div`
        width: 100%;
        margin-bottom: 1rem;

        display: flex;
        justify-content: center;

        img {
            border-radius: 50%;
        }
    `;
    const windowWidth = useWindowSize().width;
    const isMobile = windowWidth <= 1199;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '10px',
        className: 'center',
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
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
        }
    `);

    const results = data.allContentfulEmployeeTestimonials.nodes;
    return (
        <SectionContainer>
            <SectionTitle>
                <h2>Testimonials</h2>
                <p>Feedback from previous and existing colleagues</p>
            </SectionTitle>
            <StyledContainer>
                <Slider {...settings}>
                    {results.map(({ title, candidate, avatar, tooltip }) => {
                        const image = getImage(avatar)
                        return (
                            <Slide key={title}>
                                <p className="tooltip">
                                    {' '}
                                    {tooltip.childMarkdownRemark.excerpt}
                                </p>
                                <Art>
                                    <GatsbyImage
                                        image={image}
                                        alt={candidate}
                                    />
                                </Art>
                                <p className="label">{candidate}</p>
                                <p className="label">&nbsp;</p>
                            </Slide>
                        );
                    })}
                </Slider>
            </StyledContainer>
        </SectionContainer>
    );
}
