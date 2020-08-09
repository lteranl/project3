import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="d">
                <nav className="z-depth-0" id="test">
                    <div className="nav-wrapper white">
                        <Link
                            to="/"
                            style={{
                                fontFamily: "monospace"
                            }}
                            className="placeholder center black-text"
                            ></Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;