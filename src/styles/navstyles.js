import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${props => props.theme.screen.md}) {
        padding: 0 1.5rem;
    }
`;

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    z-index: 999;
    padding: 1rem 1.5rem;

    @media (max-width: ${props => props.theme.screen.md}) {
        position: absolute;
    }

    @media (max-width: ${props => props.theme.screen.md}) {
        padding: 1rem 0;
    }

    a {
        color: var(--accent-color);
    }

    &.is-open {
        /** change background and link color when menu is open */
        background-color: var(--alt-color) !important;
        height: 100vh;
        overflow: hidden;
        a {
            color: var(--primary-color);
        }
        svg {
            fill: var(--primary-color) !important;
            .logo_svg__inner {
                fill: var(--accent-color) !important;
            }
        }
    }

    font-size: 90%;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;

    ${props =>
        props.fluid /** stretch menu to 100% width  */ &&
        `
        max-width: 100%;
    `};
`;

export const NavList = styled.div`
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        margin: 1rem 0;

        ${props =>
            props.desktop &&
            `
            flex-direction: row;
            margin: 0;
            
            @media (max-width: ${props.theme.screen.md}) {
                display: none;
            }
        `};
    }
`;

export const NavItem = styled.li`
    position: relative;
    margin-bottom: 0;
    margin-left: 1.5rem;

    @media (max-width: ${props => props.theme.screen.md}) {
        margin-left: 0;
        padding: 0.75rem 1.5rem;
        border-bottom: 1px solid rgba(225, 225, 225, 0.4);

        &:first-child {
            border-top: 1px solid rgba(225, 225, 225, 0.4);
        }
    }

    &.active {
        a {
            color: var(--yellow);
        }
    }

    @media (min-width: ${props => props.theme.screen.md}) {
        ::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 1px;
            bottom: 0;
            left: 0;
            background-color: var(--yellow);
            transform-origin: bottom right;
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        }
        :hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
`;

export const Brand = styled.div`
    svg {
        width: 80px;
        fill: var(--accent-color);

        .logo_svg__inner {
            fill: var(--primary-color);
        }
    }
`;

export const Mobile = styled.div`
    opacity: 0;
    display: none;
    transition: all 0.25s ease;

    @media (max-width: ${props => props.theme.screen.md}) {
        opacity: 1;
        display: block;
        visibility: visible;
    }
`;

export const Hamburger = styled.div`
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    width: 25px;
    cursor: pointer;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-highlight-color: transparent;

    span {
        display: block;
        opacity: 1;
        width: 100%;
        height: 3px;
        margin: 4px 0;
        background: var(--accent-color);
        transition: all 0.25s ease-in-out;

        &:nth-child(2) {
            width: 70%;
        }
    }

    &.is-open {
        span {
            background: var(--primary-color);
        }
        span:first-child {
            transform: translateY(8px) translateY(-50%) rotate(45deg);
        }
        span:nth-child(2) {
            opacity: 0;
        }
        span:last-child {
            transform: translateY(-9px) translateY(50%) rotate(-45deg);
        }
    }
`;
