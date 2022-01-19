import { createStore, applyMiddleware } from 'redux'
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from 'redux-devtools-extension'@reduxjs/toolkit/dist/devtoolsExtension
import { composeWithDevTools } from 'redux-devtools-extension'
// import myLogger from 'redux-logger'
import myLogger from './Reducers/index'
import rootReducer from '../src/Reducers/index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const Middlewares = [logger]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...Middlewares)),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
export default store
