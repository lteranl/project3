import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Client from "shopify-buy"

const client = Client.buildClient({
  storefrontAccessToken: "4c2e018f5ac20c3007d357487930589e",
  domain: "uciproject3.myshopify.com"
})

ReactDOM.render(

    <App client={client} />,

  document.getElementById('root')
);

serviceWorker.unregister();
