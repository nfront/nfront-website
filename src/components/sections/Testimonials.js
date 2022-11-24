import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';
import CustomSwiper from '@common/swiper';
import { SwiperSlide } from 'swiper/react';

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

    return (
        <Section>
            <SectionTitle>
                <h2>Testimonials</h2>
            </SectionTitle>
            <Container>
                <CustomSwiper>
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
            </Container>
        </Section>
    );
};

export default Testimonials;
