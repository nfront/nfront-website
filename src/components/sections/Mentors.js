import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Container, Grid, SectionTitle } from '@styles/global';
import ExternalLink from '@utils/externalLink';

/** */
import Team from '@sections/Team';

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

const MentorGrid = styled(Grid)`
    text-align: center;
    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Text = styled.div`
    p {
        color: var(--heading-color);
        margin: 10px 0 5px 0;
    }
`;

const Art = styled.div`
    width: 100%;

    img {
        min-width: 220px;
        border-radius: 50%;
        border: 5px solid rgba(0, 0, 0, 0.2);
        margin-top: 2rem;
        margin-bottom: 0;
        transition: 0.15s ease-in-out;

        &:hover {
            border-color: var(--primary-color);
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
                                            <ExternalLink href={link}>
                                                <img
                                                    src={headshot.fixed.src}
                                                    alt={name}
                                                />
                                            </ExternalLink>
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
                    <p className="my-5 text-uppercase text-center">
                        + Many more
                    </p>
                </StyledContainer>
            </StyledSection>
        </>
    );
};
