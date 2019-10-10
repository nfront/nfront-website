import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import CTA from '@common/CTA';
import Strapbox from '@common/strapbox';
import OurProcess from '@sections/TheProcess';
import Wave from '@utils/divider/wave';
import { Section, Container, SectionTitle } from '@styles/global';
import styled from 'styled-components';

const GRID = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    transition: transform 0.3s ease-in-out;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    text-align: center;
    position: relative;
    padding: 4rem 1.5rem 1rem;

    ${props =>
        props.alt &&
        `
        background-color: var(--primary-color);  

        h4,
        p {
            color: var(--accent-color);
        }
    `};

    h4 {
        text-transform: uppercase;
        letter-spacing: 1px;
    }
`;

const Number = styled.div`
    position: absolute;
    top: 0;
    transform: translate3d(0, -50%, 0);
`;

export default () => (
    <Layout>
        <Navbar fluid />
        <Hero fileName="LA.jpg">
            <h2>Hire Top Developer Teams</h2>
        </Hero>
        <Section>
            <Container>
                <SectionTitle>
                    <h2>Developer Hiring Solution</h2>
                    <p>Let us do the pre-screening for you.</p>
                    <p>
                        With a process based on deep technical testing and
                        personality evaluation, we help secure the best
                        developers based on your requirements. We supply both
                        remote developers as well as full-time remote
                        engineering teams, on hourly or monthly contracts.
                    </p>
                </SectionTitle>
                <GRID>
                    <Box className="box with-shadow" alt>
                        <Number className="number">1</Number>
                        <h4>Full time</h4>
                        <p>Find your next team member</p>
                    </Box>
                    <Box className="box with-shadow">
                        <Number className="number">2</Number>
                        <h4>Contractors</h4>
                        <p>Add bandwidth for short term projects</p>
                    </Box>
                    <Box className="box with-shadow" alt>
                        <Number className="number">3</Number>
                        <h4>Remote hub</h4>
                        <p>Build a co-located engineering hub</p>
                    </Box>

                    <Box className="box with-shadow">
                        <Number className="number">4</Number>
                        <h4>Remote team</h4>
                        <p>Build a distributed development team</p>
                    </Box>
                </GRID>
            </Container>
        </Section>
        <OurProcess />
        <Strapbox>
            <p>
                Spend less time on technical recruiting, and hit your milestones
                faster.
            </p>
        </Strapbox>
        <CTA>
            <h2>Contact Us</h2>
            <p>
                Are you looking for top-percent developer teams that can execute
                quickly, have a deep grasp of modern frameworks, and can
                communicate well with your existing team members?
            </p>
            <Link to="/contact/">
                <button className="button">Get in touch</button>
            </Link>
        </CTA>
        <Wave accent="dark" />
        <Footer />
    </Layout>
);
