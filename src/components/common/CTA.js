import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';

const StyledContainer = styled(Container)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (min-width: ${(props) => props.theme.screen.sm}) {
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
        <Section ref={ref} id={id} accent="alt">
            <StyledContainer>{props.children}</StyledContainer>
        </Section>
    );
});

export default CTA;
