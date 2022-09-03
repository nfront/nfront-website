import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useScrollMonitor } from '@utils/hooks/useScrollMonitor';
import { useIsHome } from '@utils/hooks/useIsHome';
import { useIsScroll } from '@utils/hooks/useIsScroll';
import { logout, isAuthenticated } from '@utils/auth';
import { ReactComponent as Logo } from '@static/nfront-logo.svg';
import clsx from 'clsx';

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
    <NavItem className={clsx(props.to !== '/training/' && "underscore")}>
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
        id: 'top',
    },
    {
        name: 'Thesis',
        path: '/thesis/',
        id: 'thesis',
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
        id: 'portfolio',
    },
    {
        name: 'Careers',
        path: '/jobs/',
        id: 'jobs',
    },
    {
        name: 'Team & Mentors',
        path: '/team-mentors/',
        id: 'team',
    },
    {
        name: 'News',
        path: '/news/',
        id: 'news',
    },
    {
        name: 'Contact',
        path: '/contact/',
        id: 'contact',
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
    const navBackground = useIsScroll();

    const scrollMonitorIdList = ['top', 'contact'];
    const navRef = useRef(null);
    const activeId = useScrollMonitor(scrollMonitorIdList, navRef);

    const ListLinkScroll = (props) => (
        <NavItem className={clsx("underscore", props.to === activeId && 'active')}>
            <AnchorLink onClick={props.callback} href={`#${props.to}`}>
                {props.children}
            </AnchorLink>
        </NavItem>
    );

    // const headerHeight = Nav.getBoundingClientRect();
    const Menu = () => {
        return (
            <>
                {isHome ? (
                    <ul>
                        <ListLinkScroll to="top" callback={() => setIsMenuOpen(false)}>Home</ListLinkScroll>
                        <ListLink to="/thesis/">Thesis</ListLink>
                        <ListLink to="/portfolio/">Portfolio</ListLink>
                        {/* <ListLink to="/training/">Training</ListLink> */}
                        <ListLink to="/jobs">careers</ListLink>
                        <ListLink to="/team-mentors/">Team & Mentors</ListLink>
                        <ListLink to="/news/">News</ListLink>
                        <ListLinkScroll to="contact" callback={() => setIsMenuOpen(false)}>Contact</ListLinkScroll>
                        {isAuthenticated() && (
                            <ListLinkScroll to="#" callback={(e) => { logout(); e.preventDefault(); }}>
                                Logout
                            </ListLinkScroll>
                        )}
                        <ListLink to="/training/">
                            <button className="call-to-action-button">
                                Academy
                            </button>
                        </ListLink>
                    </ul>
                ) : (
                    <ul>
                        {secondaryMenu.map(({ name, path, id }) => {
                            return (
                                <NavItem
                                    key={id}
                                    className={clsx(
                                        id === activeId && 'active'
                                    )}
                                >
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
            ref={navRef}
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
