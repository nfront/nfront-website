import { useLayoutEffect, useState, useContext } from 'react';
import { NavBarContext } from '@context/myProviders';

// Restrict value to be between the range [0, value]
const clamp = (value) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

export const useScrollMonitor = (ids) => {
    const [activeId, setActiveId] = useState('');
    const { navRect } = useContext(NavBarContext);

    useLayoutEffect(() => {
        const { height: navOffset } = navRect || { height: 0 };
        const elements = ids.map((id) => document.getElementById(id));

        const listener = () => {
            const scroll = window.pageYOffset;
            const windowHeight = window.innerHeight;

            const position = elements
                .map((element) => {
                    if (!element) return { id: '', top: -1, bottom: -1 };
                    
                    const { id } = element;
                    const rect = element.getBoundingClientRect();
                    const top = clamp(rect.top + scroll - navOffset - (windowHeight - navOffset)*0.5);

                    const bottom = clamp(rect.bottom + scroll - navOffset);

                    return { id, top, bottom };
                })
                .find(({ top, bottom }) => isBetween(scroll, top, bottom));

            setActiveId(position?.id || '');
        };

        listener();

        window.addEventListener('resize', listener);
        window.addEventListener('scroll', listener);

        return () => {
            window.removeEventListener('resize', listener);
            window.removeEventListener('scroll', listener);
        };
    }, [ids, navRect]);

    return activeId;
};
