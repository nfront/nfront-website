import React, { useState, useCallback } from 'react';
import { FlexRow, DividerVertical } from '@styles/global';
import useWindowSize from '@utils/hooks/useWindowSize';

const TabContainer = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const { isMobile, isTablet, isLaptop, isDesktop } = useWindowSize();

    const handleChange = useCallback((index) => {
        return (event) => {
            setActiveTab(index);
        };
    }, []);

    return (
        <>
            <FlexRow gap="0" className="mb-15 mt-1">
                {tabs.map((tab, index, arr) => {
                    return (
                        <>
                            <button
                                className={`${
                                    activeTab === index
                                        ? 'color-alt bg-primary'
                                        : 'color-grey bg-light-grey'
                                } ${
                                    index + 1 != arr.length &&
                                    (isLaptop || isDesktop)
                                        ? ''
                                        : 'grey-bottom-border'
                                } flex-basis-0 flex-grow center small-font light-bold uppercase py-05`}
                                onClick={handleChange(index)}
                            >
                                {tab.icon}
                                <span
                                    className={`${
                                        (isTablet || isLaptop || isDesktop)
                                            ? 'display-inline ml-05'
                                            : 'display-none'
                                    }`}
                                    // className="ml-05"
                                >
                                    {tab.title}
                                </span>
                            </button>
                            {index + 1 != arr.length && <DividerVertical />}
                        </>
                    );
                })}
            </FlexRow>
            <div>
                {tabs.map((tab, index, arr) => {
                    return (
                        <div
                            className={
                                activeTab === index ? '' : 'display-none'
                            }
                        >
                            {tab.content}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default TabContainer;
