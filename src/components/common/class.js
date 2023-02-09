import React from 'react';
import Link from '@common/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '@common/image';
import { FlexRow, ArtContainer, StartLink, Divider } from '@styles/global';
import useWindowSize from '@utils/hooks/useWindowSize';

const Class = ({ aClass, type = 'rectangular', index, courseTitle }) => {
    let classComponent = null;
    switch (type) {
        case 'square':
            classComponent = (
                <SquareCard
                    aClass={aClass}
                    index={index}
                    courseTitle={courseTitle}
                />
            );
            break;
        default:
            classComponent = (
                <RectangularCard
                    aClass={aClass}
                    index={index}
                    courseTitle={courseTitle}
                />
            );
    }
    return classComponent;
};

const RectangularCard = ({
    aClass: { coverImage, title, slug },
    index,
    courseTitle,
}) => {
    const { isMobile } = useWindowSize();
    return (
        <Link
            to={`/academy/${slug}`}
            className="p-1 rounded-shadow-3 bg-white hover-box-shadow hover-color-yellow center-mobile"
        >
            <FlexRow justifyContent="flex-start" alignItems="center" gap="1rem">
                {/* Needed itemBasis to ensure width does not become 0, when next to item that grows. */}
                <ArtContainer
                    itemBasis="6rem"
                    className="p-0 m-0"
                    maxHeight="4rem"
                    alignItems="flex-start"
                    alignContent={`${!isMobile ? 'flex-start' : 'center'}`}
                >
                    <Image image={coverImage} alt={title} className="x-auto" />
                </ArtContainer>
                {/* basis prop is for children. flex-basis-0 class is for element itself. */}
                <FlexRow
                    basis="100%"
                    grow
                    gap="1rem"
                    className="flex-grow flex-basis-0"
                >
                    <h4 className="h4-large mb-03 center-mobile">{`${
                        index + 1
                    }. ${title}`}</h4>
                    <FlexRow
                        alignItems="center"
                        className="justify-content-center-mobile-else-space-between"
                        gap="1rem"
                    >
                        <p className="category--blue m-0 rounded xs-font flex-basis-auto">
                            {courseTitle}
                        </p>
                        <StartLink
                            className={`${
                                !isMobile ? 'flex-basis-auto' : 'flex-basis-100'
                            }`}
                            buttonClass="light-bold hover-color-yellow"
                        >
                            Start
                        </StartLink>
                    </FlexRow>
                </FlexRow>
            </FlexRow>
        </Link>
    );
};

const SquareCard = ({ aClass: { coverImage, title, slug, course }, index }) => {
    const { isMobile } = useWindowSize();
    return (
        <Link
            to={`/academy/${slug}`}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            className="hover-scale-img rounded-and-shadow bg-white"
        >
            <ArtContainer className="px-1 pt-15 mb-15" maxHeight="10rem">
                <Image image={coverImage} alt={title} />
            </ArtContainer>
            <h3 className="px-1 mb-2 center-tablet">{title}</h3>
            <div className="mb-1">
                <Divider className="mt-0 mb-1" />
                <FlexRow
                    className="px-1 text-center"
                    justifyContent="space-between"
                    gap="1rem"
                    mobileAuto
                >
                    <p className="category--blue m-0 rounded xs-font">
                        {course?.title}
                    </p>
                    <button className="small-font link-button hover-bold">
                        Start class{' '}
                        {!isMobile && (
                            <FontAwesomeIcon icon={faArrowRight} size="1x" />
                        )}
                    </button>
                </FlexRow>
            </div>
        </Link>
    );
};

export default Class;
