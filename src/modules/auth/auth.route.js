import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login';
import User from './containers/User';

const OauthRouter = () => (
    <>
        <Route path="/login" name="auth" exact component={Login} />
        <Route path="/user" name="user" exact component={User} />
    </>
);

export default OauthRouter;