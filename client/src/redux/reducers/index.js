import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
const rootReducer = combineReducers({
  authReducer,
  productsReducer,
});

export default rootReducer;