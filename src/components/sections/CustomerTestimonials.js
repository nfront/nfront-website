import React from 'react';
import { Section, SectionTitle, Container } from '@styles/global';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from 're-carousel';
import IndicatorDots from '@utils/carousel/indicator-dots';
import Img from 'gatsby-image';
import styled from 'styled-components';
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

        @media (min-width: ${props => props.theme.screen.sm}) {
            padding: 0 3rem;
        }
    `;

    const Art = styled.div`
        width: 100%;
        margin-bottom: 1rem;
        img {
            border-radius: 50%;
        }
    `;
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
                <Carousel auto interval={8000} loop widgets={[IndicatorDots]}>
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
                                <p>{title}</p>
                                <p className="label">{candidate}</p>
                            </Slide>
                        );
                    })}
                </Carousel>
            </StyledContainer>
        </Section>
    );
}
