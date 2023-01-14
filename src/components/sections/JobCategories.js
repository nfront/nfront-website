import React from 'react';
import {
    Section,
    SectionTitle,
    Container,
    FlexRow,
    BoxArt,
    BoxText,
    WaveBackground,
} from '@styles/global';
import Image from '@common/image';
import Fade from '@common/fade';
import { getObjectCount } from '@utils/utils';

const JobCategories = ({ jobs, categories }) => {

    // Get count of objects in array with property "outerProperty.innerProperty" matching "value"
    const getPositionCount = (outerProperty, innerProperty, value) =>
        getObjectCount(jobs, outerProperty, innerProperty, value);

    return (
        <Section>
            <Fade top>
                <SectionTitle>
                    <div>
                        <h2>Categories</h2>
                        <p>
                            We hire across different position types. Keep an eye
                            out to find something that excites you.
                        </p>
                    </div>
                </SectionTitle>
            </Fade>
            <Container>
                <FlexRow basis="360px" twoByTwo height="310px">
                    {categories?.map((category) => {
                        const { title, coverImg, slug } = category;
                        return (
                            <WaveBackground
                                className="rounded-and-shadow"
                                key={slug}
                            >
                                <BoxArt>
                                    <Image
                                        image={coverImg}
                                        alt={title}
                                        className={'img-style'}
                                    />
                                </BoxArt>
                                <BoxText>
                                    <Fade left>
                                        <h3>{title}</h3>
                                        <p>
                                            {getPositionCount(
                                                'categories',
                                                'slug',
                                                slug
                                            )}{' '}
                                            Open Positions
                                        </p>
                                    </Fade>
                                </BoxText>
                            </WaveBackground>
                        );
                    })}
                </FlexRow>
            </Container>
        </Section>
    );
};

export default JobCategories;
