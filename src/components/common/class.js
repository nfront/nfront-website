import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '@common/image';
import { ArtContainer, device } from '@styles/global';

//FIXME: Replace with components from global
const ItemGrid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        margin-bottom: 0;
        color: #002e5f;
    }
    @media ${device.tablet}{
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Text = styled.div`
    padding: 1rem;

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
        @media ${device.laptop} {
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
        @media ${device.laptop} {
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
const CustomArtContainer = styled(ArtContainer)`
    .img-wrapper-style {
        margin-bottom: 0;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
        transition: all 0.3s ease-out 0s;
        vertical-align: middle;
    }
`;

export default function Class({ results }) {
    const { coverImage } = results;
    return (
        <div key={results.title} className="grid-item">
            <Link to={`/academy/${results.slug}`}>
                <CustomArtContainer>
                    {coverImage ? (
                        <Image
                            className="img-wrapper-style"
                            image={coverImage}
                            alt={results.title}
                        />
                    ) : (
                        // NEEDED???
                        // TODO: FIX
                        <StaticImage
                            width={800}
                            height={476}
                            src="../../images/nfront/no-image-found.jpg"
                            alt="preview"
                        />
                    )}
                </CustomArtContainer>
                <Text>
                    <h3>{results.title}</h3>
                    <hr />
                    <ItemGrid>
                        <p className="category">{results?.course?.title}</p>
                        <Link
                            className="know-details"
                            to={`/academy/${results.slug}`}
                        >
                            Know Details
                            <FontAwesomeIcon icon={faArrowRight} size="1px" />
                        </Link>
                    </ItemGrid>
                </Text>
            </Link>
        </div>
    );
}
