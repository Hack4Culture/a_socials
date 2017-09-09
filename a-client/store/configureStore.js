import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// const middleware = [thunk];

/**
 * Single Store
 * @param {object} initialState
 * @returns {function} store configuration
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // compose(applyMiddleware(...middleware))
  );
}