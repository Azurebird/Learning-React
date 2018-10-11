import React, { Component } from "react";
import Product from "./Product";
import { Grid } from "semantic-ui-react";

class ProductsList extends Component {

    render() {
        var shoppingList = this.props.productsToSell.map((product) => {
            return <Grid.Column>
                        <Product
                            id={product.id}
                            price={product.price}
                            imageSource={product.imageSource}
                            imageDescription={product.imageDescription}
                            handleAddToCart={this.props.handleAddToCart} 
                        />  
                    </Grid.Column>;
        })
        return (
            <Grid columns={4}>
                <Grid.Row>
                    {shoppingList}
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProductsList;