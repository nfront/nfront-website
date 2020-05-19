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
`;

export const SectionTitle = styled.div`
    margin-bottom: 3rem;
    text-align: center;
    padding: 0 1.5rem;

    @media (min-width: ${props => props.theme.screen.sm}) {
        margin-bottom: 3rem;
    }
`;

export const Box = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    /* align-items: center; */
    justify-content: center;
    background: var(--alt-color);
    @include border(all);
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

    @media (min-width: ${props => props.theme.screen.sm}) {
        width: 70%;
        clip-path: polygon(0 0, 90% 0, 70% 100%, 0% 100%);
    }
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
