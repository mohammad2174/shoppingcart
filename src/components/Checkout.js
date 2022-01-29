import React, { Component, Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { connect } from "react-redux";
import { checkout } from "../actions";

class Checkout extends Component {

  render() {
      const { checkout } = this.props;
      const products = this.props.products
      const subtotal = this.props.total
      const shipping = 5.00
      const taxes = 5.52
      const total = subtotal + shipping + taxes
        const fib = (n) => {
            let options = [];   
            for (var i = 1; i <= n; i++) {
              options.push(i);
           }
           return options
        }
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-9 sm:py-16 lg:py-20 lg:max-w-none">
          <div class="space-y-12 rounded-lg grid grid-cols-1 gap-16 md:grid-cols-2">
                <div className="relative md:row-span-3">
                <h2 className="text-xl font-extrabold text-gray-800">Contact information</h2>
                  <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="mt-6 block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <hr className="mt-10" />
                      <h2 className="mt-10 text-xl font-extrabold text-gray-800">Shipping information</h2>
                      <div className="mt-6 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                      </div>
                      <label htmlFor="company" className="mt-6 block text-sm font-medium text-gray-700">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="company"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <label htmlFor="apartment" className="mt-6 block text-sm font-medium text-gray-700">
                        Apartment, suite, etc.
                      </label>
                      <input
                        type="text"
                        name="apartment"
                        id="apartment"
                        autoComplete="apartment"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <div className="mt-6 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        autoComplete="country"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                      </div>
                      <div className="mt-6 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="state"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="postal" className="block text-sm font-medium text-gray-700">
                        Postal code
                      </label>
                      <input
                        type="text"
                        name="postal"
                        id="postal"
                        autoComplete="postal"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                      </div>
                      <label htmlFor="phone" className="mt-6 block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <hr className="mt-10" />
                      <h2 className="mt-10 text-xl font-extrabold text-gray-800">Delivery method</h2>
                      <div className="flex mt-6 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                      <div className="p-4 mt-1 h-32 border-2 border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                      <div className="flex justify-between">
                      <p className="font-bold text-gray-800">Standard</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#2f2ff7" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                      </div>
                      <p className="mt-1 font-medium text-gray-500">4-10 business days</p>
                      <p className="mt-8 font-bold text-gray-800">$5.00</p>
                      </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <div className="p-4 mt-1 h-32 border border-gray-300 block w-full shadow-sm sm:text-sm rounded-md">
                      <div className="flex justify-between">
                      <p className="font-bold text-gray-800">Express</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#2f2ff7" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                      </div>
                      <p className="mt-1 font-medium text-gray-500">2-5 business days</p>
                      <p className="mt-8 font-bold text-gray-800">$16.00</p>
                      </div>
                      </div>
                      </div>
                      <hr className="mt-10" />
                      <h2 className="mt-10 text-xl font-extrabold text-gray-800">Payment</h2>
                      <div className="mt-4 flex">
                      <div>
                         <input type="radio" id="creditcard" name="drone" value="creditcard"
                         checked />
                         <label for="creditcard" className="ml-3 mr-10">Creditcard</label>
                      </div>
                      <div>
                         <input type="radio" id="paypal" name="drone" value="paypal"
                         checked />
                         <label for="paypal" className="ml-3 mr-10">PayPal</label>
                      </div>
                      <div>
                         <input type="radio" id="etransfer" name="drone" value="etransfer"
                        checked />
                         <label for="etransfer" className="ml-3 mr-10">eTransfer</label>
                      </div>
                      </div>
                      <div className="mt-8 col-span-6 sm:col-span-3">
                      <label htmlFor="cardnumber" className="block text-sm font-medium text-gray-700">
                        Card number
                      </label>
                      <input
                        type="text"
                        name="cardnumber"
                        id="cardnumber"
                        autoComplete="cardnumber"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mt-8 col-span-6 sm:col-span-3">
                      <label htmlFor="namecard" className="block text-sm font-medium text-gray-700">
                        Name on card
                      </label>
                      <input
                        type="text"
                        name="namecard"
                        id="namecard"
                        autoComplete="namecard"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex gap-4">
                    <div className="w-10/12 mt-8 col-span-6 sm:col-span-3">
                      <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
                        Expiration date (MM/YY)
                      </label>
                      <input
                        type="text"
                        name="expiration"
                        id="expiration"
                        autoComplete="expiration"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mt-8 col-span-6 sm:col-span-3">
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                        CVC
                      </label>
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        autoComplete="cvc"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    </div>
                  </div>
                </div>
                <div className="relative md:row-span-1">
                <h2 className="text-xl font-extrabold text-gray-800">Order summary</h2>
                <div className="mt-4 p-6 border border-gray-300 rounded-md">
                <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
        {products.map((product) => (
            <li key={product.id} className="py-6 flex">
              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                  src={product.catimageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className="ml-4 flex-1 flex flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{product.name}</h3>
                    <button type="button" onClick={() => checkout(product.id)}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/></svg>
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                  <p className="text-gray-500">${product.price}</p>

                  <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {product.count}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {fib(product.inventory).map((fi) => (<h1>{fi}</h1>))}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
                  </Menu>
                </div>
              </div>
            </li>
            ))}
          </ul> 
        </div>
        <div className="mt-6 border-t border-gray-200 py-6 px-4 sm:px-6">                   
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subtotal}</p>
                      </div>
                      <div className="flex mt-6 justify-between text-base font-medium text-gray-900">
                        <p>Shipping</p>
                        <p>${shipping}</p>
                      </div>
                      <div className="flex mt-6 justify-between text-base font-medium text-gray-900">
                        <p>Taxes</p>
                        <p>${taxes}</p>
                      </div>
                      <div className="flex mt-6 border-t border-gray-200 justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>${total}</p>
                      </div>

                      <div className="mt-6">
                        <button
                          className="flex justify-center items-center w-full mt-12 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Confirm order
                        </button>
                      </div>
                    </div>
                </div>
                </div>
           </div>
      </div>
    </div>  
    )
  }
}

const mapDispatchToProps = dispatch => ({
  checkout: productId => dispatch(checkout(productId))
})

export default connect(null, mapDispatchToProps)(Checkout);