import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container, Box, SectionTitle } from '@styles/global';
import styled from 'styled-components';

const GRID = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    transition: transform 0.3s ease-in-out;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(3, 1fr);
    }

    label {
        position: absolute;
        top: -10px;
        background: var(--secondary-color);
        padding: 2px 12px;
        font-size: 14px;
        color: var(--alt-color);
        text-align: center;
    }

    .box {
        border: 1px solid rgba(225, 225, 225, 0.2);
    }
`;

const CLIENTS = [
    {
        name: 'Europe',
        image: 'europe.jpg',
    },
    {
        name: 'Nordics',
        image: 'nordics.jpg',
    },
    {
        name: 'U.S.A',
        image: 'us.jpg',
    },
];

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { sourceInstanceName: { eq: "nfront" } }
                ) {
                    edges {
                        node {
                            relativePath
                            childImageSharp {
                                fluid(maxWidth: 885) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    return (
        <Section accent="alt">
            <Container>
                <SectionTitle>
                    <h2>Co-Investment Network</h2>
                    <p>
                        As part of our value-add in investments, we bring in
                        leading VCs and strategic high-net-worth individuals as
                        co-investors.
                        <br />
                        Here are some of the investors in our network:
                    </p>
                </SectionTitle>
                <GRID>
                    {CLIENTS.map(({ name, image }) => {
                        const img = data.placeholderImage.edges.find(
                            ({ node }) => node.relativePath === image
                        ).node;
                        return (
                            <Box>
                                <label>{name}</label>
                                <Img
                                    fluid={img.childImageSharp.fluid}
                                    alt={name}
                                />
                            </Box>
                        );
                    })}
                </GRID>
            </Container>
        </Section>
    );
};
