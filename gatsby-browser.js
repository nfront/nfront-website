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
    // Returns list of DOM Nodes matching selector
    const hash = document.querySelectorAll(`a[href="${location.hash}"]`)[0];
    if (hash) {
        window.scrollTo({
            // top: Specifies number of pixels along Y axis to scroll window
            top: hash.offsetTop,
        });
    }
    return true;
};
