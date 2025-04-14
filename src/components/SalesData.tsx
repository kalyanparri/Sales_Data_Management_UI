import React, { useEffect } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { GET_SALES } from "../utils/constants";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-blue/theme.css";

const SalesData = () =>{

    const dispatch = useDispatch();
    const data = useSelector((state: any)=> state.sales.data);
    const loading = useSelector((state: any)=> state.sales.loading);

    useEffect(()=>{
        dispatch({type: GET_SALES});
    },[])

    const headerStyle = { minWidth: '14rem' };

    return(
        <div id="sales-history">
            <DataTable value={data} paginator rows={5} loading={loading} filterDisplay="row" showGridlines  header={'Sales Transactions'}>
                <Column header="Transaction Id" field="transaction_id" sortable  style={headerStyle} filter filterPlaceholder="Search" />
                <Column header="Customer Name" field="customer_name" sortable  style={headerStyle} filter filterPlaceholder="Search" />
                <Column header="Product" field="product" sortable  style={headerStyle} filter filterPlaceholder="Search" />
                <Column header="Quantity"  field="quantity" sortable  style={headerStyle} filter filterPlaceholder="Search"  />
                <Column header="Price"  field="price" sortable style={headerStyle} filter filterPlaceholder="Search"  />
                <Column header="Total Sale"  field="total_sale" sortable style={headerStyle} filter filterPlaceholder="Search"  />
                <Column header="Date"  field="date" sortable  style={headerStyle}  filter filterPlaceholder="Search"  />
            </DataTable>
        </div>
    )
}

export default SalesData;