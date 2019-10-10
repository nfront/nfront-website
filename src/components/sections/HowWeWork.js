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
                        <h3>Tell us about your idea</h3>
                        <p>
                            You have an idea of a product or service and want to
                            bring it to life? An early definition of the core
                            value proposition is an essential success factor for
                            the project. This enables us to conduct the design
                            and draw up a future development plan. We'll conduct
                            a series of workshops with you to define a detailed
                            roadmap and refine the value proposition delivery
                        </p>
                    </div>
                </Text>
                <Art>1</Art>
            </GRID>
            <GRID accent="inverse">
                <Text>
                    <div>
                        <h3>Discovery workshops</h3>
                        <p>
                            If you found a problem worth solving but don’t have
                            a clear product vision just yet, we will help you
                            clarify that vision. During the workshop, we will
                            focus on listing out your users’ needs and
                            empathizing with their problems. Only after we’ve
                            understood their point of view will we move on to
                            ideating and coming up with solutions and product
                            features. We follow Design Sprint, Design Thinking
                            and Lean Startup methodologies customized to project
                            needs.
                        </p>
                    </div>
                </Text>
                <Art>2</Art>
            </GRID>
            <GRID>
                <Text>
                    <div>
                        <h3>User experience & user interface design</h3>
                        <p>
                            Once the MVP concept is clarified, we create a
                            high-fidelity prototype based on our UX research.
                            Our designers refine the wireframes and translate
                            the user stories into a visual interface. We follow
                            our design principles: adopting a user-first
                            approach, thinking about future performance,
                            focusing on user-friendliness and rocking the house
                            with visuals. After feedback rounds, we create a
                            style guide and fully designed clickable prototypes.
                        </p>
                    </div>
                </Text>
                <Art>3</Art>
            </GRID>
            <GRID accent="inverse">
                <Text>
                    <div>
                        <h3>Development</h3>
                        <p>
                            With high-resolution mock-ups in hand, we move to
                            code your application. At this stage, we create a
                            fully functional version of the product according to
                            the previously agreed requirements and prototypes.
                            We use Agile/Scrum and TDD (test-driven development)
                            approaches during the development process. Cloud
                            hosting keeps the product stable and ensures
                            scalability.
                        </p>
                    </div>
                </Text>
                <Art>4</Art>
            </GRID>
            <GRID>
                <Text>
                    <div>
                        <h3>Client input & feedback</h3>
                        <p>
                            Everyone has a role to play to ensure the success of
                            the project. As Scrum sprints come to a close, your
                            feedback and ideas are critical. With these, we can
                            adapt your application to any changes in business
                            rules and customer input. We communicate frequently
                            during our sprints, but typically schedule meetings
                            at the end of them. This provides a medium to
                            discuss our progress, review feedback and adjust the
                            scope as necessary.
                        </p>
                    </div>
                </Text>
                <Art>5</Art>
            </GRID>
            <GRID accent="inverse">
                <Text>
                    <div>
                        <h3> App launch</h3>
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
                <Art>6</Art>
            </GRID>
        </StyledSection>
    );
};
