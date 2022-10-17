import { useEffect, useState } from 'react';

export const useIsScroll = () => {
    const [navBackground, setNavBackground] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        scrollY > 300 ? setNavBackground(true) : setNavBackground(false);
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return navBackground;
};
