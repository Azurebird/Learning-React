import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom"
import Products from "./com/mh/product/Products"
import Cart from "./com/mh/cart/Cart"
import Contact from "./com/mh/contact/Contact"
import "./index.css"
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Welcome to Middle Earth Store</h1>
            <ul className="header">
                <li><NavLink exact to="/">Products</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Products}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;