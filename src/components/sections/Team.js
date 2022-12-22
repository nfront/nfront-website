import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { device, Section, Container, SectionTitle } from '@styles/global';

export const Divider = styled.hr`
    margin: 0 1.5rem 3rem 1.5rem;
    padding: 0 1.5rem;
`;

const Divider2 = styled(Divider)`
    @media ${device.laptop} {
        display: none;
    }
`;

const StyledContainer = styled(Container)`
    text-align: center;
    @media ${device.mobileL} {
        text-align: left;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    @media ${device.mobileL} {
        justify-content: left;
    }
    padding: 0 1.5rem;
    margin-bottom: 3rem;
    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    h3 {
        font-size: 100%;
        font-weight: 500;
        margin-bottom: 1.5rem;
    }
    p {
        margin-bottom: 1rem;
    }
    p:last-child {
        margin-bottom: 0rem;
    }

    .gatsby-image-wrapper {
        flex: 0 1 300px;
        margin-right: 0rem;
        margin-bottom: 1.5rem;
        max-width: 250px;
        max-height: 250px;
        @media ${device.mobileL} {
            margin-right: 3rem;
            /* text-align: left; */
        }
    }
`;

const Founder = styled.div`
    flex: 1 1 400px;
    /* margin-left: 1.5rem; */
`;

const Analysts = styled.div`
    flex: 1 1 400px;
    /* margin-right: 2rem; */
    /* margin-left: 2rem; */
    @media ${device.mobileL} {
        margin-right: 2rem;
        text-align: left;
        margin-left: 0rem;
    }
    p {
        margin-bottom: 3rem;
    }
`;

const Mentors = styled.div`
    flex: 1 1 400px;
    /* margin-left: 1.5rem; */
`;

const Team = () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "magnus-gaarder.jpg" }) {
                    childImageSharp {
                        gatsbyImageData(width: 250)
                    }
                }
            }
        `
    );
    const image = getImage(data.file);
    return (
        <>
            <Section>
                <SectionTitle>
                    <h2>nFront Team</h2>
                    <p>
                        nFront's team is focused on identifying a small group of
                        exceptional companies per year. Diving in full-time, we
                        work hard to provide the stand-out founders of these
                        companies with operational support, capital and
                        exceptional co-investors.
                    </p>
                </SectionTitle>
                <StyledContainer>
                    <Divider />
                    <FlexBox>
                        <GatsbyImage
                            className="rounded"
                            image={image}
                            alt="Magnus Gaarder"
                        />
                        <Founder>
                            <h2>Magnus Gaarder</h2>
                            <h3>Founding Partner</h3>
                            <p>
                                Magnus was previously a member of the investment
                                team at venture capital fund Nauta Capital in
                                London. His focus was on Series-A and Series-B
                                software investments in Northern Europe,
                                including companies such as ChannelSight and
                                BeMyEye.
                            </p>
                            <p>
                                Prior to Nauta, Magnus was an M&A investment
                                banker in London and in New York, specialized in
                                technology and healthcare transactions
                                respectively.
                            </p>
                            <p>
                                Magnus has degrees in computer science and
                                finance from UPenn and NTNU, focused on machine
                                learning and financial engineering.
                            </p>
                        </Founder>
                    </FlexBox>
                    <Divider />
                    <FlexBox className="mb-0">
                        <Analysts>
                            <h2>Investment Analysts</h2>
                            <p>
                                Analysts at nFront have backgrounds within VC,
                                entrepreneurship, operations, investment banking
                                and consulting. They cover critical tasks such
                                as prospect screening, market analysis,
                                co-investor outreach and materials for portfolio
                                companies. The analysts are nFront’s backbone,
                                united by a strong passion for technology and an
                                ambition to make a difference by bringing
                                support and capital to exceptional founders.
                            </p>
                            <Divider2 />
                        </Analysts>
                        <Mentors>
                            <h2>Portfolio Mentors</h2>
                            <p>
                                Our team members have over the years built one
                                of Europe’s largest deal sharing and expert
                                networks. Mentors are selected individuals from
                                this network who provide support to our
                                portfolio companies, share deal flow with our
                                team members and contribute with expert advice
                                on new investment prospects. They include
                                leading VCs, successful entrepreneurs, decision
                                makers at large corporations and technology
                                experts.
                            </p>
                        </Mentors>
                    </FlexBox>
                </StyledContainer>
            </Section>
            {/* <Wave shade /> */}
        </>
    );
};

export default Team;
