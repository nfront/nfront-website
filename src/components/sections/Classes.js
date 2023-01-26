import React from 'react';
import { Link } from 'gatsby';
import { Section, Container, Grid, SectionTitle } from '@styles/global';
import styled from 'styled-components';
import Class from '../common/class';

const ClassesSection = styled(Section)`
    background: #f3f4f8;
`;

//FIXME: Replace with global comps
const StyledGrid = styled(Grid)`
    .grid-item {
        background: white;
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }
    .grid-item:hover img {
        transform: scale(1.1);
        transition: all 0.3s ease-out 0s;
    }
`;

export default function Classes(props) {
    const { results, limit } = props;
    return (
        <ClassesSection id="classes" {...props}>
            <SectionTitle>
                <h2>Find The Right Classes For You</h2>
                <p>
                    You don't have to struggle alone, you've got our assistance
                    and help.
                </p>
            </SectionTitle>
            <Container>
                {results.length ? (
                    <StyledGrid>
                        {results.slice(0, limit).map((aClass) => {
                            return <Class results={aClass} />;
                        })}
                    </StyledGrid>
                ) : (
                    <div className="center">
                        No List Found{' '}
                        <span role="img" aria-label="emoji name">
                            ❗️
                        </span>
                    </div>
                )}
            </Container>
            {limit === '6' && (
                <Link to="/classes/">
                    <button className="button center">View All Classes</button>
                </Link>
            )}
        </ClassesSection>
    );
}
