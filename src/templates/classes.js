import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

import Layout from '@common/layout';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Image from '@common/image';

import { Section, Container, Overlay } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import Seo from '@utils/SEO';
import slugify from '@utils/slugify';
import { isReactComponent } from '@utils/utils';

import CourseCard from '../components/common/courseSummaryCard';
import RelatedCourse from '../components/common/relatedCourse';

const StyledContainer = styled(Container)`
    text-align: center;
    @media ${breakpoints.mobileL} {
        text-align: left;
    }
`;

const DetailedSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: left;
`;

const CourseDetail = styled.div`
    width: 70%;
`;

const CourseSuggestion = styled.div`
    width: 30%;
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

const createJumpLink = (children) => {
    // console.log(children);
    // const string = Array.isArray(children[0])
    //     ? children[0].filter((value) => typeof value === 'string').join(' ')
    //     : children[0];

    // if (!Array.isArray(children)) children = [children];

    // const combined = unWrapReact(children);
    // console.log('combined', combined);

    // function unWrapReact(child) {
    //     if (isReactComponent(child)) {
    //         const flatChildArray = child.props.children.flat();
    //         unWrapReact(flatChildArray);
    //     } else {
    //         if (child.length <= 1) {
    //             if (isReactComponent(child[0]))
    //                 unWrapReact(child[0]);
    //             else return child[0];
    //         } else {
    //             //call combineEntries again
    //             if (typeof child[0] === 'string')
    //                 return child[0] + unWrapReact(child.slice(1));

    //             return unWrapReact(child.slice(1));
    //         }
    //     }
    // }

    // const flatArray = Array.isArray(children) ? children.flat() : children;

    // console.log('children', children);
    // console.log('flatArray', flatArray);

    const string = combineEntries(children);
    console.log(string);

    function combineEntries(array) {
        if (array.length <= 1) {
            return array[0];
        } else {
            //call combineEntries again
            if (typeof array[0] === 'string')
                return array[0] + combineEntries(array.slice(1));

            return combineEntries(array.slice(1));
        }
    }

    if (typeof string != 'string')
        return <a href={`#${Math.random().toString()}`}>{children}</a>;

    return (
        <a
            href={`#${slugify(string, { lower: true })}`}
            className="
          relative
          before:md:content-['#']
          before:absolute 
          before:inset-x-hash 
          before:text-md 
          before:text-gray-300
          hover:md:before:content-['#']
          hover:before:text-brand-default"
        >
            {children}
        </a>
    );
};

// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

const renderOptions = (body) => {
    const references = body.references;

    // map contentful_id to references with sys.id
    const referenceMap = new Map();
    for (const reference of references) {
        referenceMap.set(reference.contentful_id, reference);
    }

    return {
        // Replace instances of \n produced by Shift + Enter with <br/> React elements
        renderText: (text) => {
            return text.split('\n').reduce((children, textSegment, index) => {
                return [
                    ...children,
                    index > 0 && <br key={index} />,
                    textSegment,
                ];
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
            [INLINES.HYPERLINK]: (node, children) => {
                // console.log('Inline hyperlink: ');
                // console.log(node);

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
                                title="nFront Ventures Video Player"
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
                            className=""
                        >
                            {children}
                        </a>
                    );
            },

            [INLINES.EMBEDDED_ENTRY]: (node, children) => {
                const { slug, title, contentful_id } = node.data.target;

                const sys_id =
                    referenceMap.get(contentful_id).sys.contentType.sys.id;
                // console.log('Inline embedded entry / node: ');
                // console.log(referenceMap.get(contentful_id));
                // console.log(node);

                // target the contentType of the EMBEDDED_ENTRY to display as you need
                if (sys_id === 'classes' || sys_id === 'courses') {
                    return <a href={`/academy/${slug}`}> {title}</a>;
                }
            },

            // swap h1 with h2, so we only have one h1
            [BLOCKS.HEADING_1]: (node, children) => (
                <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2">
                    {children}
                </h2>
            ),
            [BLOCKS.HEADING_2]: (node, children) => {
                // console.log('heading: ');
                // console.log(children);
                return (
                    <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2">
                        {createJumpLink(children)}
                    </h2>
                );
            },
            [BLOCKS.HEADING_3]: (node, children) => {
                // console.log('HEADING 3:');
                // console.log(children);
                return (
                    <h3 className="text-2xl sm:text-3xl text-left font-black text-gray-700 leading-tight mb-2">
                        {createJumpLink(children)}
                    </h3>
                );
            },
            [BLOCKS.HEADING_4]: (node, children) => {
                return (
                    <h4 className="text-xl sm:text-2xl text-left font-black text-gray-700 leading-tight mb-2">
                        {createJumpLink(children)}
                    </h4>
                );
            },
            [BLOCKS.HEADING_5]: (node, children) => (
                <h5 className="text-lg sm:text-xl text-left font-black text-gray-700 leading-tight mb-2">
                    {createJumpLink(children)}
                </h5>
            ),
            [BLOCKS.HEADING_6]: (node, children) => (
                <h6 className="text-md sm:text-lg text-left font-black text-gray-700 leading-tight mb-2">
                    {createJumpLink(children)}
                </h6>
            ),

            [BLOCKS.PARAGRAPH]: (node, children) => {
                // console.log('Blocks paragraph: ');
                // console.log(node);
                return <p className={paragraphClass(node)}>{children}</p>;
                //     if (node.content[0].value === '') {
                //         return <br />;
                //     } else {
                //         return <p className={paragraphClass(node)}>{children}</p>;
                //     }
            },

            [BLOCKS.QUOTE]: (children) => (
                <blockquote className="border-l-4 border-brand-primary bg-gray-50 p-3 rounded font-bold my-6">
                    <>"{children.content[0].content[0].value}"</>
                </blockquote>
            ),

            [BLOCKS.HR]: () => <hr className="mb-6" />,

            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                // console.log('Blocks embedded asset: ');
                // console.log(node);

                const { gatsbyImageData, description, title, file } =
                    node.data.target;

                if (file.contentType.includes('video')) {
                    return (
                        <IframeContainer>
                            <iframe
                                title={title}
                                src={file.url}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </IframeContainer>
                    );
                }

                if (!gatsbyImageData) return null;
                return (
                    <Image
                        image={gatsbyImageData}
                        alt={description}
                    />
                );
            },

            [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                const { video, title, candidate, slug, code, contentful_id } =
                    node.data.target;

                const sys_id =
                    referenceMap.get(contentful_id).sys.contentType.sys.id;
                // console.log('Blocks embedded entry / node: ');
                // console.log(referenceMap.get(contentful_id));
                // console.log(node);

                if (sys_id === 'video') {
                    return (
                        <IframeContainer>
                            <iframe
                                title={title}
                                src={video.url}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </IframeContainer>
                    );
                }

                // target the contentType of the EMBEDDED_ENTRY to display as you need
                if (sys_id === 'codeBlock') {
                    return (
                        <pre>
                            <code>{code}</code>
                        </pre>
                    );
                }

                // fix: make this look nicer
                if (
                    sys_id === 'classes' ||
                    sys_id === 'post' ||
                    sys_id === 'courses'
                ) {
                    return <a href={`/academy/${slug}`}> {title}</a>;
                }

                if (sys_id === 'employeeTestimonials')
                    return <a href={`/academy/${slug}`}> {candidate}</a>;
            },
        },
    };
};

const classes = ({ data }) => {
    console.log('🚀 ~ data', data);
    const { title, coverImage, body, course } = data.contentfulClasses;

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            {coverImage != null && (
                <Hero heroImage={coverImage} height='short' small>
                    <h2 className="mb-0">{title}</h2>
                </Hero>
            )}
            {/* {coverImage ? (
                <div style={{ display: 'grid' }}>
                    <Image
                        image={coverImage}
                        alt={title}
                        style={{
                            gridArea: '1/1',
                            height: `50vh`,
                        }}
                    />
                    <Overlay />
                    <Overlay className="text-light">
                        <h2 className="mb-0">{title}</h2>
                    </Overlay>
                    <GatsbyImage
                        style={{
                            gridArea: '1/1',
                            height: `50vh`,
                        }}
                        image={pluginImage}
                    />
                </div>
            ) : (
                <div style={{ display: 'grid' }}>
                    <Hero
                        fileName="LA.jpg"
                        style={{
                            gridArea: '1/1',
                            height: `50vh`,
                        }}
                    />
                    <Overlay />
                    <Overlay className="text-light">
                        <h2 className="mb-0">{title}</h2>
                    </Overlay>
                </div>
            )} */}
            {/* {coverImage != null && (
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
                        <h2 className="mb-0">{title}</h2>
                    </OverlayText>
                </div>
            )} */}
            <Section>
                <StyledContainer>
                    <DetailedSection>
                        <CourseDetail>
                            <p className="category">{course.title}</p>
                            {body && renderRichText(body, renderOptions(body))}
                        </CourseDetail>
                        {/* <CourseSuggestion>
                            <CourseCard props={data} />
                            <RelatedCourse props={data} />
                        </CourseSuggestion> */}
                    </DetailedSection>
                </StyledContainer>
            </Section>
            <Footer />
        </Layout>
    );
};

export default classes;

export const query = graphql`
    query ($slug: String!) {
        contentfulClasses(slug: { eq: $slug }) {
            title
            slug
            subTitle
            course {
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
                        title
                        description
                        file {
                            contentType
                            url
                        }
                        gatsbyImageData(layout: FIXED, width: 1000)
                    }
                    ... on ContentfulClasses {
                        contentful_id
                        title
                        slug
                        sys {
                            contentType {
                                sys {
                                    id
                                    type
                                }
                            }
                        }
                    }
                    ... on ContentfulEmployeeTestimonials {
                        contentful_id
                        candidate
                        sys {
                            contentType {
                                sys {
                                    id
                                    type
                                }
                            }
                        }
                    }
                    ... on ContentfulNewsPosts {
                        contentful_id
                        title
                        slug
                        sys {
                            contentType {
                                sys {
                                    id
                                    type
                                }
                            }
                        }
                    }
                    ... on ContentfulVideos {
                        contentful_id
                        title
                        video {
                            url
                        }
                        sys {
                            contentType {
                                sys {
                                    id
                                    type
                                }
                            }
                        }
                    }
                }
            }
            coverImage {
                gatsbyImageData
            }
        }
    }
`;
