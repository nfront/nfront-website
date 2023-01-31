import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '@styles/global';

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)`
    padding-top: 6rem;
`;

const CTA = (props) => {
    const { id } = props;
    return (
        <Section id={id} accent="alt" className="pt-6">
            <SectionTitle className="text-white mb-0">{props.children}</SectionTitle>
        </Section>
    );
};

export default CTA;
