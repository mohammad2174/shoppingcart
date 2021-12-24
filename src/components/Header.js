import React, { Component } from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";


class Header extends Component {

  render() {
    return (
        <div className="lg:flex lg:justify-between">
        <div className="flex-1 min-w-0">
          <div className="py-1.5 pl-2 bg-gray-900 font-normal leading-7 text-white sm:text-lg sm:truncate">
            <div className="flex flex-row justify-between">
              <span>Shop Snazzy</span>
              <div className="pr-3.5 flex flex-row justify-between">
              <Link to="signin">  
              <span className="pr-4">Sign in</span>
              </Link>
              <Link to="/register">
              <span>Create an account</span>
              </Link>
              </div>
            </div>
          </div>
          <hr />
          <ProductList />
        </div>
      </div>
    );
  }
}


export default Header;