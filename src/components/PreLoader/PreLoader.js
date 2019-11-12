import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from '../../services/cookies';

class LoadingView extends React.Component {
    state = {
        loader: null
    }

    componentDidMount() {
        this.timerId = setTimeout(() => {
            Cookies.set("root");
            this.setState({ loader: "pass" });
        }, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timerId);
    }

    render() {
        const { loader } = this.state;
        
        if (loader === null) {
            return (
                <p>Loading...</p>
            );
        }

        return loader && this.props.auth.uid 
            ? <Redirect to={{pathname: "/"}} /> 
            : <Redirect to={{pathname: "/login"}} />
    }
};

export default LoadingView;