import React from 'react';
import styled from 'styled-components';
import Link from '@common/link';
import Image from '@common/image';

/** social icons */
import Twitter from '@static/icons/twitter.svg';
import Linkedin from '@static/icons/linkedin.svg';
import Email from '@static/icons/email.svg';

import { Section, Container, FlexRow } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';

const SOCIAL = [
    {
        iconUrl: Linkedin,
        alt: "nFront LinkedIn",
        link: 'https://www.linkedin.com/company/nFrontVentures',
    },
    {
        iconUrl: Twitter,
        alt: "nFront Twitter",
        link: 'https://twitter.com/nFrontVentures',
    },
    {
        iconUrl: Email,
        alt: "nFront Email",
        link: '/contact/',
    },
];

const StyledSection = styled(Section)`
    background: var(--footer-alt-color);

    font-size: 12px;
    font-weight: 500;

    @media ${breakpoints.tablet} {
        padding: 6rem 0rem;
    }

    a {
        color: #af944f;
    }

    p {
        color: #6c757d;
        margin-bottom: 0;

        &.label {
            color: var(--accent-color);
            font-size: 14px;
            margin-bottom: 1rem;
        }
    }

    ul {
        list-style-type: none;
        margin: 0;
        li {
            margin-bottom: 5px;
            padding-left: 0;
        }
    }
`;

const SocialIcons = styled.div`
    img {
        width: 24px;
        margin-right: 16px;
        margin-bottom: 0px;
    }
`;

const Footer = (props) => {
    return (
        <footer>
            <StyledSection className="uppercase ls-1">
                <Container>
                    <FlexRow justifyContent="space-between" gap="3rem">
                        <div>
                            <p className="label">Headquarters</p>
                            <p>
                                Tollbugata 24, 0157,
                                <br />
                                Oslo, Norway
                            </p>
                        </div>
                        <div>
                            <p className="label">NFRONT VENTURES</p>
                            <ul>
                                <li>
                                    <Link to="/thesis/">Thesis</Link>
                                </li>
                                <li>
                                    <Link to="/">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/team-mentors/">
                                        Team & Mentors
                                    </Link>
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
                                {SOCIAL.map(({ iconUrl, alt, link }) => {
                                    return (
                                        <Link key={iconUrl} to={link}>
                                            <Image image={iconUrl} alt={alt} />
                                        </Link>
                                    );
                                })}
                            </SocialIcons>
                        </div>
                    </FlexRow>
                </Container>
            </StyledSection>
        </footer>
    );
};

export default Footer;
