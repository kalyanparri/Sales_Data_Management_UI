import { takeLatest, call, put } from "redux-saga/effects";
import { GET_UPLOAD_HISTORY } from "../../utils/constants";
import { apiHandler } from "../../api/apiHandler";
import { AxiosResponse } from "axios";
import { saveUploadHistory } from "./uploadHistorySlice";

function* fetchUploadHistory(){
    const params = { url: 'http://localhost:3000/upload-history/', method: 'GET'}
    try {
        const respose: AxiosResponse = yield call(apiHandler, params);
        console.log('upload history data:', respose);
        yield put(saveUploadHistory(respose.data));
    } catch (error) {
        console.log(error)
    }
}

function* uploadHistorySaga(){
    yield takeLatest(GET_UPLOAD_HISTORY, fetchUploadHistory);
}

export default uploadHistorySaga;