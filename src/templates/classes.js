import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { Section, Container, Overlay, OverlayText } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Hero from '@common/hero';
import Seo from '@utils/SEO';
import slugify from '@utils/slugify';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
// import { FlexBox } from '../components/sections/Team';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import CourseCard from '../components/common/courseSummaryCard';
import RelatedCourse from '../components/common/relatedCourse';

const StyledContainer = styled(Container)`
    text-align: center;
    @media (min-width: ${(props) => props.theme.screen.xs}) {
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
    const string = Array.isArray(children[0])
        ? children[0].filter((value) => typeof value === 'string').join(' ')
        : children[0];

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
            [BLOCKS.HEADING_3]: (node, children) => (
                <h3 className="text-2xl sm:text-3xl text-left font-black text-gray-700 leading-tight mb-2">
                    {createJumpLink(children)}
                </h3>
            ),
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
                    <GatsbyImage
                        image={getImage(gatsbyImageData)}
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
    const pluginImage = getImage(coverImage);

    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            {pluginImage ? (
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
                    {/* <GatsbyImage
                        style={{
                            gridArea: '1/1',
                            height: `50vh`,
                        }}
                        image={pluginImage}
                    /> */}
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
                    <OverlayText className="text-light">
                        <h2 className="mb-0">{title}</h2>
                    </OverlayText>
                </div>
            )}
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
            course {
                title
            }
            coverImage {
                gatsbyImageData
            }
        }
    }
`;