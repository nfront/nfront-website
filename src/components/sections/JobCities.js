import React from 'react';
import {
    Section,
    Container,
    SectionTitle,
    Overlay,
    OverlayText,
    BoxText,
    FlexFlip,
    BgImage,
    Shading
} from '@styles/global';
import Fade from '@common/fade';
import { getImage } from 'gatsby-plugin-image';

export default function FeaturedCities({ cities, getPositionCount }) {
    return (
        <Section shade>
            <SectionTitle>
                <h2>Featured Cities</h2>
                <p>Openings across our {cities.length} locations</p>
            </SectionTitle>
            <Container>
                <FlexFlip>
                    {cities.map((city) => {
                        const { title, featuredImage, slug } = city;
                        const pluginImage = getImage(featuredImage);
                        return (
                            <Overlay height="280px" className="rounded" key={slug}>
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
                        );
                    })}
                </FlexFlip>
            </Container>
        </Section>
    );
}
