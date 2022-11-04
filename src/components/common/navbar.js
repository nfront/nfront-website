import React, { useState, forwardRef, useEffect } from 'react';
import Link from '@common/link';
import { useScrollMonitor } from '@utils/hooks/useScrollMonitor';
import { useIsHome } from '@utils/hooks/useCheckLocation';
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

// const ListLinkScroll = (props) => (
//     <NavItem className={clsx('underscore', props.to === activeId && 'active')}>
//         <Link onClick={props.callback} href={`#${props.to}`}>
//             {props.children}
//         </Link>
//     </NavItem>
// );

const ListLink = (props) => {
    // const scrollMonitorIdList = ['top', 'contact'];
    // const activeId = useScrollMonitor(scrollMonitorIdList, props.navRef);

    // console.log('Before mount: ', props);

    return (
        <NavItem
            className={clsx(
                props.to !== '/academy/' && 'underscore',
                // props.to === activeId && 'active'
            )}
        >
            <Link {...props}>
                {props.children}
            </Link>
        </NavItem>
    );
};

const Menu = (props) => {
    /** render different menu for other pages except home */
    const { isHome } = useIsHome();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollMonitorIdList = ['top', 'contact'];
    const activeId = useScrollMonitor(scrollMonitorIdList, props.navRef);

    return (
        <>
            {isHome ? (
                <ul>
                    <ListLink
                        to="#top"
                        callback={() => setIsMenuOpen(false)}
                        navRef={props.navRef}
                        anchorRef={props.frontPageRefs?.aboutUsRef}
                    >
                        Home
                    </ListLink>
                    <ListLink to="/thesis/">Thesis</ListLink>
                    <ListLink to="/portfolio/">Portfolio</ListLink>
                    {/* <ListLink to="/academy/">Academy</ListLink> */}
                    <ListLink to="/jobs">careers</ListLink>
                    <ListLink to="/team-mentors/">Team & Mentors</ListLink>
                    <ListLink to="/news/">News</ListLink>
                    <ListLink
                        to="#contact"
                        callback={() => setIsMenuOpen(false)}
                        navRef={props.navRef}
                        anchorRef={props.frontPageRefs?.contactUsRef}
                    >
                        Contact
                    </ListLink>
                    {isAuthenticated() && (
                        <ListLink
                            to="#"
                            callback={(e) => {
                                logout();
                                e.preventDefault();
                            }}
                        >
                            Logout
                        </ListLink>
                    )}
                    <ListLink to="/academy/">
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
                                className={clsx(id === activeId && 'active')}
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
                            <Link href="#">Logout</Link>
                        </NavItem>
                    )}
                    <ListLink to="/academy/">
                        <button className="call-to-action-button">
                            Academy
                        </button>
                    </ListLink>
                </ul>
            )}
        </>
    );
};

const Navbar = forwardRef((props, ref) => {
    /** open dropdown menu on mobile */
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleClassName = isMenuOpen ? 'hamburger is-open' : 'hamburger';
    const changeMenuColor = isMenuOpen ? 'is-open' : '';

    /** change navbar background on scroll */
    const navBackground = useIsScroll();

    return (
        <Nav
            {...props}
            className={changeMenuColor}
            style={{
                backgroundColor: navBackground
                    ? 'var(--primary-color)'
                    : 'transparent',
            }}
            ref={ref}
        >
            <NavContainer>
                <Brand>
                    <Link to="/">
                        <Logo />
                    </Link>
                </Brand>
                <NavList desktop>
                    <Menu {...props} />
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
                        <Menu {...props} />
                    </NavList>
                )}
            </Mobile>
        </Nav>
    );
});

export default Navbar;

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
