import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '@common/image';
import { ArtContainer } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';

//FIXME: Replace with components from global
const ItemGrid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        margin-bottom: 0;
        color: #002e5f;
    }
    @media ${breakpoints.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${breakpoints.laptop} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Text = styled.div`
    padding: 1rem;

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
        @media ${breakpoints.laptop} {
            min-height: 2.5rem;
        }
    }

    .label {
        font-weight: 500;
    }
    a {
        color: black;
        font-size: 0.95rem;
    }

    /* p:not(.label) {
        font-size: 16px;
    } */
    .know-details {
        margin-left: 1rem;
        text-align: right;

        font-size: 0.8rem;
        @media ${breakpoints.laptop} {
            font-size: 1rem;
        }

        &:hover {
            color: var(--blue);
            .fa-arrow-right {
                margin-left: 10px;
                transition: all 0.3s ease-out 0s;
            }
        }
        .fa-arrow-right {
            margin-left: 5px;
        }
    }
`;

// FIXME: NEEDED?
// const CustomArtContainer = styled(ArtContainer)`
//     .img-wrapper-style {
//         margin-bottom: 0;
//         border-top-left-radius: 0.375rem;
//         border-top-right-radius: 0.375rem;
//         transition: all 0.3s ease-out 0s;
//         vertical-align: middle;
//     }
// `;

const Class = ({ aClass }) => {
    const { coverImage, title, slug, course } = aClass;
    return (
        <div key={title} className="rounded-and-shadow">
            <Link to={`/academy/${slug}`} className="scale-img">
                <ArtContainer className="p-15 mb-0" maxHeight="10rem">
                    <Image image={coverImage} alt={title} />
                </ArtContainer>
                <div className="py-15 pb-15">
                    <h3>{title}</h3>
                    <hr />
                    <ItemGrid>
                        <p className="category">{course?.title}</p>
                        <Link className="know-details" to={`/academy/${slug}`}>
                            Know Details
                            <FontAwesomeIcon icon={faArrowRight} size="1px" />
                        </Link>
                    </ItemGrid>
                </div>
            </Link>
        </div>
    );
};

export default Class;
