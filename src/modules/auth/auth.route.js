import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login';
import Logout from './containers/Logout';

const AuthRouter = () => (
    <>
        <Route path="/login" name="login" exact component={Login} />
        <Route path="/logout" name="logout" exact component={Logout} />
    </>
);

export default AuthRouter;