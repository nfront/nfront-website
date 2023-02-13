import React from 'react';

import File from '@common/file';

import { findCourse } from '@sections/Files';

const FileList = ({ files, courses }) => {
    return files?.map((file) => {
        const {
            title,
            fileAsset: { filename, publicUrl },
            relatedClasses,
        } = file;

        const course = findCourse(file, courses);

        const courseTitle = course?.title || null;

        return (
            <File
                key={filename}
                title={title}
                filename={filename}
                publicUrl={publicUrl}
                relatedClasses={relatedClasses}
                courseTitle={courseTitle}
            />
        );
    });
};

export default FileList;
