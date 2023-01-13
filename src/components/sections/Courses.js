import React from 'react';
import styled from 'styled-components';
import { Section, Container, Grid, ArtContainer } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import wave from '@images/art/wave.svg';
import Fade from '@common/fade';
import Image from '@common/image';
import { getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

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
    return (
        <Section>
            <Fade top>
                <StyledTitle>
                    <div>
                        <h2>Explore Our Popular Courses</h2>
                    </div>
                    <div>
                        <Link to="/classes">View All Courses</Link>
                    </div>
                </StyledTitle>
            </Fade>
            <Container>
                <StyledGrid>
                    {results.slice(0, limit).map((aClass) => {
                        const { title, icon, tagLine, slug } = aClass.course;
                        const image = getImage(icon);
                        return (
                            <div className="grid-item" key={title}>
                                <Link to={`/academy/${slug}`}>
                                    <CustomArtContainer>
                                        <Image
                                            className="img-wrapper-style"
                                            image={image}
                                            alt={title}
                                        />
                                    </CustomArtContainer>
                                    <Text>
                                        <Fade left>
                                            <h3>{title}</h3>
                                            <p>{tagLine}</p>
                                        </Fade>
                                    </Text>
                                </Link>
                            </div>
                        );
                    })}
                </StyledGrid>
            </Container>
        </Section>
    );
}
