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
  render() {

  return (
    <Provider store = {store}>
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path = "/" component={Landing} />
      <Route exact path = "/register" component={Register} />
      <Route exact path = "/login" component={Login} />
      <Route exact path = "/mainPage" component={MainPage} />
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
