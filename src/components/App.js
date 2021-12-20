import React, { Component } from "react";
import { connect } from "react-redux";
import shop from "../api/shop";
import Header from "./Header";
import Home from "../Routes/Home";
import { recieveProducts } from "../actions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


class App extends Component {
  componentWillMount() {
    shop.getProducts((products) => this.props.recieveProducts(products))
  }
  render() {
    return (
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    recieveProducts : products => dispatch(recieveProducts(products))
})

export default connect(null, mapDispatchToProps)(App);