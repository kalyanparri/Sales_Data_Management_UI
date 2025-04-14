export interface IUploadResponse {
    data: ISale[],
    loading: boolean,
    message: string
}

export interface ISale {
    transaction_id: string,
    customer_name: string,
    product: string,
    quantity: number,
    price: string,
    total_sale: string,
    date: string
}

export interface IUploadHistoryResponse {
    data: IUploadHistory[],
    loading: boolean,
}

export interface IUploadHistory {
    file_name: string,
    upload_date: string,
    processed_rows: number,
}

export interface IProducts {
    product: string,
    count: number,
}

export interface ICustomers {
    customer: string,
    amount_spent: string,
}