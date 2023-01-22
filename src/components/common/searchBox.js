import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '@styles/global';

const SearchBoxWrapper = styled.div`
    background-color: white;
    border-radius: 4px !important;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);
    padding: 1rem 2.5rem;

    select {
        padding: 0.5em 2em 0.5em 0.5em;
        font: inherit;
        line-height: inherit;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        background-color: transparent;
        appearance: none;
        background-repeat: no-repeat;
        background-image: linear-gradient(
                45deg,
                transparent 50%,
                currentColor 50%
            ),
            linear-gradient(135deg, currentColor 50%, transparent 50%);
        background-position: right 15px top 1em, right 10px top 1em;
        background-size: 5px 5px, 5px 5px;
        cursor: pointer;
    }

    select option[data-default] {
        color: #888;
        display: none;
    }

    input.button[type='submit'] {
        padding: 0.5rem;
    }

    input:not(.button),
    select {
        border: none;
        color: var(--text-color) !important;
        border-bottom: 1px solid var(--button-color);
    }

    a:focus,
    a:active,
    a:hover {
        color: initial;
    }
`;

const SearchBox = ({ children, handleSubmit, setFormData, className }) => {
    const onSubmit = (data) => {
        setFormData(data);
    };

    return (
        <SearchBoxWrapper className={className}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FlexRow grow>
                    {children}
                    <input type="submit" className="button" value="Filter" />
                </FlexRow>
            </form>
        </SearchBoxWrapper>
    );
};

export default SearchBox;
