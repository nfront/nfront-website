import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import CustomerTestimonials from './CustomerTestimonials';
import FeaturedCities from './FeaturedCities';
import RecentJobs from './RecentJobs';
import { useStaticQuery, graphql } from 'gatsby';

const StyledSection = styled.div`
    .featuredCities {
        background-color: var(--accent-color);
    }
`;

function Jobs() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulJobs {
                nodes {
                    categories {
                        title
                        positions
                        coverImg {
                            fluid(maxWidth: 100, quality: 100) {
                                src
                            }
                        }
                        # slug
                    }
                    city {
                        title
                        totalJobs
                        featuredImage {
                            fluid(quality: 100) {
                                src
                            }
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulJobs.nodes;
    console.log(results);
    return (
        <StyledSection>
            <Categories results={results} />
            <div className="featuredCities">
                <FeaturedCities results={results} />
            </div>
            <CustomerTestimonials />
            <RecentJobs />
        </StyledSection>
    );
}

export default Jobs;
