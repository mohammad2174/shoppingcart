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
    return (
      <Router>
        <Header />         
      </Router>      
    );
  }
}

const mapDispatchToProps = dispatch => ({
    recieveProducts : products => dispatch(recieveProducts(products))
})

export default connect(null, mapDispatchToProps)(App);