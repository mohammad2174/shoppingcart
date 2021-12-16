import React, { Component } from "react";
import { connect } from "react-redux";
import { recieveProducts } from "../actions";
import shop from "../api/shop";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";


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