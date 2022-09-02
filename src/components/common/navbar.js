import React, { useState } from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Scrollspy } from '@makotot/ghostui';
import { useIsHome } from '@utils/hooks/useIsHome';
import { useIsScroll } from '@utils/hooks/useIsScroll';
import { logout, isAuthenticated } from '@utils/auth';
import { ReactComponent as Logo } from '@static/nfront-logo.svg';

import {
    NavContainer,
    Nav,
    NavList,
    NavItem,
    Brand,
    Mobile,
    Hamburger,
} from '@styles/navstyles.js';

const ListLink = (props) => (
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
        name: 'Thesis',
        path: '/thesis/',
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
    },
    {
        name: 'Careers',
        path: '/jobs/',
    },
    {
        name: 'Team & Mentors',
        path: '/team-mentors/',
    },
    {
        name: 'News',
        path: '/news/',
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
                        items={['top', 'contact']}
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
                        <NavItem>
                            <AnchorLink
                                onClick={() => setIsMenuOpen(false)}
                                href="#contact"
                            >
                                Contact
                            </AnchorLink>
                        </NavItem>
                        <ListLink to="/thesis/">Thesis</ListLink>
                        <ListLink to="/portfolio/">Portfolio</ListLink>
                        {/* <ListLink to="/training/">Training</ListLink> */}
                        <ListLink to="/jobs">careers</ListLink>
                        <ListLink to="/team-mentors/">Team & Mentors</ListLink>
                        <ListLink to="/news/">News</ListLink>
                        {isAuthenticated() && (
                            <NavItem
                                onClick={(e) => {
                                    logout();
                                    e.preventDefault();
                                }}
                            >
                                <AnchorLink href="#">Logout</AnchorLink>
                            </NavItem>
                        )}
                        <ListLink to="/training/">
                            <button className="call-to-action-button">
                                Academy
                            </button>
                        </ListLink>
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
                        {isAuthenticated() && (
                            <NavItem
                                onClick={(e) => {
                                    logout();
                                    e.preventDefault();
                                }}
                            >
                                <AnchorLink href="#">Logout</AnchorLink>
                            </NavItem>
                        )}
                        <ListLink to="/training/">
                            <button className="call-to-action-button">
                                Academy
                            </button>
                        </ListLink>
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
