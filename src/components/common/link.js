import React, { useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { NavBarContext } from '@context/myProviders.js';

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
    children,
    anchorRef,
    navRef,
    to,
    activeClassName,
    partiallyActive,
    callback=()=>{},
    ...other
}) => {
    // Tailor the following test to your environment.
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to);
    
    // Smooth scroll if it starts with #
    const samePage = /^#/.test(to);

    const navRef2 = useContext(NavBarContext); // Returns value of passed context

    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
        return (
            <GatsbyLink
                to={to}
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
        console.log(`navRefState: ${navRef2}`);
        const {height: headerOffset} = navRef2.current.getBoundingClientRect() || {height: 0};
        console.log(`headerOffset: ${headerOffset}`);
        const elementPosition = anchorRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        // anchorRef.current.scrollIntoView({ behavior: 'smooth' });
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'

        });
    };

    // <a> with ref, for same page links.
    // Best to switch to "button" element.
    if (samePage) {
        return (
            <button className="link-button" onClick={onClick} {...other}>
                {children}
            </button>
        );
    }

    // <a> for external links
    return (
        <a href={to} {...other} rel="noreferrer noopener" target="_blank">
            {children}
        </a>
    );
};

export default Link;
