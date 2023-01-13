import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '@styles/global';

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)`
    padding-top: 6rem;
`;

const CTA = forwardRef((props, ref) => {
    const { id } = props;
    return (
        <StyledSection ref={ref} id={id} accent="alt">
            <SectionTitle className="text-white">{props.children}</SectionTitle>
        </StyledSection>
    );
});

export default CTA;
