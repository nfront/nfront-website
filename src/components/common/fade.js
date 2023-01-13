import React, { useEffect, useContext } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { NavBarContext } from '@context/myProviders';

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

    const { navRect } = useContext(NavBarContext);
    
    // console.log('navbarSize in fade', navRect?.height);
    // const navbarSize = navRect?.height || '76';
    
    const [ref, inView] = useInView({
        margin: `0px 0px -${navRect?.height}px 0px`
    });

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
