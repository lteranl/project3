import React, { Component } from "react";
import { Link } from "react-router-dom";


import { Button, AppBar, Toolbar, Typography } from "@material-ui/core/";

class Checkout extends Component {
    render() {
        return (
            <div className="container">
            <AppBar id="appbar" position="sticky" color="secondary">
          <Toolbar>
            <Typography class="grannies" variant="h4">
              Grannies
            </Typography>
            <Button href="/" color="inherit">
              Home
            </Button>
          </Toolbar>
        </AppBar>
                <div className = "row">
                    <div className = "col s12 center-align">
                        <h2 className="col s12 center-align"></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout;