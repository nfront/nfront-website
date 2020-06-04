import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';

const StyledSection = styled(Section)`
    position: relative;
    padding: 2rem 0 !important;
    background: var(--primary-color);
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        font-size: 1.8rem;
        color: var(--yellow);
    }
    p {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--yellow);

        :last-child {
            margin-bottom: 0;
        }
    }
`;

export default function({ accent, children }) {
    return (
        <StyledSection color={accent}>
            <StyledContainer>{children}</StyledContainer>
        </StyledSection>
    );
}
