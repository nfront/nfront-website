import React from 'react';
import Fade from '@common/fade';
import styled from 'styled-components';
import Hero from '@common/hero';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';

export const HeaderText = styled.div`
    h1 {
        color: var(--accent-color);
        font-size: 2rem;
        font-weight: 900;
        letter-spacing: 2px;
        text-transform: uppercase;

        @media ${breakpoints.tablet} {
            font-size: 3rem;
        }

        @media ${breakpoints.laptop} {
            font-size: 4rem;
        }

        span {
            color: var(--yellow);
            font-size: 2.5rem;
            @media ${breakpoints.tablet} {
                font-size: 4rem;
            }
            @media ${breakpoints.laptop} {
                font-size: 5rem;
            }
        }

        p {
            color: white;
            @media ${breakpoints.laptop} {
                font-size: 1.2rem;
            }
            font-size: 1rem;
            text-transform: none;
            font-weight: normal;
            letter-spacing: normal;
            margin-top: 0.5rem;
        }
    }
`;

export const SubHeaderText = styled.div`
    h2 {
        color: var(--yellow) !important;
        margin-bottom: 0 !important;
        font-weight: 400 !important;
        font-size: 2rem !important;
        text-transform: none !important;
        letter-spacing: normal !important;
    }
`;

export default function Header({ heroImage }) {
    return (
        <Hero id="home" heroImage={heroImage} height='long' left polygonShading gap="0">
            <Fade top>
                <SubHeaderText>
                    <h2>we help businesses</h2>
                </SubHeaderText>
            </Fade>
            <Fade bottom>
                <HeaderText>
                    <h1>
                        innovate <span className="vertical-baseline">+</span> grow
                        <p>with operational support and capital</p>
                    </h1>
                </HeaderText>
            </Fade>
        </Hero>
    );
}
