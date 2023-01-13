import './src/styles/style.scss';
import React from 'react';
import { silentAuth } from './src/utils/auth';
import WrapRootElement from '@components/context/wrapRootElement';
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
class SessionCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    handleCheckSession = () => {
        this.setState({ loading: false });
    };

    componentDidMount() {
        silentAuth(this.handleCheckSession);
    }

    render() {
        return (
            this.state.loading === false && (
                <React.Fragment>{this.props.children}</React.Fragment>
            )
        );
    }
}

export const wrapRootElement = ({ element }) => {
    return (
        <SessionCheck>
            <WrapRootElement>{element}</WrapRootElement>
        </SessionCheck>
    );
};