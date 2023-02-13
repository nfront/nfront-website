import React, { useMemo } from 'react';

import Link from '@common/link';
import { FlexRow, FlexColumn, Divider, DividerVertical } from '@styles/global';

import useWindowSize from '@utils/hooks/useWindowSize';
import DownloadIcon from '@mui/icons-material/Download';

import Image from '@common/image';

import ExcelIcon from '@static/icons/microsoft-excel-2019.svg';
import PowerPointIcon from '@static/icons/microsoft-powerpoint-2019.svg';
import WordIcon from '@static/icons/microsoft-word-2019.svg';

const iconProps = {
    className: 'vertical-middle',
};

const iconMap = {
    spreadsheet: {
        url: ExcelIcon,
        extensions: ['.xls'],
    },
    textDocument: {
        url: WordIcon,
        extensions: ['.doc', '.pdf'],
    },
    presentation: {
        url: PowerPointIcon,
        extensions: ['.ppt'],
    },
};

const iconPicker = (filename) => {
    return Object.entries(iconMap).find(([iconName, iconDetails]) => {
        return iconDetails.extensions.some((extension) =>
            filename.includes(extension)
        );
    });
};

const File = ({ title, filename, publicUrl, relatedClasses, courseTitle }) => {
    const { isMobile, isTablet, isLaptop, isDesktop } = useWindowSize();

    const icon = useMemo(() => iconPicker(filename), [filename]);

    console.log(icon, )

    return (
        <div>
            <FlexRow
                gap="0"
                alignItems="stretch"
                className="mb-1 color-grey small-font light-bold rounded-shadow-1"
                justifyContent="space-between"
            >
                <FlexRow
                    gap="1rem"
                    alignItems="center"
                    justifyContent="space-between"
                    className="px-1 py-05 flex-grow"
                    basis="auto"
                >
                    <FlexRow alignItems="center" gap="1rem" mobileAuto>
                        <Image image={icon[1].url} alt={icon[0]} maxHeight="3.5rem" className="m-0" />
                        <FlexColumn
                            gap="0.3rem"
                            className="align-items-center-mobile"
                        >
                            <div>{filename}</div>
                            {courseTitle && (
                                <div className="category--blue m-0 rounded xs-font">
                                    {courseTitle}
                                </div>
                            )}
                        </FlexColumn>
                    </FlexRow>
                    <Link
                        to={`${publicUrl}`}
                        download
                        className="text-center-mobile"
                    >
                        <button className="py-03 category--blue m-0 rounded xs-font vertical-middle hover-scale-svg">
                            <DownloadIcon
                                color="var(--primary-color)"
                                className="vertical-middle"
                            />
                        </button>
                    </Link>
                </FlexRow>
                {isMobile || isTablet ? (
                    <Divider spacing="0rem" />
                ) : (
                    <DividerVertical />
                )}
                <FlexColumn
                    className="px-1 py-05 normal-font-weight"
                    gap="0"
                    itemBasisTablet="18rem"
                >
                    <div className="mb-03 light-bold text-center-mobile">{`Instructions:`}</div>
                    <ul
                        className={`${
                            isMobile ? 'm-0' : 'ml-07'
                        } custom-bullet-list text-center-mobile`}
                    >
                        {relatedClasses.map(
                            (
                                { slug, title: relatedClassTitle },
                                index,
                                arr
                            ) => {
                                return (
                                    <li
                                        key={slug}
                                        className={`${
                                            isMobile ? '' : 'pl-03'
                                        } link-button hover-bold ${
                                            index + 1 === arr.length
                                                ? 'mb-0'
                                                : 'mb-0'
                                        }`}
                                    >
                                        <Link to={`/academy/${slug}`}>
                                            {relatedClassTitle}
                                        </Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </FlexColumn>
            </FlexRow>
        </div>
    );
};

export default File;
