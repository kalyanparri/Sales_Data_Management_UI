import { createSlice } from "@reduxjs/toolkit";
import { IUploadResponse } from "../../interfaces/sales";
import { default_message } from "../../utils/constants";

const initialState: IUploadResponse = {
    data: [],
    loading: false,
    message: default_message
}

const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        saveSales: (state: IUploadResponse, action)=>{
            state.data = action.payload;
        },

        updateUploadResponse: (state: IUploadResponse, action)=>{
            state.loading = false;
            state.message = action.payload;
        },

        updateLoadingStatus: (state: IUploadResponse, action)=>{
            state.loading = action.payload;
        },

        updateMessage: (state: IUploadResponse, action)=>{
            state.message = action.payload;
        },
    }
})

export const { saveSales, updateUploadResponse, updateLoadingStatus, updateMessage } = salesSlice.actions;
export default salesSlice.reducer;