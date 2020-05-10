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
        name: 'Home',
        path: '/',
    },
    {
        name: 'Support & Capital',
        path: '/venture-capital/',
    },
    {
        name: 'Portfolio',
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
                        items={['top', 'about', 'casestudies', 'contact']}
                        currentClassName="active"
                    >
                        <NavItem>
                            <AnchorLink
                                onClick={() => setIsMenuOpen(false)}
                                href="#top"
                            >
                                Home
                            </AnchorLink>
                        </NavItem>
                        {/* <ListLink to="/venture-capital/">Support & Capital</ListLink> */}
                        <NavItem>
                            <AnchorLink
                                onClick={() => setIsMenuOpen(false)}
                                href="#about"
                            >
                                Support & Capital
                            </AnchorLink>
                        </NavItem>
                        <NavItem>
                            <AnchorLink
                                onClick={() => setIsMenuOpen(false)}
                                href="#casestudies"
                            >
                                Portfolio
                            </AnchorLink>
                        </NavItem>
                        <NavItem>
                            <AnchorLink
                                onClick={() => setIsMenuOpen(false)}
                                href="#contact"
                            >
                                Contact
                            </AnchorLink>
                        </NavItem>
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
