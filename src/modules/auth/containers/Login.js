import React, { Component } from 'react';
import AuthForm from '../../../components/Form/AuthForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/auth.actions';

class Login extends Component {
    render() {
        console.log('store', this.props);
        return (
            <AuthForm {...this.props}/>
        );
    }
};

const mapStateToProps = state => {
    return {
        auth: state.auth.authReducer
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AuthActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);