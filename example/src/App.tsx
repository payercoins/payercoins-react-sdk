import React from 'react';

import { usePayercoins } from './dist/index';

const App = () => {
  const options = {
    key: 'PYC-PUB_d7688663384ccc94413eda_TEST',
    currency: 'ethereum', // optional, if not provided will use your default currencies activated in your account
    amount: parseFloat('20.00'),
    customer_name: 'Test User',
    customer_email: 'adetayo.akinsanya@grazac.com.ng',
    description: 'Test Payment', // optional
    redirect_url: '', // optional - will default to current page
    invoice_id: (new Date().getTime() * Math.random()).toString(), // optional - unique reference for your payment and minLenght 8, else we will automatically generate one
    callback_url: 'https://sandbox-api.payercoins.com/api/v1/withdrawal', // optional - will default to callback url i
  };
  const [initializePayment] = usePayercoins();

  const handlePayment = async () => {
    await initializePayment(options);
  };

  return (
    <div>
      <h1>Payercoins React test</h1>
      <button onClick={handlePayment}>Pay with Lazerpay</button>
    </div>
  );
};

export default App;
