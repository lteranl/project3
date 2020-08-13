import React from "react";
import "../../App.css";
import { Link, withRouter } from "react-router-dom";
import Items from "../products/items";
import store from "../../store";
import { logoutUser } from "../../actions/authActions";
import { SET_SHOPPING_CART } from "../../actions/types";

import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia } from "@material-ui/core/";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// //not sure if this is correct
// import '@material-ui/core'

const useStyles = makeStyles({
  media: {
    width: "100%",
    height: 300,
  },
  // styles to position the button but applying these made button unclickable and removed styles
  // button: {
  //   position: "absolute",
  //   right: 25,
  //   bottom: 105,
  // },
});

function App(props) {
  const classes = useStyles();

  console.log(props);
  const {
    auth: { user }
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

      <Grid container spacing={2}>
        {Items.map(item => (
          <Grid item xs={12} sm={4}>
            <Card style={{ position: "relative" }}>
              <CardMedia image={item.img} className={classes.media}>
                <a
                  onClick={() =>
                    props.dispatch({ type: SET_SHOPPING_CART, payload: item })
                  }
                  class="btn-floating halfway-fab waves-effect waves-light red" 
                  style={{position: "absolute", bottom: "110px", right: "10px"}}>
                  <i class="material-icons">add</i>
                </a>
              </CardMedia>
              <CardContent>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

    // </React.Fragment>
  );
}
const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
});
export default connect(mapStateToProps)(App);
