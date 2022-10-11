import React from 'react';
import styled from 'styled-components';
import { Section, Container, Grid } from '@styles/global';
import wave from '@images/art/wave.svg';
import Fade from 'react-reveal/Fade';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const StyledTitle = styled.div`
    padding-top: 1.5rem;
    flex-direction: column;
    display: flex;
    text-align: center;
    align-items: center;
    @media (min-width: ${(props) => props.theme.screen.lg}) {
        justify-content: space-between;
        flex-direction: row;
    }
    @media (min-width: ${(props) => props.theme.screen.sm}) {
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
        &::after {
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
        }
    }
    .grid-item:hover {
        box-shadow: 0 0 42px 6px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
        transition: 0.5s;
    }
`;

// const ItemGrid = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     p {
//         margin-bottom: 0;
//         color: #002e5f;
//     }
//     @media (min-width: ${(props) => props.theme.screen.sm}) {
//         grid-template-columns: repeat(2, 1fr);
//     }
//     @media (min-width: ${(props) => props.theme.screen.md}) {
//         grid-template-columns: repeat(2, 1fr);
//     }
// `;

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

const Art = styled.div`
    @media (min-width: ${(props) => props.theme.screen.xs}) {
        flex: 0 1 50%;
    }
    text-align: center;
    padding: 0.5rem;
    overflow: hidden;
    .img-style {
        max-height: 300px;
        @media (min-width: ${(props) => props.theme.screen.md}) {
            max-height: 400px;
        }
        @media (min-width: ${(props) => props.theme.screen.xs}) {
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
            <Container>
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
            </Container>
            <Container>
                <StyledGrid>
                    {uniqueArray.slice(0, limit).map((aClass) => {
                        const { title, icon, tagLine, slug } = aClass.course;
                        const image = getImage(icon);
                        return (
                            <div className="grid-item" key={title}>
                                <Link to={`/academy/${slug}`}>
                                    <Art>
                                        <GatsbyImage
                                            className="img-style"
                                            image={image}
                                            alt={title}
                                        />
                                    </Art>
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
