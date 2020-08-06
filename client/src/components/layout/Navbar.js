import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav>
            <div class="nav-wrapper">
              <a href="#!" className="brand-logo right">Grannies</a>
              <Link to="/" className="btn-flat waves-effect">
                      <b>Home</b>
                  </Link>
              <Link to="/login" className="btn-flat waves-effect">Login</Link>
              <Link to="/register" className="btn-flat waves-effect">Register Now</Link>
              <Link to="/dashboard" className="btn-flat waves-effect">Cart</Link>
            </div>
          </nav>
        );
    }
}

export default Navbar;