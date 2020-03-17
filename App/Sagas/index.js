import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import Api from '../Services/Api';

/* ------------- Sagas ------------- */
import { testSaga } from './MainSaga';

/* ------------- API ------------- */
const api = Api.create();

/* ------------- Connect Types To Sagas ------------- */
// This is the 'watcher saga': watches for actions dispatched to the store
// Starts the 'worker saga' for whatever action is dispatched
export default function* root() {
    yield all([takeLatest('MERCHANTS_PENDING', testSaga, api)]);
}
