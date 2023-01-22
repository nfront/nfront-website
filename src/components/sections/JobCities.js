import React from 'react';
import {
    Section,
    Container,
    SectionTitle,
    OverlayContainer,
    Overlay,
    BoxText,
    FlexRow,
    Shading,
} from '@styles/global';
import Image from '@common/image';
import Fade from '@common/fade';
import { getObjectCount } from '@utils/utils';

const JobCities = ({ jobs, cities }) => {
    // Get count of objects in array with property "outerProperty.innerProperty" matching "value"
    const getPositionCount = (outerProperty, innerProperty, value) =>
        getObjectCount(jobs, outerProperty, innerProperty, value);

    return (
        <Section shade>
            <SectionTitle>
                <h2>Featured Cities</h2>
                <p>Openings across our {cities.length} locations</p>
            </SectionTitle>
            <Container>
                <FlexRow basis="360px" twoByTwo>
                    {cities.map((city) => {
                        const { title, featuredImage, slug } = city;
                        return (
                            <OverlayContainer
                                className="rounded"
                                height="280px"
                                key={slug}
                            >
                                <Shading />
                                <Image
                                    image={featuredImage}
                                    alt={title}
                                    backgroundImage
                                />
                                <Overlay>
                                    <Fade left>
                                        <BoxText noArt white>
                                            <h3>{title}</h3>
                                            <p>
                                                {getPositionCount(
                                                    'city',
                                                    'slug',
                                                    slug
                                                )}{' '}
                                                Open Positions
                                            </p>
                                        </BoxText>
                                    </Fade>
                                </Overlay>
                            </OverlayContainer>
                        );
                    })}
                </FlexRow>
            </Container>
        </Section>
    );
};

export default JobCities;
