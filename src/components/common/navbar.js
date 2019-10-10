import React, { useState } from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useIsHome } from '@utils/hooks/useIsHome';
import { useIsScroll } from '@utils/hooks/useIsScroll';

import { ReactComponent as Logo } from '@static/logo.svg';

import {
    NavContainer,
    Nav,
    NavList,
    NavItem,
    Brand,
    Mobile,
    Hamburger,
} from '@styles/navstyles.js';

const ListLink = props => (
    <NavItem>
        <Link to={props.to}>{props.children}</Link>
    </NavItem>
);

/*
const mainMenu = ['About', 'Development', 'Case Studies'];
*/

const secondaryMenu = [
    {
        name: 'About',
        path: '/#about',
    },
    {
        name: 'Capital',
        path: '/venture-capital/',
    },
    {
        name: 'Development',
        path: '/#development',
    },
    {
        name: 'Case Studies',
        path: '/#casestudies',
    },
    {
        name: 'Contact',
        path: '/contact/',
    },
];

export default function Navbar(props) {
    /** open dropdown menu on mobile */
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleClassName = isMenuOpen ? 'hamburger is-open' : 'hamburger';
    const changeMenuColor = isMenuOpen ? 'is-open' : '';
    /** render different menu for other pages except home */
    const { isHome } = useIsHome();
    /** change navbar background on scroll */
    const { navBackground } = useIsScroll();

    const Menu = () => {
        return (
            <>
                {isHome ? (
                    <Scrollspy
                        items={[
                            'about',
                            'capital',
                            'development',
                            'casestudies',
                        ]}
                        currentClassName="active"
                    >
                        <NavItem>
                            <AnchorLink
                                onClick={() => setIsMenuOpen(false)}
                                href="#about"
                            >
                                About
                            </AnchorLink>
                        </NavItem>
                        <ListLink to="/venture-capital/">Capital</ListLink>
                        <NavItem>
                            <AnchorLink
                                onClick={() => setIsMenuOpen(false)}
                                href="#development"
                            >
                                Development
                            </AnchorLink>
                        </NavItem>
                        <NavItem>
                            <AnchorLink
                                onClick={() => setIsMenuOpen(false)}
                                href="#casestudies"
                            >
                                Case Studies
                            </AnchorLink>
                        </NavItem>
                        <ListLink to="/contact/">Contact</ListLink>
                    </Scrollspy>
                ) : (
                    <ul>
                        {secondaryMenu.map(({ name, path }) => {
                            return (
                                <NavItem key={name}>
                                    <Link to={path}>{name}</Link>
                                </NavItem>
                            );
                        })}
                    </ul>
                )}
            </>
        );
    };
    return (
        <Nav
            {...props}
            className={changeMenuColor}
            style={{
                backgroundColor: navBackground
                    ? 'var(--primary-color)'
                    : 'transparent',
            }}
        >
            <NavContainer>
                <Brand>
                    <Link to="/">
                        <Logo />
                    </Link>
                </Brand>
                <NavList desktop>
                    <Menu />
                </NavList>
            </NavContainer>
            <Mobile>
                <Hamburger
                    className={toggleClassName}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>

                {isMenuOpen && (
                    <NavList>
                        <Menu />
                    </NavList>
                )}
            </Mobile>
        </Nav>
    );
}

/**
{mainMenu.map(navItem => (
    <NavItem key={navItem}>
        <AnchorLink
            onClick={() => setIsMenuOpen(false)}
            href={`#${navItem.toLowerCase()}`}
        >
            {navItem}
        </AnchorLink>
    </NavItem>
))}
 */
