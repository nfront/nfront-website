import React from 'react';
import Seo from '@utils/SEO';
import { useStaticQuery, graphql } from 'gatsby';

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    );
    return (
        <>
            <Seo title={data.site.siteMetadata.title} />
            <main>{children}</main>
        </>
    );
}
