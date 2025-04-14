import React, { useEffect } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { GET_UPLOAD_HISTORY } from "../utils/constants";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

const UploadHistory = () =>{

    const dispatch = useDispatch();
    const data = useSelector((state: any)=> state.uploadHistory.data);
    const loading = useSelector((state: any)=> state.uploadHistory.loading);
    
    useEffect(()=>{
        dispatch({type: GET_UPLOAD_HISTORY});
    },[])

    return(
        <div id="sales-history">
            <DataTable paginator showGridlines rows={5} loading={loading} value={data} tableStyle={{ minWidth: '50rem' }} 
                header={'File Upload History'} filterDisplay="row" size="small">
                <Column field="file_name" header="File Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }}></Column>
                <Column field="processed_rows" header="Processed Rows"></Column>
                <Column field="upload_date" header="Upload Date"></Column>
            </DataTable>
        </div>
    )
}

export default UploadHistory;