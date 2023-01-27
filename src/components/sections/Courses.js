import React from 'react';
import styled from 'styled-components';
import { Grid, ArtContainer } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import wave from '@images/art/wave.svg';
import Fade from '@common/fade';
import Image from '@common/image';

import Link from '@common/link';

import {
    Section,
    SectionTitle,
    Container,
    FlexRow,
    WaveBackground,
} from '@styles/global';

export default function Courses({ courses, limit }) {
    const uniqueCourseList = courses.filter(
        (v, key, arr) =>
            arr.findIndex(
                (course) => course?.course?.title === v?.course?.title
            ) != key
    );

    return (
        <Section>
            <Fade top>
                <SectionTitle>
                    <div>
                        <h2>Explore Our Popular Courses</h2>
                        <p>
                            We hire across different position types. Keep an eye
                            out to find something that excites you.
                        </p>
                    </div>
                    <div>
                        <Link to="/classes">View All Courses</Link>
                    </div>
                </SectionTitle>
            </Fade>
            <Container>
                <FlexRow basis="360px" twoByTwo>
                    {uniqueCourseList.slice(0, limit).map((course) => {
                        const { title, icon, tagLine, slug } = course;
                        return (
                            <Link to={`/academy/${slug}`} key={slug}>
                                <WaveBackground
                                    className="rounded-and-shadow y-100"
                                >
                                    <ArtContainer className="p-15 mb-0" maxHeight="5rem">
                                        <Image
                                            image={icon}
                                            alt={title}
                                            className={'img-style'}
                                        />
                                    </ArtContainer>
                                    <div className="py-15 pb-15 center">
                                        <Fade left>
                                            <h3 className="light-bold mb-03">{title}</h3>
                                            <p className="small-font pb-4 mb-0">{tagLine}</p>
                                        </Fade>
                                    </div>
                                </WaveBackground>
                            </Link>
                        );
                    })}
                </FlexRow>
            </Container>
        </Section>
    );
}
