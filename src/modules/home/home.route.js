import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LeftSidebars from '../../components/Layout/LeftSidebars';
import Home from './containers/Home';
import Slider from './components/Slider/Slider';

const routes = [
    {
        path: '/slider',
        component: Slider 
    }
]

const HomeRouter = (props) => {
    return (
        <Router>
            <LeftSidebars />
            <Home {...props}>
                <Switch>
                    {
                        routes.map((route, i) => (
                            <Route key={i} path={route.path} exact component={route.component} />
                        ))
                    }
                </Switch>
            </Home>
        </Router>
    );
};

export default HomeRouter;