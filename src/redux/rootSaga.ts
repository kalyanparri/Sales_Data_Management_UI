import { all, fork } from 'redux-saga/effects';
import salesSaga from './sales/salesSaga';
import uploadHistorySaga from './upload-history/uploadHistorySaga';

export default function* rootSaga(){
    yield all([fork(salesSaga)]);
    yield all([fork(uploadHistorySaga)]);
}