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
import Product from "./Product";
import { connect } from "react-redux";
import Order from "./Order";
import FullNelson from "../Routes/Full-Nelson";
import MyWay from "../Routes/My-Way";
import ReArranged from "../Routes/Re-Arranged";
import Counterfeit from "../Routes/Counterfeit";
import axios from 'axios';


class Header extends Component {
  state = {
    selectedFile: null
  };

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();
    formData.append("image", this.state.selectedFile.name);
    axios.post(`http://localhost:8000/api/v1/update?id=${this.props.user.currentUser.currentUser.id}`, formData);
  }
  
  render() {
    const {products , total, user} = this.props
    const totalproduct = this.props.totalproduct
    console.log(this.state.selectedFile);
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
              {user.currentUser ?
              <>
              <Link to="/register">
              <span className="pr-6">Sign up</span>
              </Link>

              {this.state.selectedFile ?
              <>
              <img
                className="cursor-pointer inline-block h-7 w-7 rounded-full ring-2 ring-white"
                src={this.state.selectedFile.name}
                alt=""
                onClick={this.onFileUpload}
              />
              </>
              :
              <>
              <input type="file" onChange={this.onFileChange} id="upload" accept=".png, .jpg, .jpeg" hidden/>
              <label for="upload">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              </label>
              </>
              }
              </>              
              : 
              <Link to="signin">  
              <span className="pr-4">Sign in</span>
              </Link>
              }
              </div>
            </div>
          </div>
          <hr />
          <Routes>
          <Route path="checkout" element={<Checkout products={products} total={total} />} />
          <Route path="product/:id" element={<Product products={totalproduct} />} />
          <Route path="order" element={<Order products={products} total={total} />} />
          <Route path="full-nelson" element={<FullNelson />} />
          <Route path="my-way" element={<MyWay />} />
          <Route path="re-arranged" element={<ReArranged />} />
          <Route path="counterfeit" element={<Counterfeit />} />
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

const getUser = state => state.user

const getTotal = state => state.card.addedIds.reduce((total, id) => total + state.products[id].price * (state.card.quantityById[id] || 0), 0)

const mapStateToProps = state => ({
  products: getCardProducts(state),
  total: getTotal(state),
  user: getUser(state) 
})


export default connect(mapStateToProps, null)(Header);