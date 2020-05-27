import React from 'react';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';

import { ReactComponent as IconOne } from '@images/nfront/research.svg';
import { ReactComponent as IconTwo } from '@images/nfront/launch.svg';
import { ReactComponent as IconThree } from '@images/nfront/speed.svg';
import { ReactComponent as IconFour } from '@images/nfront/solution.svg';

/** use if you need to style your section differently, otherwise leave it empty */
const StyledSection = styled(Section)``;

const Text = styled.div`
    padding: 1rem;

    h3 {
        font-size: 110%;
        /* color: var(--primary-color) !important; */
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    p {
        font-size: 16px;
        margin-bottom: 0;
    }
    .label {
        font-size: 12px;
    }
`;

export default () => {
    return (
        <>
            <Container>
                <div id="timeline">
                    <div class="timeline-item">
                        <div class="timeline-icon">
                            <IconOne />
                        </div>
                        <Slide left>
                            <>
                                <div class="timeline-content">
                                    <h3>Identification</h3>
                                    <p class="label">Month 1</p>
                                    <p class="mb-0">
                                        Fund raising materials, hard DD
                                        questions, valuation, size, +
                                    </p>
                                </div>
                            </>
                        </Slide>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">
                            <IconTwo />
                        </div>
                        <Slide right>
                            <>
                                <div class="timeline-content right">
                                    <h3>Preparation</h3>
                                    <p class="label">Month 2-3</p>
                                    <p class="mb-0">
                                        Story, KPIs, team training, deck, IM,
                                        financial models, +
                                    </p>
                                </div>
                            </>
                        </Slide>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">
                            <IconThree />
                        </div>
                        <Slide left>
                            <>
                                <div class="timeline-content">
                                    <h3>Live Process</h3>
                                    <p class="label">Month 4-7</p>
                                    <p class="mb-0">
                                        Identify investors, run outreach, guide
                                        Q&A, +
                                    </p>
                                </div>
                            </>
                        </Slide>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">
                            <IconFour />
                        </div>
                        <Slide right>
                            <>
                                <div class="timeline-content right">
                                    <h3>Closing</h3>
                                    <p class="label">Month 8-10</p>
                                    <p class="mb-0">
                                        Secure team sheets, analyze terms, guide
                                        third-party DD, +
                                    </p>
                                </div>
                            </>
                        </Slide>
                    </div>
                </div>
            </Container>
        </>
    );
};
