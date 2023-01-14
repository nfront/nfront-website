import { useState, useCallback } from 'react';

// Based on: https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
// Returns a callback ref, that can be added to any element / component,
// by passing callback ref, and rect state if needed, down to children.
// Instead of passing them, they can also be added to a context.

// Callback runs, with element as node, when component it is added to first mounts.
// Runs again, with node as null, when component unmounts.

// You either use ref or callback ref, not both.

function useClientRect() {
    const [rect, setRect] = useState(null);

    const ref = useCallback(node => {
        const updateRect = () => {
            setRect(node.getBoundingClientRect());
        }
        if (node !== null) {
            // Runs on mount of node (i.e. element)
            window.addEventListener("resize", updateRect);
            updateRect();
        }
        else {
            // Runs on unmount of node (i.e. element)
            window.removeEventListener("resize", updateRect);
        }
    }, []);

    return [rect, ref];
}

export default useClientRect;