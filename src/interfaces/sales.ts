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