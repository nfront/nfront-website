import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Container, Overlay } from '@styles/global';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/** keep it here in case we want to have a CTA box 
 * 
 * 
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Contact from '@sections/Contact';

const GRID = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    margin: 10rem 0;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: 3fr 2fr;
    }
`;

const Form = styled(Box)`
    width: 100%;
`;

**/

export const HeaderWrapper = styled(Container)`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;

    @media (max-width: ${(props) => props.theme.screen.sm}) {
        margin-top: 8rem;
    }
`;

export const HeaderText = styled.h1`
    color: var(--accent-color);
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media (min-width: ${(props) => props.theme.screen.sm}) {
        font-size: 3rem;
    }

    @media (min-width: ${(props) => props.theme.screen.lg}) {
        font-size: 4rem;
    }

    span {
        color: var(--yellow);
        font-size: 2.5rem;
        @media (min-width: ${(props) => props.theme.screen.sm}) {
            font-size: 4rem;
        }
        @media (min-width: ${(props) => props.theme.screen.md}) {
            font-size: 5rem;
        }
    }

    p {
        color: white;
        @media (min-width: ${(props) => props.theme.screen.md}) {
            font-size: 1.2rem;
        }
        font-size: 1rem;
        text-transform: none;
        font-weight: normal;
        letter-spacing: normal;
        margin-top: 0.5rem;
    }
`;

export const Text = styled.h2`
    color: var(--yellow);
    margin-bottom: 0;
    font-weight: 400;
`;

export default function Header({ fileName }) {
    // Was previously width: 2480
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
        <>
            <div style={{ display: 'grid' }}>
                {svg && <img src={image.publicURL} alt={image.name} />}
                {!svg && (
                    <GatsbyImage
                        image={pluginImage}
                        alt={image.name}
                        style={{
                            gridArea: '1/1',
                            height: `100vh`,
                        }}
                    />
                )}
                <Overlay alt />
            </div>
            <HeaderWrapper id="top">
                <div>
                    <Fade top>
                        <Text>we help businesses</Text>
                    </Fade>
                    <Fade bottom>
                        <HeaderText>
                            innovate <span>+</span> grow
                            <p>with operational support and capital</p>
                        </HeaderText>
                    </Fade>
                </div>
            </HeaderWrapper>
        </>
    );
}
