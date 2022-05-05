/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { PaymentProps } from './@types/index'
import useScript from './script'
import { callPayercoinsPop } from './actions/payercoins-actions'


export default function usePayercoinsPayment() {
  const [scriptLoaded, scriptError] = useScript()

  function initializePayment(options: PaymentProps): void {
    if (scriptError) {
      throw new Error('Unable to load Payercoins inline script')
    }

    if (scriptLoaded) {
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
      callPayercoinsPop({
        key,
        currency,
        amount,
        customer_name,
        customer_email,
        description,
        redirect_url,
        callback_url
      })
    }
  }

  useEffect(() => {
    if (scriptError) {
      throw new Error('Unable to load payercoins inline script')
    }
  }, [scriptError])

  return [scriptLoaded, scriptError, initializePayment]
}