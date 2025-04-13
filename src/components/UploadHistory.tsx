import React, { useEffect } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { GET_UPLOAD_HISTORY } from "../utils/constants";
import { IUploadHistory } from "../interfaces/sales";

const UploadHistory = () =>{

    const dispatch = useDispatch();
    const data = useSelector((state: any)=> state.uploadHistory.data);
    
    useEffect(()=>{
        dispatch({type: GET_UPLOAD_HISTORY});
    },[])

    return(
        <div id="sales-history">
            {data?.map((item: IUploadHistory, index: number) =>{
                return <div key={index}>
                        {item.file_name}
                    </div>
            })}
        </div>
    )
}

export default UploadHistory;