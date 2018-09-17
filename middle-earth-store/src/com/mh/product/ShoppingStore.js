import React, { Component } from "react";
import Product from "./Product";

class ShoppingStore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            productsToSell: [
                <Product 
                    imageSource='https://image.smythstoys.com/original/desktop/156074.jpg' 
                    price={10}
                    addToCart={() => this.addToCart(0)}/>,
                <Product 
                    imageSource='https://image.smythstoys.com/original/desktop/156074.jpg' 
                    price={30}
                    addToCart={() => this.addToCart(1)}/>
            ]
        }
    }

    addToCart = (product) => {
        const newCart = this.state.cart.slice();
        newCart.push(this.state.productsToSell[product])
        this.setState({
            cart: newCart,
            productsToSell: this.state.productsToSell
        });
    }

    getSubtotal = () => {
        var subTotal = 0;
        this.state.cart.forEach(product => {
            subTotal += product.props.price;
        });
        return subTotal;
    }

    render() {

        var shoppingList = this.state.productsToSell.map(function(product, index){
            return <li key={index}>{product}</li>;
          })

        return (
            <div>
                <h2>Products</h2>
                <div>
                    Purchase Subtotal: {this.getSubtotal()}
                </div>
                <ul>
                    {shoppingList}
                </ul>
            </div>
          );
    }
}

export default ShoppingStore;