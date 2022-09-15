import React from 'react';
import { login, isAuthenticated, getProfile } from '../utils/auth';
import { Router } from '@reach/router';
import Academy from '@sections/Academy';

const academy = () => {
    if (!isAuthenticated()) {
        login();
        return <p>Redirecting to login...</p>;
    }

    const user = getProfile();

    return (
        <Router>
            <Academy path="/academy/" user={user} />
        </Router>
    );
};

export default academy;