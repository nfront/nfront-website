import { useEffect, useState } from 'react';

export const useIsHome = () => {
    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    });

    return { isHome };
};
