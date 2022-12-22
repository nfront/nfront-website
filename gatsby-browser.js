import './src/styles/style.scss';
import React from 'react';
import { silentAuth } from './src/utils/auth';
import WrapRootElement from '@components/context/wrapRootElement';

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

export const onRouteUpdate = ({ location }) => {
    const hash = document.querySelectorAll(`a[href="${location.hash}"]`)[0];
    if (hash) {
        window.scrollTo({
            top: hash.offsetTop,
        });
    }
    return true;
};
