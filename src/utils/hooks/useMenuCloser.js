import { useCallback } from 'react';

const useMenuCloser = (action) => {
    const refCallback = useCallback((node) => {
        const handleClick = (event) => {
            const withinBoundaries = event.composedPath().includes(node);

            if (!withinBoundaries) {
                // Click event on document came from outside node (e.g. not on menu link).
                // So we conduct the specified action.
                action();
            }
        };

        if (node != null) {
            // Runs on mount of node (i.e. element)
            document.addEventListener('click', handleClick);
        } else {
            // Runs on unmount of node (i.e. element)
            document.removeEventListener('click', handleClick);
        }
    }, []);

    return refCallback;
};

export default useMenuCloser;
