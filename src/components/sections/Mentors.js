import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Container, SectionTitle } from '@styles/global';

import Team from '@sections/Team';
import Strapbox from '@common/strapbox';

/**
import ExternalLink from '@utils/externalLink';
import { ReactComponent as Icon } from '@static/icons/twitter.svg';
 */

const StyledSection = styled(Section)``;
const StyledContainer = styled(Container)``;

/**

const StyledContainer = styled(Container)`
    height: 100vh;
    @media (min-width: ${props => props.theme.screen.sm}) {
        height: 40vh;
    }
    @media (min-width: ${props => props.theme.screen.md}) {
        height: 55vh;
    }
`;
*/

const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    grid-gap: 24px;
    justify-content: space-between;
    text-align: center;

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-item {
        background: white;
        border: 5px solid rgba(0, 0, 0, 0.2);
    }
`;

const MentorGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    grid-gap: 24px;
    justify-content: space-between;
    text-align: center;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

/** 
const TeamGrid = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    grid-gap: 0;

    &::-webkit-scrollbar {
        display: none;
    }
`;


const Slide = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    text-align: center;

    @media (min-width: ${props => props.theme.screen.sm}) {
        width: 90%;
        margin: 0 auto;
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: ${props => props.theme.screen.md}) {
        grid-gap: 30px;
    }
`;
*/

const Text = styled.div`
    p {
        color: var(--heading-color);
        margin: 10px 0 5px 0;
    }

    label {
        display: block;
    }
`;

const Art = styled.div`
    width: 100%;

    img {
        min-width: 220px;
        /* border-radius: 50%; */
        border: 5px solid rgba(0, 0, 0, 0.2);
        margin-top: 2rem;
        margin-bottom: 0;
        transition: 0.5s ease-in-out;
        @media (min-width: ${props => props.theme.screen.sm}) {
        }

        &:hover {
            border-color: var(--blue);
        }
    }
`;

const Placeholder = styled.div`
    min-width: 80%;
    text-align: center;
    @media (min-width: ${props => props.theme.screen.sm}) {
        min-width: 23%;
    }
`;

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulMentors {
                    nodes {
                        name
                        designation
                        company
                        headshot {
                            fixed(height: 200, quality: 100) {
                                src
                            }
                        }
                        link
                    }
                }
            }
        `
    );
    const result = data.allContentfulMentors.nodes;
    return (
        <>
            <Team />
            <StyledSection>
                <StyledContainer>
                    <SectionTitle>
                        <h2>Advisors & Portfolio Mentors</h2>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </p>
                    </SectionTitle>
                    <MentorGrid>
                        {result.map(
                            ({
                                name,
                                designation,
                                company,
                                headshot,
                                link,
                            }) => {
                                return (
                                    <Placeholder>
                                        <Art>
                                            <a href={link} target="_blank">
                                                <img
                                                    src={headshot.fixed.src}
                                                    alt={name}
                                                />
                                            </a>
                                        </Art>
                                        <Text>
                                            <p>{name}</p>
                                            <label>{designation}</label>
                                            <label>{company}</label>
                                        </Text>
                                    </Placeholder>
                                );
                            }
                        )}
                    </MentorGrid>
                </StyledContainer>
            </StyledSection>
        </>
    );
};
