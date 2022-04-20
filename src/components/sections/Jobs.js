import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import EmployeeTestimonials from './EmployeeTestimonials';
import FeaturedCities from './FeaturedCities';
import RecentJobs from './RecentJobs';

const StyledSection = styled.div`
    .featuredCities {
        background-color: var(--accent-color);
    }
`;

function Jobs({ categories, cities, jobs, getPositionCount }) {
    return (
        <StyledSection>
            <Categories
                categories={categories}
                getPositionCount={getPositionCount}
            />
            <div className="featuredCities">
                <FeaturedCities
                    cities={cities}
                    getPositionCount={getPositionCount}
                />
            </div>
            <EmployeeTestimonials />
            <RecentJobs jobs={jobs} />
        </StyledSection>
    );
}

export default Jobs;
