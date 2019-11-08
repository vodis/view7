import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root.reducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    
    return store
};