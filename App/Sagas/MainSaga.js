import { call, put } from 'redux-saga/effects';
import { fetchMerchantsSuccess, fetchMerchantsError } from '../Redux/reducer';

export function* testSaga(api) {
    const response = yield call(api.getMerchants);
    if (response.ok) {
        yield put(fetchMerchantsSuccess(response.data));
    } else {
        yield put(fetchMerchantsError(response.data));
    }
}
