import styled from 'styled-components';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;

    @media ${breakpoints.laptop} {
        padding: 0;
    }
`;

export const Nav = styled.nav`
    position: absolute;
    width: 100%;
    margin: 0 auto;
    z-index: 999;
    padding: 1rem 0;
    
    
    @media ${breakpoints.tablet} {
        font-size: 90%;
    }
    
    @media ${breakpoints.laptop} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    @media ${breakpoints.laptop} {
        padding: 1rem 1.5rem;
    }

    a,
    .link-button {
        font-size: 90%;
        font-weight: 500;
        font-family: inherit;

        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--accent-color);
        &:hover {
            color: var(--accent-color);
        }
    }

    &.is-open {
        /** change background and link color when menu is open */
        background-color: var(--alt-color) !important;
        height: 100vh;
        overflow: hidden;
        a, .link-button {
            color: var(--primary-color);
        }
        svg {
            fill: var(--primary-color) !important;
        }
    }

    ${(props) =>
        props.fluid /** stretch menu to 100% width  */ &&
        `
        max-width: 100%;
    `};
`;

export const NavList = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 1rem 0;

        ${(props) =>
        props.desktop &&
        `
        display: none;
        margin: 0;
        
        @media ${breakpoints.laptop} {
            align-items: center;
            display: flex;
            flex-direction: row;
        }
        `};
    }
`;

export const NavItem = styled.li`
    position: relative;
    margin-left: 0;
    margin-bottom: 0;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid rgba(225, 225, 225, 0.4);

    &:first-child {
        border-top: 1px solid rgba(225, 225, 225, 0.4);
    }

    @media ${breakpoints.laptop} {
        margin-left: 1.5rem;
        padding: 0;
        border: none;
        &:first-child {
            border: none;
        }
    }

    &.active {
        a {
            color: var(--yellow);
        }
    }

    @media ${breakpoints.laptop} {
        &.underscore::after {
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
        &.underscore:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
`;

export const Brand = styled.div`
    svg {
        height: 40px;
        fill: var(--accent-color);
        vertical-align: middle;
    }
`;

export const Mobile = styled.div`
    opacity: 1;
    display: block;
    visibility: visible;

    @media ${breakpoints.laptop} {
        opacity: 0;
        display: none;
        transition: all 0.25s ease;
    }
`;

export const Hamburger = styled.div`
    position: absolute;
    top: 1.3rem;
    right: 1.5rem;
    width: 25px;
    cursor: pointer;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-highlight-color: transparent;

    span {
        display: block;
        opacity: 1;
        width: 100%;
        height: 2px;
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
            transform: translateY(7px) translateY(-50%) rotate(45deg);
        }
        span:nth-child(2) {
            opacity: 0;
        }
        span:last-child {
            transform: translateY(-7px) translateY(50%) rotate(-45deg);
        }
    }
`;
