import React from 'react';
import '../../App.css';
import { Link, withRouter } from "react-router-dom";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// //not sure if this is correct
// import '@material-ui/core'
import Navbar from "../layout/Navbar"
const dummy = [
  {title: "Supafly",
desc: "come here if you want to be fly like my dude snoop lion"},
{
  title: "grannies",
  desc: "title speaks for itself..."
},
{
  title: "Brandongs",
  desc: "caters specifically to the cast of thunder from down under."
}
]
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
          {dummy.map(item=> <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg" />
              <span class="card-title">{item.title}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
              <p>{item.desc}</p>
            </div>
          </div>
        </div>)}
        </div>
      </div>


    // </React.Fragment>
  );
}

export default App;