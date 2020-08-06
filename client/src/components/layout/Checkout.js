import React, { Component } from "react";
import { Link } from "react-router-dom";
class Checkout extends Component {
    render() {
        return (
            <div style={{ height: "10vh" }} className="container valign-wrapper">
                <div className = "row">
                    <div className = "col s12 center-align">
                        <h2 className="col s12 center-align">Your Cart</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout