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

export const useIsTraining = () => {
    const [isTraining, setIsTraining] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/training/') {
            setIsTraining(true);
        } else {
            setIsTraining(false);
        }
    }, []);

    return { isTraining };
};
