import React, { Component } from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import SignIn from "../Routes/Signin";
import { Routes, Route } from "react-router-dom";
import Register from "../Routes/Register";


class Header extends Component {

  render() {
    const callouts = 
      {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
      }
    const improvement =  
      {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
      }
      const travel =  
      {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      }
    
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
          </Routes>
          {/* <ProductList /> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Shop by Catgory</h2>
            <div class="mt-6 space-y-12 rounded-lg lg:space-y-0 grid grid-flow-col gap-3 lg:grid lg:grid-cols-2 lg:gap-x-5">
              <div class="row-span-3">
              <img
                    src={callouts.imageSrc}
                    alt={callouts.imageAlt}
                    className="w-full h-2/4 object-center object-cover"
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={callouts.href}>
                  <span className="absolute inset-0" />
                  {callouts.name}
                </a>
              </h3>
                <p className="text-base font-semibold text-gray-900">{callouts.description}</p>
              </div>
               <div class="col-span-2">
               <img
                    src={improvement.imageSrc}
                    alt={improvement.imageAlt}
                    className="w-full h-1/4 object-center object-cover"
               />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={improvement.href}>
                  <span className="absolute inset-0" />
                  {improvement.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callouts.description}</p>
               <img
                    src={travel.imageSrc}
                    alt={travel.imageAlt}
                    className="w-full h-1/4 mt-2.5 object-center object-cover"
               />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={travel.href}>
                  <span className="absolute inset-0" />
                  {travel.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callouts.description}</p>
               </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </header>      
    );
  }
}


export default Header;