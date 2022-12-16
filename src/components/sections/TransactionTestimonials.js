import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Container, SectionTitle, ArtContainer } from '@styles/global';
import { SwiperSlide } from 'swiper/react';
import CustomSwiper from '@common/swiper';
import Image from '@common/image';
import { CommentsDisabledOutlined } from '@mui/icons-material';

const TransactionTestimonials = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulTransactionTestimonials {
                    edges {
                        node {
                            name
                            slug
                            testimonialImage {
                                gatsbyImageData(width: 100)
                            }
                            referenceNameAndTitle
                            testimonialLineOne {
                                testimonialLineOne
                            }
                            testimonialLineTwo {
                                testimonialLineTwo
                            }
                        }
                    }
                }
            }
        `
    );

    console.log(data);

    return (
        <Section>
            <SectionTitle>
                <h2>Testimonials</h2>
            </SectionTitle>
            <Container>
                <CustomSwiper>
                    {data.allContentfulTransactionTestimonials.edges.map(
                        ({
                            node: {
                                name,
                                slug,
                                testimonialImage,
                                referenceNameAndTitle,
                                testimonialLineOne: { testimonialLineOne },
                                testimonialLineTwo: { testimonialLineTwo },
                            },
                        }) => {
                            console.log(
                                'testimonialLineOne',
                                testimonialLineOne
                            );
                            return (
                                <SwiperSlide key={slug}>
                                    <ArtContainer>
                                        <Image
                                            image={testimonialImage}
                                            alt={name}
                                            imgClassName='circled'
                                        />
                                    </ArtContainer>
                                    <p>
                                        {testimonialLineOne}
                                        <br />
                                        {testimonialLineTwo}
                                    </p>
                                    <p className="label">
                                        {referenceNameAndTitle}
                                    </p>
                                </SwiperSlide>
                            );
                        }
                    )}
                </CustomSwiper>
            </Container>
        </Section>
    );
};

export default TransactionTestimonials;
