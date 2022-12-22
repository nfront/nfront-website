import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { device } from '@styles/global';

const GRID = styled.div`
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    background-color: var(--accent-color);

    @media ${device.tablet} {
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
    @media ${device.tablet} {
        width: 90%;
    }
`;

export default function ({ accent, fileName, children }) {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { sourceInstanceName: { eq: "art" }, extension: {ne: "svg"} }
                ) {
                    edges {
                        node {
                            relativePath
                            publicURL
                            name
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    quality: 100
                                    transformOptions: {
                                        duotone: {
                                            highlight: "#0ec4f1"
                                            shadow: "#000000"
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
    
    const svg = !image.childImageSharp && image.extension === 'svg';
    const pluginImage = svg ? null : getImage(image);

    return (
        <GRID alt accent={accent}>
            <Text>{children}</Text>
            <Placeholder>
                <div className="overlay-dark"></div>
                {svg && <img src={image.publicURL} alt={image.name} />}
                {!svg && (
                    <GatsbyImage
                        image={pluginImage}
                        alt={image.name}
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
                )}
            </Placeholder>
        </GRID>
    );
}
