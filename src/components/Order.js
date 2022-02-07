import React, { Component } from "react";
import { Link } from "react-router-dom";

class Order extends Component {
  state = {
    shipping: this.props.products.find(product => {return product.shipping}).shipping
  }
  render() {
      const products = this.props.products
      const subtotal = this.props.total
      const taxes = 5.25
      const date = new Date((new Date()).toJSON()).toDateString().slice(4,10).concat(',').concat(new Date((new Date()).toJSON()).toDateString().slice(10,15))
      const totalamount = Math.ceil(subtotal + this.state.shipping + taxes)
    return (
      <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-800">Order Details</h2>
            {products.map((product) => (
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                <li key={product.id} className="pt-6 pb-24 flex">
                <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-2">
                  <div className="relative md:row-span-1">
                      <img
                       src={product.imageSrc}
                       alt={product.imageAlt}
                       className="h-full w-full md:w-4/5 rounded-lg object-center object-cover"
                     />
                  </div>
                  <div className="relative mt-16 md:mt-0 md:row-span-1">
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        <h3>{product.name}</h3>
                        <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                      </div>
                      <p className="mt-4 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                    <div className="relative md:row-span-1">
                    <p className="mt-12 text-base font-bold text-gray-900">Delivery address</p>
                    <p className="mt-3 text-sm text-gray-500">Floyd Miles<br /> 7363 Cynthia Pass<br /> Toronto, ON N3Y 4H8</p>
                    </div>
                    <div className="relative md:row-span-1">
                    <p className="mt-12 text-base font-bold text-gray-900">Shipping updates</p>
                    <p className="mt-3 text-sm text-gray-500">f...@example.com<br /> 1.........10<br /><span className="text-base font-bold text-indigo-500"><Link to="/checkout"> Edit </Link></span></p>
                    </div>
                    </div>
                    <div className="mt-20">
                    <p className="mb-6 text-base font-extrabold text-gray-800">Preparing to ship on {date}</p>
                     <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-indigo-600 h-2.5 w-4/6 lg:w-96 rounded-full"></div>
                      <div className="mt-6 grid grid-cols-4 gap-14 md:gap-16 text-xs md:text-sm font-bold">
                      <p className="text-indigo-500">Order&nbsp;placed</p>
                      <p className="text-indigo-500">Processing</p>
                      <p className="text-indigo-500">Shipped</p>
                      <p className="text-gray-500 justify-self-end">Delivered</p>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
                </li>
              </ul> 
            ))}
            <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-2">
              <div className="mt-7 relative md:row-span-1 ml-0 md:ml-6 grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className="relative md:row-span-1">
                  <p className="mt-12 text-base font-bold text-gray-900">Billing address</p>
                  <p className="mt-3 text-sm text-gray-500">Floyd Miles<br /> 7363 Cynthia Pass<br /> Toronto, ON N3Y 4H8</p>
                </div>
                <div className="relative md:row-span-1">
                  <p className="mt-12 text-base font-bold text-gray-900">Payment information</p>
                  <p className="mt-3 text-sm text-gray-500">Ending with 4242<br />Expires 02 / 24</p>
                </div>
              </div>
              <div className="relative md:row-span-1">
                <div className="mt-20 pb-4 flex justify-between text-base font-medium border-b border-gray-300">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-bold">${subtotal}</p>
                </div>
                <div className="mt-4 pb-4 flex justify-between text-base font-medium border-b border-gray-300">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-bold">${this.state.shipping}</p>
                </div>
                <div className="mt-4 pb-4 flex justify-between text-base font-medium border-b border-gray-300">
                  <p className="text-gray-600">Total</p>
                  <p className="font-bold">${taxes}</p>
                </div>
                <div className="mt-4 pb-4 flex justify-between">
                  <p className="text-gray-600 font-bold">Oreder total</p>
                  <p className="text-indigo-500 font-bold">${totalamount}</p>
                </div>
              </div>
            </div>
      </div> 
    )
  }
}


export default Order;


