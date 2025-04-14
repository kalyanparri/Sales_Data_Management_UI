import React, { useEffect, useState } from "react";
import './style.css';
import { useSelector } from "react-redux";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-blue/theme.css";
import { getProducts } from "../utils/common";
import { IProducts } from "../interfaces/sales";

const Products = () =>{

    const data = useSelector((state: any)=> state.sales.data);
    const loading = useSelector((state: any)=> state.sales.loading);
    const [products, setProducts] = useState<IProducts[]>([]);

    useEffect(()=>{
        setProducts(getProducts(data));
    },[data])

    return(
        <div id="sales-history">
            <DataTable paginator showGridlines rows={5} loading={loading} value={products} tableStyle={{ minWidth: '50rem' }} 
                header={'Sold Products'} filterDisplay="row" size="small">
                <Column field="product" header="Product" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }}></Column>
                <Column field="count" header="Count"></Column>
            </DataTable>
        </div>
    )
}

export default Products;