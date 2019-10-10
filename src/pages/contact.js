import React from 'react';
import Layout from '@common/layout';
import SEO from '@utils/SEO';
import Menu from '@common/navbar';
import Hero from '@common/hero';
import Footer from '@common/footer';
import Contact from '@sections/Contact';
import ExternalLink from '@utils/externalLink';
import { Section, Container } from '@styles/global';
import styled from 'styled-components';

const StyledSection = styled(Section)`
    padding: 5rem 0;
    @media (min-width: ${props => props.theme.screen.sm}) {
        padding: 7rem 0;
    }
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;

    @media (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }

    a {
        font-weight: 500;
    }

    .button {
        border-radius: 0;
    }
`;

export default () => {
    const title = 'Contact Us';
    return (
        <Layout>
            <SEO title={title} />
            <Menu fluid />
            <Hero fileName="LA.jpg">
                <h2>{title}</h2>
                <p>
                    Whether for fundraising or software development, please
                    reach out below and we will get back to you as soon as
                    possible.
                </p>
            </Hero>
            <StyledSection>
                <Container>
                    <Grid>
                        <Contact />
                        <div className="">
                            <label>Drop us an email at</label>
                            <p>info@nfront.io</p>
                            <label>Visit us at</label>
                            <p>
                                <ExternalLink href="https://goo.gl/maps/X1k1eo7YebbSehEP9">
                                    Tollbugata 24, 0157
                                    <br />
                                    Oslo, Norway
                                </ExternalLink>
                            </p>
                        </div>
                    </Grid>
                </Container>
            </StyledSection>
            <Footer />
        </Layout>
    );
};
