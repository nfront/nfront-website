import React from 'react';
import MyProviders from './myProviders.js';

const WrapRootElement = ({ children }) => {
    return (
        <MyProviders>{children}</MyProviders>
    )
};

export default WrapRootElement;