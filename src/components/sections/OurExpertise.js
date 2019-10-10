import React from 'react';
import { Section, Container, SectionTitle } from '@styles/global';
import styled from 'styled-components';

/** */
import { ReactComponent as ImgOne } from '@images/nfront/web-app.svg';
import { ReactComponent as ImgTwo } from '@images/nfront/mobile.svg';
import { ReactComponent as ImgThree } from '@images/nfront/website.svg';

const StyledContainer = styled(Container)`
    .button {
        margin: 2rem auto !important;
    }
`;

const GRID = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    transition: transform 0.3s ease-in-out;

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    text-align: center;
    position: relative;
    border: 1px solid rgba(225, 225, 225, 0.2);
    padding: 4rem 1.5rem 1rem;

    svg {
        width: 80%;
    }

    h4 {
        margin-top: 2rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
`;

export default () => {
    return (
        <Section>
            <StyledContainer>
                <SectionTitle>
                    <h2>Our Expertise</h2>
                    <p>
                        nFront tackles software projects of all sizes and
                        complexities, from start-up prototypes to
                        enterprise-grade platforms for established corporations.
                    </p>
                </SectionTitle>
                <GRID>
                    <Box className="box with-shadow">
                        <ImgOne />
                        <h4>Web Applications</h4>
                        <p>
                            All software running in a web browser, including
                            e-commerce, online banking, streaming systems,
                            booking systems, messaging/chat, and much more.
                        </p>
                    </Box>
                    <Box className="box with-shadow">
                        <ImgTwo />
                        <h4>Mobile Applications</h4>
                        <p>
                            All software developed specifically for use on
                            small, wireless devices, such as smartphones and
                            tablets. Optimized for size and speed.
                        </p>
                    </Box>
                    <Box className="box with-shadow">
                        <ImgThree />
                        <h4>Dynamic Websites</h4>
                        <p>
                            Design and creation of professional websites for all
                            industries, including financial services,
                            hospitality, creative arts and more.
                        </p>
                    </Box>
                </GRID>
            </StyledContainer>
        </Section>
    );
};
