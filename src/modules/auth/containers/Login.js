import React, { Component } from 'react';
import AuthForm from '../../../components/Form/AuthForm';

class Login extends Component {
    render() {
        return (
            <AuthForm {...this.props}/>
        );
    }
};

export default Login;