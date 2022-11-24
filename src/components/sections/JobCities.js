import React from 'react';
import styled from 'styled-components';
import {
    Section,
    Container,
    Grid,
    SectionTitle,
    Overlay,
    OverlayText,
    BoxText,
    GridItem,
    BgImage,
    Shading
} from '@styles/global';
import Fade from '@common/fade';
import { getImage } from 'gatsby-plugin-image';

// const StyledGrid = styled(Grid)`
//     .grid-item {
//         background: white;
//         border: 1px transparent var(--border-color);
//         border-radius: 0.375rem;
//         box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
//     }
//     .gatsby-image-wrapper {
//         min-height: 30vh !important;
//     }
// `;

// const Text = styled(OverlayText)`
//     padding: 1rem;
//     @media (min-width: ${(props) => props.theme.screen.md}) {
//         // min-height: 300px;
//     }

//     h3 {
//         font-weight: 500;
//         margin-bottom: 0.4rem;
//     }
//     h3,
//     p {
//         color: white;
//     }
//     .label {
//         font-weight: 500;
//     }

//     p:not(.label) {
//         font-size: 16px;
//     }
// `;

export default function FeaturedCities({ cities, getPositionCount }) {
    return (
        <Section alt>
            <SectionTitle>
                <h2>Featured Cities</h2>
                <p>Openings across our {cities.length} locations</p>
            </SectionTitle>
            <Container>
                <Grid>
                    {cities.map((city) => {
                        const { title, featuredImage, slug } = city;
                        const pluginImage = getImage(featuredImage);
                        return (
                            <GridItem key={title} className="rounded">
                                <Overlay height="280px">
                                    <Shading />
                                    <BgImage
                                        image={pluginImage}
                                        alt={title}
                                    />
                                    <OverlayText>
                                        <Fade left>
                                            <BoxText noArt white>
                                                <h3>{title}</h3>
                                                <p>
                                                    {getPositionCount(
                                                        slug,
                                                        'city'
                                                    )}{' '}
                                                    Open Positions
                                                </p>
                                            </BoxText>
                                        </Fade>
                                    </OverlayText>
                                </Overlay>
                            </GridItem>
                        );
                    })}
                </Grid>
            </Container>
        </Section>
    );
}
