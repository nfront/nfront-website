import React from 'react';
import { Container } from '@styles/global';
import styled from 'styled-components';

export const CardStyle = styled.div`
    padding: 25px;
    background-color: #fff;
    border-left: 5px solid;
    border-color: #e1e7ff;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
    display: block;
    position: relative;
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
    h3{
        margin-top: 1rem;
    }
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

export default function Card({
    // icon,
    title,
    price,
    availablity,
    location,
    publish,
}) {
    const url =
        'https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Instagram-1024.png';
    return (
        <Container>
            <CardStyle>
                <div className="job-info">
                    <img className="mr-1" src={url} alt="icon" />
                    <div>
                        <h3 className="mb-05">{title}</h3>
                        <div className="job-details">
                            <span className="pr-1">{location}</span>
                            <span className="pr-1">{availablity}</span>
                            <span className="pr-1">{publish}</span>
                        </div>
                    </div>
                </div>
                <div className="available">
                    <a>{availablity} </a>
                    <h3> {`$${price}`}</h3>
                </div>
            </CardStyle>
        </Container>
    );
}
