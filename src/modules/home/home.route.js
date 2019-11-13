import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,useHistory } from 'react-router-dom';
import Home from './containers/Home';
import Error from './containers/Error';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/user",
        component: Home
    },
    {
        path: "*",
        component: Error
    },

];

const HomeRouter = () => {
    let history = useHistory();
    if (history.location.pathname === "/login") {
        return <Redirect to="/" />
    }

    return (
        <Router>
            <Switch>
                {
                    routes.map((route, i) => (
                        <Route key={i} path={route.path} exact component={route.component} />
                    ))
                }
            </Switch>
        </Router>
    );
};

export default HomeRouter;