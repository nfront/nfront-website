import { useState, useEffect } from 'react';
import { breakpointToPxNum } from '@utils/utils';

const useWindowSize = () => {
    // Only when script is evaluated by browser does window exist.
    // Careful not to conditionally render anything, based on windowSize.
    // Because: On server, windowSize will be undefined and on client-side hydration it will be have a value.
    // Hydration done by React in browser, expects that DOM tree from server is identical to DOM tree from client.
    // More here: https://joshwcomeau.com/react/the-perils-of-rehydration/

    const [windowSize, setWindowSize] = useState({
        width: window?.innerWidth,
        height: window?.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Empty array ensures that effect is only run on mount.
    // Because, the listener should only be created once.

    let isMobile,
        isTablet,
        isLaptop,
        isDesktop = false;
    if (windowSize.width <= breakpointToPxNum('mobileL')) {
        isMobile = true;
    } else if (windowSize.width <= breakpointToPxNum('tablet')) {
        isTablet = true;
    } else if (windowSize.width <= breakpointToPxNum('laptop')) {
        isLaptop = true;
    } else {
        isDesktop = true;
    }

    return { windowSize, isMobile, isTablet, isLaptop, isDesktop };
};

export default useWindowSize;
