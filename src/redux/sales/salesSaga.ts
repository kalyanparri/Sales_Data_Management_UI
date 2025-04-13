import { takeLatest, call, put } from "redux-saga/effects";
import { GET_SALES, UPLOAD_SALES } from "../../utils/constants";
import { apiHandler } from "../../api/apiHandler";
import { AxiosResponse } from "axios";
import { saveSales, updateUploadResponse } from "./salesSlice";

function* uploadSales(action: any){

    const file = action.payload;
    const headers = {
        "Content-Type": "multipart/form-data"
    }
    const params = { url: 'http://localhost:3000/sales/', method: 'POST', headers, data: file}
    try {
        const respose: AxiosResponse = yield call(apiHandler, params);
        console.log('response', respose);
        const message = `${respose.data.message} and ${respose.data.rows_inserted} records inserted`
        yield put(updateUploadResponse(message));
    } catch (error) {
        console.log(error)
    }
}

function* fetchSales(){
    const params = { url: 'http://localhost:3000/sales/', method: 'GET'}
    try {
        const respose: AxiosResponse = yield call(apiHandler, params);
        console.log('sales data:', respose);
        yield put(saveSales(respose.data));
    } catch (error) {
        console.log(error)
    }
}

function* salesSaga(){
    yield takeLatest(UPLOAD_SALES, uploadSales);
    yield takeLatest(GET_SALES, fetchSales);
}

export default salesSaga;