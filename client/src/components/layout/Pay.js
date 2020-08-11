import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../App.css";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core/";

class Payment extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        password: "",
        errors: {},
      };
    }

render() {
    const { user } = this.state;
    return(
        <div className="container">
            <AppBar id="appbar" position="sticky" color="secondary">
                <Toolbar>
                    <Typography class="grannies" variant="h4" display="flex" justifyContent="flex-end">
                        Grannies
                    </Typography>
                    <Button href="/" color="inherit">
              Home
            </Button>
            
                </Toolbar>
            </AppBar>
            <div style={{ marginTop: "3rem" }} className="row">
                <div className="col s8 offset-s2">
                    <div className="col s12" style={{ paddingLeft: '11px'}}>
                        <h3> Payment Info </h3>
                        <br/>
                        <form>
                                <input type="text"/>
                                <label htmlFor="fullName">Full Name: </label>
                                <input type="text"/>
                                <label htmlFor="cardNumber">Card Number: </label>
                                <input type="text"/>
                                <label htmlFor="exp">Exp Date: </label>
                                <input type="text"/>
                                <label htmlFor="securityCode">Security Code:</label>
                                <input type="text"/>
                                <label htmlFor="addOne">Address line 1: </label>
                                <input type="text"/>
                                <label htmlFor="addTwo">Address line 2: </label>
                                <br/>
                                <br/>
                                <br/>
                                <input id="payBtn" variant="pay now" className="btn btn-flat waves-effect" type="submit"/>
                                


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default Payment;