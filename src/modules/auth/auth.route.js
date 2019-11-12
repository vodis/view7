import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import LeftSidebars from '../../components/Layout/LeftSidebars'; 

const AuthRouter = (props) => {
    return (
        <Router>
            <LeftSidebars />
            <Switch>
                <Route path="/login" name="login" exact component={Login} />
            </Switch>
        </Router>
    )
};

export default AuthRouter;