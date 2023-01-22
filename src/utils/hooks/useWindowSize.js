import { useState, useEffect } from 'react';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
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

    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // Remove event listener on cleanup
    }, []);
    // Empty array ensures that effect is only run on mount.
    // Because, the listener should only be created once.

    const isMobile = windowSize.width < breakpointToPxNum('mobileL');

    return { windowSize, isMobile };
};

export default useWindowSize;
