import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Client from "shopify-buy"

const client = Client.buildClient({
  storefrontAccessToken: "123f6f392a6b7208a7cb7cb9caf217f1",
  domain: "project3uci.myshopify.com"
})

ReactDOM.render(

    <App />,

  document.getElementById('root')
);

serviceWorker.unregister();
