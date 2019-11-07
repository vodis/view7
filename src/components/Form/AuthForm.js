import React, { Component } from 'react';

import './AuthForm.scss';

class AuthForm extends Component {
    render() {
        return (
            <div className="form">
                <div className="form__container">
                    <div className="form__section">
                        <span>Sign In</span>
                        <button className="btn">Google Authorization</button>
                    </div>
                    <div className="form__section">
                        <span>Use your email</span>
                        <form className="login">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />
                            <button className="btn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthForm;