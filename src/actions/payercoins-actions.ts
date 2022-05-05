export const callPayercoinsPop = (PayercoinsArgs: any): void => {
  // @ts-ignore
  return (
    // @ts-ignore
    window.Payercoins &&
    // @ts-ignore
    window.Payercoins({
      key: PayercoinsArgs.key,
      currency: PayercoinsArgs.currency,
      amount: PayercoinsArgs.amount,
      customer_name: PayercoinsArgs['customer_name'],
      customer_email: PayercoinsArgs['customer_email'],
      description: PayercoinsArgs['description'],
      redirect_url: PayercoinsArgs.redirect_url || "",
      callback_url: PayercoinsArgs["callback_url"] || "",
    })
  )
}