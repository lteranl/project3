import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Cart from "../shopify/Cart";
import Checkout from "../layout/Checkout";
import { Link } from "react-router-dom";



class Dashboard extends Component {

        constructor() {
          super();
       
          this.state = {
            isCartOpen: false,
            checkout: { lineItems: [] },
            products: [],
            shop: {}
          };
       
          this.handleCartClose = this.handleCartClose.bind(this);
          this.addVariantToCart = this.addVariantToCart.bind(this);
          this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
          this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
        };
    
         
     addVariantToCart(variantId, quantity){
        this.setState({
          isCartOpen: true,
        });
     
        const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
        const checkoutId = this.state.checkout.id 
        return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
          this.setState({
            checkout: res,
          })
        })
      }
     
      updateQuantityInCart(lineItemId, quantity) {
        const checkoutId = this.state.checkout.id
        const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
       return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then((res) => {
         this.setState({
           checkout: res,
         })
       }) }
     
       removeLineItemInCart(lineItemId) {
         const checkoutId = this.state.checkout.id
         
         return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
           this.setState({
             checkout: res,
     
           })
         })
       }
     
       handleCartClose() {
         this.setState({
           isCartOpen: false,
         })
       };

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
                        <Checkout />
                        <Cart 
                        checkout={this.state.checkout}
                        isCartOpen={this.state.isCartOpen}
                        handleCartClose={this.handleCartClose}
                        updateQuantityInCart={this.updateQuantityInCart}
                        removeLineItemInCart={this.removeLineItemInCart}
                        />
                        <br/>
                        <Link to="/" className="btn btn-flat">Not Done Shopping?</Link>
                        <br/>
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