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
    BoxArt,
    BoxText,
    WaveBackground,
} from '@styles/global';

const StyledTitle = styled.div`
    padding-top: 1.5rem;
    flex-direction: column;
    display: flex;
    text-align: center;
    align-items: center;
    @media ${breakpoints.laptop} {
        justify-content: space-between;
        flex-direction: row;
    }
    @media ${breakpoints.tablet} {
    }
    ${(props) =>
        props.alt &&
        `
        padding-left: 0;
        text-align: left;
    `};
`;

const StyledGrid = styled(Grid)`
    .grid-item {
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
        margin-top: 2rem;
        padding: 40px 10px;
        margin-bottom: 20px;
        position: relative;
        cursor: pointer;

        background-image: url(${wave});
        background-repeat: no-repeat;
        background-size: 100% 30%;
        background-position: bottom;
        /* &::after {
            background-image: url(${wave});
            background-size: center;
            background-repeat: no-repeat;
            background-position: bottom;
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -1;
        } */
    }
    .grid-item:hover {
        box-shadow: 0 0 42px 6px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
        transition: 0.5s;
    }
`;

const Text = styled.div`
    padding: 1.5rem 0.5rem;
    text-align: center;
    overflow: hidden;
    h3 {
        font-weight: 500;
        margin-bottom: 0.4rem;
    }
    .label {
        font-weight: 500;
    }

    p:not(.label) {
        font-size: 16px;
    }
`;

// FIXME: Need all this?
// FIXME: Move max size to GraphQL
const CustomArtContainer = styled(ArtContainer)`
    @media ${breakpoints.mobileL} {
        flex: 0 1 50%;
    }
    padding: 0.5rem;
    .img-wrapper-style {
        max-height: 300px;
        @media ${breakpoints.laptop} {
            max-height: 400px;
        }
        @media ${breakpoints.mobileL} {
            margin-bottom: 0;
        }
    }
`;

export default function Courses({ results, limit }) {
    const uniqueArray = results.filter(
        (v, key, courses) =>
            courses.findIndex(
                (course) => course?.course?.title === v?.course?.title
            ) === key
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
                <FlexRow basis="360px" twoByTwo height="310px">
                    {results.slice(0, limit).map((course) => {
                        const { title, icon, tagLine, slug } = course;
                        return (
                            <Link to={`/academy/${slug}`} key={slug}>
                                <WaveBackground
                                    className="rounded-and-shadow y-100"
                                >
                                    <BoxArt>
                                        <Image
                                            image={icon}
                                            alt={title}
                                            className={'img-style'}
                                        />
                                    </BoxArt>
                                    <BoxText className="pt-0">
                                        <Fade left>
                                            <h3>{title}</h3>
                                            <p>{tagLine}</p>
                                        </Fade>
                                    </BoxText>
                                </WaveBackground>
                            </Link>
                        );
                    })}
                </FlexRow>
            </Container>
        </Section>
    );
}
