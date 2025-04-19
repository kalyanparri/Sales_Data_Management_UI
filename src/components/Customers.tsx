import React, { useEffect, useState } from "react";
import './style.css';
import { useSelector } from "react-redux";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-blue/theme.css";
import { ICustomers } from "../interfaces/sales";
import { getCustomers } from "../utils/common";

const Customers = () =>{

    const data = useSelector((state: any)=> state.sales.data);
    const loading = useSelector((state: any)=> state.sales.loading);
    const [customers, setCustomers] = useState<ICustomers[]>([]);

    useEffect(()=>{
        setCustomers(getCustomers(data));
    },[data])

    return(
        <div className="child-container">
            { customers?.length > 0 && <DataTable paginator showGridlines rows={5} loading={loading} value={customers} tableStyle={{ minWidth: '50rem' }} 
                header={'Customers Data'} filterDisplay="row" size="small">
                <Column field="customer" header="Customer Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }}></Column>
                <Column field="amount_spent" header="Amount Spent"></Column>
            </DataTable>
            }
        </div>
    )
}

export default Customers;