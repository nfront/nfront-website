import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import defaultImage from '@static/cover.png';

export default function SEO({
    lang,
    meta,
    keywords,
    title,
    description,
    image,
    pathname,
}) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        siteUrl
                        description
                        social {
                            twitter
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || data.site.siteMetadata.description;
    const metaImage = data.site.siteMetadata.siteUrl + (image || defaultImage);
    const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:url`,
                    content: metaUrl,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:creator`,
                    content: `@${data.site.siteMetadata.social.twitter}`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    metaImage
                        ? [
                              {
                                  property: `og:image`,
                                  content: metaImage,
                              },
                              {
                                  property: `og:image:alt`,
                                  content: title,
                              },
                              {
                                  property: 'og:image:width',
                                  content: image.width,
                              },
                              {
                                  property: 'og:image:height',
                                  content: image.height,
                              },
                              {
                                  name: `twitter:card`,
                                  content: `summary_large_image`,
                              },
                              {
                                  name: `twitter:image`,
                                  content: metaImage,
                              },
                          ]
                        : [
                              {
                                  name: `twitter:card`,
                                  content: `summary`,
                              },
                          ]
                )
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `),
                          }
                        : []
                )
                .concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
    pathname: ``,
    image: ``,
};
