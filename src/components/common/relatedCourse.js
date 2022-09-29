import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/global';
import { getImage } from 'gatsby-plugin-image';
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Divider,
    Typography,
} from '@mui/material';

const StyledContainer = styled(Container)`
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (min-width: ${(props) => props.theme.screen.md}) {
            max-width: 800px;
        }
        margin-bottom: 3rem;
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
                        <div
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
                                    Term Sheet
                                </Typography>
                            </div>
                            <div>
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
                            </div>
                        </div>
                        <div
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
                                    Valuation
                                </Typography>
                            </div>
                            <div>
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
                            </div>
                        </div>
                        <div
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
                                    Metrics
                                </Typography>
                            </div>
                            <div>
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
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </StyledContainer>
    );
}
