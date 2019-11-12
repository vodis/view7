import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './containers/Login';
import LeftSidebars from '../../components/Layout/LeftSidebars'; 

const AuthRouter = (props) => {
    console.log(props);
    return (
        <Router>
            <LeftSidebars />
            <Switch>
                <PrivateRoute {...props} />
            </Switch>
        </Router>
    )
};

const PrivateRoute = ({children, auth, cookie}) => {
    return (
        <Route render={() => {
            return auth.uid 
                ? <Route path="/login" name="login" exact component={Login} />
                : <Redirect to={{ pathname: "/login" }} />
        }} />
    );
}

export default AuthRouter;