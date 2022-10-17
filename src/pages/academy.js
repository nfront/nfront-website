import React from 'react';
import { login, isAuthenticated, getProfile } from '../utils/auth';
import { Router } from '@reach/router';
import Academy from '@sections/Academy';
import { CircularProgress } from '@mui/material';

const academy = () => {
    if (!isAuthenticated()) {
        login();
        // return <p>Redirecting to login...</p>;
        return (
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CircularProgress />
            </div>
        );
    }

    const user = getProfile();

    return (
        // <Academy path="/academy/" user={user} />
        <Router>
            <Academy path="/academy/" user={user} />
        </Router>
    );
};

export default academy;
