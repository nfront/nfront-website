import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Container, Grid, SectionTitle } from '@styles/global';
import ExternalLink from '@utils/externalLink';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
        /* text-align: center; */
    p {
        color: var(--yellow);
        margin: 10px auto 5px auto;
        width: 220px;
        text-align: left;
    }
    label {
        color: var(--border-color);
        font-weight: 400;
        width: 220px;
        margin: 0 auto;
        text-align: left;
    }
    label:nth-child(3) {
        /* color: var(--orange); */
    }
    label:last-child {
        /* color: var(--orange); */
        /* font-style: italic; */
        font-weight: bold;
    }
`;

const Art = styled.div`
    width: 100%;
    /* text-align: left; */

    img {
        min-width: 220px;
        border-radius: 0%;
        border: none;
        margin-top: 2rem;
        margin-bottom: 0;
        /* transition: 0.15s ease-in-out; */
        filter: grayscale(100%);

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

const Mentors = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulMentors {
                    nodes {
                        order
                        name
                        title
                        company
                        city
                        headshot {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                        link
                    }
                }
            }
        `
    );
    const result = data.allContentfulMentors.nodes;
    result.sort((a, b) => (a.order > b.order ? 1 : -1));
    return (
        <>
            <StyledSection id="mentors" accent="alt">
                <StyledContainer>
                    <SectionTitle>
                        <h2>Advisors & Portfolio Mentors</h2>
                        <p>
                            nFront's advisors and portfolio company mentors
                            include top-tier VC investors, successful
                            entrepreneurs and technology influencers. Deal flow
                            is frequently shared with these standout
                            individuals, who also provide mentorship to
                            portfolio companies and expert advice on new prospects.
                        </p>
                    </SectionTitle>
                    <MentorGrid>
                        {result.map(
                            ({
                                name,
                                title,
                                company,
                                city,
                                headshot,
                                link,
                            }) => {
                                const hs = getImage(headshot);
                                return (
                                    <Placeholder>
                                        <Art>
                                            <ExternalLink href={link}>
                                                {/* <img
                                                    src={headshot.fixed.src}
                                                    alt={name}
                                                /> */}
                                                <GatsbyImage image={hs} alt={hs.title} />
                                            </ExternalLink>
                                        </Art>
                                        <Text>
                                            <p>{name}</p>
                                            <label>{title}</label>
                                            <label>{company}</label>
                                            <label>{city}</label>
                                        </Text>
                                    </Placeholder>
                                );
                            }
                        )}
                    </MentorGrid>
                    <p className="mt-4 mb-m3 text-uppercase text-center">
                        ...And more
                    </p>
                </StyledContainer>
            </StyledSection>
        </>
    );
};

export default Mentors;