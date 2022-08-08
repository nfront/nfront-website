import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Overlay, OverlayText } from '@styles/global';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

const Placeholder = styled.div`
    .gatsby-image-wrapper {
        min-height: 70vh;
        @media (min-width: ${props => props.theme.screen.sm}) {
            min-height: 60vh;
        }
        @media (min-width: ${props => props.theme.screen.lg}) {
            min-height: 70vh;
        }
    }

    ${props =>
        props.fluid &&
        `
        .gatsby-image-wrapper {
            min-height: 100vh;
        }
    `};

    h2 {
        color: var(--accent-color);
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 800;

        @media (min-width: ${props => props.theme.screen.sm}) {
            font-size: 3rem;
        }
    }

    p {
        color: var(--accent-color);
    }
`;

export default function({ fileName, children }) {
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
                                    width: 2480
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
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
        <Placeholder>
            <BgImage 
                image={pluginImage}
                style={{
                    width: `100vw`,
                    backgroundColor: `transparent`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center center`,
                    display: `flex`,
                    alignItems: `center`,
                    paddingTop: `1rem`,
                }}
            >
                <Overlay />
                <OverlayText>{children}</OverlayText>
            </BgImage>
        </Placeholder>
    );
}
