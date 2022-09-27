import React from 'react';
import { CircularProgress } from '@mui/material';
import { handleAuthentication } from '../utils/auth';

const Callback = () => {
    handleAuthentication();

    // return <p>Loading...</p>;
    return (
        <div
            style={{
                height: "100vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress />
        </div>
    );
};

export default Callback;
