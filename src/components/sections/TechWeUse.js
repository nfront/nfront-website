import React from 'react';
import styled from 'styled-components';
import { Section, Container, SectionTitle } from '@styles/global';
import ExternalLink from '@utils/externalLink';

/** tech logo */
import { ReactComponent as GatsbyLogo } from '@images/logos/gatsby.svg';
import { ReactComponent as ReactLogo } from '@images/logos/react.svg';
import { ReactComponent as GraphQLogo } from '@images/logos/graphql.svg';
import { ReactComponent as WebpackLogo } from '@images/logos/webpack.svg';
import { ReactComponent as SCLogo } from '@images/logos/styledC.svg';
import { ReactComponent as NetlifyLogo } from '@images/logos/netlify.svg';
import { ReactComponent as AngularLogo } from '@images/logos/angular.svg';
import { ReactComponent as BabelLogo } from '@images/logos/babel.svg';
import { ReactComponent as HTMLLogo } from '@images/logos/html5.svg';
import { ReactComponent as CSSLogo } from '@images/logos/css3.svg';
import { ReactComponent as VueLogo } from '@images/logos/vue.svg';
import { ReactComponent as JSSLogo } from '@images/logos/jss.svg';
import { ReactComponent as PythonLogo } from '@images/logos/python.svg';
import { ReactComponent as CSharpLogo } from '@images/logos/csharp.svg';

const LogoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 90px);
    grid-gap: 80px;
    justify-content: space-between;
    margin-top: 80px;

    @media (max-width: ${props => props.theme.screen.lg}) {
        grid-gap: 50px;
    }
    @media (max-width: ${props => props.theme.screen.md}) {
        grid-template-columns: repeat(auto-fill, 90px);
        grid-gap: 30px;
    }
    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(3, 1fr);
    }

    svg {
        opacity: 1;
        transition: transform 0.5s ease;

        &:hover {
            opacity: 1;
            transform: scale(1.3);
            transition: all 0.5s ease-in-out;
        }
    }
`;

const LOGOS = [
    {
        name: 'GatsbyJS',
        logo: GatsbyLogo,
        link: 'https://www.gatsbyjs.org/',
    },
    {
        name: 'React',
        logo: ReactLogo,
        link: 'https://reactjs.org/',
    },
    {
        name: 'GraphQL',
        logo: GraphQLogo,
        link: 'https://graphql.org/',
    },
    {
        name: 'Webpack',
        logo: WebpackLogo,
        link: 'https://webpack.js.org/',
    },
    {
        name: 'Vue',
        logo: VueLogo,
        link: 'https://vuejs.org/',
    },
    {
        name: 'Python',
        logo: PythonLogo,
        link: 'https://www.python.org/',
    },
    {
        name: 'Angular',
        logo: AngularLogo,
        link: 'https://angular.io/',
    },
    {
        name: 'C++',
        logo: CSharpLogo,
        link: '/',
    },
    {
        name: 'Netlify',
        logo: NetlifyLogo,
        link: 'https://www.netlify.com/',
    },
    {
        name: 'Babel',
        logo: BabelLogo,
        link: 'https://babeljs.io/',
    },
    {
        name: 'HTML5',
        logo: HTMLLogo,
        link: '/',
    },
    {
        name: 'CSS3',
        logo: CSSLogo,
        link: '/',
    },
    {
        name: 'JSS',
        logo: JSSLogo,
        link: 'https://www.netlify.com/',
    },
    {
        name: 'styled-components',
        logo: SCLogo,
        link: 'https://www.styled-components.com/',
    },
];

export default () => {
    return (
        <Section id="brands">
            <Container>
                <SectionTitle>
                    <h2>Technology We Use</h2>
                </SectionTitle>
                <LogoGrid>
                    {LOGOS.map(({ name, logo, link }) => {
                        return (
                            <ExternalLink
                                key={name}
                                href={link}
                                aria-label={name}
                            >
                                {logo()}
                            </ExternalLink>
                        );
                    })}
                </LogoGrid>
            </Container>
        </Section>
    );
};
