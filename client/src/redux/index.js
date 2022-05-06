import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import thunk from 'redux-thunk'
const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, {}, composeWithDevTools(
  applyMiddleware(sagaMiddleware, thunk),
  // other store enhancers if any
));
sagaMiddleware.run(rootSaga);