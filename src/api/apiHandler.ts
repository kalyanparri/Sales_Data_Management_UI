import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const apiHandler = (params: any) =>{
    const { method, data, endpoint, headers} = params;
    return axios({
        method,
        url: `${BASE_URL}${endpoint}`,
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