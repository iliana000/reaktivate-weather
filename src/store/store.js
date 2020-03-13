import { createStore, applyMiddleware, compose } from 'redux'
import locationMiddleware from "./middleware/locationMiddleware";
import createRootReducer from "./reducers";
import thunk from 'redux-thunk'

import weatherMiddleware from "./middleware/weatherMiddleware";

const enhancers = [];
const middleware = [
  thunk,
  locationMiddleware,
  weatherMiddleware,
];
addDevTools();

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);


export default function configureStore(initialState) {
  return createStore(
    createRootReducer(),
    initialState,
    composedEnhancers
  );
}


//////////////
function addDevTools () {
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__({
        name: `Redux`,
        realtime: true,
        trace: true,
        traceLimit: 34
      });

    if (!devToolsExtension) {
      console.warn('Install Redux DevTools Extension to inspect the app state: ' +
        'https://github.com/zalmoxisus/redux-devtools-extension#installation')}

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension);
    }
  }
}