import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { firebaseConnect } from 'react-redux-firebase';

import './AuthForm.scss';

class AuthForm extends Component {
    
    handleSubmit = (e) => {
        this.props.firebase.createUser(e)
            .then(cred => console.log(cred))
            .catch(error => console.log(error));
        this.props.actions.signIn(e);
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
                            <button className="btn" type="submit" disabled={submitting}>Login</button>
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

const mapStateToProps = ({ firebase: { auth, profile } }) => ({
    auth,
    profile
})

export default compose(
    firebaseConnect(),
    connect(mapStateToProps, null)
)(AuthForm);