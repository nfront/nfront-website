import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/global';
import { getImage } from 'gatsby-plugin-image';
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

export default function CourseCard({ props }) {
    const image = getImage(props.coverImage);
    return (
        <StyledContainer>
            <Card style={{ margniBottom: '15px' }}>
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
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                                display: 'flex',
                                alignItems: 'end',
                            }}
                        >
                            <HomeIcon />
                            Course : {props.courseName}
                        </Typography>
                        <Divider
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                            }}
                        />
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                                display: 'flex',
                                alignItems: 'end',
                            }}
                        >
                            <BookIcon />
                            Classes : 5
                        </Typography>
                        <Divider
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                            }}
                        />
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                                display: 'flex',
                                alignItems: 'end',
                            }}
                        >
                            <LanguageIcon />
                            Language : English
                        </Typography>
                    </CardContent>
                    {/* <CardContent>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                                display: 'flex',
                                alignItems: 'end',
                            }}
                        >
                            <HomeIcon />
                            Course : {props.courseName}
                        </Typography>
                        <Divider
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                            }}
                        />
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                                display: 'flex',
                                alignItems: 'end',
                            }}
                        >
                            <BookIcon />
                            Classes : 5
                        </Typography>
                        <Divider
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                            }}
                        />
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                                display: 'flex',
                                alignItems: 'end',
                            }}
                        >
                            <LanguageIcon />
                            Language : English
                        </Typography>
                    </CardContent> */}
                </CardActionArea>
            </Card>
        </StyledContainer>
    );
}
