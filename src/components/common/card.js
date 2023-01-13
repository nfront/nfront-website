import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import Image from '@common/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBookmark } from '@fortawesome/free-solid-svg-icons';

export const CardStyle = styled.div`
    padding: 25px;
    background-color: #fff;
    border-left: 5px solid;
    border-color: #e1e7ff;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
    display: block;
    position: relative;
    margin-bottom: 1rem;
    img {
        width: 60px;
        height: 60px;
    }
    .job-info {
        @media ${breakpoints.laptop} {
            display: flex;
        }
        padding-bottom: 1rem;
    }
    .available {
        justify-content: space-between;
        h3 {
            margin: 0;
        }
        @media ${breakpoints.laptop} {
            display: flex;
        }
    }
`;

export default function Card({ results }) {
    return (
        <>
            {results &&
                results.map((val) => {
                    const {
                        title,
                        categories,
                        price,
                        icon,
                        city,
                        slug,
                        availablity,
                    } = val;

                    return (
                        <CardStyle key={slug}>
                            <div className="job-info">
                                <Image
                                    image={icon}
                                    alt={title}
                                    className={'mr-1'}
                                />
                                <div>
                                    <Link to={`/jobs/${slug}`}>
                                        <h3 className="mb-05">{title}</h3>{' '}
                                    </Link>
                                    <div className="job-details">
                                        <span className="pr-1">
                                            <FontAwesomeIcon
                                                icon={faLocationDot}
                                                size="1x"
                                            />{' '}
                                            {city.title}
                                        </span>
                                        <span className="pr-1">
                                            {' '}
                                            <FontAwesomeIcon
                                                icon={faBookmark}
                                                size="1x"
                                            />{' '}
                                            {categories.title}
                                        </span>
                                        {/* <span className="pr-1">{publish}</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="available">
                                {/* <Link to="/">{availablity} </Link> */}
                                <label className="blue-label">{availablity}</label>
                                <h3>
                                    {' '}
                                    {`$${price.min}`} - {`$${price.max}`}
                                </h3>
                            </div>
                        </CardStyle>
                    );
                })}
        </>
    );
}
