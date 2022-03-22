import React from 'react';
import { Section, SectionTitle, Container } from '@styles/global';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Section, Container, SectionTitle } from '@styles/global';
export default function CustomerTestimonials() {
    const StyledContainer = styled(Container)`
        padding: 0 2.5rem;
        height: 500px;

        @media (min-width: ${props => props.theme.screen.sm}) {
            height: 400px;
        }
    `;

    const Slide = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        height: 100%;
        p {
            margin: 0;
        }
        @media (min-width: ${props => props.theme.screen.sm}) {
            padding: 0 3rem;
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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const data = useStaticQuery(graphql`
        query {
            allContentfulCustomerTestimonials {
                nodes {
                    title
                    # tooltip
                    candidate
                    avatar {
                        fluid(quality: 100) {
                            src
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulCustomerTestimonials.nodes;
    console.log(results);
    return (
        <Section>
            <SectionTitle>
                <h2>Testimonials</h2>
                <p>Few words from candidates</p>
            </SectionTitle>
            <StyledContainer>
                <Slider {...settings}>
                    {results.map(({ title, candidate, avatar }) => {
                        return (
                            <Slide>
                                {/* <p>{tooltip}</p> */}
                                <Art>
                                    <img
                                        src={avatar.fluid.src}
                                        alt={candidate}
                                    />
                                </Art>
                                <p className="label">{candidate}</p>
                                <p className="label">{title}</p>
                            </Slide>
                        );
                    })}
                </Slider>
            </StyledContainer>
        </Section>
    );
}
