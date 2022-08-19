import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { Section, Container, Overlay, OverlayText } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FlexBox } from '../components/sections/Team';
import { INLINES } from '@contentful/rich-text-types';
// import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const StyledContainer = styled(Container)`
    text-align: center;
    @media (min-width: ${(props) => props.theme.screen.xs}) {
        text-align: left;
    }
`;

const DetailedSection = styled.div`
    flex: 1 1 300px;
    @media (min-width: 708px) {
        margin-left: 1.5rem;
    }
    text-align: left;
`;

const ModifiedFlexBox = styled(FlexBox)`
    padding: 0;
    @media (min-width: ${(props) => props.theme.screen.xs}) {
        padding: 0 1.5rem;
    }
`;

const IframeContainer = styled.span`
    padding-bottom: 56.25%;
    position: relative;
    display: block;
    width: 100%;

    > iframe {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const courses = ({ data }) => {
    const { title, coverImage, body, courseCategories } =
        data.contentfulCourses;

    const pluginImage = getImage(coverImage);

    const website_url = 'vimeo.com';

    // Render richTextResponse.json to the DOM using
    // documentToReactComponents from "@contentful/rich-text-react-renderer"

    // function RichTextResponse(richTextResponse) {
    //     return (
    //         <>
    //             {documentToReactComponents(
    //                 richTextResponse.json,
    //                 renderOptions(richTextResponse.links)
    //             )}
    //         </>
    //     );
    // }

    const options = {
        renderNode: {
            [INLINES.HYPERLINK]: (node) => {
                if (node.data.uri.indexOf('youtu') !== -1) {
                    return (
                        <IframeContainer>
                            <iframe
                                title="nFront Ventures Video Player"
                                src={node.data.uri}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </IframeContainer>
                    );
                } else if (node.data.uri.indexOf('vimeo.com') !== -1) {
                    return (
                        <IframeContainer>
                            <iframe
                                title="Unique Title 001"
                                src={node.data.uri}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </IframeContainer>
                    );
                } else
                    return (
                        <a
                            href={node.data.uri}
                            target={`${
                                node.data.uri.startsWith(website_url)
                                    ? '_self'
                                    : '_blank'
                            }`}
                            rel={`${
                                node.data.uri.startsWith(website_url)
                                    ? ''
                                    : 'noopener noreferrer'
                            }`}
                        >
                            {node.content[0].value}
                        </a>
                    );
            },
        },
    };

    // Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked entries e.g. videoEmbed)
    // and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

    // function renderOptions(links) {
    //     // create an asset block map
    //     const assetBlockMap = new Map();
    //     // loop through the assets and add them to the map
    //     for (const asset of links.assets.block) {
    //         assetBlockMap.set(asset.sys.id, asset);
    //     }

    //     // create an entry block map
    //     const entryBlockMap = new Map();
    //     // loop through the entries and add them to the map
    //     for (const entry of links.entries.block) {
    //         entryBlockMap.set(entry.sys.id, entry);
    //     }

    //     return {
    //         // other options...

    //         renderNode: {
    //             // other options...

    //             [INLINES.HYPERLINK]: (node) => {
    //                 if (node.data.uri.indexOf('youtu') !== -1) {
    //                     return (
    //                         <IframeContainer>
    //                             <iframe
    //                                 title="nFront Ventures Video Player"
    //                                 src={node.data.uri}
    //                                 allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    //                                 frameBorder="0"
    //                                 allowFullScreen
    //                             ></iframe>
    //                         </IframeContainer>
    //                     );
    //                 } else if (node.data.uri.indexOf('vimeo.com') !== -1) {
    //                     return (
    //                         <IframeContainer>
    //                             <iframe
    //                                 title="Unique Title 001"
    //                                 src={node.data.uri}
    //                                 frameBorder="0"
    //                                 allowFullScreen
    //                             ></iframe>
    //                         </IframeContainer>
    //                     );
    //                 } else
    //                     return (
    //                         <a
    //                             href={node.data.uri}
    //                             target={`${
    //                                 node.data.uri.startsWith(website_url)
    //                                     ? '_self'
    //                                     : '_blank'
    //                             }`}
    //                             rel={`${
    //                                 node.data.uri.startsWith(website_url)
    //                                     ? ''
    //                                     : 'noopener noreferrer'
    //                             }`}
    //                         >
    //                             {node.content[0].value}
    //                         </a>
    //                     );
    //             },

    //             [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
    //                 // find the entry in the entryBlockMap by ID
    //                 const entry = entryBlockMap.get(node.data.target.sys.id);

    //                 // render the entries as needed by looking at the __typename
    //                 // referenced in the GraphQL query

    //                 if (entry.__typename === 'VideoEmbed') {
    //                     return (
    //                         <iframe
    //                             src={entry.embedUrl}
    //                             height="100%"
    //                             width="100%"
    //                             frameBorder="0"
    //                             scrolling="no"
    //                             title={entry.title}
    //                             allowFullScreen={true}
    //                         />
    //                     );
    //                 }
    //             },
    //             [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
    //                 // find the asset in the assetBlockMap by ID
    //                 const asset = assetBlockMap.get(node.data.target.sys.id);

    //                 // render the asset accordingly
    //                 return <img src={asset.url} alt="My image alt text" />;
    //             },
    //         },
    //     };
    // }

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            {coverImage != null && (
                <div style={{ display: 'grid' }}>
                    <GatsbyImage
                        image={pluginImage}
                        style={{
                            gridArea: '1/1',
                            height: `50vh`,
                        }}
                    />
                    <Overlay />
                    <OverlayText className="text-light">
                        {/* <p>{publishDate}</p> */}
                        <h2 className="mb-0">{title}</h2>
                    </OverlayText>
                </div>
            )}
            <Section>
                <StyledContainer>
                    <ModifiedFlexBox>
                        <DetailedSection>
                            <p className="category">{courseCategories.title}</p>
                            <div>
                                {documentToReactComponents(body.json, options)}
                                {/* {RichTextResponse(body)} */}
                            </div>
                        </DetailedSection>
                    </ModifiedFlexBox>
                </StyledContainer>
            </Section>
            <Footer />
        </Layout>
    );
};

export default courses;

export const query = graphql`
    query ($slug: String!) {
        contentfulCourses(slug: { eq: $slug }) {
            title
            slug
            courseCategories {
                title
            }
            body {
                raw
            }
            coverImage {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
    }
`;
