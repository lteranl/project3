import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";
import "../../App.css";
import store from "../../store";
import { logoutUser } from "../../actions/authActions";
import { SET_SHOPPING_CART } from "../../actions/types";

function GranniesAppBar(props) {
  const {
    auth: { user }
  } = store.getState();
  console.log(props.cart);
  const handleLogout = () => {
    console.log("logging out!");
    logoutUser()(props.dispatch);
  };

  return (
    <div>
      <AppBar id="appbar" position="sticky">
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
                Register
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Log Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default GranniesAppBar;
