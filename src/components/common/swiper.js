import React from 'react';
import styled from 'styled-components';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import useWindowSize from '@utils/hooks/useWindowSize';

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
        flex-direction: ${(props) => (props.row ? 'row' : 'column')};
        align-items: center;
        justify-content: ${(props) => (props.row ? 'flex-start' : 'center')};
        overflow: hidden;
        text-align: center;
        padding: 0rem 0rem 2rem;
        @media (min-width: ${(props) => props.theme.screen.mobile}) {
            padding: ${(props) => props.navigation ? `2rem 4rem 5rem` : `2rem ${props.spacing}rem 5rem`};
        }
    }
`;

const CustomSwiper = (props) => {
    const { settings, row, navigation, children } = props;
    
    const swiperSettings = { ...defaultSettings, ...settings };

    if (navigation) {
        swiperSettings.modules = [...swiperSettings.modules, Navigation];
        swiperSettings.navigation = true;
    }

    console.log(swiperSettings.slidesPerView);

    const spacing = props.spacing || 0;

    return (
        <ModifiedSwiper row={row} navigation={swiperSettings.navigation} spacing={spacing} {...swiperSettings}>
            {children}
        </ModifiedSwiper>
    );
};

export default CustomSwiper;
