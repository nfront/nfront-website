import React from 'react';
import styled from 'styled-components';
import JobCategories from './JobCategories';
import EmployeeTestimonials from './EmployeeTestimonials';
import JobCities from './JobCities';
import RecentJobs from './RecentJobs';

const StyledSection = styled.div`
    .jobCities {
        background-color: var(--accent-color);
    }
`;

export default function Jobs({ categories, cities, jobs, getPositionCount }) {
    console.log('🚀 ~ jobs', jobs);
    return (
        <StyledSection>
            <JobCategories
                categories={categories}
                getPositionCount={getPositionCount}
            />
            <div className="jobCities">
                <JobCities
                    cities={cities}
                    getPositionCount={getPositionCount}
                />
            </div>
            <EmployeeTestimonials />
            <RecentJobs jobs={jobs} />
        </StyledSection>
    );
}
