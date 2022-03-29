import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import CustomerTestimonials from './CustomerTestimonials';
import FeaturedCities from './FeaturedCities';
import RecentJobs from './RecentJobs';
const StyledSection = styled.div`
    .featuredCities {
        background-color: var(--accent-color);
    }
`;

const Jobs = () => (
    <StyledSection>
        <Categories />
        <div className="featuredCities">
            <FeaturedCities />
        </div>
        <CustomerTestimonials />
        <RecentJobs />
    </StyledSection>
);

export default Jobs;
