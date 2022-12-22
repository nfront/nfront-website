import React from 'react';
import styled from 'styled-components';
import Link from '@common/link';

/** social icons */
import Twitter from '@static/icons/twitter.svg';
import Linkedin from '@static/icons/linkedin.svg';
import Email from '@static/icons/email.svg';

import {
    Section,
    Container,
    FlexFlip,
} from '@styles/global';

const SOCIAL = [
    {
        icon: Linkedin,
        link: 'https://www.linkedin.com/company/nFrontVentures',
    },
    {
        icon: Twitter,
        link: 'https://twitter.com/nFrontVentures',
    },
    {
        icon: Email,
        link: '/contact/',
    },
];

const SocialIcons = styled.div`
    img {
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }
`;

const StyledSection = styled(Section)`
    background: var(--footer-alt-color);

    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;

    a {
        color: #af944f;
    }

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
        <footer>
            <StyledSection>
                <Container>
                    <FlexFlip justifyContent="space-between">
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
                                    <Link key={icon} to={link}>
                                        <img src={icon} alt="link" />
                                    </Link>
                                ))}
                            </SocialIcons>
                        </div>
                    </FlexFlip>
                </Container>
            </StyledSection>
        </footer>
    );
}
