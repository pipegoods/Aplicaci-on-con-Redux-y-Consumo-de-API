import {createStore, combineReducers } from 'redux';
import currentuser from './reducers/currentuser';

const reducer = combineReducers ({
    currentuser,
});

const store = createStore(reducer);

export default store;
