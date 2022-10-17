import React from 'react';
import styled from 'styled-components';
import { Container, Box } from '@styles/global';
import Fade from '@common/fade';

import { ReactComponent as IconOne } from '@images/nfront/global.svg';
import { ReactComponent as IconTwo } from '@images/nfront/graph.svg';
import { ReactComponent as IconThree } from '@images/nfront/geography.svg';

const StyledGrid = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    transition: transform 0.3s ease-in-out;
    margin-top: var(--spacer);

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }

    h3 {
        font-size: 110%;
        /* color: var(--primary-color) !important; */
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
    }

    h4 {
        /* font-family: Roboto, "Helvetica Neue";
        font-size: 17px;
        font-weight: 500; 
        color: var(--grey); */
    }
`;

const Art = styled.div`
    svg {
        fill: var(--button-color);
        width: 70px;
        height: 70px;
    }
    padding: 0 0 1.6rem 0;
`;
const Art2 = styled(Art)`
    svg {
        fill: var(--orange);
    }
`;

const Text = styled.p`
    height: auto;
    font-size: 17px;
    @media (min-width: ${props => props.theme.screen.md}) {
        min-height: 150px;
    }
    margin-bottom: 0px;
`;

const sweetSpot = () => {
    return (
        <Container>
            <StyledGrid>
                <Fade bottom>
                    <Box>
                        <Art2>
                            <IconOne />
                        </Art2>
                        <h3>Industries</h3>
                        <p>Software (B2B and B2C)</p>
                        <Text>
                            Our core focus is on game-changing, capital
                            efficient, software propositions. We get excited by
                            fast-growing, scalable products operating in large
                            markets not yet fully disrupted by technology.
                        </Text>
                    </Box>
                </Fade>
                <Fade bottom>
                    <Box>
                        <Art2>
                            <IconTwo />
                        </Art2>
                        <h3>Stages</h3>
                        <p>Seed to Series-B</p>
                        <Text>
                            Our sweet spot is companies raising between €1m and
                            €20m. For B2B SaaS platforms, we normally engage
                            somewhere between €500k and €4m in annual revenues.
                        </Text>
                    </Box>
                </Fade>
                <Fade bottom>
                    <Box>
                        <Art2>
                            <IconThree />
                        </Art2>
                        <h3>Geographies</h3>
                        <p>Europe and U.S.</p>
                        <Text>
                            We are mainly focused on Europe, but look at U.S.
                            opportunistically. Regardless of home country, we
                            support businesses with international ambitions and
                            global potential.
                        </Text>
                    </Box>
                </Fade>
            </StyledGrid>
        </Container>
    );
};

export default sweetSpot;