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
  key: 'PUBLIC_KEY', //string
  customer_name: "CUSTOMERS NAME", //string
  customer_email: "CUSTOMERS EMAIL", //string
  amount:  parseFloat('20.00'),  // amount as a number or string
  currency: ['ethereum'], // Array of currency slug.   
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
**[string]: Required**
The currency field is an array of string containing the slug of currency you have enabled on your payercoins dashboard

```
["ethereum", "bitcoin",  "usdt-trx",  "usdt-bep",  "busd-bep","usdc-bep"]
```


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
A callback url can be provided, if not it will use the one on your payercoins dashboard and if you do not have that set yet, your email will be used.
**string: Optional**


## Support

If you're having trouble with Payercoins React SDK or your integration, please reach out to us at <support@payercoins.com> or come chat with us our <a htrf="https://t.me/+8_E8hVoyuQlkZjk0">Telegram support group</a>. We're more than happy to help you out.

## License

MIT
