import React from 'react';
import styled from 'styled-components';
import { OverlayContainer, Overlay, Shading, Container } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import Image from '@common/image';

const HeroContainer = styled.div`
    height: ${(props) => (props.height === 'long' ? '100vh' : '70vh')};

    @media ${breakpoints.tablet} {
        height: ${(props) =>
            props.height === 'long'
                ? '100vh'
                : props.height === 'short'
                ? '50vh'
                : '60vh'};
    }
    @media ${breakpoints.laptop} {
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

        @media ${breakpoints.tablet} {
            font-size: ${(props) => (props.small ? '2rem' : '3rem')};
        }
    }

    p {
        color: var(--accent-color);
    }
`;

const Hero = ({
    heroImage,
    alt,
    children,
    height,
    small,
    left,
    polygonShading,
    gap,
    id,
}) => {
    if (!heroImage) {
        return null;
    }

    return (
        <HeroContainer id={id} height={height} small={small}>
            <OverlayContainer>
                <Image image={heroImage} alt={alt} backgroundImage />
                <Shading polygonShading={polygonShading} />
                <Overlay
                    as={Container}
                    left={left}
                    gap={gap}
                    className={`${small && 'text-light'}`}
                >
                    {children}
                </Overlay>
            </OverlayContainer>
        </HeroContainer>
    );
};

export default Hero;
