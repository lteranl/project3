import React from "react";
import "../../App.css";
import { Link, withRouter } from "react-router-dom";
import Items from "../products/items";
import store from "../../store";
import { logoutUser } from "../../actions/authActions";
import { SET_SHOPPING_CART } from "../../actions/types";

import { connect } from "react-redux";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core/";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// //not sure if this is correct
// import '@material-ui/core'
function App(props) {
  const {
    auth: { user },
  } = store.getState();
  console.log(props.cart);
  const handleLogout = () => {
    console.log("logging out!");
    logoutUser()(props.dispatch);
  };
  return (
    // <React.Fragment>
    <div className="container">
      <AppBar id="appbar" position="sticky" color="secondary">
        <Toolbar>
          <Typography
            display="flex"
            justifyContent="flex-end"
            class="grannies"
            variant="h4"
          >
            Grannies
          </Typography>
          <Button href="" color="inherit">
            Home
          </Button>
          <Button href="/dashboard" color="inherit">
            Cart
          </Button>
          {!user.id ? (
            <>
              <Button href="/login" color="inherit">
                Login
              </Button>
              <Button href="/register" color="inherit">
                Register Now
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Log Out
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <div>
        <ul className="products"></ul>
      </div>

      <div class="row" style={{ marginTop: "10vh" }}>
        {Items.map((item) => (
          <div class="cardImg col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src={item.img} />
                <span class="card-title">{item.title}</span>
                <a
                  onClick={() =>
                    props.dispatch({ type: SET_SHOPPING_CART, payload: item })
                  }
                  class="btn-floating halfway-fab waves-effect waves-light red"
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content">
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    // </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});
export default connect(mapStateToProps)(App);
