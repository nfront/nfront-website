import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/layout';
import styled from 'styled-components';
import { Container } from '@styles/global';

const StyledContainer = styled(Container)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const NotFoundPage = () => (
    <Layout>
        <StyledContainer>
            <h1>NOT FOUND</h1>
            <p>
                You just hit a page that doesn&#39;t exist or has been removed.
            </p>
            <Link to="/">
                <button className="button">Go back</button>
            </Link>
        </StyledContainer>
    </Layout>
);

export default NotFoundPage;
