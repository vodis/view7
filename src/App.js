import React from 'react';
// import { Provider } from 'react-redux';

import CombineRoutes from './routes/common.route';
import LeftSidebars from './components/Layout/LeftSidebars';
// import store from './store/configureStore';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
        <div className="container">
          <LeftSidebars />
          <CombineRoutes {...this.props} />
        </div>
      // </Provider>
    );
  }
}

export default App;
