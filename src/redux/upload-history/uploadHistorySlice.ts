import { createSlice } from "@reduxjs/toolkit";
import { IUploadHistoryResponse } from "../../interfaces/sales";

const initialState: IUploadHistoryResponse = {
    data: [],
    loading: false
}

const uploadHistorySlice = createSlice({
    name: 'upload_history',
    initialState,
    reducers: {
        saveUploadHistory: (state: IUploadHistoryResponse, action)=>{
            state.data = action.payload;
        },
    }
})

export const { saveUploadHistory } = uploadHistorySlice.actions;
export default uploadHistorySlice.reducer;