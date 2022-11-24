import React from 'react';
import {
    Section,
    SectionTitle,
    Container,
    Grid,
    GridItem,
    BoxArt,
    BoxText,
    WaveBackground,
} from '@styles/global';
import Fade from '@common/fade';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const JobCategories = ({ categories, getPositionCount }) => {
    return (
        <Section>
            <Fade top>
                <SectionTitle>
                    <div>
                        <h2>Categories</h2>
                        <span>
                            We hire across different position types. Keep an eye
                            out to find something that excites you.
                        </span>
                    </div>
                </SectionTitle>
            </Fade>
            <Container>
                <Grid>
                    {categories?.map((category) => {
                        const { title, coverImg, slug } = category;
                        const image = getImage(coverImg);
                        return (
                            <WaveBackground className="rounded">
                                <GridItem
                                    className="grid-item rounded-and-shadow"
                                    key={title}
                                >
                                    <BoxArt>
                                        <GatsbyImage
                                            className={'img-style'}
                                            image={image}
                                            alt={title}
                                        />
                                    </BoxArt>
                                    <BoxText>
                                        <Fade left>
                                            <h3>{title}</h3>
                                            <p>
                                                {getPositionCount(
                                                    slug,
                                                    'category'
                                                )}{' '}
                                                Open Positions
                                            </p>
                                        </Fade>
                                    </BoxText>
                                </GridItem>
                            </WaveBackground>
                        );
                    })}
                </Grid>
            </Container>
        </Section>
    );
};

export default JobCategories;
