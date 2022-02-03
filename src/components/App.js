import React, { Component } from "react";
import { connect } from "react-redux";
import shop from "../api/shop";
import Header from "./Header";
import { recieveProducts } from "../actions";
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  componentWillMount() {
    shop.getProducts((products) => this.props.recieveProducts(products))
  }
  render() {
    const { products } = this.props;

    return (
      <Router>
        <Header totalproduct={products} />  
      </Router>      
    );
  }
}

const mapDispatchToProps = dispatch => ({
    recieveProducts : products => dispatch(recieveProducts(products))
})

const getProducts = products => Object.keys(products).map(id => products[id])

const mapStateToProps = state => {
  
  return {
    products : getProducts(state.products)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);