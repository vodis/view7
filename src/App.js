import React from 'react';
import { Provider } from 'react-redux';

import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import configureStore from './store/configureStore';
import firebase from './configuration/firebase';
import rrfConfig from './configuration/firebase';

import Wrapper from './components/Wrapper/Wrapper';
import CombineRoutes from './routes/common.route';

import './App.scss';

const store = configureStore({});

const rrfProps = {
firebase,
config: rrfConfig,
dispatch: store.dispatch,
// createFirestoreInstance // <- needed if using firestore
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Wrapper>
            <CombineRoutes {...this.props} />
          </Wrapper>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
