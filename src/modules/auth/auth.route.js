import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login';

const OauthRouter = () => (
    <Route path="/login" name="oauth" exact component={Login} />
);

export default OauthRouter;