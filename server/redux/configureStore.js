import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function (initialState = {}) {
    const rootReducer = reducers;

    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}