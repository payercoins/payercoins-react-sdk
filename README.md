# Payercoins Official react sdk

Payercoins SDK allows you accept payments easily in your react application

<!-- <img src="https://raw.githubusercontent.com/njokuScript/screenshots/master/react-1.png" alt='screenshot of SDK'  />

<img src="https://raw.githubusercontent.com/njokuScript/screenshots/master/react-2.png" alt='screenshot of SDK'  />

<img src="https://raw.githubusercontent.com/njokuScript/screenshots/master/react-3.png" alt='screenshot of SDK'  />

<img src="https://raw.githubusercontent.com/njokuScript/screenshots/master/react-4.png" alt='screenshot of SDK'  /> -->

## Installation

```sh
npm install payercoins-react
```
or

```sh
yarn add  payercoins-react
```

## Usage

```js
import { usePayercoins } from 'payercoins-react'

const App = () => {
  config = {
  key: 'PUBLIC_KEY',
  customer_name: "CUSTOMERS NAME",
  customer_email: "CUSTOMERS EMAIL",
  amount:  parseFloat('20.00'),  // amount as a number or string
  currency: 'ethereum', // ethereum, bitcoin, usdt-eth.  optional, if not provided will use your default currencies activated in your account
  description: 'Test Payment', // optional
  redirect_url: '', // optional - will default to current page
  invoice_id: "239313200190.40646", // optional - unique identifier for your payment and minLength 8, else we will automatically generate one
  callback_url: 'https://sandbox-api.payercoins.com/api/v1/withdrawal' //This is just a test sandbox
  }

  const [initializePayment] = usePayercoins();

  const handlePayment = async () => {
    await initializePayment(config);
  };

  return (
    <div>
      <h1>Payercoins React test</h1>
      <button onClick={handlePayment}>Pay with Payercoins</button>
    </div>
  );
}
```

<!-- ### NOTE

`reference` has to be updated after any successful partial payment to enable re-initialization. -->

## Configuration Options

- [`key`](#key)
- [`customer_name`](#customer_name)
- [`customer_email`](#customerEmail)
- [`amount`](#amount)
- [`currency`](#currency)
- [`description`](#description)
- [`redirect_url`](#redirect_url)
- [`invoice_id`](#invoice_url)
- [`callback_url`](#callback_url)

### <a name="key"></a> `key`

**string: Required**
Your public key can be found on your [dashboard](https://app.payercoins.com/settings/webhooks) settings.

### <a name="cunstomer_name"></a> `customer Name`

**string: Required**
The name of the customer trying to  carry out a transaction

### <a name="customer_email"></a> `customer Email`

**string: Required**
The customers email

### <a name="currency"></a> `currency`

**string: Required**
The name of the coin, which has to be part of the coins the merchant accepts

### <a name="amount"></a> `amount`

**number | string: Required**
The amount that is to be paid to settle the transaction `currency`

### <a name="description"></a> `description`

**object : Optional**
This contains any additional information you want to pass with this transaction

### <a name="invoice_id"></a> `invoice_id`

**string : Optional**
unique identifier for your payment

### <a name="redirect_url"></a> `redirect_url`

**string : Optional**
The page where you want the customer to be directed to after payment, if not user will be directed to the current page
### <a name="callback_url"></a> `callback_url`

**string: Optional**


<!-- ```ts
{
  "event": "successful",
  "data": {
    "id": "12896b32-0d7d-4744-bc15-5960af40d519",
    "reference": "aa6KlHy88D",
    "acceptPartialPayment":true,
    "senderAddress": "0x0B4d358D349809037003F96A3593ff9015E89efA",
    "recipientAddress": "0x785F44E779cfEeDeBf7aA7CFde19DaA3312fd19e",
    "actualAmount": 10,
    "amountPaid": 10,
    "fiatAmount": 10,
    "coin": "BUSD",
    "currency": "USD",
    "hash": "0x3332d7b046d53e90dc0337c715252f210386c2a471c5025c953a0b1d9bc90593",
    "blockNumber": 14160827,
    "type": "received",
    "status": "confirmed",
    "network": "mainnet",
    "blockchain": "Binance Smart Chain",
    "customer": {
      "id": "b847dbbd-e5a4-4afc-ba26-b292707dc391",
      "customerName": "Njoku Emmanuel",
      "customerEmail": "kalunjoku123@gmail.com",
      "customerPhone": null,
      "network": "mainnet"
    }
  }
}
``` -->

<!-- ## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Support

If you're having trouble with Lazerpay React Native SDK or your integration, please reach out to us at <help@lazerpay.finance> or come chat with us on Slack. We're more than happy to help you out.

## License

MIT -->
