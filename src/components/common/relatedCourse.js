import React from 'react';
import styled from 'styled-components';

import { Container } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import Link from '@common/link';

import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from '@mui/material';

const StyledContainer = styled(Container)`
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        
        margin-bottom: 3rem;
        
        @media ${breakpoints.tablet} {
            max-width: 800px;
        }
    }
    iframe {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: 3rem 0;
    }
`;

export default function RelatedCourse({ props }) {
    return (
        <StyledContainer>
            <Card style={{ marginTop: '15px' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            textAlign="center"
                        >
                            Related Courses
                        </Typography>
                    </CardContent>
                    <CardContent>
                        {props &&
                            props?.map((relCourse, key) => {
                                return (
                                    <div
                                        key={key}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '15px 0',
                                        }}
                                    >
                                        <div>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                            >
                                                {relCourse?.title}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Link
                                                className="know-details"
                                                to={`/academy/${relCourse?.slug}`}
                                            >
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    style={{
                                                        width: '95px',
                                                        height: '30px',
                                                        background: '#0770f3',
                                                        color: 'white',
                                                    }}
                                                >
                                                    Start
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                    </CardContent>
                </CardActionArea>
            </Card>
        </StyledContainer>
    );
}
