import { useEffect, useState, useRef } from 'react';

export const useIsScroll = () => {
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 300;
            if (navRef.current !== show) {
                setNavBackground(show);
            }
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    });

    return { navBackground };
};
