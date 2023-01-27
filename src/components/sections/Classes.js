import React from 'react';
import { Link } from 'gatsby';
import { Section, Container, FlexRow, SectionTitle } from '@styles/global';
import styled from 'styled-components';
import Class from '@common/class';

const ClassesSection = styled(Section)`
    background: #f3f4f8;
`;

export default function Classes(props) {
    const { classes, limit } = props;
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
                <FlexRow basis="360px" twoByTwo>
                    {classes.slice(0, limit).map((aClass) => {
                        return <Class key={aClass.slug} aClass={aClass} />;
                    })}
                </FlexRow>
            </Container>
            {limit && (
                <Link to="/classes/">
                    <button className="button center">View All Classes</button>
                </Link>
            )}
        </ClassesSection>
    );
}
