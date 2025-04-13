import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga";
import salesReducer from '../redux/sales/salesSlice';
import uploadHistoryReducer from '../redux/upload-history/uploadHistorySlice';

const rootReducer = {
    sales: salesReducer,
    uploadHistory: uploadHistoryReducer
}

const saga = createSagaMiddleware();
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(saga),
})

saga.run(rootSaga);