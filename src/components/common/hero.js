import React from 'react';
import { Overlay, OverlayText, Shading, BgImage } from '@styles/global';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';

const Placeholder = styled.div`
    .gatsby-image-wrapper {
        height: ${(props) => (props.height === 'long' ? '100vh' : '70vh')};

        @media (min-width: ${(props) => props.theme.screen.sm}) {
            height: ${(props) =>
                props.height === 'long'
                    ? '100vh'
                    : props.height === 'short'
                    ? '50vh'
                    : '60vh'};
        }
        @media (min-width: ${(props) => props.theme.screen.lg}) {
            height: ${(props) =>
                props.height === 'long'
                    ? '100vh'
                    : props.height === 'short'
                    ? '50vh'
                    : '70vh'};
        }
    }

    h2 {
        color: var(--accent-color);
        font-size: 1.5rem;
        text-transform: ${(props) => (props.small ? 'none' : 'uppercase')};
        letter-spacing: ${(props) => (props.small ? 'initial' : '1.5px')};

        font-weight: ${(props) => (props.small ? '500' : '800')};

        @media (min-width: ${(props) => props.theme.screen.sm}) {
            font-size: ${(props) => (props.small ? '2rem' : '3rem')};
        }
    }

    p {
        color: var(--accent-color);
    }
`;

const Hero = ({ heroImage, children, height, small, left, altShading }) => {
    if (!heroImage) {
        return null;
    }

    console.log('height', height);
    const svg = heroImage.svg ? true : false;
    const pluginImage = svg ? null : getImage(heroImage);

    return (
        <Placeholder height={height} small={small}>
            <Overlay>
                {svg && <img src={heroImage.publicURL} alt={heroImage.title} />}
                {!svg && (
                    <BgImage image={pluginImage} alt={pluginImage.title} />
                )}
                <Shading alt={altShading} />
                <OverlayText left={left} className={`${small && 'text-light'}`}>
                    {children}
                </OverlayText>
            </Overlay>
        </Placeholder>
    );
};

export default Hero;
