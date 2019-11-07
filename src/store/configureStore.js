import {createStore, applyMiddleware, compose, combineReducers } from 'redux';

export default function configureStore(initialState = {}) {
    const store = createStore({});
    return store;
}