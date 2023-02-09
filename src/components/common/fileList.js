import React from 'react';

import Link from '@common/link';
import { FlexRow, FlexColumn, Divider, DividerVertical } from '@styles/global';

import useWindowSize from '@utils/hooks/useWindowSize';

import CoPresentIcon from '@mui/icons-material/CoPresent';
import FunctionsIcon from '@mui/icons-material/Functions';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';

const FileList = ({ files, courseTitle }) => {
    const { isMobile, isTablet, isLaptop, isDesktop } = useWindowSize();

    return files?.map(
        ({ title, fileAsset: { filename, publicUrl }, relatedClasses }) => {
            console.log('publicUrl', publicUrl);
            return (
                <div key={title}>
                    <FlexRow
                        gap="0"
                        alignItems="stretch"
                        className="color-grey small-font light-bold grey-border"
                        justifyContent="space-between"
                    >
                        <FlexRow gap="0.5rem" justifyContent="flex-start" alignItems="center" className="px-1 py-05 flex-grow">
                            <FunctionsIcon className="vertical-middle" />
                            <span>{filename}</span>
                        </FlexRow>
                        {/* <DividerVertical /> */}
                        <FlexColumn
                            alignItems="center"
                            className="px-1 py-05 hover-scale-svg"
                            justifyContent="center"
                            gap="0"
                        >
                            <Link to={`${publicUrl}`} download>
                                <button className="py-03 category--blue m-0 rounded xs-font vertical-middle">
                                    <DownloadIcon
                                        color="var(--primary-color)"
                                        className="mx-1 vertical-middle"
                                    />
                                </button>
                            </Link>
                        </FlexColumn>
                        {(isMobile || isTablet || isLaptop) ? <Divider className="m-0" /> : <DividerVertical />}
                        <FlexColumn
                            className="px-1 py-05 normal-font-weight"
                            justifyContent="center"
                            gap="0"
                        >
                            <div className="mb-03 light-bold">{`Instructions:`}</div>
                            <ul className="ml-09 custom-bullet-list">
                                {relatedClasses.map(
                                    (
                                        { slug, title: relatedClassTitle },
                                        index,
                                        arr
                                    ) => {
                                        return (
                                            <li
                                                key={slug}
                                                className={`pl-03 link-button hover-bold ${
                                                    index + 1 === arr.length
                                                        ? 'mb-0'
                                                        : 'mb-03'
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
        }
    );

    // return (
    // <div>
    //     <FlexRow
    //         gap="0"
    //         alignItems="stretch"
    //         className="color-grey small-font light-bold grey-border"
    //     >
    //         <FlexRow alignItems="center" className="px-1 py-05">
    //             <FunctionsIcon className="vertical-middle" />
    //             <span>excel-spreadsheet.xlsx {files?.title}</span>
    //         </FlexRow>
    //         <Link
    //             display="flex"
    //             gap="1rem"
    //             alignItems="center"
    //             className="ml-auto px-1 py-05 grey-left-border link-button normal-font-weight hover-bold"
    //         >
    //             <span>{`Guide${isDesktop ? ': ' : ''}`}</span>
    //             <span
    //                 className={`${
    //                     isDesktop ? 'display-inline' : 'display-none'
    //                 }`}
    //             >
    //                 {courseTitle}
    //             </span>
    //         </Link>
    //         <FlexRow
    //             alignItems="center"
    //             className="px-1 py-05 grey-left-border hover-scale-svg"
    //         >
    //             <span
    //                 className={`${
    //                     isDesktop ? 'display-inline' : 'display-none'
    //                 }`}
    //             >
    //                 Download:
    //             </span>
    //             <button className="category--blue m-0 rounded xs-font vertical-middle">
    //                 <DownloadIcon
    //                     color="var(--primary-color)"
    //                     className="mx-1 vertical-middle"
    //                 />
    //             </button>
    //         </FlexRow>
    //     </FlexRow>
    //     <FlexRow
    //         gap="0"
    //         alignItems="stretch"
    //         className="color-grey small-font light-bold grey-border"
    //     >
    //         <FlexRow alignItems="center" className="px-1 py-05">
    //             <CoPresentIcon className="vertical-middle" />
    //             <span>presentation.pptx {files?.title}</span>
    //         </FlexRow>
    //         <Link
    //             display="flex"
    //             gap="1rem"
    //             alignItems="center"
    //             className="ml-auto px-1 py-05 grey-left-border link-button normal-font-weight hover-bold"
    //         >
    //             <span>{`Guide${isDesktop ? ': ' : ''}`}</span>
    //             <span
    //                 className={`${
    //                     isDesktop ? 'display-inline' : 'display-none'
    //                 }`}
    //             >
    //                 {courseTitle}
    //             </span>
    //         </Link>
    //         <FlexRow
    //             alignItems="center"
    //             className="px-1 py-05 grey-left-border hover-scale-svg"
    //         >
    //             <span
    //                 className={`${
    //                     isDesktop ? 'display-inline' : 'display-none'
    //                 }`}
    //             >
    //                 Download:
    //             </span>
    //             <button className="category--blue m-0 rounded xs-font vertical-middle">
    //                 <DownloadIcon
    //                     color="var(--primary-color)"
    //                     className="mx-1 vertical-middle"
    //                 />
    //             </button>
    //         </FlexRow>
    //     </FlexRow>
    //     <FlexRow
    //         gap="0"
    //         alignItems="stretch"
    //         className="color-grey small-font light-bold grey-border"
    //     >
    //         <FlexRow alignItems="center" className="px-1 py-05">
    //             <DescriptionIcon className="vertical-middle" />
    //             <span>word-document.docx {files?.title}</span>
    //         </FlexRow>
    //         <Link
    //             display="flex"
    //             gap="1rem"
    //             alignItems="center"
    //             className="ml-auto px-1 py-05 grey-left-border link-button normal-font-weight hover-bold"
    //         >
    //             <span>{`Guide${isDesktop ? ': ' : ''}`}</span>
    //             <span
    //                 className={`${
    //                     isDesktop ? 'display-inline' : 'display-none'
    //                 }`}
    //             >
    //                 {courseTitle}
    //             </span>
    //         </Link>
    //         <FlexRow
    //             alignItems="center"
    //             className="px-1 py-05 grey-left-border hover-scale-svg"
    //         >
    //             <span
    //                 className={`${
    //                     isDesktop ? 'display-inline' : 'display-none'
    //                 }`}
    //             >
    //                 Download:
    //             </span>
    //             <button className="category--blue m-0 rounded xs-font vertical-middle">
    //                 <DownloadIcon
    //                     color="var(--primary-color)"
    //                     className="mx-1 vertical-middle"
    //                 />
    //             </button>
    //         </FlexRow>
    //     </FlexRow>
    // </div>
    // );
};

export default FileList;
