import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@common/layout';
import { Section, Container, Overlay, OverlayText } from '@styles/global';
import Navbar from '@common/navbar';
import Footer from '@common/footer';
import Seo from '@utils/SEO';
import Hero from '@common/hero';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FlexBox } from '../components/sections/Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faDollarSign,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled(Container)`
    text-align: center;
    @media (min-width: ${(props) => props.theme.screen.xs}) {
        text-align: left;
    }
`;
const InfoSection = styled.div`
    flex: 0 1 300px;
    margin-right: 0rem;
    margin-bottom: 1.5rem;
    .info-card {
        border: 1px solid #ebedf2;
        border-radius: 4px;
        margin-top: 1rem;
        padding: 1rem;
        svg {
            padding-right: 0.2rem;
        }
        h3 {
            margin-bottom: 0 !important;
        }
    }
    @media (min-width: ${(props) => props.theme.screen.xs}) {
        // margin-right: 3rem;
        // text-align: center;
    }
`;

const DetailedSection = styled.div`
    flex: 1 1 300px;
    @media (min-width: 708px) {
        margin-left: 1.5rem;
    }
    text-align: left;
`;
const StyledImg = styled(GatsbyImage)`
    @media (min-width: ${(props) => props.theme.screen.xs}) {
        // margin-right: 3rem;
        /* text-align: left; */
    }
`;
const ModifiedFlexBox = styled(FlexBox)`
    padding: 0;
    @media (min-width: ${(props) => props.theme.screen.xs}) {
        padding: 0 1.5rem;
    }
`;
const courses = ({ data }) => {
    const { title, slug, icon } = data.contentfulCourses;
    const iconImage = getImage(icon);
    console.log(slug);
    return (
        <Layout>
            <Seo title={title} />
            <Navbar fluid />
            <Hero fileName="LA.jpg">
                <h2>{title}</h2>
            </Hero>

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
            icon {
                gatsbyImageData
            }
        }
    }
`;
