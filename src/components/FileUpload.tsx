import React, { useRef } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_SALES } from "../utils/constants";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-blue/theme.css";

const FileUpload = () =>{

    const dispatch = useDispatch();
    const message = useSelector((state: any)=> state.sales.message);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const handleChangeFile = (event:any) => {
        const file = event.target.files[0];
        let formData = new FormData();
        formData.append('file', file);
        dispatch({type: UPLOAD_SALES, payload: formData});
    }

    return(
        <div id="file-upload">
            <div onChange={handleChangeFile}>
                <input ref={inputFileRef} type="file" id="fileInput" accept=".csv"></input>
                <button id='upload' onClick={() => inputFileRef?.current?.click()}>
                  Upload CSV File
                </button>
            </div>
            <div id='message'>
              {message}
            </div>
        </div>
    )
}

export default FileUpload;