import React from 'react';
import { login, isAuthenticated, getProfile } from '../utils/auth';
import { Router } from '@reach/router';
import Training from '@sections/Training';

export default () => {
    if (!isAuthenticated()) {
        login();
        return <p>Redirecting to login...</p>;
    }

    const user = getProfile();

    return (
        <Router>
            <Training path="/training/" user={user} />
        </Router>
    );
};