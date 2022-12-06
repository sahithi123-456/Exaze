import {createStore,  applyMiddleware} from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk';
import demoReducer from './reducers'

const rootReducer = combineReducers({demoReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));