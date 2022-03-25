import React from 'react';
import { Container } from '@styles/global';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

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
.job-info{
    @media (min-width: ${props => props.theme.screen.lg}) {
        display: flex;
    }
    padding-bottom: 1rem;
}
.available{
    @media (min-width: ${props => props.theme.screen.lg}) {
        display: flex;
    }
    justify-content: space-between;
    a{
        color: var(--blue) ;
        background-color:  var(--accent-color); 
        height: fit-content;
        padding: 0.2rem 0.5rem;
    }
    @media (min-width: ${props => props.theme.screen.sm}) {
        h3{
            margin-top: 1rem;
        }    }

}
.job-details{
    @media (min-width: ${props => props.theme.screen.lg}) {
        display: flex;
    }
    p{ 
        color: var(--blue);
        width: 100% !important;
    } 
}
    }
`;

export default function Card() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulJobs {
                nodes {
                    title
                    streetAddress
                    slug
                    price {
                        min
                        max
                    }
                    availablity
                    icon {
                        fluid(maxWidth: 100, quality: 100) {
                            src
                        }
                    }
                }
            }
        }
    `);
    const results = data.allContentfulJobs.nodes;
    return (
        <Container>
            {results.map(val => {
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
                        <Link to={`/jobs/${slug}`}>
                            <div className="job-info">
                                <img
                                    className="mr-1"
                                    src={icon.fluid.src}
                                    alt="icon"
                                />
                                <div>
                                    <h3 className="mb-05">{title}</h3>
                                    <div className="job-details">
                                        <span className="pr-1">
                                            {streetAddress}
                                        </span>
                                        <span className="pr-1">
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
                        </Link>
                    </CardStyle>
                );
            })}
        </Container>
    );
}
