import { useState, useLayoutEffect } from 'react';


const clamp = (value) => Math.max(0, value);


function useElementSize(id) {
    const [size, setSize] = useState({
        rect: {},
        top: 0
    });

    useLayoutEffect(() => {
        const element = document.getElementById(id);
        
        console.log('HHUUUHHH');
        const updateRect = () => {
            const scroll = window.scrollY;
            const rect = element?.getBoundingClientRect();
            const top = clamp(rect.top + scroll);
            setSize({rect: rect, top: top});
            console.log('HELLOOOOO');
            console.log('scrollY', window.scrollY);
            console.log('rect.top', rect.top);
            console.log('top', top);
        };

        updateRect();

        window.addEventListener('resize', updateRect);
        return () => window.removeEventListener('resize', updateRect);

    }, [id]);

    return size;
}

export default useElementSize;