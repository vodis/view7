import React, { Component } from 'react';
import AuthForm from '../../../components/Form/AuthForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/auth.actions';

class Login extends Component {
    render() {
        return (
            <AuthForm {...this.props}/>
        );
    }
};

const mapStateToProps = state => {
    return {
        auth: state.auth.authReducer,
        firestore: state.firestore,
        firebase: state.firebase,
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AuthActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);