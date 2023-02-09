import React, { useState, useContext, useCallback } from 'react';
import styled from 'styled-components';

import Link from '@common/link';
import { Divider } from '@styles/global';
import { useScrollMonitor } from '@utils/hooks/useScrollMonitor';
import { useIsHome } from '@utils/hooks/useCheckLocation';
import { useIsScroll } from '@utils/hooks/useIsScroll';
import { logout, isAuthenticated } from '@utils/auth';
import { ReactComponent as Logo } from '@static/nfront-logo.svg';
import { NavBarContext } from '@context/myProviders';
import useMenuCloser from '@utils/hooks/useMenuCloser';

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
        subMenu: {
            academy: {
                name: 'Academy',
                path: '/academy/',
            },
            logout: {
                name: 'Logout',
                path: '/',
                dividerTop: true,
                condition: isAuthenticated,
                action: () => isAuthenticated && logout(),
            },
        },
    },
};

const scrollIfHomeIds = Object.entries(menuItems)
    .filter(([key, menuObject]) => menuObject.scrollIfHome)
    .map(([key, menuObject]) => key.toString());

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
    const activeId = useScrollMonitor(scrollIfHomeIds);

    console.log('props', props);

    return (
        <ul>
            {Object.entries(menuItems).map(([id, pathObject], index, arr) => {
                return (
                    <ListLink
                        key={id}
                        id={id}
                        pathObject={pathObject}
                        onClick={() => {
                            props?.closeMenu && props.closeMenu();
                        }}
                        activeId={activeId}
                        {...props}
                    />
                );
            })}
        </ul>
    );
};

const ListLink = ({
    id,
    pathObject,
    location,
    children,
    closeMenu = () => {},
    activeId,
    ...rest
}) => {
    const [subMenuOpen, subMenuToggle] = useState(false);

    const closeSubMenu = useCallback(() => subMenuToggle(false), []);
    const refCallback = useMenuCloser(closeSubMenu);

    const { name, path, scrollIfHome, subMenu } = pathObject;

    const { pathname } = location || '';

    const { isHome } = useIsHome();

    // To scroll to top, when already on home page
    const replacedPath =
        isHome && scrollIfHome
            ? id === 'home'
                ? '#home'
                : path.replace(/^\/(\w+)\/$/, '#$1')
            : path;

    return (
        <NavItem
            className={`${
                (pathname?.includes(id) || activeId?.includes(id)) && 'active'
            } underscore`}
        >
            {!subMenu ? (
                <Link to={replacedPath} {...rest}>
                    {name}
                </Link>
            ) : (
                <>
                    <button
                        ref={refCallback}
                        className="link-button"
                        onClick={() => {
                            subMenuToggle((isOpen) => !isOpen);
                        }}
                    >
                        {name}
                    </button>{' '}
                    <SubMenu
                        subMenu={subMenu}
                        subMenuOpen={subMenuOpen}
                        subMenuToggle={subMenuToggle}
                    />
                </>
            )}

        </NavItem>
    );
};

const StyledContainer = styled.div`
    position: absolute;
    z-index: 1000;
    top: 100%;
    right: 0;

    min-width: 10rem;
    margin: 0;
    padding: 0.5rem 0rem;

    text-align: left;
    list-style: none;

    font-size: 1rem;
    color: #212529;
    background-color: #212529;

    border-color: var(--light-grey);
    border-radius: 0.375rem;
    border-width: 1px;

    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

    .subMenuItem:hover {
        background-color: #e9ecef;
        color: #1e2125;
    }
    .subMenuItem:active {
        background-color: #0d6efd;
        color: #fff;
    }
    .subMenuItem:disabled {
        color: #adb5bd;
    }

`;

const SubMenu = ({ subMenu, subMenuOpen, subMenuToggle }) => {

    return subMenuOpen ? (
        <StyledContainer>
            {Object.entries(subMenu).map(
                ([
                    subMenuKey,
                    { name, path, dividerTop, condition, action },
                ]) => {
                    return condition === undefined || condition() === true ? (
                        <div key={subMenuKey}>
                            {dividerTop && <Divider spacing="0" />}
                            <Link
                                display="block"
                                to={`${path}`}
                                className="px-1 py-05 subMenuItem"
                                onClick={() => {
                                    if (action) action();
                                    if (subMenuToggle)
                                        subMenuToggle((isOpen) => !isOpen);
                                }}
                            >
                                {name}
                            </Link>
                        </div>
                    ) : null;
                }
            )}
        </StyledContainer>
    ) : null;
};

export default Navbar;
