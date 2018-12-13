import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

export default function(history) {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) : compose;

  const initialState = window.__PRELOADED_STATE__ || {};
  const middleware = applyMiddleware(thunk, routerMiddleware(history));
  const enhancer = composeEnhancers(middleware);

  return createStore(rootReducer, initialState, enhancer);
}
