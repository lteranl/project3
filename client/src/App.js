import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import setAuthtoken from "./utils/setAuthToken";

import { Provider } from "react-redux";
import store from "./store";
import './App.css';

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import MainPage from "./components/mainpage/mainPage";

import Products from "./components/shopify/Products";
import Cart from "./components/shopify/Cart";



//checks for token, then checks to see if token expired

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthtoken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

class App extends Component {
 constructor() {
   super();

   this.state = {
     isCartOpen: false,
     checkout: { lineItems: [] },
     products: [],
     shop: {}
   };

   this.handleCartClose = this.handleCartClose.bind(this);
   this.addVariantToCart = this.addVariantToCart.bind(this);
   this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
   this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
 }

 /*componentWillMount() {
   this.props.client.checkout.create().then((res) => {
     this.setState({
       checkout: res,
     });
   });

   this.props.client.product.fetchAll().then((res) => {
     this.setState({
       products: res,
     });
   });

   this.props.client.shop.fetchAll().then((res) => {
     this.setState({
       shop: res,
     });
   });
   
   
 }*/
 
 addVariantToCart(variantId, quantity){
   this.setState({
     isCartOpen: true,
   });

   const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
   const checkoutId = this.state.checkout.id 
   return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
     this.setState({
       checkout: res,
     })
   })
 }

 updateQuantityInCart(lineItemId, quantity) {
   const checkoutId = this.state.checkout.id
   const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
  return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then((res) => {
    this.setState({
      checkout: res,
    })
  }) }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id
    
    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,

      })
    })
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    })
  }

  render() {

 

  return (
    <Provider store = {store}>
    <Router>
    <div className="App">
      <header className="App__header">
       
      </header>

      <Route exact path = "/" component={MainPage} />

      <Route exact path = "/register" component={Register} />
      <Route exact path = "/login" component={Login} />
      <Route exact path = "/products" component={Products} />
      {/* <Route exact path = "/mainPage" component={MainPage} /> */}
      <Switch>
        <PrivateRoute exact path="/dashboard" component = {Dashboard} />
      </Switch>

    </div>
    </Router>
    </Provider>
  );
 }
}

export default App;
