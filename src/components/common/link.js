import React, { useContext } from 'react';
import { isSelectorValid } from '@utils/utils';
import { Link as GatsbyLink } from 'gatsby';

import { NavBarContext } from '@context/myProviders.js';

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
    children,
    anchorRef,
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
    const internal = /^\/(?!\/)/.test(to);

    // Smooth scroll if it starts with #
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
        console.log(headerOffset);

        const url = new URL(window.location);
        url.hash = to;

        window.history.pushState({}, '', url);

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    // <a> with ref, for same page links.
    // Best to switch to "button" element.
    if (samePage) {
        return (
            <button style={{...style}} className="link-button" onClick={onClick} {...other}>
                {children}
            </button>
        );
    }

    // <a> for external links
    return (
        <a href={to} style={{...style}} {...other} rel="noreferrer noopener" target="_blank">
            {children}
        </a>
    );
};

export default Link;
