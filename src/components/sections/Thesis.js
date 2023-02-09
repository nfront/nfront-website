import React from 'react';
import {
    Section,
    Container,
    FlexRow,
    FlexColumn,
    SectionTitle,
    RedSvg,
} from '@styles/global';
import Link from '@common/link';

import { ReactComponent as IconOne } from '@images/nfront/geography.svg';
import { ReactComponent as IconTwo } from '@images/nfront/global.svg';
import { ReactComponent as IconThree } from '@images/nfront/graph.svg';
import { ReactComponent as IconFour } from '@images/nfront/speed.svg';


const Thesis = (props) => {

    return (
        <Section>
            <SectionTitle>
                <h2>About Us</h2>
                <p>
                    nFront provides a small group of exceptional companies per
                    year with in-depth fundraising support and capital.
                </p>
                <p>
                    With one of Europe's largest{' '}
                    <Link
                        to="#co-investors"
                    >
                        deal-sharing
                    </Link>{' '}
                    networks and{' '}
                    <Link to="/team-mentors/#mentors">mentors</Link> ranging
                    from top-tier VCs to technology influencers and corporate
                    decision makers, nFront strives to provide deep and
                    transformative value to its companies, both throughout
                    fundraising and after.
                </p>
            </SectionTitle>
            <Container>
                <FlexRow basis="278px" twoByTwo gap="10px">
                    <FlexColumn gap="1.6rem" className="p-15 rounded grey-border bg-accent center-tablet">
                        <RedSvg
                            svgReactComponent={IconOne}
                            width='70px'
                            alt='nFront geography focus'
                        />
                        <h4 className="ls-1 uppercase mb-0">Geographies</h4>
                        <p className="mb-0 small-font">
                            Due to a strong deal-sharing network, nFront looks
                            at companies across Europe. Stand-out opportunities
                            in the U.S. are also considered.
                        </p>
                    </FlexColumn>
                    <FlexColumn gap="1.6rem" className="p-15 rounded grey-border bg-alt center-tablet">
                        <RedSvg
                            svgReactComponent={IconTwo}
                            width='70px'
                            alt='nFront sector focus'
                        />
                        <h4 className="ls-1 uppercase mb-0">Sectors</h4>
                        <p className="mb-0 small-font">
                            B2B & B2C technology companies, including FinTech,
                            digital health, cyber security, marketplaces, future
                            of work, tech-enabled services and more.
                        </p>
                    </FlexColumn>
                    <FlexColumn gap="1.6rem" className="p-15 rounded grey-border bg-accent center-tablet">
                        <RedSvg
                            svgReactComponent={IconThree}
                            width='70px'
                            alt='nFront stage focus'
                        />
                        <h4 className="ls-1 uppercase mb-0">Stages</h4>
                        <p className="mb-0 small-font">
                            Seed to Series-B stage companies, looking to raise
                            between €1m and €20m. These startups typically
                            generate €500k - €5m in ARR.
                        </p>
                    </FlexColumn>
                    <FlexColumn gap="1.6rem" className="p-15 rounded grey-border bg-alt center-tablet">
                        <RedSvg
                            svgReactComponent={IconFour}
                            width='70px'
                            alt='nFront investment characteristics'
                        />
                        <h4 className="ls-1 uppercase mb-0">
                            Characteristics
                        </h4>
                        <p className="mb-0 small-font">
                            Varies from case to case, but important features
                            include validation/growth (i.e. need),
                            differentiation, capital efficiency and market size
                            / trends.
                        </p>
                    </FlexColumn>
                </FlexRow>
            </Container>
        </Section>
    );
};

export default Thesis;
