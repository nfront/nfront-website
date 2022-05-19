import React from 'react';
import { Router } from '@reach/router';
import { login, isAuthenticated, getProfile } from '../utils/auth';
import Training from '@sections/Training';

const Account = () => {
    if (!isAuthenticated()) {
        login();
        return <p>Redirecting to login...</p>;
    }

    const user = getProfile();

    return (
        <Router>
            <Training path="/account/" user={user} />
        </Router>
    );
};

export default Account;
