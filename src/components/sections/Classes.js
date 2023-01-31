import React from 'react';
import Link from '@common/link';
import { Section, Container, FlexRow, SectionTitle } from '@styles/global';
import Class from '@common/class';

export default function Classes(props) {
    const { classes, limit } = props;
    return (
        <Section shade id="classes" {...props}>
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
                        return <Class type="square" key={aClass.slug} aClass={aClass} />;
                    })}
                </FlexRow>
            </Container>
            {limit && (
                <Link to="/classes/" display="block" className="mt-3">
                    <button className="button center">View All Classes</button>
                </Link>
            )}
        </Section>
    );
}
