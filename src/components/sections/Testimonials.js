import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from 're-carousel';
import IndicatorDots from '@utils/carousel/indicator-dots';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';

const REVIEW = [
    {
        name: 'Rune Skog, Co-Founder & CEO of Yellowsack',
        image: 'rune-skog.png',
        line1:
            'nFront was instrumental in helping us achieve an oversubscribed Seed round with truly standout investors.',
        line2:
            'Their support helped speed up the process, eliminate risk and secure strong terms.',
    },
    {
        name: 'Iiro Kormi, Co-Founder & CEO of Zadaa',
        image: 'iiro-kormi.png',
        line1:
            'Working with nFront on our Series-A was a value-creating and result-focused experience.',
        line2:
            'Their team dived deep and fully met our goals and expectations. I have no hesitation recommending them to other founders.',
    },
];

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)``;

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

export default () => {
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
        <StyledSection>
            <SectionTitle>
                <h2>Testimonials</h2>
            </SectionTitle>
            <StyledContainer>
                <Carousel auto interval={8000} loop widgets={[IndicatorDots]}>
                    {REVIEW.map(({ name, image, line1, line2 }) => {
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
                                <p>
                                    {line1}
                                    <br />
                                    {line2}
                                </p>
                                <p className="label">{name}</p>
                            </Slide>
                        );
                    })}
                </Carousel>
            </StyledContainer>
        </StyledSection>
    );
};
