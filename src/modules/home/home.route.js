import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';

const HomeRouter = () => (
    <Route path="/" name="oauth" exact component={Home} />
);

export default HomeRouter;