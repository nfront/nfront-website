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
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

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

const website_url = 'vimeo.com';

function paragraphClass(node) {
    const className = 'odd';
    //alternate logic for 'odd' | 'even'
    return className;
}

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

// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

const renderOptions = {
    // Replace instances of \n produced by Shift + Enter with <br/> React elements
    renderText: (text) => {
        return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },

    // renderText: text => text.replace('!', '?'),

    renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
        [MARKS.ITALIC]: (text) => <i className="font-italic">{text}</i>,
        [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
        [MARKS.CODE]: (text) => (
            <code className="font-mono px-1 py-2 mx-1 bg-gray-100 rounded text-sm">
                {text}
            </code>
        ),
    },

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

        [INLINES.EMBEDDED_ENTRY]: (node, children) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === 'classLink') {
                return (
                    <a href={`/training/${node.data.target.fields.slug}`}>
                        {' '}
                        {node.data.target.fields.title}
                    </a>
                );
            }
        },

        // swap h1 with h2, so we only have one h1
        [BLOCKS.HEADING_1]: (node, children) => (
            <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2">
                {children}
            </h2>
        ),

        [BLOCKS.PARAGRAPH]: (node, children) => {
            if (node.content[0].value === '') {
                return <br />;
            } else {
                return <p className={paragraphClass(node)}>{children}</p>;
            }
        },

        [BLOCKS.QUOTE]: (children) => (
            <blockquote className="border-l-4 border-brand-primary bg-gray-50 p-3 rounded font-bold my-6">
                <>"{children.content[0].content[0].value}"</>
            </blockquote>
        ),

        [BLOCKS.HR]: () => <hr className="mb-6" />,

        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { gatsbyImageData, description } = node.data.target;
            if (!gatsbyImageData) return null;
            return (
                <GatsbyImage
                    image={getImage(gatsbyImageData)}
                    alt={description}
                />
            );
        },

        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === 'codeBlock') {
                return (
                    <pre>
                        <code>{node.data.target.fields.code}</code>
                    </pre>
                );
            }

            if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
                return (
                    <iframe
                        src={node.data.target.fields.embedUrl}
                        height="100%"
                        width="100%"
                        frameBorder="0"
                        scrolling="no"
                        title={node.data.target.fields.title}
                        allowFullScreen={true}
                    />
                );
            }
        },
    },
};

const courses = ({ data }) => {
    const { title, coverImage, body, courseCategories } = data.contentfulCourses;

    const pluginImage = getImage(coverImage);

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
                                {body && renderRichText(body, renderOptions)}
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
            # This is the rich text field, the name depends on your field configuration in Contentful
            body {
                raw
                references {
                    ... on ContentfulAsset {
                        # You'll need to query contentful_id in each reference
                        contentful_id
                        __typename
                        gatsbyImageData(layout: FIXED, width: 1000)
                    }
                    ... on ContentfulCoursesCategories {
                        contentful_id
                        title
                        slug
                    }
                }
            }
            coverImage {
                gatsbyImageData
            }
        }
    }
`;

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
