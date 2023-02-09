import React, { useContext } from 'react';
import { isSelectorValid } from '@utils/utils';
import { Link as GatsbyLink } from 'gatsby';

import { NavBarContext } from '@context/myProviders.js';

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
    children,
    to,
    activeClassName,
    partiallyActive,
    display,
    flexDirection,
    gap,
    justifyContent,
    alignItems,
    callback = () => {},
    ...other
}) => {
    // Tailor the following test to your environment.
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)(?!_)/.test(to);
    console.log('to', to);
    console.log('internal', internal);

    // Smooth scroll if it starts with #.
    // Handles smoothscroll for links from page X to fragment on same page X.
    // When linking to fragments on other pages, the code in gatsby-browser.js handles smooth scroll.
    const samePage = /^#/.test(to);

    const { navRect } = useContext(NavBarContext); // Returns value of passed context

    const style = {};
    if(Boolean(display)) style.display = display;
    if(Boolean(gap)) style.gap = gap;
    if(Boolean(alignItems)) style.alignItems = alignItems;
    if(Boolean(flexDirection)) style.flexDirection = flexDirection;
    if(Boolean(justifyContent)) style.justifyContent = justifyContent;

    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
        return (
            <GatsbyLink
                to={to}
                style={{...style}}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                {...other}
            >
                {children}
            </GatsbyLink>
        );
    }

    const onClick = (e) => {
        e.preventDefault();
        callback();
        const headerOffset = navRect?.height || '70';

        if(!isSelectorValid(`${to}`)) return;

        let target = document.querySelectorAll(`${to}`)[0];

        if (!target) return;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

        const url = new URL(window.location);
        url.hash = to;

        window.history.pushState({}, '', url);

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    // Button element for same page links (when "to" prop starts with "#").
    // Simply fires a smooth scroll action, and adds path to navigation history.
    // This does not handle smooth scroll when linking to hash fragment on another page.
    // That is handled by code in gatsby-browser.js.
    if (samePage) {
        return (
            <button style={{...style}} className="link-button" onClick={onClick} {...other}>
                {children}
            </button>
        );
    }

    // <a> for external links and for download links.
    return (
        <a href={to} style={{...style}} {...other}>
            {children}
        </a>
    );
};

export default Link;
