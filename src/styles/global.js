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
    grid-template-columns: ${(props) =>
        `repeat(auto-fit, minmax(${props.minWidth || '360px'}, 1fr))`};
    grid-template-rows: min-content;
    grid-gap: var(--spacer);
    justify-content: space-between;
    align-items: ${(props) => props.alignItems || 'stretch'};

    /* @media (min-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    } */
`;

// It is OK that the Fade becomes the GridItem,
// because the below grid item does not have any props specific to grid.
// Grid item properties are only needed when explicitly positioning items in a grid,
// like when stretching an item over seleveral tracks, or when not placing items in turn.
// (grid-area names on children and grid-template-areas on parent)
// (or just grid-column/row-start/end)
// Note: We could set the defaults for any children (*) inside
export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items: ${(props) => props.alignItems || 'stretch'};

    background: ${(props) => props.white && 'var(--alt-color)'};
    border-radius: ${(props) => props.rounded && '5px'};
    padding: ${(props) => props.padding || '0px'};

    .with-shadow {
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }

    // For wrapping to happen in a coulm, a height (or max-height) must be set on container

    // Set defaults for flex children here
    // Can be overwritten in each component
    > * {
        flex: 0 1 auto; // Default: 0 1 auto
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

export const Overlay = styled.div`
    display: grid;
    height: ${(props) => props.height};
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
    align-items: ${(props) => (props.left ? 'left' : 'center')};
    text-align: ${(props) => (props.left ? 'left' : 'center')};
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

// See Image component for notes
// GatsbyImage: A max width is set through GraphQL (width property), which then serves as the max width of the img (it scales down when container scales down)
// If no width is set, source size is its max
// To change width of container in JS, just change container size (ArtContainer), or add styles to GatsbyImage wrapper (see below)
// ArtContainer is display: flex
// Styles for GatsbyImage wrapper and img can be set via the classes "img-class" and "image-wrapper-class"
// Those classes are defined below and are passed to GatsbyImage (in Image component)
// See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#shared-props
// SVG is not controlled by GatsbyImage, so OK to define styles here / with StyledComponents
export const ArtContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-content: ${(props) => props.alignContent || `center`};

    // Opinionated defaults
    /* padding: 0 0 1.6rem 0; */
    margin-bottom: 1rem;

    .img-class {
        &:hover {
            ${(props) =>
                props.hover &&
                `
            transition: all 0.3s ease-out 0s;
            transform: scale(1.1);
            // border: 5px solid ${props.hoverColor || 'var(--primary-color)'};
            `};
        }
        ${(props) => props.grayscale && `filter: grayscale(100%);`};
        ${(props) => props.rounded && `border-radius: 0.375rem;`};
    }

    .image-wrapper-class {
        ${(props) => props.minWidth && `min-width: ${props.minWidth};`};
        ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`};
    }

    svg {
        // opinionated defaults
        fill: var(--secondary-color);
        width: 70px;
        height: 70px;
    }

    /* img {
        // Styles (size, rounded border, etc.) is set with prop on Image component
        
        @media (min-width: ${(props) => props.theme.screen.md}) {
            max-height: 400px;
        }
    } */

    &:hover {
        /* border-color: var(--primary-color); */
    }
`;

export const TextContainer = styled.p`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: stretch;
    color: var(--text-color);
    margin-bottom: 0;
`;
