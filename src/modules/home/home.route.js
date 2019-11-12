import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LeftSidebars from '../../components/Layout/LeftSidebars';
import Home from './containers/Home';
import Slider from './components/Slider/Slider';
import NoMatch from './components/NoMatch/NoMatch';

const routes = [
    {
        path: '/',
        component: Slider,
    },
    {
        path: '*',
        component: NoMatch,
    }
]

const HomeRouter = (props) => {
    return (
        <Router>
            <LeftSidebars />
            <Home {...props}>
                <Switch>
                    <PrivateRoute {...props}/>
                </Switch>
            </Home>
        </Router>
    );
};

const PrivateRoute = ({children, auth, cookie}) => {
    return (
        <Route render={() => {
            return auth.uid 
                ? routes.map((route, i) => (
                    <Route key={i} path={route.path} exact component={route.component} />
                ))
                : <Redirect to={{ pathname: "/" }} />
        }} />
    );
}

export default HomeRouter;