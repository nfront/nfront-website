import React, { useState, useContext } from 'react';

import Link from '@common/link';
import { useScrollMonitor } from '@utils/hooks/useScrollMonitor';
import { useIsHome } from '@utils/hooks/useCheckLocation';
import { useIsScroll } from '@utils/hooks/useIsScroll';
import { logout, isAuthenticated } from '@utils/auth';
import { ReactComponent as Logo } from '@static/nfront-logo.svg';
import { NavBarContext } from '@context/myProviders';
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

const menuItems = {
    home: {
        name: 'Home',
        path: '/',
        scrollIfHome: true,
    },
    thesis: {
        name: 'Thesis',
        path: '/thesis/',
    },
    portfolio: {
        name: 'Portfolio',
        path: '/portfolio/',
    },
    jobs: {
        name: 'Careers',
        path: '/jobs/',
    },
    team: {
        name: 'Team & Mentors',
        path: '/team-mentors/',
    },
    news: {
        name: 'News',
        path: '/news/',
    },
    contact: {
        name: 'Contact',
        path: '/contact/',
        scrollIfHome: true,
    },
    academy: {
        name: 'Academy',
        path: '/academy/',
    },
    logout: {
        name: 'Logout',
        path: '#',
    },
};

const Navbar = ({ fluid, threshold, ...rest }) => {
    /** open dropdown menu on mobile */
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleClassName = isMenuOpen ? 'hamburger is-open' : 'hamburger';
    const changeMenuColor = isMenuOpen ? 'is-open' : '';

    /** change navbar background on scroll */
    const navBackground = useIsScroll(threshold);

    const { setNavRect } = useContext(NavBarContext);

    console.log('RENDER NAVBAR');

    return (
        <Nav
            fluid={fluid}
            {...rest}
            className={changeMenuColor}
            style={{
                backgroundColor: navBackground
                    ? 'var(--primary-color)'
                    : 'transparent',
            }}
            ref={setNavRect}
        >
            <NavContainer>
                <Brand>
                    <Link to="/">
                        <Logo />
                    </Link>
                </Brand>
                <NavList desktop>
                    <Menu {...rest} />
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
                        <Menu closeMenu={setIsMenuOpen} {...rest} />
                    </NavList>
                )}
            </Mobile>
        </Nav>
    );
};

const Menu = (props) => {
    return (
        <ul>
            {Object.entries(menuItems).map(([id, pathObject]) => (
                <ListLink key={id} id={id} pathObject={pathObject} {...props} />
            ))}
        </ul>
    );
};

const ListLink = ({
    id,
    pathObject,
    location,
    children,
    closeMenu = () => {},
    ...rest
}) => {
    const scrollMonitorIdList = ['home', 'contact'];
    const activeId = useScrollMonitor(scrollMonitorIdList);

    const { name, path, scrollIfHome } = pathObject;

    const { pathname } = location || '';

    const { isHome } = useIsHome();

    const replacedPath =
        isHome && scrollIfHome
            ? id === 'home'
                ? '#home'
                : path.replace(/^\/(\w+)\/$/, '#$1')
            : path;

    if (pathObject === menuItems.logout && !isAuthenticated()) return null;

    const combinedClickHandler =
        pathObject === menuItems.logout
            ? () => {
                  closeMenu();
                  logout();
              }
            : () => closeMenu();

    return (
        <NavItem
            onClick={combinedClickHandler}
            className={clsx(
                pathObject === menuItems.academy && 'underscore',
                (pathname?.includes(id) || activeId?.includes(id)) && 'active'
            )}
        >
            <Link to={replacedPath} {...rest}>
                {pathObject === menuItems.academy ? (
                    <button className="call-to-action-button">{name}</button>
                ) : (
                    <>{name}</>
                )}
            </Link>
        </NavItem>
    );
};

export default Navbar;
