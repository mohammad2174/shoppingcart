import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignIn from "../Routes/Signin";
import { Routes, Route } from "react-router-dom";
import Register from "../Routes/Register";
import Mainpage from "../Routes/Mainpage";
import ProductList from "../Routes/ProductList";
import Men from "../Routes/Men";
import Women from "../Routes/Women";
import Tops from "../Routes/Tops";
import Dresses from "../Routes/Dresses";
import Pants from "../Routes/Pants";
import Denim from "../Routes/Denim";


class Header extends Component {

  render() {
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
          <Route path="signin" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="store" element={<ProductList />} />
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="tops" element={<Tops />} />
          <Route path="dresses" element={<Dresses />} />
          <Route path="pants" element={<Pants />} />
          <Route path="denim" element={<Denim />} />
          <Route path="/" element={<Mainpage />} />
          </Routes> 
          </div>
        </div>
      </header>      
    );
  }
}


export default Header;