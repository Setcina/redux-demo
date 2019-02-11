import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const initState= {};

const middleWare = [thunk];

export const store = createStore(
  rootReducer,
  initState,
  compose(  
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))