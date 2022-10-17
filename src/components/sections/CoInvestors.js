import React, { forwardRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Section, Container, Box, SectionTitle } from '@styles/global';
import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    transition: transform 0.3s ease-in-out;

    @media (min-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: repeat(3, 1fr);
    }

    label {
        position: absolute;
        top: -10px;
        background: var(--secondary-color);
        padding: 2px 12px;
        font-size: 14px;
        color: var(--alt-color);
        text-align: center;
    }

    .box {
        border: 1px solid rgba(225, 225, 225, 0.2);
    }
`;

const REGIONS = [
    {
        name: 'Europe',
        image: 'europe.jpg',
    },
    {
        name: 'Nordics',
        image: 'nordics.jpg',
    },
    {
        name: 'U.S.',
        image: 'us.jpg',
    },
];

const CoInvestors = forwardRef((props, ref) => {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { sourceInstanceName: { eq: "nfront" }, extension: {ne: "svg"} }
                ) {
                    edges {
                        node {
                            relativePath
                            publicURL
                            name
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED, width: 885)
                            }
                        }
                    }
                }
            }
        `
    );
    return (
        <Section accent="alt" ref={ref} id="co-investors">
            <Container>
                <SectionTitle>
                    <h2>Co-Investment Network</h2>
                    <p>
                        As part of our value-add in investments, we bring in
                        leading VCs and strategic high-net-worth individuals as
                        co-investors.
                        <br />
                        Here are some of the investors in our network:
                    </p>
                </SectionTitle>
                <StyledGrid>
                    {REGIONS.map(({ name, image }) => {
                        const img = data.placeholderImage.edges.find(
                            ({ node }) => node.relativePath === image
                        ).node;
                        const svg =
                            !img.childImageSharp && img.extension === 'svg';
                        const pluginImage = svg ? null : getImage(image);

                        return (
                            <Box>
                                <label>{name}</label>
                                {svg && (
                                    <img src={image.publicURL} alt={name} />
                                )}
                                {!svg && (
                                    <GatsbyImage
                                        image={pluginImage}
                                        alt={name}
                                    />
                                )}
                            </Box>
                        );
                    })}
                </StyledGrid>
            </Container>
        </Section>
    );
});

export default CoInvestors;
