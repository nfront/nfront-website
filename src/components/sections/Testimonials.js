import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from 're-carousel';
import Buttons from '@utils/carousel/button';
import IndicatorDots from '@utils/carousel/indicator-dots';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';

const REVIEW = [
    {
        name: 'Alessandra Sollberger',
        image: 'alessandra-sollberger.jpg',
        text:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
        name: 'Andreas Hall',
        image: 'andreas-hall.jpg',
        text:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
        name: 'Vivian Chan',
        image: 'vivian-chan.jpg',
        text:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
];

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)``;

const StyledContainer = styled(Container)`
    padding: 0 2.5rem;
    height: 400px;

    @media (min-width: ${props => props.theme.screen.sm}) {
        height: 300px;
    }
`;

const Slide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.screen.sm}) {
        padding: 0 3rem;
    }
`;

const Text = styled.div``;

const Art = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    img {
        border-radius: 50%;
    }
`;

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { sourceInstanceName: { eq: "team" } }
                ) {
                    edges {
                        node {
                            relativePath
                            childImageSharp {
                                fixed(quality: 100, width: 96) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    return (
        <StyledSection shade>
            <SectionTitle>
                <h2>Testimonials</h2>
            </SectionTitle>
            <StyledContainer>
                <Carousel auto loop widgets={[IndicatorDots]}>
                    {REVIEW.map(({ name, image, text }) => {
                        const img = data.placeholderImage.edges.find(
                            ({ node }) => node.relativePath === image
                        ).node;
                        return (
                            <Slide>
                                <Art>
                                    <Img
                                        fixed={img.childImageSharp.fixed}
                                        alt={name}
                                    />
                                </Art>
                                <p>{text}</p>
                                <label>{name}</label>
                            </Slide>
                        );
                    })}
                </Carousel>
            </StyledContainer>
        </StyledSection>
    );
};
