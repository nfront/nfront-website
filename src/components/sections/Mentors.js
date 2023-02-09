import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    Section,
    Container,
    ArtContainer,
    Grid,
    FlexColumn,
    SectionTitle,
} from '@styles/global';
import Link from '@common/link';
import Image from '@common/image';

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
        <Section id="mentors" accent="alt">
            <SectionTitle className="text-white">
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
                <Grid minWidth="12rem">
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
                                <FlexColumn className="mt-2" key={name} alignItems="center">
                                    <ArtContainer grayscale hover rounded>
                                        <Link to={link}>
                                            <Image
                                                image={headshot}
                                                alt={title}
                                            />
                                        </Link>
                                    </ArtContainer>
                                    <FlexColumn width="12rem">
                                        <div>
                                            <Link to={link} className="color-yellow normal-font-weight mb-05">{name}</Link>
                                        </div>
                                        <div className="color-border-color xs-font uppercase ls-1">{title}</div>
                                        <div className="color-border-color xs-font uppercase ls-1">{company}</div>
                                        <div className="color-border-color xs-font uppercase ls-1 bold">{city}</div>
                                    </FlexColumn>
                                </FlexColumn>
                            );
                        }
                    )}
                </Grid>
                <p className="mt-4 mb-0 ls-2 uppercase text-center text-white">
                    ...And more
                </p>
            </Container>
        </Section>
    );
};

export default Mentors;
