export declare type PaymentProps = {
    key: string;
    currency?: string;
    amount: number | string;
    customer_name: number | string;
    customer_email: string;
    description?: string;
    redirect_url?: boolean;
    invoice_id: string;
    callback_url?: string;
};
