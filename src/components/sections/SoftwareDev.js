import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from '@styles/global';

/** import Img from 'gatsby-image'; */

const GRID = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    transition: transform 0.3s ease-in-out;

    @media (min-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(3, 1fr);
    }

    h3 {
        font-size: 95%;
        color: var(--yellow) !important;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .box {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(225, 225, 225, 0.2);
        padding: 3rem 1.5rem;
    }
`;

const Art = styled.div`
    padding: 2rem 0;
    width: 100%;
    min-height: 200px;
`;

const Text = styled.p`
    height: auto;
    font-size: 17px;
    @media (min-width: ${props => props.theme.screen.md}) {
        min-height: 180px;
    }
`;

const DATA = [
    {
        title: 'Outsourced Development',
        description:
            'Have an idea in mind, but don’t want to hire a team to build it in-house? Look no further. Quality control, speed of execution, good communication and competitive pricing marks our Outsourced Development offering.',
        image: 'messages.png',
        link: '/outsource-development/',
    },
    {
        title: 'Hire Top Developers',
        description:
            'Hiring developers is hard. Requirements include not only technical expertise, but also communication skills and culture fit. Leave that work to us. We supply you with thoroughly pre-vetted developers that match your project needs.',
        image: 'uploading.png',
        link: '/hire-top-developer-teams/',
    },
    {
        title: 'Corporate Innovation',
        description:
            'Today, digital innovation is everywhere. Via our Corporate Innovation offering, we help established businesses brainstorm ideas, organize workshops, build prototypes and implement fully scalable and market-ready solutions.',
        image: 'virtual.png',
        link: '/corporate-innovation/',
    },
];

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { sourceInstanceName: { eq: "nfront" } }
                ) {
                    edges {
                        node {
                            relativePath
                            childImageSharp {
                                fluid(maxWidth: 885) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    return (
        <Container>
            <GRID>
                {DATA.map(({ title, description, image, link }) => {
                    const img = data.placeholderImage.edges.find(
                        ({ node }) => node.relativePath === image
                    ).node;
                    return (
                        <div className="box with-shadow">
                            <h3>{title}</h3>
                            <Text>{description}</Text>
                            <Link to={link}>
                                <button className="button small">
                                    Find out more
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </GRID>
        </Container>
    );
};
