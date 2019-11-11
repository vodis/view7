import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { logIn } from '../../modules/auth/actions/auth.actions';

import './AuthForm.scss';

class AuthForm extends Component {
    handleSubmit = (e) => {
        this.props.logIn(e);
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div className="form">
                <div className="form__container">
                    <div className="form__section">
                        <span>Sign In</span>
                        <button className="btn">Google Authorization</button>
                    </div>
                    <div className="form__section">
                        <span>Use your email</span>
                        <form className="login" onSubmit={handleSubmit((this.handleSubmit))}>
                            <label htmlFor="email">Email</label>
                            <Field name="email" component="input" />
                            <label htmlFor="password">Password</label>
                            <Field name="password" component="input" />
                            <button className="btn" type="submit" disabled={submitting}>Login / Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AuthForm = reduxForm({
    form: 'login',
    destroyOnUnmount: false,
})(AuthForm);

const mapDispatchToProps = dispatch => ({
    logIn: (credential) => dispatch(logIn(credential))
});

export default connect(null, mapDispatchToProps)(AuthForm);