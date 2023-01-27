import React from 'react';
import styled from 'styled-components';

import { Container } from '@styles/global';
import * as breakpoints from '@styles/scss/_breakpoints.module.scss';

import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Divider,
    Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import LanguageIcon from '@mui/icons-material/Language';

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

export default function CourseCard({ props }) {
    const cardImage = require('@images/nfront/no-image-found.jpg');

    return (
        <StyledContainer>
            <Card style={{ marginBottom: '15px' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            textAlign="center"
                        >
                            Course Summary
                        </Typography>
                    </CardContent>
                    {props?.icon?.url ? (
                        <CardMedia
                            component="img"
                            height="140"
                            image={props?.icon?.url}
                            alt="green iguana"
                            style={{ objectFit: 'fill' }}
                        />
                    ) : (
                        <CardMedia
                            component="img"
                            height="140"
                            image={cardImage?.default}
                            alt="green iguana 2"
                            style={{ marginBottom: '1rem' }}
                        />
                    )}
                    <CardContent>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    width: '35px',
                                }}
                            >
                                <HomeIcon color="#0770f3" />
                            </div>
                            <div>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Course : {props?.title}
                                </Typography>
                            </div>
                        </div>
                        <Divider
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                            }}
                        />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'end',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    width: '35px',
                                }}
                            >
                                <BookIcon />
                            </div>
                            <div>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'end',
                                    }}
                                >
                                    Classes : 5
                                </Typography>
                            </div>
                        </div>
                        <Divider
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                            }}
                        />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'end',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    width: '35px',
                                }}
                            >
                                <LanguageIcon />
                            </div>
                            <div>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'end',
                                    }}
                                >
                                    Language : English
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </StyledContainer>
    );
}
