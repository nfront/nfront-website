import React from 'react';
import styled from 'styled-components';
import { Section, Container, Grid } from '@styles/global';
import wave from '@images/art/wave.svg';
import Fade from 'react-reveal/Fade';

const StyledTitle = styled.div`
    padding-top: 1.5rem;
    // flex-direction: column;
    // display: flex;
    text-align: center;
    // @media (min-width: ${props => props.theme.screen.lg}) {
    //     justify-content: space-between;
    //     flex-direction: row;
    // }
    // @media (min-width: ${props => props.theme.screen.sm}) {
    // }
    ${props =>
        props.alt &&
        `
    padding-left: 0;
    text-align: left;  
`};
`;

const GRID = styled(Grid)`
    .grid-item {
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
        margin-top: 2rem;
        // cursor: pointer;
        padding: 40px 10px;
        margin-bottom: 20px;
        position: relative;
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

const Art = styled.div`
    @media (min-width: ${props => props.theme.screen.xs}) {
        flex: 0 1 50%;
    }
    text-align: center;
    padding: 0.5rem;
    overflow: hidden;
    img {
        max-height: 300px;
        @media (min-width: ${props => props.theme.screen.md}) {
            max-height: 400px;
        }
        @media (min-width: ${props => props.theme.screen.xs}) {
            margin-bottom: 0;
        }
    }
`;

export default function CoursesCategories({ results }) {
    return (
        <Section>
            <Container>
                <Fade top>
                    <StyledTitle>
                        <div>
                            <h2>Categories</h2>
                            <span>Explore Our Popular Courses</span>
                        </div>
                    </StyledTitle>
                </Fade>
            </Container>
            <Container>
                <GRID>
                    {results.map(category => {
                        const {
                            title,
                            icon,
                            tagLine,
                        } = category.courseCategories;
                        return (
                            <div className="grid-item" key={title}>
                                <Art>
                                    <img
                                        src={icon && icon.fluid.src}
                                        alt={'img'}
                                    />
                                </Art>
                                <Text>
                                    <Fade left>
                                        <h3>{title}</h3>
                                        <p>{tagLine}</p>
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