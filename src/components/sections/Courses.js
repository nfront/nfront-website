import React from 'react';
import { Link } from 'gatsby';
import { Section, Container, Grid, SectionTitle } from '@styles/global';
import styled from 'styled-components';
import { useIsTraining } from '@utils/hooks/useIsHome';
const GRID = styled(Grid)`
    .grid-item {
        background: white;
        border: 1px transparent var(--border-color);
        border-radius: 0.375rem;
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
    }
`;
const ItemGrid = styled.div`
    display: flex;
    justify-content: space-between;
    .category {
        color: var(--blue);
        background-color: var(--accent-color);
        height: fit-content;
        padding: 0.2rem 0.5rem;
    }
    p {
        margin-bottom: 0;
        color: #002e5f;
    }
    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Text = styled.div`
    padding: 1rem;

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    .label {
        font-weight: 500;
    }

    p:not(.label) {
        font-size: 16px;
    }
`;

const Art = styled.div`
    img {
        /* height: auto; */
        margin-bottom: 0;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;

        @media (min-width: ${props => props.theme.screen.md}) {
            /* min-height: 240px; */
        }
    }
`;

export default function Courses(props) {
    const { results } = props;
    const isTraining = useIsTraining().isTraining;
    return (
        <Section id="contact" {...props}>
            <SectionTitle>
                <h2>Find The Right Online Courses For You</h2>
                <p>
                    You don't have to struggle alone, you've got our assistance
                    and help.
                </p>
            </SectionTitle>
            <Container>
                {results.length ? (
                    <GRID>
                        {results.map(courses => (
                            <div key={courses.title} className="grid-item">
                                <Link to={`/training/${courses.slug}`}>
                                    <Art>
                                        <img
                                            src={courses.coverImage.fluid.src}
                                            alt={courses.title}
                                        />
                                    </Art>
                                    <Text>
                                        <h3>{courses.title}</h3>
                                        {/* <p className="label">{courses.author}</p> */}
                                        <hr />
                                        <ItemGrid>
                                            <p>{`$${courses.price}`}</p>
                                            <p className="category">
                                                {courses.courseCategories.title}
                                            </p>
                                        </ItemGrid>
                                    </Text>
                                </Link>
                            </div>
                        ))}
                    </GRID>
                ) : (
                    <div className="center">
                        No List Found{' '}
                        <span role="img" aria-label="emoji name">
                            ❗️
                        </span>
                    </div>
                )}
            </Container>
            {isTraining && (
                <Link to="/courses/">
                    <button className="button center">View All Courses</button>
                </Link>
            )}
        </Section>
    );
}
