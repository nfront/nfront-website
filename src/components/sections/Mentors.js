import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import {
    Section,
    Container,
    ArtContainer,
    TextContainer,
    Grid,
    GridItem,
    SectionTitle,
} from '@styles/global';
import Link from '@common/link';
import Image from '@common/image';

import { motion } from 'framer-motion';

const Text = styled(TextContainer)`
    width: 220px; // Needed, so text aligns with image

    div {
        color: var(--border-color);
        font-weight: 400;
    }
    div:first-child a {
        color: var(--yellow);
        margin-bottom: 5px;
    }
    div:not(:first-child) {
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    div:last-child {
        font-weight: bold;
    }
`;

const MotionComponent = motion(Text);

const Mentors = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulMentors {
                    nodes {
                        order
                        name
                        title
                        company
                        city
                        headshot {
                            gatsbyImageData(width: 220)
                        }
                        link
                    }
                }
            }
        `
    );
    const result = data.allContentfulMentors.nodes;
    result.sort((a, b) => (a.order > b.order ? 1 : -1));
    return (
        <>
            <Section id="mentors" accent="alt">
                <SectionTitle>
                    <h2>Advisors & Portfolio Mentors</h2>
                    <p>
                        nFront's advisors and portfolio company mentors include
                        top-tier VC investors, successful entrepreneurs and
                        technology influencers. Deal flow is frequently shared
                        with these standout individuals, who also provide
                        mentorship to portfolio companies and expert advice on
                        new prospects.
                    </p>
                </SectionTitle>
                <Container>
                    <Grid minWidth="220px">
                        {result.map(
                            ({
                                name,
                                title,
                                company,
                                city,
                                headshot,
                                link,
                            }) => {
                                return (
                                    <GridItem className="mt-2" key={title} alignItems="center">
                                        <ArtContainer grayscale hover rounded>
                                            <Link to={link}>
                                                <Image
                                                    image={headshot}
                                                    alt={title}
                                                />
                                            </Link>
                                        </ArtContainer>
                                        <MotionComponent style={{ x: 0 }} animate={{ x: 100 }}>
                                            <div>
                                                <Link to={link}>{name}</Link>
                                            </div>
                                            <div>{title}</div>
                                            <div>{company}</div>
                                            <div>{city}</div>
                                        </MotionComponent>
                                    </GridItem>
                                );
                            }
                        )}
                    </Grid>
                    <p className="mt-4 mb-0 text-uppercase text-center">
                        ...And more
                    </p>
                </Container>
            </Section>
        </>
    );
};

export default Mentors;
