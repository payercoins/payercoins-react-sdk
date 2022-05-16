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
  currency: 'ethereum', // ethereum, bitcoin, usdt-eth.  optional, if not provided will use your default currencies activated in your account
  amount:  parseFloat('20.00'),  // amount as a number or string
  customer_name: "CUSTOMERS NAME",
  customer_email: "CUSTOMERS EMAIL",
  description: 'Test Payment', // optional
  redirect_url: '', // optional - will default to current page
  invoice_id: "239313200190.40646", // optional - unique identifier for your payment and minLength 8, else we will automatically generate one
  callback_url: 'https://sandbox-api.payercoins.com/api/v1/withdrawal' //This is just a test sandbox
  }

  const [initializePayment] = usePayercoins();



  const handlePayment = async () => {
    await initializePayment(options);
  };

  return (
    <div>
      <h1>Payercoins React test</h1>
      <button onClick={handlePayment}>Pay with Payercoins</button>
    </div>
  );
}
```


## License

MIT
