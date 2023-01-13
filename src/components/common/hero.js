import React from 'react';
import styled from 'styled-components';
import { Overlay, OverlayText, Shading } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import Image from '@common/image';

const Container = styled.div`
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

const Hero = ({ heroImage, children, height, small, left, polygonShading }) => {
    if (!heroImage) {
        return null;
    }

    return (
        <Container height={height} small={small}>
            <Overlay>
                <Image image={heroImage} backgroundImage />
                <Shading polygonShading={polygonShading} />
                <OverlayText left={left} className={`${small && 'text-light'}`}>
                    {children}
                </OverlayText>
            </Overlay>
        </Container>
    );
};

export default Hero;