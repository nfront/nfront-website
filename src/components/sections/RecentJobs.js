import React from 'react';
import { Section, SectionTitle, Container } from '@styles/global';
import Card from '../common/card';
import { useStaticQuery, graphql } from 'gatsby';

export default function RecentJobs() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulJobs {
                nodes {
                    title
                    streetAddress
                    slug
                    price {
                        min
                        max
                    }
                    categories {
                        title
                    }
                    availablity
                    icon {
                        file {
                            url
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulJobs.nodes;
    return (
        <Section>
            <SectionTitle>
                <h2>Recent Jobs</h2>
                <p>{results.length} Recently Added Jobs</p>
            </SectionTitle>
            <Container>
                <Card
                    icon={
                        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F3721672%2Finstagram_icon&psig=AOvVaw2_g9R1J2aZ5mlC9mQWbo4Y&ust=1648109870442000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCvku3l2_YCFQAAAAAdAAAAABAD'
                    }
                    title={'Digital Marketing Executive'}
                    price={1000}
                    availablity={'Full Time'}
                    location={' Sacramento, California'}
                    publish={'Published 11 months ago'}
                    results={results}
                />
            </Container>
        </Section>
    );
}
