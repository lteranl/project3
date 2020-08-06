import React from 'react';
import '../../App.css';
import { Link, withRouter } from "react-router-dom";
import Items from "../products/items"
import "../products/images"
import imageLoader from "../products/images"

// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// //not sure if this is correct
// import '@material-ui/core'

function App() {
  return (
    // <React.Fragment>
      <div className="container">
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
        <div>
          <ul className="products">
            
          </ul>
        </div>

        <div class="row" style={{marginTop: "10vh"}}>
          {Items.map(item=> <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src={item.img} />
              <span class="card-title">{item.title}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
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

export default App;