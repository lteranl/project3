import React from 'react';
import '../../App.css';
import { Link, withRouter } from "react-router-dom";
import Items from "../products/items"
import store from '../../store';
import {logoutUser} from '../../actions/authActions';
import { SET_SHOPPING_CART} from '../../actions/types'

import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';



// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// //not sure if this is correct
// import '@material-ui/core'
function App(props) {
  const {auth:{user}} = store.getState();
  console.log(props.cart)
  const handleLogout = () => {
    console.log("logging out!")
    logoutUser()(props.dispatch);
  }
  return (
    // <React.Fragment>
      <div className="container">
          <nav>
          <div class="nav-wrapper">
            <a href="#!" className="brand-logo right">Grannies</a>
            <Link to="/" className="btn-flat waves-effect">
                    <b>Home</b>
              </Link>
              <Link to="/dashboard" className="btn-flat waves-effect">Cart</Link>
              <Button href="/dashboard" color="secondary">Secondary</Button>
            {!user.id ? <><Link to="/login" className="btn-flat waves-effect">Login</Link>
            <Link to="/register" className="btn-flat waves-effect">Register Now</Link></> : <button className="btn-flat waves-effect" onClick={handleLogout}>Log Out</button>}
          </div>
        </nav>
        <div>
          <ul className="products">
            
          </ul>
        </div>

        <div class="row" style={{marginTop: "10vh"}}>
          {Items.map(item=> <div class="cardImg col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src={item.img} />
              <span class="card-title">{item.title}</span>
              <a onClick={()=> props.dispatch({type: SET_SHOPPING_CART, payload:item})} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </div>
        </div>)}
        </div>
      </div>


    // </React.Fragment>
  );
}
const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
});
export default connect(mapStateToProps) (App);