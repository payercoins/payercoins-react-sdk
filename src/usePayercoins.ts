/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { PaymentProps } from './@types/index'
import useScript from './script'
import { callPayercoinsPop } from './actions/payercoins-actions'

export default function usePayercoinsPayment(options: PaymentProps) {
  const [scriptLoaded, scriptError] = useScript()
  const {
    key,
    currency,
    amount,
    customer_name,
    customer_email,
    description,
    redirect_url,
    callback_url
  } = options

  function initializePayment(): void {
    if (scriptError) {
      throw new Error('Unable to load Payercoins inline script')
    }

    if (scriptLoaded) {
      const PayercoinsArgs = {
        key,
        currency,
        amount,
        customer_name,
        customer_email,
        description,
        redirect_url,
        callback_url
      }
      callPayercoinsPop(PayercoinsArgs)
    }
  }

  useEffect(() => {
    if (scriptError) {
      throw new Error('Unable to load payercoins inline script')
    }
  }, [scriptError])

  return [scriptLoaded, scriptError, initializePayment]
}