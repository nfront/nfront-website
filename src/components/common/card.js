import React from 'react';
import { Container } from '@styles/global';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
    @media (min-width: ${props => props.theme.screen.lg}) {
    }

}
.job-info{
    @media (min-width: ${props => props.theme.screen.lg}) {
        display: flex;
    }
    padding-bottom: 1rem;
}
.available{
    justify-content: space-between;
    h3 {
        margin-top: 1rem ;
    }    
    @media (min-width: ${props => props.theme.screen.lg}) {
        display: flex;
        margin-top: 0 !important;
    }

    a{
        color: var(--blue) ;
        background-color:  var(--accent-color); 
        height: fit-content;
        margin-top: 1rem ;

        padding: 0.2rem 0.5rem;
    }

}
.job-details{
    @media (min-width: ${props => props.theme.screen.lg}) {
        display: flex;
    }
    // color: var(--blue);

    p{ 
        // color: var(--blue);
        width: 100% !important;
    } 
}
    }
`;

export default function Card({ results }) {
    return (
        <Container>
            {results &&
                results.map(val => {
                    const {
                        title,
                        streetAddress,
                        price,
                        availablity,
                        icon,
                        slug,
                    } = val;

                    return (
                        <CardStyle>
                            <div className="job-info">
                                <img
                                    className="mr-1"
                                    src={icon.file.url}
                                    alt="icon"
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
                                            {streetAddress}
                                        </span>
                                        <span className="pr-1">
                                            {' '}
                                            <FontAwesomeIcon
                                                icon={faBookmark}
                                                size="1x"
                                            />{' '}
                                            {availablity}
                                        </span>
                                        {/* <span className="pr-1">{publish}</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="available">
                                <Link to="/">{availablity} </Link>
                                <h3>
                                    {' '}
                                    {`$${price.min}`} - {`$${price.max}`}
                                </h3>
                            </div>
                        </CardStyle>
                    );
                })}
        </Container>
    );
}
