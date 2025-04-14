import { ICustomers, IProducts, ISale } from "../interfaces/sales"

export const getCustomers = (data: ISale[]) =>{
    let temp: ICustomers[] = [];
    let customerNames = [...new Set(data.map((e: ISale) => e.customer_name))];
    customerNames?.forEach((cname:string)=>{
        let sales = data.filter((e: ISale) => e.customer_name === cname);
        let currency = '';
        let amount = sales?.reduce((acc: number, sale: ISale) =>{
            let arr = sale?.total_sale?.split(' ');
            if(!currency && arr.length === 2){
                currency = arr[1];
            }
            return acc + (parseInt(arr[0]) || 0);
        }, 0);
        temp.push({customer: cname, amount_spent: `${amount} ${currency}`});
    })
    return temp;
}


export const getProducts = (data: ISale[]) =>{
    let temp: IProducts[] = [];
    let productNames = [...new Set(data.map((e: ISale) => e.product))];
    productNames?.forEach((pname:string)=>{
        let sales = data.filter((e: ISale) => e.product === pname);
        let count = sales?.reduce((acc: number, sale: ISale) =>{
            return acc + sale.quantity;
        }, 0);
        temp.push({product: pname, count});
    })
    return temp;
}