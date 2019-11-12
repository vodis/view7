import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root.reducer';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase'

const enhance = compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function configureStore(initialState = {}) {
    const store = createStore(
        rootReducer, 
        initialState,
        enhance
    );
    
    return store
};