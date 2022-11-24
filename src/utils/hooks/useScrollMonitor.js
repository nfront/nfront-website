import { useLayoutEffect, useState } from 'react';

// Restrict value to be between the range [0, value]
const clamp = (value) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

export const useScrollMonitor = (ids, navRef) => {
    const [activeId, setActiveId] = useState('');

    useLayoutEffect(() => {
        // console.log('IN SCROLLM: ', navRef);
        const listener = () => {
            const scroll = window.pageYOffset;

            // A HACK, NAVREF DOES NOT WORK
            const {height: navOffset} = navRef?.current?.getBoundingClientRect() || {height: 0};

            const position = ids
                .map((id) => {
                    const element = document.getElementById(id);

                    if (!element) return { id, top: -1, bottom: -1 };

                    const rect = element.getBoundingClientRect();
                    const top = clamp(rect.top + scroll - navOffset);
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
    }, [ids, navRef]);

    return activeId;
};
