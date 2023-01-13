import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Section, SectionTitle, Container } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import SearchBox from '@common/SearchBox';
import Card from '@common/card';

const StyledContainer = styled(Container)`
    @media ${breakpoints.laptop} {
        padding-left: 6rem;
        padding-right: 6rem;
    }
`;

const initialValues = {
    title: '',
    category: 'all-categories',
    city: 'all-cities',
};

export default function RecentJobs({ jobs, categories, cities }) {
    const { register, handleSubmit } = useForm({
        defaultValues: initialValues,
    });

    const [formData, setFormData] = useState(initialValues);

    const filteredJobs = jobs.filter(
        (job) =>
            (formData.category.includes('all-')
                ? true
                : job.categories.slug === formData.category) &&
            (formData.city.includes('all-')
                ? true
                : job.city.slug === formData.city) &&
            (formData.title === '' ? true : job.title.includes(formData.title))
    );

    return (
        <Section shade>
            <SectionTitle>
                <h2>Current Job Openings</h2>
                <p>{jobs.length} recently added jobs</p>
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
                        placeholder="Job Title, Keywords, or Phrase"
                        autoComplete="off"
                    />
                    <select
                        {...register('category')}
                        defaultValue="all-categories"
                    >
                        <option value="all-categories">All categories</option>
                        {categories.map((category) => {
                            const { title, slug } = category;
                            return (
                                <option key={slug} value={slug}>
                                    {title}
                                </option>
                            );
                        })}
                    </select>
                    <select {...register('city')} defaultValue="all-cities">
                        <option value="all-cities">All cities</option>
                        {cities.map((city) => {
                            const { title, slug } = city;
                            return (
                                <option key={slug} value={slug}>
                                    {title}
                                </option>
                            );
                        })}
                    </select>
                </SearchBox>
                <Card results={filteredJobs} />
            </StyledContainer>
        </Section>
    );
}
