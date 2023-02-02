import React from 'react';
import Link from '@common/link';

import { Divider, ArtContainer } from '@styles/global';
import Image from '@common/image';

export default function RelatedCourse({ relatedCourses }) {
    return (
        <div className="p-15 rounded-shadow-2 x-100">
            <h4 className="h4-large">Related Courses</h4>
            {relatedCourses?.map((relCourse, index, arr) => {
                const { title, slug, icon } = relCourse;
                return (
                    <Link
                        key={slug}
                        to={`/academy/${slug}`}
                        className="hover-bold"
                    >
                        <div className="text-left">
                            <ArtContainer
                                inline
                                className="p-0 m-0 vertical-middle"
                                maxHeight="1.5rem"
                            >
                                <Image image={icon} alt={title} />
                            </ArtContainer>
                            <span className="small-font pl-1 m-0 color-grey">{title}</span>
                        </div>
                        {index + 1 < arr.length && <Divider spacing="0.8rem" />}
                    </Link>
                );
            })}
        </div>
    );
}
