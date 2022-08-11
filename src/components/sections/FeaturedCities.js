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
import Fade from 'react-reveal/Fade';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const GRID = styled(Grid)`
    .grid-item {
        background: white;
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }
    .gatsby-image-wrapper {
        min-height: 30vh !important;
        img {
            position: absolute !important;
        }
    }
`;
const Text = styled(OverlayText)`
    padding: 1rem;
    @media (min-width: ${(props) => props.theme.screen.md}) {
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

export default function FeaturedCities({ cities, getPositionCount }) {
    return (
        <Section>
            <Container>
                <SectionTitle>
                    <h2>Featured Cities</h2>
                    <p>Openings across our {cities.length} locations</p>
                </SectionTitle>
            </Container>
            <Container>
                <GRID>
                    {cities.map((city) => {
                        const { title, featuredImage, slug } = city;
                        const pluginImage = getImage(featuredImage);
                        return (
                            <div style={{ display: 'grid' }} key={title}>
                                <GatsbyImage
                                    image={pluginImage}
                                    style={{
                                        gridArea: '1/1',
                                        // display: 'flex',
                                        // You can set a maximum height for the image, if you wish.
                                        // maxHeight: 600,
                                    }}
                                    // style={{
                                    //     backgroundSize: `cover`,
                                    //     backgroundPosition: `center center`,
                                    //     display: `flex`,
                                    //     alignItems: `center`,
                                    // }}
                                />
                                <Overlay />
                                <Text>
                                    <Fade left>
                                        <h3>{title}</h3>
                                        <p>
                                            {getPositionCount(slug, 'city')}{' '}
                                            Open Positions
                                        </p>
                                    </Fade>
                                </Text>
                            </div>
                        );
                    })}
                </GRID>
            </Container>
        </Section>
    );
}
