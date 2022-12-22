import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { device, Section, Container } from '@styles/global';

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)`
    padding-bottom: 6rem;
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media ${device.tablet} {
        /* text-align: center; */
    }

    span {
        background: var(--accent-color);
        color: var(--primary-color);
        padding: 2px 5px;
    }
`;

const CTA = forwardRef((props, ref) => {
    const { id } = props;
    return (
        <StyledSection ref={ref} id={id} accent="alt">
            <StyledContainer>{props.children}</StyledContainer>
        </StyledSection>
    );
});

export default CTA;
