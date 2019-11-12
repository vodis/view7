import React from 'react';
import { Provider } from 'react-redux';

import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import configureStore from './store/configureStore';
import { firebase, rrfConfig } from './configuration/firebase';

import Wrapper from './components/Wrapper/Wrapper';

import './App.scss';

const store = configureStore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Wrapper />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
