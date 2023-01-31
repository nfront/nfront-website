import React from 'react';
import Fade from '@common/fade';
import Image from '@common/image';
import Link from '@common/link';

import {
    Section,
    SectionTitle,
    Container,
    FlexRow,
    WaveBackground,
    ArtContainer,
} from '@styles/global';

export default function Courses({ courses, limit, classes }) {
    const uniqueCourseList = courses.filter(
        (v, key, arr) =>
            arr.findIndex(
                (course) => course?.course?.title === v?.course?.title
            ) != key
    );

    const classesInCourse = (course) =>
        classes.filter((aClass) => aClass.course.slug === course.slug);

    return (
        <Section>
            <Fade top>
                <SectionTitle>
                    <div>
                        <h2>Explore Our Popular Courses</h2>
                        <p>
                            Each course represents an important fundraising
                            topic, and contains one or more classes addressing
                            specific sub-topics.
                        </p>
                    </div>
                    <div>
                        <Link to="/classes">View All Courses</Link>
                    </div>
                </SectionTitle>
            </Fade>
            <Container>
                <FlexRow basis="360px" twoByTwo>
                    {uniqueCourseList.slice(0, limit).map((course) => {
                        const { title, icon, tagLine, slug } = course;
                        return (
                            <Link
                                to={`/academy/${slug}`}
                                key={slug}
                                className="hover-box-shadow"
                            >
                                <WaveBackground className="rounded-and-shadow y-100">
                                    <ArtContainer
                                        className="p-15 mb-0"
                                        maxHeight="5rem"
                                    >
                                        <Image image={icon} alt={title} />
                                    </ArtContainer>
                                    <div className="px-15 pb-15 center">
                                        <Fade left>
                                            <h3 className="light-bold mb-03">
                                                {title}
                                            </h3>
                                            <p className="small-font pb-4 mb-0">{`${
                                                classesInCourse(course).length
                                            } ${
                                                classesInCourse(course)
                                                    .length === 1
                                                    ? 'class'
                                                    : 'classes'
                                            }`}</p>
                                        </Fade>
                                    </div>
                                </WaveBackground>
                            </Link>
                        );
                    })}
                </FlexRow>
            </Container>
        </Section>
    );
}
