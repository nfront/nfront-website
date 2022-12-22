import React from 'react';
import { device, Overlay, OverlayText, Shading, BgImage } from '@styles/global';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';

const Container = styled.div`
    height: ${(props) => (props.height === 'long' ? '100vh' : '70vh')};

    @media ${device.tablet} {
        height: ${(props) =>
            props.height === 'long'
                ? '100vh'
                : props.height === 'short'
                ? '50vh'
                : '60vh'};
    }
    @media ${device.laptop} {
        height: ${(props) =>
            props.height === 'long'
                ? '100vh'
                : props.height === 'short'
                ? '50vh'
                : '70vh'};
    }

    h2 {
        color: var(--accent-color);
        font-size: 1.5rem;
        text-transform: ${(props) => (props.small ? 'none' : 'uppercase')};
        letter-spacing: ${(props) => (props.small ? 'initial' : '1.5px')};

        font-weight: ${(props) => (props.small ? '500' : '800')};

        @media ${device.tablet} {
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

    const svg = heroImage.svg ? true : false;
    const pluginImage = svg ? null : getImage(heroImage);

    return (
        <Container height={height} small={small}>
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
        </Container>
    );
};

export default Hero;