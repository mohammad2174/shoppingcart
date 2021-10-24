import React, { Component } from "react";
import shop from "../api/shop";

class App extends Component {
  state = {
    products : []
  }
  componentWillMount() {
    shop.getProducts((products) => {
      console.log(products);
      this.setState({
        products
      })
    })
  }
  render() {
    return (
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="p-4 bg-blue-400 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Shopping Card</h2>
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
