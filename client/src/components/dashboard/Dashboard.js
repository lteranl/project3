import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Checkout from "../layout/Checkout";
import { Link } from "react-router-dom";
import store from "../../store";
import {bindActionCreators} from "redux";
import { REMOVE_SHOPPING_CART } from "../../actions/types";
import Items from "../products/items";
//import payment from "../layout/Pay"
//import Items from "../products";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
      cart: store.getState().cart.cart,
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }


  // componentDidMount(){
  //   async()=> {
  //     const {}
  //   }
  // }
  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;
    return this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];
    return this.props.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(this.state.cart)
    console.log(this.props)
    return (
      <>
        <div className="nav">
          <Checkout />
          <div className="container valign-wrapper">
            <div className="row">
              <div className="col s12 center-align">
                <h5>{Date(" ")}</h5>
                <h5>Hello, {user.name.split(" ")[0]}</h5>
                <p className="flow-text black-text text-darken-1" />
                {store.getState().cart.cart.map((item, i) => (
                  <div class="cardImg col s12 m4">
                    <div class="card">
                      <div class="card-image">
                        <img src={item.img} />
                        <span class="card-title">{this.state.cart.title}</span>
                        <a
                          onClick={() =>
                            this.props.dispatch({
                              type: REMOVE_SHOPPING_CART,
                              payload: i,
                            })
                          }
                          
                          class="btn-floating halfway-fab waves-effect waves-light red"
                        >
                          <i class="material-icons" >X</i>
                        </a>
                      </div>
                      <div class="card-content">
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <Link to="/payment" className="btn btn-flat">Pay Now?</Link>
                <br />
                <Link to="/" className="btn btn-flat">
                  Not Done Shopping?
                </Link>
                <br />
                <button
                  style={{
                    width: "130px",
                    borderRadius: "3px",
                    letterSpacing: "2px",
                    marginTop: "2rem",
                  }}
                  onClick={this.onLogoutClick}
                  className="btn btn-large"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  dispatch, ...bindActionCreators({logoutUser}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
