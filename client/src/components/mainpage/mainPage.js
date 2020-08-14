import React from "react";
// import "../../App.css";
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
import GranniesAppBar from "../layout/GranniesAppbar"


const useStyles = makeStyles({
  media: {
    width: "100%",
    height: 300,
  },
});

function App(props) {
  const classes = useStyles();

  return (
    // <React.Fragment>
    <div>
      <GranniesAppBar>

      </GranniesAppBar>

      <div>
        <ul className="products"></ul>
      </div>
    <div className="container">
      <Grid container spacing={2} style={{ margin : "100px 0 50px 0"}}>
        {Items.map(item => (
          <Grid item xs={12} sm={4}>
            <Card style={{ position: "relative" }}>
              <CardMedia image={item.img} className={classes.media}>
                <a
                  onClick={() =>
                    props.dispatch({ type: SET_SHOPPING_CART, payload: item })
                  }
                  class="btn-floating halfway-fab waves-effect waves-light" 
                  style={{position: "absolute", bottom: "110px", right: "20px", backgroundColor: "#D1FFD6"}}>
                  <i class="material-icons" style={{color: "#769A7A"}}>add</i>
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
    </div>

    // </React.Fragment>
  );
}
const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
});
export default connect(mapStateToProps)(App);
