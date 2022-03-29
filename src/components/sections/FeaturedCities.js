import React from 'react';
import styled from 'styled-components';
import {
    Section,
    Container,
    Grid,
    SectionTitle,
    Overlay,
    OverlayText,
} from '@styles/global';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import BackgroundImage from 'gatsby-background-image';
const GRID = styled(Grid)`
    .grid-item {
        background: white;
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }
    .gatsby-image-wrapper {
        min-height: 30vh !important;
    }
`;
const Text = styled.div`
    padding: 1rem;
    @media (min-width: ${props => props.theme.screen.md}) {
        // min-height: 300px;
    }

    h3 {
        font-weight: 500;
        margin-bottom: 0.4rem;
    }
    h3,
    p {
        color: white;
    }
    .label {
        font-weight: 500;
    }

    p:not(.label) {
        font-size: 16px;
    }
`;

export default function FeaturedCities() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCities {
                nodes {
                    title
                    totalJobs
                    featuredImage {
                        fluid(quality: 100) {
                            src
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulCities.nodes;
    return (
        <Section>
            <Container>
                <SectionTitle>
                    <h2>Featured Cities</h2>
                    <p>20+ Featured Cities Added Jobs</p>
                </SectionTitle>
            </Container>
            <Container>
                <GRID>
                    {results.map(val => {
                        const { title, totalJobs, featuredImage } = val;

                        return (
                            <div className="grid-item" key={title}>
                                <BackgroundImage
                                    fluid={featuredImage.fluid}
                                    style={{
                                        backgroundSize: `cover`,
                                        backgroundPosition: `center center`,
                                        display: `flex`,
                                        alignItems: `center`,
                                    }}
                                >
                                    <Overlay />
                                    <OverlayText>
                                        <Text>
                                            <Fade left>
                                                <h3>{title}</h3>
                                                <p>
                                                    {totalJobs} Open Positions
                                                </p>
                                            </Fade>
                                        </Text>
                                    </OverlayText>
                                </BackgroundImage>
                            </div>
                        );
                    })}
                </GRID>
            </Container>
        </Section>
    );
}
