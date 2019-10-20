import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import BackgroundImage from 'gatsby-background-image';
import { Container, Overlay } from '@styles/global';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeaderWrapper = styled(Container)`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 1;

    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const HeaderText = styled.h1`
    color: var(--accent-color);
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media (min-width: ${props => props.theme.screen.sm}) {
        font-size: 3rem;
    }

    @media (min-width: ${props => props.theme.screen.lg}) {
        font-size: 4rem;
    }

    span {
        color: var(--yellow);
        font-size: 2.5rem;
        @media (min-width: ${props => props.theme.screen.sm}) {
            font-size: 4rem;
        }
        @media (min-width: ${props => props.theme.screen.md}) {
            font-size: 5rem;
        }
    }

    p {
        color: white;
        @media (min-width: ${props => props.theme.screen.md}) {
            font-size: 1.2rem;
        }
        font-size: 1rem;
        text-transform: none;
        font-weight: normal;
        letter-spacing: normal;
        margin-top: 2rem;
    }
`;

const Text = styled.h2`
    color: var(--yellow);
    margin-bottom: 0;
    font-weight: 400;
`;

export default function Header({ fileName }) {
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
                                fluid(maxWidth: 2480, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
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

    return (
        <>
            <BackgroundImage
                fluid={image.childImageSharp.fluid}
                style={{
                    height: `100vh`,
                    width: `100vw`,
                    backgroundColor: `transparent`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center center`,
                    display: `flex`,
                    alignItems: `center`,
                }}
            >
                <Overlay />
            </BackgroundImage>
            <HeaderWrapper>
                <div>
                    <Fade top>
                        <Text>we help businesses</Text>
                    </Fade>
                    <Fade bottom>
                        <HeaderText>
                            innovate <span>+</span> grow
                            <p>
                                with Venture Capital and Software
                                Development
                            </p>
                        </HeaderText>
                    </Fade>

                    {/* <Link to="/contact/">
                        <button className="button">Get in touch</button>
                    </Link> */}
                </div>

                <AnchorLink href="#capital" class="mouse">
                    <div class="scroller"></div>
                </AnchorLink>
                <div class="scroll">SCROLL</div>
            </HeaderWrapper>
        </>
    );
}
