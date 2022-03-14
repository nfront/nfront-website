import React from 'react';
import styled from 'styled-components';
import { Section, Container, Grid } from '@styles/global';
import { useStaticQuery, graphql } from 'gatsby';
import wave from '@images/art/wave.svg';
import Fade from 'react-reveal/Fade';

const StyledTitle = styled.div`
    padding-top: 1.5rem;
    flex-direction: column;
    display: flex;
    h2 {
        margin-bottom: 0;
    }
    @media (min-width: ${props => props.theme.screen.lg}) {
        justify-content: space-between;
        flex-direction: row;
    }
    @media (min-width: ${props => props.theme.screen.sm}) {
    }
    ${props =>
        props.alt &&
        `
    padding-left: 0;
    text-align: left;  
`};
`;
const TotalCategories = styled.div`
    display: flex;
    padding-top: 2rem;
    div {
        margin-right: 1rem;
    }
    @media (min-width: ${props => props.theme.screen.lg}) {
        padding-top: 0;
    }
`;
const GRID = styled(Grid)`
    .grid-item {
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
        margin-top: 2rem;
        cursor: pointer;
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

export default function Categories() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCategories {
                nodes {
                    title
                    positions
                    coverImg {
                        fluid(maxWidth: 100, quality: 100) {
                            src
                        }
                    }
                    # slug
                }
            }
        }
    `);
    const results = data.allContentfulCategories.nodes;
    console.log(results);
    return (
        <Section>
            <Container>
                <Fade top>
                    <StyledTitle>
                        <div>
                            <h2>Popular Categories</h2>
                            <span>20+ Catetories work wating for you</span>
                        </div>
                        <TotalCategories>
                            <div>
                                <h2>1800</h2>
                                <span>Jobs Posted</span>
                            </div>
                            <div>
                                <h2>4500</h2>
                                <span>Tasks Posted</span>
                            </div>
                            <div>
                                <h2>1500</h2>
                                <span>Freelancers</span>
                            </div>
                        </TotalCategories>
                    </StyledTitle>
                </Fade>
            </Container>
            <Container>
                <GRID>
                    {results.map(val => {
                        const { title, positions, coverImg } = val;

                        return (
                            <div className="grid-item">
                                <Art>
                                    <img src={coverImg.fluid.src} alt={'img'} />
                                </Art>
                                <Text>
                                    <Fade left>
                                        <h3>{title}</h3>
                                        <p>{positions} Open Positions</p>
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

// export default Categories;
