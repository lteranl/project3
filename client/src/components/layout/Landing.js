import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className = "row">
                    <div className = "col s12 center-align">
                        <h3>
                            <b>PROJECT NAME</b>
                        </h3>
                        <p className="flow-text black-text text-darken-1">
                            This is the LANDING PAGE
                        </p>
                        <br />
                        <div className="col s6">
                            <Link
                            to="/register"
                            style={{
                                width: "120px",
                                borderRadius: "5px",
                                letterSpacing: "2px"
                            }}
                            className="btn btn-large btn-flat waves-effect white black-text"
                            >
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link 
                                to="/login"
                                style={{
                                    width: "120px",
                                    borderRadius: "5px",
                                    letterSpacing: "2px"
                                }}
                                className="btn btn-large btn-flat">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;