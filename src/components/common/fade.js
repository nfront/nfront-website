import { motion, useAnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

const fadeVariant = {
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const setVariant = (direction) => {
    if (direction === 'top') fadeVariant.hidden.y = -20;
    else if (direction === 'bottom') fadeVariant.hidden.y = 20;
    else if (direction === 'left') {
        fadeVariant.hidden.x = -20;
        fadeVariant.visible.x = 0;
    } else if (direction === 'right') {
        fadeVariant.hidden.x = 20;
        fadeVariant.visible.x = 0;
    }
};

const Fade = ({ direction, children }) => {
    const controls = useAnimationControls();
    const [ref, inView] = useInView();
    
    setVariant(direction);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeVariant}
        >
            {children}
        </motion.div>
    );
};

export default Fade;
