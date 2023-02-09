import React from 'react';
import styled from 'styled-components';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';

const defaultSettings = {
    modules: [Pagination, A11y, Autoplay],
    a11y: true,
    pagination: { clickable: true },
    // navigation: true,
    // scrollbar: true,
    rewind: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 500,
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
};

const ModifiedSwiper = styled(Swiper)`
    .swiper-slide {
        display: flex;
        flex-direction: ${(props) => (props.$row ? 'row' : 'column')};
        flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
        align-items: center;
        justify-content: ${(props) => (props.$row ? 'flex-start' : 'center')};
        overflow: hidden;
        text-align: center;
        padding: 0rem 0rem 2rem;
        /* @media ${breakpoints.mobileL} {
            padding: ${(props) => props.navigation ? `2rem 4rem 5rem` : `2rem ${props.spacing}rem 5rem`};
        } */
        @media ${breakpoints.tablet} {
            padding: ${(props) => props.navigation ? `2rem 4rem 5rem` : `2rem ${props.spacing}rem 5rem`};
        }
    }
`;

const CustomSwiper = (props) => {
    const { settings, row, navigation, children, ...rest } = props;
    
    const swiperSettings = { ...defaultSettings, ...settings };

    if (navigation) {
        swiperSettings.modules = [...swiperSettings.modules, Navigation];
        swiperSettings.navigation = true;
    }

    const spacing = props.spacing || 0;

    return (
        <ModifiedSwiper $row={row} navigation={swiperSettings.navigation} spacing={spacing} {...swiperSettings} {...rest}>
            {children}
        </ModifiedSwiper>
    );
};

export default CustomSwiper;
