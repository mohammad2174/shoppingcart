import React, { Component } from "react";
import { Link } from "react-router-dom";

class Order extends Component {
  state = {
    shipping: 5,
    // shipping: this.props.products.find(product => {return product.shipping}).shipping,
    email: this.props.products.find(product => {return product.email}).email,
    phone: this.props.products.find(product => {return product.phone}).phone,
    cardnumber: this.props.products.find(product => {return product.cardnumber}).cardnumber,
    expiredate: this.props.products.find(product => {return product.expiredate}).expiredate
  }
  render() {
      const products = this.props.products
      const subtotal = this.props.total
      const taxes = 5.25
      const date = new Date((new Date()).toJSON()).toDateString().slice(4,10).concat(',').concat(new Date((new Date()).toJSON()).toDateString().slice(10,15))
      const totalamount = Math.ceil(subtotal + this.state.shipping + taxes)
      const firstcharemail = this.state.email.slice(0, 1)
      const firstcharphone = this.state.phone.slice(0, 1)
      const regex = /[@]/g;
      const aftercharat = this.state.email.slice(this.state.email.search(regex));
      const aftercharphone = this.state.phone.slice(-2);
      const cardnumber = this.state.cardnumber.slice(-4);
      const lastexpiredate = this.state.expiredate.slice(-2);
      const firstexpiredate = this.state.expiredate.slice(-5, -3);
      console.log(firstexpiredate);
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
                      <p className="mt-4 text-sm text-gray-500">{product.size}</p>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                    <div className="relative md:row-span-1">
                    <p className="mt-12 text-base font-bold text-gray-900">Delivery address</p>
                    <p className="mt-3 text-sm text-gray-500">{product.fname} {product.lname}<br /> {product.postalcode} {product.apartment}<br /> {product.country}, ON {product.city} {product.province}</p>
                    </div>
                    <div className="relative md:row-span-1">
                    <p className="mt-12 text-base font-bold text-gray-900">Shipping updates</p>
                    <p className="mt-3 text-sm text-gray-500">{firstcharemail}...{aftercharat}<br /> {firstcharphone}.........{aftercharphone}<br /><span className="text-base font-bold text-indigo-500"><Link to="/checkout"> Edit </Link></span></p>
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
            {products.map((product) => (
              <>
              <div className="mt-7 relative md:row-span-1 ml-0 md:ml-6 grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className="relative md:row-span-1">
                  <p className="mt-12 text-base font-bold text-gray-900">Billing address</p>
                  <p className="mt-3 text-sm text-gray-500">{product.fname} {product.lname}<br /> {product.postalcode} {product.apartment}<br /> {product.country}, ON {product.city} {product.province}</p>
                </div>
                <div className="relative md:row-span-1">
                  <p className="mt-12 text-base font-bold text-gray-900">Payment information</p>
                  <p className="mt-3 text-sm text-gray-500">Ending with {cardnumber}<br />Expires {firstexpiredate} / {lastexpiredate}</p>
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
              </>
              ))}
            </div>
      </div> 
    )
  }
}


export default Order;


