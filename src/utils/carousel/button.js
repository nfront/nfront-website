import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Next } from '@utils/carousel/arrow-right.svg';
import { ReactComponent as Prev } from '@utils/carousel/arrow-left.svg';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: 50%;
    text-align: center;
    z-index: 99;

    svg {
        fill: var(--primary-color);
    }
`;
const styles = {
    btn: {
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        userSelect: 'none',
        position: 'absolute',
        bottom: '50%',
        fontSize: '1.5rem',
    },
    left: {
        left: '-2.5rem',
    },
    right: {
        right: '-2.5rem',
    },
};

export default function Buttons(props) {
    const prevBtnStyle = Object.assign({}, styles.btn, styles.left);
    const nextBtnStyle = Object.assign({}, styles.btn, styles.right);
    const { index, total, loop, prevHandler, nextHandler } = props;
    return (
        <Wrapper>
            {(loop || index !== 0) && (
                <div style={prevBtnStyle} onClick={prevHandler}>
                    <Prev />
                </div>
            )}
            {(loop || index !== total - 1) && (
                <div style={nextBtnStyle} onClick={nextHandler}>
                    <Next />
                </div>
            )}
        </Wrapper>
    );
}
