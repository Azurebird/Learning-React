import React, { Component } from "react";

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    getPrice = () => {
        return this.props.price | 0.0
    }

    render() {
        return (
            <div className='shoppingList-product'>
                <img src={this.props.imageSource} alt={this.props.imageDescription}/>
                Price: {this.props.price | 0.0}
                <button onClick={this.props.addToCart}>Add</button>
            </div>
        );
    }
}

export default Product;