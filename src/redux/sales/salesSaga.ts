import { takeLatest, call, put, delay } from "redux-saga/effects";
import { api_server_error, default_message, GET_SALES, GET_UPLOAD_HISTORY, UPLOAD_SALES } from "../../utils/constants";
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
        let message;
        if(respose?.response?.status === 400){
            message = respose?.response?.data?.message;
        }else if(respose?.status === 200){
            message = `${respose.data.message} and ${respose.data.rows_inserted} records inserted`
            yield put({type: GET_SALES});
            yield put({type: GET_UPLOAD_HISTORY});
        }else{
            message = api_server_error;
        }
        yield put(updateUploadResponse(message));
        yield delay(5000); 
        yield put(updateUploadResponse(default_message));
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