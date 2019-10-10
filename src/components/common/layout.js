import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/global';
import SEO from '@utils/SEO';
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
        <ThemeProvider theme={theme}>
            <>
                <SEO title={data.site.siteMetadata.title} />
                <main>{children}</main>
            </>
        </ThemeProvider>
    );
}
