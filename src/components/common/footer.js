import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Section, Container } from '@styles/global';
import ExternalLink from '@utils/externalLink';

/** social icons */
import Twitter from '@static/icons/twitter.svg';
import Linkedin from '@static/icons/linkedin.svg';
import Facebook from '@static/icons/facebook.svg';
import Email from '@static/icons/email.svg';

const SOCIAL = [
    {
        icon: Facebook,
        link: '/',
    },
    {
        icon: Linkedin,
        link: '/',
    },
    {
        icon: Twitter,
        link: '/',
    },
    {
        icon: Email,
        link: '/contact/',
    },
];

const FooterWrapper = styled.footer`
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--alt-color);
    background-color: var(--footer-color);

    a {
        color: #af944f;
    }
`;

const SocialIcons = styled.div`
    img {
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }
`;

const GRID = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: ${props => props.theme.screen.sm}) {
        flex-direction: row;
    }
`;

const StyledSection = styled(Section)`
    background: var(--footer-alt-color);

    p {
        color: #6c757d;
        margin-bottom: 1rem;
    }

    .label {
        font-size: 14px;
        color: var(--accent-color);
        margin-top: 1.66rem;
    }

    ul {
        list-style-type: none;
        margin-left: 0;

        li {
            margin-bottom: 5px;
            padding-left: 0;
        }
    }

    svg {
        width: 50px;
    }
`;

export default function Footer(props) {
    return (
        <FooterWrapper {...props}>
            <StyledSection>
                <GRID>
                    <div>
                        <p className="label">Headquarters</p>
                        <p>
                            Tollbugata 24, 0157,
                            <br />
                            Oslo, Norway
                        </p>
                    </div>
                    <div>
                        <p className="label">NFRONT</p>
                        <ul>
                            <li>
                                <Link to="/venture-capital/">Thesis</Link>
                            </li>
                            <li>
                                <Link to="/">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/team-mentors/">Team & Mentors</Link>
                            </li>
                            <li>
                                <Link to="/news/">News</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="label">Legal</p>
                        <ul>
                            <li>
                                <Link to="/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/">GDPR</Link>
                            </li>
                            <li>
                                <Link to="/contact/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="label">Social</p>
                        <SocialIcons>
                            {SOCIAL.map(({ icon, link }) => (
                                <ExternalLink key={icon} href={link}>
                                    <img src={icon} alt="link" />
                                </ExternalLink>
                            ))}
                        </SocialIcons>
                    </div>
                </GRID>
            </StyledSection>
        </FooterWrapper>
    );
}
