import React from 'react';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';

const GRID = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    position: relative;
`;

export default () => {
    return (
        <Section>
            <Container>
                <SectionTitle>
                    <h2>Who We Can Help</h2>
                </SectionTitle>
                <GRID>
                    <Box>
                        <div className="number">1</div>
                        <p>Founders with great ideas but no coding skills</p>
                    </Box>
                    <Box>
                        <div className="number">2</div>
                        <p>
                            Growing startups in need of scalable, modern
                            frameworks
                        </p>
                    </Box>
                    <Box>
                        <div className="number">3</div>
                        <p>
                            Large corporates who need resources for digital
                            innovation
                        </p>
                    </Box>
                </GRID>
            </Container>
        </Section>
    );
};
