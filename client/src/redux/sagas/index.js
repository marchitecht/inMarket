import { all } from 'redux-saga/effects';
import testSaga from './testSaga';

export default function* rootSaga() {
  console.log('Saga is working');
  yield all([testSaga()]);
}