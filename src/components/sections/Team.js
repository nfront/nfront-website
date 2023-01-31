import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from '@common/image';
import {
    Section,
    Container,
    SectionTitle,
    Divider,
    FlexRow,
    ArtContainer,
} from '@styles/global';

// export const FlexBox = styled.div`
//     display: flex;
//     flex-flow: row wrap;
//     justify-content: center;
//     @media ${breakpoints.mobileL} {
//         justify-content: left;
//     }
//     padding: 0 1.5rem;
//     margin-bottom: 3rem;
//     h2 {
//         font-size: 1.5rem;
//         margin-bottom: 1rem;
//     }
//     h3 {
//         font-size: 100%;
//         font-weight: 500;
//         margin-bottom: 1.5rem;
//     }
//     p {
//         margin-bottom: 1rem;
//     }
//     p:last-child {
//         margin-bottom: 0rem;
//     }

//     .gatsby-image-wrapper {
//         flex: 0 1 300px;
//         margin-right: 0rem;
//         margin-bottom: 1.5rem;
//         max-width: 250px;
//         max-height: 250px;
//         @media ${breakpoints.mobileL} {
//             margin-right: 3rem;
//             /* text-align: left; */
//         }
//     }
// `;

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
    const image = data.file;
    return (
        <Section>
            <SectionTitle>
                <h2>nFront Team</h2>
                <p>
                    nFront's team is focused on identifying a small group of
                    exceptional companies per year. Diving in full-time, we work
                    hard to provide the stand-out founders of these companies
                    with operational support, capital and exceptional
                    co-investors.
                </p>
            </SectionTitle>
            <Container>
                <Divider spacing="3rem"/>
                <FlexRow alignItems="flex-start" className="mb-3 center-mobile">
                    <ArtContainer inline className="flex-basis-auto align-self-start">
                        <Image
                            className="rounded"
                            image={image}
                            alt="Magnus Gaarder"
                        />
                    </ArtContainer>
                    <div className="center-mobile flex-50 flex-grow">
                        <h3 className="h3-large mb-1">Magnus Gaarder</h3>
                        <h4 className="normal-font-weight mb-15">
                            Founding Partner
                        </h4>
                        <p className="mb-1">
                            Magnus was previously a member of the investment
                            team at venture capital fund Nauta Capital in
                            London. His focus was on Series-A and Series-B
                            software investments in Northern Europe, including
                            companies such as ChannelSight and BeMyEye.
                        </p>
                        <p className="mb-1">
                            Prior to Nauta, Magnus was an M&A investment banker
                            in London and in New York, specialized in technology
                            and healthcare transactions respectively.
                        </p>
                        <p className="mb-0">
                            Magnus has degrees in computer science and finance
                            from UPenn and NTNU, focused on machine learning and
                            financial engineering.
                        </p>
                    </div>
                </FlexRow>
                <Divider spacing="3rem"/>
                <FlexRow className="mb-0" gap="3rem">
                    <div className="center-mobile flex-basis-0-grow-1-tablet">
                        <h3 className="h3-large mb-1">Investment Analysts</h3>
                        <p className="mb-0">
                            Analysts at nFront have backgrounds within VC,
                            entrepreneurship, operations, investment banking and
                            consulting. They cover critical tasks such as
                            prospect screening, market analysis, co-investor
                            outreach and materials for portfolio companies. The
                            analysts are nFront’s backbone, united by a strong
                            passion for technology and an ambition to make a
                            difference by bringing support and capital to
                            exceptional founders.
                        </p>
                    </div>
                    <Divider tablet className="m-0" />
                    <div className="center-mobile flex-basis-0-grow-1-tablet">
                        <h3 className="h3-large mb-1">Portfolio Mentors</h3>
                        <p className="mb-0">
                            Our team members have over the years built one of
                            Europe’s largest deal sharing and expert networks.
                            Mentors are selected individuals from this network
                            who provide support to our portfolio companies,
                            share deal flow with our team members and contribute
                            with expert advice on new investment prospects. They
                            include leading VCs, successful entrepreneurs,
                            decision makers at large corporations and technology
                            experts.
                        </p>
                    </div>
                </FlexRow>
            </Container>
        </Section>
    );
};

export default Team;
