var react = require('react');

var cachedScripts = [];
function usePayercoinsScript() {
  var src = 'https://checkout.payercoins.com/index.min.js';

  var _useState = react.useState({
    loaded: false,
    error: false
  }),
      state = _useState[0],
      setState = _useState[1];

  react.useEffect(function () {
    if (cachedScripts.includes(src)) {
      setState({
        loaded: true,
        error: false
      });
    } else {
      cachedScripts.push(src);
      var script = document.createElement('script');
      script.src = src;
      script.async = true;

      var onScriptLoad = function onScriptLoad() {
        setState({
          loaded: true,
          error: false
        });
      };

      var onScriptError = function onScriptError() {
        var index = cachedScripts.indexOf(src);
        if (index >= 0) cachedScripts.splice(index, 1);
        script.remove();
        setState({
          loaded: true,
          error: true
        });
      };

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('complete', onScriptLoad);
      script.addEventListener('error', onScriptError);
      document.body.appendChild(script);
      return function () {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      };
    }
  }, [src]);
  return [state.loaded, state.error];
}

var callPayercoinsPop = function callPayercoinsPop(PayercoinsArgs) {
  return window.Payercoins && window.Payercoins({
    key: PayercoinsArgs.key,
    currency: PayercoinsArgs.currency,
    amount: PayercoinsArgs.amount,
    customer_name: PayercoinsArgs['customer_name'],
    customer_email: PayercoinsArgs['customer_email'],
    description: PayercoinsArgs['description'],
    redirect_url: PayercoinsArgs.redirect_url || "",
    callback_url: PayercoinsArgs["callback_url"] || ""
  });
};

function usePayercoinsPayment(options) {
  var _useScript = usePayercoinsScript(),
      scriptLoaded = _useScript[0],
      scriptError = _useScript[1];

  var key = options.key,
      currency = options.currency,
      amount = options.amount,
      customer_name = options.customer_name,
      customer_email = options.customer_email,
      description = options.description,
      redirect_url = options.redirect_url,
      callback_url = options.callback_url;

  function initializePayment() {
    if (scriptError) {
      throw new Error('Unable to load Payercoins inline script');
    }

    if (scriptLoaded) {
      var PayercoinsArgs = {
        key: key,
        currency: currency,
        amount: amount,
        customer_name: customer_name,
        customer_email: customer_email,
        description: description,
        redirect_url: redirect_url,
        callback_url: callback_url
      };
      callPayercoinsPop(PayercoinsArgs);
    }
  }

  react.useEffect(function () {
    if (scriptError) {
      throw new Error('Unable to load payercoins inline script');
    }
  }, [scriptError]);
  return [scriptLoaded, scriptError, initializePayment];
}

exports.usePayercoins = usePayercoinsPayment;
//# sourceMappingURL=index.js.map
