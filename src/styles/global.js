import styled from 'styled-components';
import wave from '@images/art/wave.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import { pxToRem } from '@utils/utils';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';

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

        h2 {
            color: var(--accent-color);
        };

        hr {
            background: rgba(225, 225, 225, 0.2);
        }
    `};
`;

export const SectionTitle = styled.div`
    max-width: var(--max-width);
    margin-bottom: 3rem;
    text-align: center;
    margin: 0 auto 1.666rem auto;
    
    padding: 0 1.5rem;

    @media ${breakpoints.tablet} {
        margin-bottom: 3rem;
    }

    ${(props) =>
        props.alt &&
        `
        padding-left: 0;
        text-align: left;  
    `};
`;

// min() makes it 100% on small screens
export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
        `repeat(auto-fit, minmax(min(${
            props.minWidth || '360px'
        }, 100%), 1fr))`};
    grid-gap: var(--spacer);
    align-items: ${(props) => props.alignItems || 'stretch'};
`;

// It is OK that the Fade (and other elements) become grid items,
// because the below grid item (now called FlexColumn) does not have any props specific to grid.
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
    padding: ${(props) => props.padding || '0px'};

    .with-shadow {
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }

    // For wrapping to happen in a coulmn, a height (or max-height) must be set on container

    // Set defaults for flex children here
    // Can be overwritten in each component
    > * {
        flex: 0 1 ${(props) => props.basis || 'auto'};
    }
`;

// Use max-width instead of basis
// Because, elements get too wide on small screens
// Need basis as well, to avoid elements shrinking too narrow
// TODO: Check if last line is needed and why thesis can be so broad
// Better to change to flex grow, instead of changing direction
// So the alignment input means the same between screen sizes
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: ${(props) => props.justifyContent || 'center'};
    align-items: ${(props) => props.alignItems || 'stretch'};
    grid-gap: ${(props) => props.gap || 'var(--spacer)'};

    > * {
        height: ${(props) => props.height || 'auto'};
        max-width: ${(props) => props.maxWidth || 'none'};
        flex: 0 1 100%;
    }

    @media ${breakpoints.tablet} {
        > * {
            flex: 0 1
                ${(props) =>
                    props.twoByTwo
                        ? `calc(50% - ${props.gap || `var(--spacer)`}/2)`
                        : props.basis || 'auto'};
        }
    }

    @media ${breakpoints.laptop} {
        flex-wrap: wrap;
        > * {
            flex: 0 1 ${(props) => props.basis || 'auto'};
        }
    }

    .with-shadow {
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }
`;

export const Overlay = styled.div`
    display: grid;
    height: ${(props) => props.height || '100%'};
    border-radius: inherit;

    div {
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
        props.polygonShading &&
        `
        @media ${breakpoints.laptop} {
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
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 25%;
`;

export const AnyBackground = styled.div`
    background-image: url(${(props) => props.url});
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

    padding: 1.5rem;

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

    @media ${breakpoints.mobileL} {
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
        
        @media ${breakpoints.laptop} {
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

export const TooltipSwiperContainer = styled(Container)`
    .swiper-slide-active .tooltip {
        background-color: var(--primary-color);
        color: white;
        position: relative;
        transition: all 0.5s;
    }
    .swiper-slide-active .tooltip::after {
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid var(--primary-color);
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        transform: translate(-50%, -0%);
    }
    .tooltip {
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 2rem;
        font-size: 1rem;
        @media ${breakpoints.laptop} {
            font-size: ${pxToRem(14)};
        }
    }
`;
