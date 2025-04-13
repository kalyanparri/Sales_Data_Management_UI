import React, { useEffect } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { ISale } from "../interfaces/sales";
import { GET_SALES } from "../utils/constants";

const SalesData = () =>{

    const dispatch = useDispatch();
    const data = useSelector((state: any)=> state.sales.data);

    useEffect(()=>{
        dispatch({type: GET_SALES});
    },[])

    return(
        <div id="sales-history">
            {data?.map((item: ISale, index: number) =>{
                return <div key={index}>
                        {item.transaction_id}
                    </div>
            })}
        </div>
    )
}

export default SalesData;