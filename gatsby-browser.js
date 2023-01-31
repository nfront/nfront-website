import '@styles/style.scss';
import React, { useState, useEffect } from 'react';
import { silentAuth } from '@utils/auth';
import WrapRootElement from '@components/context/wrapRootElement';
import { isSelectorValid } from '@utils/utils';

const SessionCheck = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleCheckSession = () => {
            setLoading(false);
        };

        silentAuth(handleCheckSession);
    }, []);

    return loading === false && <>{children}</>;
};

export const wrapRootElement = ({ element }) => {
    return (
        <SessionCheck>
            <WrapRootElement>{element}</WrapRootElement>
        </SessionCheck>
    );
};

export const onRouteUpdate = ({ location }) => {
    // This is only to smooth-scroll in the scenarios where we come from another page (or load url directly in address field),
    // to a url with a hash fragment. It is not for same-page scroll.
    console.log('SCROLL TO');
    window.scrollTo({
        top: 0
    });
    const { hash } = location;
    if (!hash || hash === '' || !isSelectorValid(`${location.hash}`)) return true;

    const target = document.querySelectorAll(`${location.hash}`)[0];
    if (!target) return true;
    console.log('SCROLLLLL');

    const navBarOffset = 76;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navBarOffset;

    // if (window.scrollBy) { window.scrollBy({top: 1}) };

    if (window.scrollBy) {
        window.scrollBy({ top: 1 });
        window.scrollTo({
            // top: Specifies number of pixels along Y axis to scroll window
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
    return true;
};
