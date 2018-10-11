import React, { Component } from "react";
import { Button } from 'semantic-ui-react'

class Product extends Component {

    handleAddToCart = () => {
        this.props.handleAddToCart({
            id: this.props.id,
            price: this.props.price
        })
    }

    render() {
        return (
            <div index={this.props.id} className='shoppingList-product'>
                <img src={this.props.imageSource} alt={this.props.imageDescription}/>
                <div>
                    <a>Price: {this.props.price}</a>
                    <Button onClick={this.handleAddToCart}>Add</Button>
                </div>
            </div>
        );
    }
}

export default Product;