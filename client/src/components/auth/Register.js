import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    // checks if user is logged in, if so redirects to dash
componentDidMount() {
    if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
    }
}

    componentWillRecieveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

    const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
    };
   this.props.registerUser(newUser, this.props.history);
    };

    

    render() {
        const { errors } = this.state;

    return (
        <div className="container">
                           <nav>
          <div class="nav-wrapper">
            <a href="#!" className="brand-logo right">Grannies</a>
            <Link to="/" className="btn-flat waves-effect">
                    <b>Home</b>
                </Link>
            <Link to="/Login" className="btn-flat waves-effect">Login</Link>
          </div>
        </nav>
            <div className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                    </Link>
                    <div className="col s12" style={{ paddingLeft: "11px"}}>
                        <h3><b>Register</b></h3>
                        <p className="black-text text-darken-1">
                            Have an account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                            <input 
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                                type="name"
                                className={classnames("", {
                                    invalid: errors.name
                                })}
                                />
                                <label htmlFor="name">Name</label>
                                <span className="red-text">{errors.name}</span>
                        </div>
                        <div className="input-field col s12">
                            <input 
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("", {
                                    invalid: errors.email
                                })}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">{errors.email}</span>
                        </div>
                        <div className="input-field col s12">
                            <input 
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.password
                                })}
                                />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">{errors.password}</span>
                        </div>
                        <div className="input-field col s12">
                            <input 
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.password
                                })}
                                />
                                <label htmlFor="password2">Confirm Password</label>
                                <span className="red-text">{errors.password2}</span>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11px" }}>
                            <button
                                style={{
                                    width: "120px",
                                    borderRadius: "3px",
                                    letterSpacing: "2px",
                                    marginTop: "2rem"
                                }}
                                type="submit"
                                className="btn btn-large">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));