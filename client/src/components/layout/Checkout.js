import React, { Component } from "react";
import { Link } from "react-router-dom";
class Checkout extends Component {
    render() {
        return (
            <div style={{ height: "10vh" }} className="container valign-wrapper">
                        <nav>
          <div class="nav-wrapper">
            <a href="#!" className="brand-logo right">Grannies</a>
            <Link to="/" className="btn-flat waves-effect">
                    <b>Home</b>
                </Link>
            <Link to="/dashboard" className="btn-flat waves-effect">Cart</Link>
          </div>
        </nav>
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