export const callPayercoinsPop = async (PayercoinsArgs: any) => {

  const payercoins = new window.Payercoins({
    key: PayercoinsArgs.key,
    currency: PayercoinsArgs.currency.toString(),
    amount: PayercoinsArgs.amount,
    customer_name: PayercoinsArgs['customer_name'],
    customer_email: PayercoinsArgs['customer_email'],
    description: PayercoinsArgs['description'],
    redirect_url: PayercoinsArgs.redirect_url || "",
    callback_url: PayercoinsArgs["callback_url"] || "",
  })

  const data = await payercoins.checkout();
  window.location = data.payment_url;
  return data
  // return payment_url
}