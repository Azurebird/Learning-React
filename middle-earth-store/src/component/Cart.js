import React, { Component } from "react";

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: this.props.cart
        };
    }

    getSubtotal = () => {
        var subTotal = 0;
        this.props.cart.forEach(product => {
            subTotal += product.price;
        });
        return subTotal;
    }

    render() {
        return (
            <div>
                <h2>Subtotal: {this.getSubtotal()}</h2>
            </div>
        );
    }
}

export default Cart;