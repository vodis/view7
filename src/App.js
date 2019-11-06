import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { loadable } from './utils/loadeble';

const routes = {
  root: '/',
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.root} component={loadable.Home} />
      </Switch>
    </div>
  );
}

export default App;
