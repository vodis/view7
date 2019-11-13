import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { logIn, signUp } from '../../modules/auth/actions/auth.actions';

import './AuthForm.scss';

class AuthForm extends Component {
    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div className="form">
                <div className="form__container">
                    <div className="form__section">
                        <span>Sign In</span>
                        <button className="btn btn__full">Google Authorization</button>
                    </div>
                    <div className="form__section">
                        <span>Use your email</span>
                        <form className="login">
                            <label htmlFor="email">Email</label>
                            <Field name="email" component="input" />
                            <label htmlFor="password">Password</label>
                            <Field name="password" component="input" />
                            <div className="btn__wrapper">
                                <button 
                                    onClick={handleSubmit((e) => this.props.logIn(e))} 
                                    className="btn btn__half" 
                                    type="submit" 
                                    name="login" 
                                    disabled={submitting}
                                >Login</button>
                                <div className="btn__divider"></div>
                                <button 
                                    onClick={handleSubmit((e) => this.props.signUp(e))} 
                                    className="btn btn__half btn__m-5" 
                                    type="submit" 
                                    name="signup" 
                                    disabled={submitting}
                                >Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AuthForm = reduxForm({
    form: 'auth',
    destroyOnUnmount: false,
})(AuthForm);

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => ({
    logIn: (credential) => dispatch(logIn(credential)),
    signUp: (credential) => dispatch(signUp(credential)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);