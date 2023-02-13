import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Section, SectionTitle, Container } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import SearchBox from '@common/SearchBox';
import FileList from '@common/fileList';

const StyledContainer = styled(Container)`
    @media ${breakpoints.laptop} {
        padding-left: 6rem;
        padding-right: 6rem;
    }
`;

const initialValues = {
    title: '',
    course: 'all-courses',
    fileType: 'all-fileTypes',
};

const fileTypes = {
    Spreadsheet: ['.xls'],
    'Text document': ['.doc', '.pdf'],
    Presentation: ['.ppt'],
};

export const findCourse = (file, courses) =>
    courses?.find((course) =>
        course.files?.some(
            (courseFile) =>
                courseFile.fileAsset.filename === file.fileAsset.filename
        )
    );

const Files = ({ files, courses }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: initialValues,
    });

    const [formData, setFormData] = useState(initialValues);

    const filteredFiles = files.filter((file) => {
        
        return (
            (formData.course.includes('all-')
                ? true
                : findCourse(file, courses).slug === formData.course) &&
            (formData.fileType.includes('all-')
                ? true
                : fileTypes[formData.fileType].some((extension) =>
                      file.fileAsset.filename.includes(extension)
                  )) &&
            (formData.title === ''
                ? true
                : file.fileAsset.filename
                      .toLowerCase()
                      .includes(formData.title.toLowerCase()))
        );
    });

    return (
        <Section id="files">
            <SectionTitle>
                <h2>Downloadable Files and Templates</h2>
                <p>{files.length} recently added files</p>
            </SectionTitle>
            <StyledContainer>
                <SearchBox
                    handleSubmit={handleSubmit}
                    setFormData={setFormData}
                    className="mb-3"
                >
                    <input
                        type="text"
                        {...register('title')}
                        placeholder="Filename..."
                        autoComplete="off"
                    />
                    <select {...register('course')} defaultValue="all-courses">
                        <option value="all-courses">All courses</option>
                        {courses.map((course) => {
                            const { title, slug } = course;
                            return (
                                <option key={slug} value={slug}>
                                    {title}
                                </option>
                            );
                        })}
                    </select>
                    <select
                        {...register('fileType')}
                        defaultValue="all-fileTypes"
                    >
                        <option value="all-fileTypes">All file types</option>
                        {Object.entries(fileTypes).map(
                            ([fileName, extensionList]) => {
                                return (
                                    <option key={fileName} value={fileName}>
                                        {fileName}
                                    </option>
                                );
                            }
                        )}
                    </select>
                </SearchBox>
                <FileList files={filteredFiles} courses={courses} />
            </StyledContainer>
        </Section>
    );
};

export default Files;
