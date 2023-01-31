import React from 'react';

import Image from '@common/image';
import { ArtContainer, Divider, FlexRow } from '@styles/global';
import useWindowSize from '@utils/hooks/useWindowSize';

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';

export default function CourseCard({ courses }) {
    const {
        title,
        tagLine,
        slug,
        courseDescription,
        classes,
        introductionVideo,
        files,
        icon,
        relatedCourses,
    } = courses;

    const { isMobile } = useWindowSize();

    return (
        <div className={`p-15 ${!isMobile ? 'mb-3' : ''} rounded-shadow-2 text-left`}>
            <h4 className="h4-large center">Course Summary</h4>
            {!isMobile && (
                <ArtContainer className="pb-15 m-0" maxHeight="5rem">
                    <Image image={icon} alt={title} />
                </ArtContainer>
            )}
            <p className="display-inline-flex small-font m-0 color-grey text-left">
                <HomeIcon className="vertical-middle" />
                <span className="ml-1">Course: {title}</span>
            </p>
            <Divider spacing="0.8rem" />
            <p className="display-inline-flex small-font m-0 color-grey text-left">
                <SchoolIcon className="vertical-middle" />
                <span className="ml-1">Classes: {classes.length}</span>
            </p>
            <Divider spacing="0.8rem" />
            <p className="display-inline-flex small-font m-0 color-grey text-left">
                <DescriptionIcon className="vertical-middle" />
                <span className="ml-1">Files: {files?.length}</span>
            </p>
        </div>
    );
}
