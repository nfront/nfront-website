import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from '@common/image';
import {
    Section,
    Container,
    FlexRow,
    FlexColumn,
    SectionTitle,
} from '@styles/global';

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

const CoInvestors = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: {
                        sourceInstanceName: { eq: "nfront" }
                        extension: { ne: "svg" }
                    }
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
        <Section accent="alt" id="co-investors">
            <SectionTitle className="text-white">
                <h2>Co-Investment Network</h2>
                <p>
                    As part of our value-add in investments, we bring in leading
                    VCs and strategic high-net-worth individuals as
                    co-investors.
                    <br />
                    Here are some of the investors in our network:
                </p>
            </SectionTitle>
            <Container>
                <FlexRow basis="360px" maxWidth="360px">
                    {REGIONS.map(({ name, image }) => {
                        const img = data.placeholderImage.edges.find(
                            ({ node }) => node.relativePath === image
                        ).node;

                        return (
                            <FlexColumn className="rounded bg-white pos-rel p-15">
                                <label className="red-label abs-label">{name}</label>
                                <Image
                                    className="rounded"
                                    image={img}
                                    alt={name}
                                />
                            </FlexColumn>
                        );
                    })}
                </FlexRow>
            </Container>
        </Section>
    );
};

export default CoInvestors;
