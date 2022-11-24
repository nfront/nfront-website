import styled from 'styled-components';
import wave from '@images/art/wave.svg';
import { GatsbyImage } from 'gatsby-plugin-image';

const theme = {
    screen: {
        mobile: '600px', // 37.5em <-- Corresponds to mobile SCSS breakpoint
        xs: '575px', // 36em
        sm: '767px', // 48em
        md: '991px', // 62em <-- Closest to lg SCSS breakpoint
        desktop: '1120', // 70em <-- Corresponds to desktop SCSS breakpoint
        lg: '1199px', // 75em
    },
};
export default theme;

export const breakpoints = {
    mobile: 600,
    md: 800,
    lg: 1024,
    desktop: 1120,
};

export const Container = styled.div`
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;

    ${(props) =>
        props.fluid &&
        `
        max-width: 100%;
    `};
`;

export const Section = styled.section`
    padding-top: 3rem;
    padding-bottom: 3rem;
    @media (min-width: ${(props) => props.theme.screen.mobile}) {
        padding-bottom: 6rem;
    }

    ${(props) =>
        props.alt &&
        `
        background-color: var(--accent-color);
    `};

    ${(props) =>
        /* Same as accent-color */
        props.shade &&
        `
        background-color: var(--shade-color);  
    `};

    ${(props) =>
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

    ${(props) =>
        props.accent === 'alt2' &&
        `
        background-color: var(--primary-color);
        h2 {
            color: var(--accent-color);
        };
    `};
`;

export const SectionTitle = styled.div`
    max-width: var(--max-width);
    margin-bottom: 3rem;
    text-align: center;
    margin: 0 auto;
    padding: 0 1.5rem;

    @media (min-width: ${(props) => props.theme.screen.sm}) {
        margin-bottom: 3rem;
    }

    ${(props) =>
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
    grid-gap: 30px;
    justify-content: space-between;

    @media (min-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    // For wrapping to happen in a coulm, a height (or max-height) must be set on container

    // Set defaults for flex children here
    // Can be overwritten in each component
    > * {
        flex: 1 1 auto; // Default: 0 1 auto
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
    display: grid;
    height: ${props => props.height};
    border-radius: inherit;
    
    * {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        border-radius: inherit;
    }
`;

export const OverlayText = styled(Container)`
    // By using the same grid area for both, they are stacked on top of each other
    grid-area: 1/1;
    z-index: 2;

    position: relative;
    opacity: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: ${props => props.left ? 'left' : 'center'};
    text-align: ${props => props.left ? 'left' : 'center'};
`;

export const Shading = styled.div`
    grid-area: 1/1;
    z-index: 1;

    background: rgba(12, 23, 41, 0.8);
    opacity: 1;
    transition: all 0.4s ease-in-out 0s;

    ${(props) =>
        props.alt &&
        `
        @media (min-width: ${props.theme.screen.md}) {
            width: 70%;
            clip-path: polygon(0 0, 92% 0, 71% 100%, 0% 100%);
        }
    `};
`;

export const BgImage = styled(GatsbyImage)`
    grid-area: 1/1;
    z-index: 0;
`;

export const WaveBackground = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 25%;
`;

export const AnyBackground = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => console.log('hreh', props.url)});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;

    ${(props) =>
        props.shaded &&
        `
        box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, .2);
    `};
`;

export const BoxText = styled.div`
    text-align: center;

    padding: 1.5rem 1.5rem 6rem 1.5rem;

    h3 {
        font-weight: 500;
        margin-bottom: 0.4rem;
    }
    p {
        margin-bottom: 0;
        font-size: 16px;
    }

    ${(props) =>
        props.white &&
        `
        h3, p { color: white !important; }
    `};
`;

export const BoxArt = styled.div`
    padding-top: 1.5rem;
    max-width: 80px;
    text-align: center;
    margin: 0 auto;
    /* overflow: hidden; */

    @media (min-width: ${(props) => props.theme.screen.xs}) {
        max-width: 100px;
        margin-bottom: 0;
    }
`;
