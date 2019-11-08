import React, { Component } from 'react'; 

import './AuthForm.scss';

class AuthForm extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.actions.signIn();
    }

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
                            <button className="btn" type="submit" onClick={this.handleClick}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthForm;