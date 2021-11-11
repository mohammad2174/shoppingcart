import React, { Component } from "react";
import { connect } from "react-redux";
import { recieveProducts } from "../actions";
import shop from "../api/shop";
import Cardlist from './Cardlist';
import Header from "./Header";


class App extends Component {

  componentWillMount() {
    shop.getProducts((products) => this.props.recieveProducts(products))
  }
  render() {
    return (
      <>
      <Header />
      <div className="bg-purple-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">please checkout your basket for the selected products</span>
              <span className="hidden md:inline">please checkout your basket for the selected products</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <button
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              <Cardlist products />
            </button>
          </div>
        </div>
        </div>
      </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    recieveProducts : products => dispatch(recieveProducts(products))
})

export default connect(null, mapDispatchToProps)(App);
