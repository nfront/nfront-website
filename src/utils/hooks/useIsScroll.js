import { useEffect, useState } from 'react';

export const useIsScroll = (threshold = 300) => {
    const [navBackground, setNavBackground] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            scrollY >= threshold
                ? setNavBackground(true)
                : setNavBackground(false);
        };

        handleScroll();
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return navBackground;
};
