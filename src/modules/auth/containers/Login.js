import React, { Component } from 'react';
import AuthForm from '../../../components/Form/AuthForm';
import { connect } from 'react-redux';
import Cookies from '../../../services/cookies';

class Login extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps.auth)
        if (nextProps.auth.uid) {
            Cookies.set(nextProps.auth.uid);
        }
        return true;
    }

    render() {
        console.log('Login', this.props.auth);
        return (
            <AuthForm {...this.props}/>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null)(Login);