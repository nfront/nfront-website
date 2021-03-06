import styled from 'styled-components';

const theme = {
    screen: {
        xs: '575px',
        sm: '767px',
        md: '991px',
        lg: '1199px',
    },
};
export default theme;

export const Container = styled.div`
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;

    ${props =>
        props.fluid &&
        `
        max-width: 100%;
    `};
`;

export const Section = styled.section`
    padding: 6rem 0;

    ${props =>
        props.alt &&
        `
        background-color: var(--accent-color);  
    `};

    ${props =>
        props.shade &&
        `
        background-color: var(--shade-color);  
    `};

    ${props =>
        props.accent === 'alt' &&
        `
        background-color: var(--primary-color);

        h2,
        h3,
        p {
            color: var(--accent-color);
        }

        hr {
            background: rgba(225, 225, 225, 0.2);
        }
    `};
    
    ${props =>
        props.accent === 'alt2' &&
        `
        background-color: var(--primary-color);
        h2 {
            color: var(--accent-color);
        };
    `};
`;

export const SectionTitle = styled.div`
    margin-bottom: 3rem;
    text-align: center;
    padding: 0 1.5rem;

    @media (min-width: ${props => props.theme.screen.sm}) {
        margin-bottom: 3rem;
    }

    ${props =>
        props.alt &&
        `
        padding-left: 0;
        text-align: left;  
    `};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    grid-gap: 24px;
    justify-content: space-between;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Box = styled.div`
    position: relative;
    background: var(--alt-color);
    border-radius: 5px;
    padding: 1.5rem;

    &.with-shadow {
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }
`;

/**
 *  background overlay color
 *
 *  red -- rgba(210, 24, 76, 0.7)
 *  brown -- rgba(183, 73, 73, 0.7)
 *  blue -- rgba(29, 69, 106, 0.7)
 *  black --  rgba(16, 36, 55, 0.7)
 *  green -- rgba(0, 159, 153, 0.7)
 */

export const Overlay = styled.div`
    background: rgba(12, 23, 41, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    transition: all 0.4s ease-in-out 0s;

    ${props =>
        props.alt &&
        `
        @media (min-width: ${props.theme.screen.md}) {
            width: 70%;
            clip-path: polygon(0 0, 90% 0, 70% 100%, 0% 100%);
        }
    `};
`;

export const OverlayText = styled(Container)`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
