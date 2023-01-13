import React from 'react';
import styled from 'styled-components';
import {
    Container,
    Grid,
    FlexColumn,
    ArtContainer,
    TextContainer,
} from '@styles/global';
import Fade from '@common/fade';

import { ReactComponent as IconOne } from '@images/nfront/global.svg';
import { ReactComponent as IconTwo } from '@images/nfront/graph.svg';
import { ReactComponent as IconThree } from '@images/nfront/geography.svg';

const StyledGrid = styled(Grid)`
    margin-top: var(--spacer);

    h3 {
        font-size: 110%;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
    }
`;

const CustomArtContainer = styled(ArtContainer)`
    margin-bottom: 2rem;
    svg {
        fill: var(--orange);
    }
`;

const CustomTextContainer = styled(TextContainer)`
    font-size: 17px;
`;

const sweetSpot = () => {
    return (
        <Container>
            <StyledGrid minWidth="300px">
                <Fade bottom>
                    <FlexColumn white className="pt-15 py-15 pb-2 rounded">
                        <CustomArtContainer alignContent="flex-start">
                            <IconOne />
                        </CustomArtContainer>
                        <h3>Industries</h3>
                        <p>Software (B2B and B2C)</p>
                        <CustomTextContainer>
                            Our core focus is on game-changing, capital
                            efficient, software propositions. We get excited by
                            fast-growing, scalable products operating in large
                            markets not yet fully disrupted by technology.
                        </CustomTextContainer>
                    </FlexColumn>
                </Fade>
                <Fade bottom>
                    <FlexColumn white className="pt-15 py-15 pb-2 rounded">
                        <CustomArtContainer alignContent="flex-start">
                            <IconTwo />
                        </CustomArtContainer>
                        <h3>Stages</h3>
                        <p>Seed to Series-B</p>
                        <CustomTextContainer>
                            Our sweet spot is companies raising between €1m and
                            €20m. For B2B SaaS platforms, we normally engage
                            somewhere between €500k and €4m in annual revenues.
                        </CustomTextContainer>
                    </FlexColumn>
                </Fade>
                <Fade bottom>
                    <FlexColumn white className="pt-15 py-15 pb-2 rounded">
                        <CustomArtContainer alignContent="flex-start">
                            <IconThree />
                        </CustomArtContainer>
                        <h3>Geographies</h3>
                        <p>Europe and U.S.</p>
                        <CustomTextContainer>
                            We are mainly focused on Europe, but look at U.S.
                            opportunistically. Regardless of home country, we
                            support businesses with international ambitions and
                            global potential.
                        </CustomTextContainer>
                    </FlexColumn>
                </Fade>
            </StyledGrid>
        </Container>
    );
};

export default sweetSpot;
