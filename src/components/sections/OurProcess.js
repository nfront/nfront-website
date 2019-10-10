import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '@styles/global';

const StyledSection = styled(Section)`
    background: #333333;
    padding-bottom: 0 !important;

    h2 {
        color: var(--accent-color);
    }
`;

const GRID = styled.div`
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr;
    min-height: 50vh;
    align-items: center;
    justify-items: center;

    h3 {
        color: var(--yellow);
    }

    p {
        color: var(--accent-color);
    }

    ${props =>
        props.accent === 'inverse' &&
        `
            background: #303030;
    `};

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(2, 1fr);
        ${props =>
            props.accent === 'inverse' &&
            `
        
            ${Text} {
                grid-column: 2;
                grid-row: 1;  

                &::before {
                    left: -27px;
                }

                &::after {
                    left: -5px;
                }

            }

            ${Art} {
                border-right: 1.5px solid hsla(0,0%,74%,.2);
                grid-column: 1;
                grid-row: 1; 
            }
        `};
    }
`;

const Text = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-items: center;
    border-right: 1.5px solid hsla(0, 0%, 74%, 0.2);
    height: 100%;
    padding: 0 1.5rem;
    @media (min-width: ${props => props.theme.screen.md}) {
        padding: 4rem;
        min-height: 50vh;

        &::before {
            content: '';
            border: 1.5px solid hsla(0, 0%, 74%, 0.3);
            width: 54px;
            height: 54px;
            border-radius: 50%;
            position: absolute;
            top: -27px;
            right: -27px;
        }
        &::after {
            content: '';
            background: #1f69df;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            top: -5px;
            right: -5px;
        }
    }
`;

const Art = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 120px;
    font-weight: 900;
    color: hsla(0, 0%, 74%, 0.2);
    grid-column: 1;
    grid-row: 1;
    @media (min-width: ${props => props.theme.screen.md}) {
        min-height: 50vh;
        grid-column: 2;
    }
`;

export default () => {
    return (
        <StyledSection>
            <SectionTitle>
                <h2>The Process</h2>
            </SectionTitle>
            <GRID>
                <Text>
                    <div>
                        <h3>Discovering corporate innovation — the workflow</h3>
                        <p>
                            We generate ideas, organize workshops, build
                            prototypes, test them with users, and then we build
                            cloud-based products the Agile way.
                        </p>
                    </div>
                </Text>
                <Art>1</Art>
            </GRID>
            <GRID accent="inverse">
                <Text>
                    <div>
                        <h3>Ideation towards digital transformation</h3>
                        <p>
                            It all starts with your ideas for innovations. We
                            come up with thoughts, map out information and value
                            streams to identify bottlenecks and pain points.
                            Then, we list out the most burning problems and help
                            you to discover potential solutions to those
                            problems. Together we choose the best and the most
                            promising ones for us to work on. We evaluate each
                            of them using various criteria to identify the ones
                            worth developing.
                        </p>
                    </div>
                </Text>
                <Art>2</Art>
            </GRID>
            <GRID>
                <Text>
                    <div>
                        <h3>Product strategy & design workshop</h3>
                        <p>
                            The ideas developed above will now be adjusted to
                            your needs. We combine Design Sprint and Design
                            Thinking methodologies to better address them. We
                            will clarify the vision of the business case and the
                            product’s value proposition. Then we’ll move on to
                            low-fidelity prototyping. Finally, we test the
                            prototype with its users and refine the concept.
                        </p>
                    </div>
                </Text>
                <Art>3</Art>
            </GRID>
            <GRID accent="inverse">
                <Text>
                    <div>
                        <h3>User experience & user interface design</h3>
                        <p>
                            Once the concept is proven, we create a
                            high-fidelity prototype based on the dedicated UX
                            design. Our designers refine the wireframes and
                            translate the rest of the user stories into a visual
                            interface. We follow our design principles: adopting
                            a user-first approach, thinking about future
                            performance, focusing on user-friendliness and
                            rocking the house with visuals. After feedback
                            rounds, we create a style guide and fully designed
                            clickable prototypes.
                        </p>
                    </div>
                </Text>
                <Art>4</Art>
            </GRID>
            <GRID>
                <Text>
                    <div>
                        <h3>Proof of concept development</h3>
                        <p>
                            With high-resolution mock-ups in hand, we move to
                            code your application. At this stage, we create a
                            fully functional version of the product according to
                            the previously agreed requirements and prototypes.
                            We use Agile and TDD (test-driven development)
                            approaches during the development process. Cloud
                            hosting keeps the product stable and ensures
                            scalability.
                        </p>
                    </div>
                </Text>
                <Art>5</Art>
            </GRID>
            <GRID accent="inverse">
                <Text>
                    <div>
                        <h3>Client input & feedback</h3>
                        <p>
                            Everyone has a role to play to ensure the success of
                            the project. As sprints come to a close, your
                            feedback and ideas are critical. With these, we can
                            adapt your application to any changes in business
                            rules and customer input. We communicate frequently
                            during our scrums, but typically schedule meetings
                            at the end of each sprint. This provides a medium to
                            discuss our progress, review feedback and adjust the
                            scope as necessary.
                        </p>
                    </div>
                </Text>
                <Art>6</Art>
            </GRID>
            <GRID>
                <Text>
                    <div>
                        <h3>App launch</h3>
                        <p>
                            When everything has been implemented and tested,
                            it`s time to release the product. We first launch
                            the staging version for your final approval, then we
                            make the application available to your customers or
                            employees. “Shipping" is an exciting and demanding
                            endeavor — we`ll be there to support you the whole
                            way through. We can further support you by
                            fine-tuning the application to more effectively
                            engage a new audience.
                        </p>
                    </div>
                </Text>
                <Art>7</Art>
            </GRID>
            <GRID accent="inverse">
                <Text>
                    <div>
                        <h3>Product market fit</h3>
                        <p>
                            If the product is made not for internal use but for
                            the market, it needs to pass one final test — market
                            validation. We’ll help you choose the right success
                            metrics and create a playbook to help you exploit
                            user feedback for the benefit of your product. We
                            will set up proper analytics and help you prepare a
                            launch strategy to increase the chance of success,
                            and support you in building a feedback-driven
                            development roadmap.
                        </p>
                    </div>
                </Text>
                <Art>8</Art>
            </GRID>
            <GRID>
                <Text>
                    <div>
                        <h3>Further development</h3>
                        <p>
                            All the steps we took before led us to this moment —
                            proper, continuous development of the app that has
                            its place on the market. Building the proof of
                            concept was the first step of a long journey. Once
                            we know that there’s a need for our solution (either
                            on the market or inside the organization), we focus
                            on product development with everything we got. The
                            goal is to make the solution ultimate — the best of
                            its kind, solving all identified problems, easy and
                            fun to use, full of useful features. One app to rule
                            them all.
                        </p>
                    </div>
                </Text>
                <Art>9</Art>
            </GRID>
            <GRID accent="inverse">
                <Text>
                    <div>
                        <h3>Integration & maintenance</h3>
                        <p>
                            If needed, we can integrate the solution with your
                            existing systems while maintaining all the needed
                            security requirements. After the application has
                            been successfully launched, it needs to be
                            maintained. Technologies get outdated, hardware
                            requires troubleshooting, security threats need to
                            be mitigated and your solution has to be ready to
                            meet users’ changing needs and face corner cases
                            such as huge numbers of users accessing the
                            application at the same time.
                        </p>
                    </div>
                </Text>
                <Art>10</Art>
            </GRID>
        </StyledSection>
    );
};
