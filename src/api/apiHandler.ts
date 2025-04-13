import axios from "axios";

export const apiHandler = (params: any) =>{
    const { method, data, url, headers} = params;
    return axios({
        method,
        url,
        data,
        headers: headers || {
            'Content-Type': 'application/json'
        },
    }).then((res)=>{
        return res;
    }).catch((error)=>{
        return error;
    })
}