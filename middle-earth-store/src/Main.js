import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom"
import Index from "./component/Index"
import Products from "./component/ShoppingStore"
import Cart from "./component/Cart"
import Contact from "./component/Contact"
import "./index.css"
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Welcome to Middle Earth Store</h1>
            <div className="navBar">
                <NavLink className="navBar-brand" exact to="/">Middle Earth</NavLink>
                <ul className="header">
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="content">
                <Route exact path="/" component={Index}/>
                <Route path="/products" component={Products}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;