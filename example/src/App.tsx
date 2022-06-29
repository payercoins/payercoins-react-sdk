import React from 'react';

import { usePayercoins } from 'payercoins-react';

const App = () => {
  const options = {
    key: 'PUBLIC_KEY', //string
    customer_name: 'CUSTOMERS NAME', //string
    customer_email: 'CUSTOMERS EMAIL', //string
    amount: parseFloat('20.00'), // amount as a number or string
    currency: ['ethereum'], // Array of currency slug.
    description: 'Test Payment', // optional
    redirect_url: '', // optional - will default to current page
    invoice_id: '239313200190.40646', // optional - unique identifier for your payment and minLength 8, else we will automatically generate one
    callback_url: 'https://sandbox-api.payercoins.com/api/v1/withdrawal', //This is just a test sandbox
  };

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
};

export default App;
