export type CheckoutProps = {
  key: string
  currency?: string
  amount: number | string
  customer_name: number | string
  customer_email: string
  description?: string
  redirect_url?: string
  invoice_id: string
  callback_url?: string
}

declare global {
  interface Window {
    Payercoins: any;
  }
}