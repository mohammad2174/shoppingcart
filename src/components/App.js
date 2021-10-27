import React, { Component } from "react";
import { connect } from "react-redux";
import { recieveProducts } from "../actions";
import shop from "../api/shop";
import ProductList from "./ProductList";

class App extends Component {

  componentWillMount() {
    shop.getProducts((products) => this.props.recieveProducts(products))
  }
  render() {
    return (
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="p-4 bg-blue-400 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Shopping Card</h2>
          <hr />
          {/* <ProductList /> */}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    recieveProducts : products => dispatch(recieveProducts(products))
})

export default connect(null, mapDispatchToProps)(App);
