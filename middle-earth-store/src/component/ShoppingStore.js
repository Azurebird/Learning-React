import React, { Component } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

class ShoppingStore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jsonProducts: this.loadProducts(),
            cart: []
        }
    }

    loadProducts() {
        //TODO Llamado HTTP para cargar productos
        return [
            {
                id: 201,
                imageSource: 'https://image.smythstoys.com/original/desktop/156074.jpg',
                price:10
            },
            {
                id: 202,
                imageSource: 'https://image.smythstoys.com/original/desktop/156074.jpg',
                price:30
            }
        ];
    }

    addToCart = (product) => {
        const newCart = this.state.cart.slice();
        newCart.push(product);
        this.setState({
            cart: newCart
        });
    }

    render() {

        return (
            <div>
                <h2>Products</h2>
                <Cart cart={this.state.cart}></Cart>
                <ProductsList productsToSell={this.state.jsonProducts} handleAddToCart={this.addToCart}/>
            </div>
          );
    }
}

export default ShoppingStore;