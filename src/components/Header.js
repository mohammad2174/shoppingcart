import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignIn from "../Routes/Signin";
import { Routes, Route } from "react-router-dom";
import Register from "../Routes/Register";
import Mainpage from "../Routes/Mainpage";
import ProductList from "../Routes/ProductList";
import Men from "../Routes/Men";
import Women from "../Routes/Women";
import Dresses from "../Routes/Dresses";
import Pants from "../Routes/Pants";
import Denim from "../Routes/Denim";
import Sweaters from "../Routes/Sweaters";
import Tshirts from "../Routes/Tshirts";
import Jackets from "../Routes/Jackets";
import Activewear from "../Routes/Activewear";
import Watches from "../Routes/Watches";
import Bags from "../Routes/Bags";
import Wallets from "../Routes/Wallets";
import Sunglasses from "../Routes/Sunglasses";
import Hats from "../Routes/Hats";
import Belts from "../Routes/Belts";
import BrowseAll from "../Routes/BrowseAll";
import Mantops from "../Routes/Mantops";
import Womentops from "../Routes/Womentops";
import Company from "../Routes/Company";
import Checkout from "./Checkout";
import { connect } from "react-redux";

class Header extends Component {
  
  render() {
    const {products , total} = this.props
    // console.log(products);
    return (
      <header className="relative bg-white">
       <div className="lg:flex lg:justify-between">
        <div className="flex-1 min-w-0">
          <div className="py-1.5 pl-2 bg-gray-900 font-normal leading-7 text-white sm:text-lg sm:truncate">
            <div className="flex flex-row justify-between">
            <Link to="/">
              <span>Shop Snazzy</span>
            </Link>  
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
          <Routes>
          <Route path="checkout" element={<Checkout products={products} total={total} />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="store" element={<ProductList />} />
          <Route path="company" element={<Company />} />
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="man-tops" element={<Mantops />} />
          <Route path="woman-tops" element={<Womentops />} />
          <Route path="dresses" element={<Dresses />} />
          <Route path="pants" element={<Pants />} />
          <Route path="denim" element={<Denim />} />
          <Route path="sweaters" element={<Sweaters />} />
          <Route path="t-shirts" element={<Tshirts />} />
          <Route path="jackets" element={<Jackets />} />
          <Route path="activewear" element={<Activewear />} />
          <Route path="watches" element={<Watches />} />
          <Route path="bags" element={<Bags />} />
          <Route path="wallets" element={<Wallets />} />
          <Route path="sunglasses" element={<Sunglasses />} />
          <Route path="hats" element={<Hats />} />
          <Route path="belts" element={<Belts />} />
          <Route path="browseall" element={<BrowseAll />} />
          <Route path="/" element={<Mainpage />} />
          </Routes> 
          </div>
        </div>
      </header>      
    );
  }
}

const getCardProducts = state => {
  return state.card.addedIds.map(id => ({
    ...state.products[id],
    quantity : (state.card.quantityById[id] || 0)
  }))
}

const getTotal = state => state.card.addedIds.reduce((total, id) => total + state.products[id].price * (state.card.quantityById[id] || 0), 0)

const mapStateToProps = state => ({
  products: getCardProducts(state),
  total: getTotal(state) 
})
export default connect(mapStateToProps, null)(Header);

// export default Header;