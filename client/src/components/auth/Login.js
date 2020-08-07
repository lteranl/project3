import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}

        };

    }


    //checks if user is logged in and they try to go to register returns dash
componentDidMount() {
    if(this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
    }
}

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
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

    const userData = {
        email: this.state.email,
        password: this.state.password
    };
    this.props.loginUser(userData);
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
            <Link to="/Register" className="btn-flat waves-effect">Register</Link>
          </div>
        </nav>
        <div style={{ marginTop: "3rem" }} className="row">
            <div className="col s8 offset-s2">
                
                <div className="col s12" style={{ paddingLeft: "11px" }}>
                    <h3>Login</h3>
                    <p className="black-text text-darken-1">
                        Dont have an account? <Link to="/register">Register Now</Link>
                    </p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="input-field col s12">
                        <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            className={classnames("", { invalid: errors.email || errors.emailnotfound})}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">
                                {errors.email}
                                {errors.emailnotfound}
                            </span>
                    </div>
                    <div className="input-field col s12">
                        <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className={classnames("", { invalid: errors.password || errors.passwordincorrect
                            })}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11px" }}>
                        <button
                            style={{
                                width: "130px",
                                borderRadius: "2px",
                                letterSpacing: "2px",
                                marginTop: "2rem"
                            }}
                            type="submit"
                            className="btn btn-large">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);