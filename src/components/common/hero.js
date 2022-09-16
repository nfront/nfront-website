import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Overlay, OverlayText } from '@styles/global';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Placeholder = styled.div`
    .gatsby-image-wrapper {
        /* height: 70vh; */
        height: ${(props) => (props.long ? '100vh' : '70vh')};

        @media (min-width: ${(props) => props.theme.screen.sm}) {
            height: ${(props) => (props.long ? '100vh' : '60vh')};
        }
        @media (min-width: ${(props) => props.theme.screen.lg}) {
            height: ${(props) => (props.long ? '100vh' : '70vh')};
        }
    }

    h2 {
        color: var(--accent-color);
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 800;

        @media (min-width: ${(props) => props.theme.screen.sm}) {
            font-size: 3rem;
        }
    }

    p {
        color: var(--accent-color);
    }
`;

const Hero = ({ fileName, children, long }) => {
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
                                gatsbyImageData(layout: FULL_WIDTH)
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
        <Placeholder long={long}>
            <div style={{ display: 'grid' }}>
                {svg && <img src={image.publicURL} alt={image.name}/>}
                {!svg && (
                    <GatsbyImage
                        image={pluginImage}
                        alt={image.name}
                        style={{
                            gridArea: '1/1',
                        }}
                    />
                )}

                <Overlay />
                <OverlayText>{children}</OverlayText>
            </div>
        </Placeholder>
    );
};

export default Hero;
