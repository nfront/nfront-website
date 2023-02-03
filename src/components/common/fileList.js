import React from 'react';

import Link from '@common/link';
import { FlexRow } from '@styles/global';

import useWindowSize from '@utils/hooks/useWindowSize';

import CoPresentIcon from '@mui/icons-material/CoPresent';
import FunctionsIcon from '@mui/icons-material/Functions';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';

const FileList = ({ files, courseTitle }) => {
    const { isMobile, isLaptop, isDesktop } = useWindowSize();
    console.log('files', files);

    return files.map(({ id, title, filename, publicUrl }) => {
        <div>
            <FlexRow
                gap="0"
                alignItems="stretch"
                className="color-grey small-font light-bold grey-border"
            >
                <FlexRow alignItems="center" className="px-1 py-05">
                    <FunctionsIcon className="vertical-middle" />
                    <span>{filename}</span>
                </FlexRow>
                <Link
                    display="flex"
                    gap="1rem"
                    alignItems="center"
                    className="ml-auto px-1 py-05 grey-left-border link-button normal-font-weight hover-bold"
                >
                    <span>{`Guide${isDesktop ? ': ' : ''}`}</span>
                    <span
                        className={`${
                            isDesktop ? 'display-inline' : 'display-none'
                        }`}
                    >
                        {courseTitle}
                        <Link></Link>
                    </span>
                </Link>
                <FlexRow
                    alignItems="center"
                    className="px-1 py-05 grey-left-border hover-scale-svg"
                >
                    <span
                        className={`${
                            isDesktop ? 'display-inline' : 'display-none'
                        }`}
                    >
                        Download:
                    </span>
                    <button className="category--blue m-0 rounded xs-font vertical-middle">
                        <DownloadIcon
                            color="var(--primary-color)"
                            className="mx-1 vertical-middle"
                        />
                    </button>
                </FlexRow>
            </FlexRow>
        </div>;
    });

    return (
        <div>
            <FlexRow
                gap="0"
                alignItems="stretch"
                className="color-grey small-font light-bold grey-border"
            >
                <FlexRow alignItems="center" className="px-1 py-05">
                    <FunctionsIcon className="vertical-middle" />
                    <span>excel-spreadsheet.xlsx {files?.title}</span>
                </FlexRow>
                <Link
                    display="flex"
                    gap="1rem"
                    alignItems="center"
                    className="ml-auto px-1 py-05 grey-left-border link-button normal-font-weight hover-bold"
                >
                    <span>{`Guide${isDesktop ? ': ' : ''}`}</span>
                    <span
                        className={`${
                            isDesktop ? 'display-inline' : 'display-none'
                        }`}
                    >
                        {courseTitle}
                    </span>
                </Link>
                <FlexRow
                    alignItems="center"
                    className="px-1 py-05 grey-left-border hover-scale-svg"
                >
                    <span
                        className={`${
                            isDesktop ? 'display-inline' : 'display-none'
                        }`}
                    >
                        Download:
                    </span>
                    <button className="category--blue m-0 rounded xs-font vertical-middle">
                        <DownloadIcon
                            color="var(--primary-color)"
                            className="mx-1 vertical-middle"
                        />
                    </button>
                </FlexRow>
            </FlexRow>
            <FlexRow
                gap="0"
                alignItems="stretch"
                className="color-grey small-font light-bold grey-border"
            >
                <FlexRow alignItems="center" className="px-1 py-05">
                    <CoPresentIcon className="vertical-middle" />
                    <span>presentation.pptx {files?.title}</span>
                </FlexRow>
                <Link
                    display="flex"
                    gap="1rem"
                    alignItems="center"
                    className="ml-auto px-1 py-05 grey-left-border link-button normal-font-weight hover-bold"
                >
                    <span>{`Guide${isDesktop ? ': ' : ''}`}</span>
                    <span
                        className={`${
                            isDesktop ? 'display-inline' : 'display-none'
                        }`}
                    >
                        {courseTitle}
                    </span>
                </Link>
                <FlexRow
                    alignItems="center"
                    className="px-1 py-05 grey-left-border hover-scale-svg"
                >
                    <span
                        className={`${
                            isDesktop ? 'display-inline' : 'display-none'
                        }`}
                    >
                        Download:
                    </span>
                    <button className="category--blue m-0 rounded xs-font vertical-middle">
                        <DownloadIcon
                            color="var(--primary-color)"
                            className="mx-1 vertical-middle"
                        />
                    </button>
                </FlexRow>
            </FlexRow>
            <FlexRow
                gap="0"
                alignItems="stretch"
                className="color-grey small-font light-bold grey-border"
            >
                <FlexRow alignItems="center" className="px-1 py-05">
                    <DescriptionIcon className="vertical-middle" />
                    <span>word-document.docx {files?.title}</span>
                </FlexRow>
                <Link
                    display="flex"
                    gap="1rem"
                    alignItems="center"
                    className="ml-auto px-1 py-05 grey-left-border link-button normal-font-weight hover-bold"
                >
                    <span>{`Guide${isDesktop ? ': ' : ''}`}</span>
                    <span
                        className={`${
                            isDesktop ? 'display-inline' : 'display-none'
                        }`}
                    >
                        {courseTitle}
                    </span>
                </Link>
                <FlexRow
                    alignItems="center"
                    className="px-1 py-05 grey-left-border hover-scale-svg"
                >
                    <span
                        className={`${
                            isDesktop ? 'display-inline' : 'display-none'
                        }`}
                    >
                        Download:
                    </span>
                    <button className="category--blue m-0 rounded xs-font vertical-middle">
                        <DownloadIcon
                            color="var(--primary-color)"
                            className="mx-1 vertical-middle"
                        />
                    </button>
                </FlexRow>
            </FlexRow>
        </div>
    );
};

export default FileList;
