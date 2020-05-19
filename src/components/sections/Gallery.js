import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)``;

const GRID = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    transition: transform 0.3s ease-in-out;

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }

    .gallery-item {
        background: white;
        border: 1px solid #e7eaf3;
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }
`;

const Text = styled.div`
    padding: 1rem;

    h3 {
        font-size: 110%;
        /* color: var(--primary-color) !important; */
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    p {
        font-size: 16px;
        margin-bottom: 0;
    }
    .label {
        font-size: 12px;
    }
`;

const Art = styled.div`
    img {
        margin-bottom: 0;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
    }
`;

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulGallery {
                nodes {
                    image {
                        fluid(quality: 100) {
                            src
                        }
                    }
                    title
                    description {
                        description
                    }
                }
            }
        }
    `);
    const result = data.allContentfulGallery.nodes;
    return (
        <StyledSection>
            <SectionTitle>
                <h2>Gallery</h2>
            </SectionTitle>
            <Container>
                <GRID>
                    {result.map(val => {
                        const { image, title } = val;
                        const { description } = val.description;
                        return (
                            <div class="gallery-item">
                                <Art>
                                    <img src={image.fluid.src} alt={title} />
                                </Art>
                                <Text>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </Text>
                            </div>
                        );
                    })}
                </GRID>
            </Container>
        </StyledSection>
    );
};
