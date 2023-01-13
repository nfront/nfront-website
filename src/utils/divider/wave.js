import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Wave } from '@utils/divider/shape-divider.svg';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';

const WaveWrapper = styled.div`
    background: var(--primary-color);
    padding-top: 3rem;

    svg {
        width: 100%;
        fill: white;
        margin-bottom: -1rem;
        @media ${breakpoints.tablet} {
            margin-bottom: -2rem;
        }
    }

    ${(props) =>
        props.accent === 'dark' &&
        `
        svg {
            fill: #212529!important;
        }
    `};

    ${(props) =>
        props.shade &&
        `
        background: var(--shade-color);
        svg {
            fill: #fff;
        }
    `};

    ${(props) =>
        props.alt &&
        `
        svg {
            fill: #333333!important;
        }
    `};
`;

const WaveWrapperComponent = (props) => {
    return (
        <WaveWrapper {...props}>
            <Wave />
        </WaveWrapper>
    );
};

export default WaveWrapperComponent;
