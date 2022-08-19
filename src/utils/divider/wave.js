import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Wave } from '@utils/divider/shape-divider.svg';

const WaveWrapper = styled.div`
    background: var(--primary-color);

    svg {
        width: 100%;
        fill: white;
        margin-bottom: -1rem;
        @media (min-width: ${props => props.theme.screen.sm}) {
            margin-bottom: -2rem;
        }
    }

    ${props =>
        props.accent === 'dark' &&
        `
        svg {
            fill: #212529!important;
        }
    `};

    ${props =>
        props.shade &&
        `
        background: var(--shade-color);
        svg {
            fill: #fff;
        }
    `};

    ${props =>
        props.alt &&
        `
        svg {
            fill: #333333!important;
        }
    `};
`;

const waveWrapper = (props) => {
   <WaveWrapper {...props}>
        <Wave />
    </WaveWrapper>
};

export default waveWrapper;