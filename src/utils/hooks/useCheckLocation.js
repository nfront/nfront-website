import { useEffect, useState } from 'react';

export const useIsHome = () => {
    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }, []);

    return { isHome };
};

export const useIsAcademy = () => {
    const [isAcademy, setIsAcademy] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/academy/') {
            setIsAcademy(true);
        } else {
            setIsAcademy(false);
        }
    }, []);

    return { isAcademy };
};
