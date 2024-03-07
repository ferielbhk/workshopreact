
import { applyMiddleware, createStore } from "redux"
import { counterReducer } from "./reducers"
import logger from 'redux-logger' ;
export default createStore(counterReducer , applyMiddleware(logger));