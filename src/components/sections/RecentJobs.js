import React from 'react';
import { Section, SectionTitle, Container } from '@styles/global';
import Card from '../common/card';

export default function RecentJobs({ jobs }) {
    return (
        <Section id="contact" shade>
            <SectionTitle>
                <h2>Current Job Openings</h2>
                <p>{jobs.length} recently added jobs</p>
            </SectionTitle>
            <Container>
                <Card results={jobs}/>
            </Container>
        </Section>
    );
}
