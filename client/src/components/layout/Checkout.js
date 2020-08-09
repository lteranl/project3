import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
class Checkout extends Component {
  render() {
    return (
      // removed style and className from nav to make it consitent with rest of pages - BH
      // <div style={{ height: "10vh" }} className="container valign-wrapper">
      <div>
        <AppBar id="appbar" position="sticky" color="secondary">
          <Toolbar>
            <Button href="/" color="inherit" class="grannies" variant="h4">
              Grannies
            </Button>
            {/* removed button href and made logo link home */}
            {/* <Button href="/" color="inherit">
              Home
            </Button> */}
          </Toolbar>
        </AppBar>
        <div className="row">
          <div className="col s12 center-align">
            <h2 className="col s12 center-align"></h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;