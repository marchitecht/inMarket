// import {
//     takeEvery,
//     call, put, all,
//   } from 'redux-saga/effects';
  
//   const getTasks = async () => {
//     console.log('ASYNC REQUEST LOG');
//     const response = await fetch('http://localhost:3001/tasks');
//     const allTasks = await response.json();
//     console.log(allTasks);
//     return allTasks;
//   };
//   // eslint-disable-next-line no-empty-function
//   // eslint-disable-next-line require-yield
  
//   // ADD TASK
//   export function* workerSaga(action) {
//     console.log(action);
//     yield put('ADD_TASK', action.payload);
//   }
  
//   export function* watchClickSaga() {
//     yield takeEvery('ADD_TASK_SAGA', workerSaga);
//   }
  
//   // GET ALL POSTS
//   export function* getAllPostsWorker() {
//     console.log('postworker');
//     // eslint-disable-next-line no-undef
//     const allTasks = yield call(getTasks);
//     console.log(allTasks);
//     yield put({ type: 'GET_ALL_TASKS', payload: allTasks });
//   }
  
//   export function* getAllPostsWatcher(action) {
//     console.log('postwacher');
//     console.log('action ->', action);
//     yield takeEvery('GET_ALL_POSTS_SG', getAllPostsWorker);
//   }
  
  // EXPORT FOR ROOT SAGA
  
  export default function* testSaga() {
    console.log('IN TEST SAGA');
    // yield all([getAllPostsWatcher(), watchClickSaga()]);
  }