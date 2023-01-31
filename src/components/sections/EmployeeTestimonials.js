import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SwiperSlide } from 'swiper/react';

import CustomSwiper from '@common/swiper';
import Image from '@common/image';
import {
    SectionTitle,
    TooltipSwiperContainer,
    Section,
    ArtContainer,
} from '@styles/global';
import useWindowSize from '@utils/hooks/useWindowSize';
import { breakpointToPxNum } from '@utils/utils';


const EmployeeTestimonials = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulEmployeeTestimonials {
                nodes {
                    title
                    tooltip {
                        childMarkdownRemark {
                            excerpt(pruneLength: 200)
                        }
                    }
                    candidate
                    avatar {
                        gatsbyImageData
                    }
                }
            }
        }
    `);
    const results = data.allContentfulEmployeeTestimonials.nodes;

    const { isDesktop } = useWindowSize();

    const swiperSettings = {
        slidesPerView: isDesktop ? 3 : 1,
        centeredSlides: true,
    };

    console.log('RENDER in EmpTest');

    return (
        <Section>
            <SectionTitle>
                <h2>Testimonials</h2>
                <p>Feedback from previous and existing colleagues</p>
            </SectionTitle>
            <TooltipSwiperContainer>
                <CustomSwiper spacing={3} settings={swiperSettings}>
                    {results.map(({ candidate, avatar, tooltip }) => {
                        return (
                            <SwiperSlide key={candidate}>
                                <p className="tooltip">
                                    {tooltip.childMarkdownRemark.excerpt}
                                </p>
                                <ArtContainer>
                                    <Image
                                        image={avatar}
                                        alt={candidate}
                                        className="circled"
                                    />
                                </ArtContainer>
                                <p className="label">{candidate}</p>
                            </SwiperSlide>
                        );
                    })}
                </CustomSwiper>
            </TooltipSwiperContainer>
        </Section>
    );
}

export default EmployeeTestimonials;