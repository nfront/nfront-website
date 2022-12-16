import React from 'react';
import { Link } from 'gatsby';
import { Section, Container, Grid, SectionTitle } from '@styles/global';
import styled from 'styled-components';
import Class from '../common/class';

const ClassesSection = styled(Section)`
    background: #f3f4f8;
`;

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

const ItemGrid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        margin-bottom: 0;
        color: #002e5f;
    }
    @media (min-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Text = styled.div`
    padding: 1rem;

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
        @media (min-width: ${(props) => props.theme.screen.md}) {
            min-height: 2.5rem;
        }
    }

    .label {
        font-weight: 500;
    }
    a {
        color: black;
        font-size: 0.95rem;
    }

    /* p:not(.label) {
        font-size: 16px;
    } */
    .know-details {
        margin-left: 1rem;
        text-align: right;

        font-size: 0.8rem;
        @media (min-width: ${(props) => props.theme.screen.lg}) {
            font-size: 1rem;
        }

        &:hover {
            color: var(--blue);
            .fa-arrow-right {
                margin-left: 10px;
                transition: all 0.3s ease-out 0s;
            }
        }
        .fa-arrow-right {
            margin-left: 5px;
        }
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
                            return (
                                <Class results={aClass} />
                            );
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
            {limit == '6' && (
                <Link to="/classes/">
                    <button className="button center">View All Classes</button>
                </Link>
            )}
        </ClassesSection>
    );
}
