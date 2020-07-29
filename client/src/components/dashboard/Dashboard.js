import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() { const { user } = this.props.auth;
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h1>{Date(" ")}</h1>
                        <h3>Hello, {user.name.split(" ")[0]}</h3>
                        <p className="flow-text black-text text-darken-1"/>
                            <button
                                style={{
                                    width: "130px",
                                    borderRadius: "3px",
                                    letterSpacing: "2px",
                                    marginTop: "2rem"
                                }}
                                onClick = {this.onLogoutClick}
                                className="btn btn-large">Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
) (Dashboard)