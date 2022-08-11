import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GRID = styled.div`
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    background-color: var(--accent-color);

    @media (min-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
        /** reverse the order of grid layout */
        ${(props) =>
            props.accent === 'inverse' &&
            `
            ${Text} {
                grid-column: 2;
                grid-row: 1;   
            }
        `}
    }
`;

const Placeholder = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    h2 {
        color: var(--alt-color);
    }
`;

const Text = styled.div`
    padding: 5rem 1.5rem;
    @media (min-width: ${(props) => props.theme.screen.sm}) {
        width: 90%;
    }
`;

export default function ({ accent, fileName, children }) {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { sourceInstanceName: { eq: "art" } }
                ) {
                    edges {
                        node {
                            relativePath
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    quality: 100
                                    transformOptions: 
                                        {
                                            duotone: {
                                                highlight: "#0ec4f1",
                                                shadow: "#000000",
                                                opacity: 50
                                            }
                                        }
                                )
                            }
                        }
                    }
                }
            }
        `
    );

    const image = data.placeholderImage.edges.find(
        ({ node }) => node.relativePath === fileName
    ).node;

    if (!image) {
        return null;
    }

    const pluginImage = getImage(image);

    return (
        <GRID alt accent={accent}>
            <Text>{children}</Text>
            <Placeholder>
                <div className="overlay-dark"></div>
                <GatsbyImage
                    image={pluginImage}
                    style={{
                        width: `100%`,
                        minHeight: `60vh`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center center`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                    }}
                />
            </Placeholder>
        </GRID>
    );
}
