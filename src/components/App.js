import React, { Component } from "react";
import { connect } from "react-redux";
import { recieveProducts } from "../actions";
import shop from "../api/shop";
import Cardlist from './Cardlist';
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import SignIn from "../Routes/Signin";


class App extends Component {

  componentWillMount() {
    shop.getProducts((products) => this.props.recieveProducts(products))
  }
  render() {
    return (
      <Router>
        <Header />
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <button
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              <Cardlist products />
            </button>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="signin" element={<SignIn />} />
          </Routes>
          </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    recieveProducts : products => dispatch(recieveProducts(products))
})

export default connect(null, mapDispatchToProps)(App);