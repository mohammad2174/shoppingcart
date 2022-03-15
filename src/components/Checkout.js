import React, { Component, Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { connect } from "react-redux";
import { checkout, item, order, recieveCheckouts, recieveProducts } from "../actions";
import { Link } from "react-router-dom";
import axios from 'axios';


class Checkout extends Component {
  componentWillMount() {
    axios.get(`http://localhost:8000/api/v1/products`)
      .then(res => this.props.recieveProducts(res.data.data))
      .catch(err => err.response.data)
  }
  componentDidMount() {
    axios.get(`http://localhost:8000/api/v1/checkouts`)
    .then(res => this.props.recieveCheckouts(res.data.data))
    .catch(err => err.response.data)
  }

state = {
  exclass: "p-4 mt-1 h-32 border border-gray-300 block w-full shadow-sm sm:text-sm rounded-md",
  stclass: "p-4 mt-1 h-32 border-2 border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
  stfill: "#2f2ff7",
  exfill: "gray",
  // shipping: this.props.products.find(product => {return product.shipping}).shipping,
  shipping: 5,
  // id: this.props.user ? '' : this.props.user.currentUser.currentUser.id,
  // email: this.props.user ? '' : this.props.user.currentUser.currentUser.email,
  // fname: this.props.user ? '' : this.props.user.currentUser.currentUser.name.slice(0, 5),
  // lname: this.props.user ? '' : this.props.user.currentUser.currentUser.name.slice(6, 14),
  // api_token: this.props.user ? '' : this.props.user.currentUser.currentUser.api_token,
  apartment: "",
  city: "",
  country: "",
  province: "",
  postalcode: "",
  phone: "",
  cardnumber: "",
  namecard: "",
  expiredate: "",
  cvc : "",
  total : this.props.total,
  // taxes : 5.25,
  taxes : 6,
  date : new Date((new Date()).toJSON()).toDateString().slice(4,10).concat(',').concat(new Date((new Date()).toJSON()).toDateString().slice(10,15)),
  quantity: this.props.checkouts.checkouts ? this.props.checkouts.checkouts.find(checkout => {return checkout.quantity}).quantity : '',
  errorMessage: []
}

setSTClass = () => {
  this.setState({exclass : "p-4 mt-1 h-32 border-2 border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})
  this.setState({stclass : "p-4 mt-1 h-32 border border-gray-300 block w-full shadow-sm sm:text-sm rounded-md"})
  this.setState({stfill : "gray"})
  this.setState({exfill : "#2f2ff7"})
  this.setState({shipping: 16})
}

setEXClass = () => {
  this.setState({stclass : "p-4 mt-1 h-32 border-2 border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})
  this.setState({exclass : "p-4 mt-1 h-32 border border-gray-300 block w-full shadow-sm sm:text-sm rounded-md"})
  this.setState({exfill : "gray"})
  this.setState({stfill : "#2f2ff7"})
  this.setState({shipping : 5})
}

handleSubmit = e => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("user_id", this.props.user.currentUser.currentUser.id)
  formData.append("apartment", this.state.apartment)
  formData.append("city", this.state.city)
  formData.append("country", this.state.country)
  formData.append("province", this.state.province)
  formData.append("postalcode", this.state.postalcode)
  formData.append("phone", this.state.phone)
  formData.append("shipping", this.state.shipping)
  formData.append("cardnumber", this.state.cardnumber)
  formData.append("namecard", this.state.namecard)
  formData.append("expiredate", this.state.expiredate)
  formData.append("cvc", this.state.cvc)
  formData.append("subtotal", this.state.total)
  formData.append("taxes", this.state.taxes)
  formData.append("totalamount", Math.ceil(this.state.total + this.state.shipping + this.state.taxes))
  formData.append("date", this.state.date)
  formData.append("api_token", this.props.user.currentUser.currentUser.api_token)
  axios.post("http://localhost:8000/api/v1/order", formData)
  .then((res) => {
      console.log(res);
  })
  .catch((err) => {
    this.setState({ errorMessage: err.response.data });
    console.log(err.response.data);
  });
}

deleteSubmit = (id) => {
  axios.get(`http://localhost:8000/api/v1/deletecheckout?id=${id}`)
  .then(res => this.props.recieveCheckouts(res.data.data))
  .catch((err) => {
    this.setState({ errorMessage: err.response.data });
    console.log(err.response.data);
  });
}

handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
}

setQuantity = (value) => {
  this.setState({ quantity: value });
}

  render() {
      const { item, total, order, user, checkout, products } = this.props;
      const checkouts = this.props.checkouts.checkouts
      const product = checkouts ? products.find(product => {return product.name === checkouts.find(checkout => {return checkout.name}).name}) : ''
      const subtotal = total * this.state.quantity
      const taxes = 5.25
      // const id = products.length === 0 ? 0 : products.find(product => {return product.id}).id
      const date = new Date((new Date()).toJSON()).toDateString().slice(4,10).concat(',').concat(new Date((new Date()).toJSON()).toDateString().slice(10,15))
      const totalamount = Math.ceil(subtotal + this.state.shipping + taxes)
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
      // console.log(this.state.date);
    return (
      <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <>
        <p className="mb-6 text-base font-extrabold text-gray-800">Preparing to ship on {date}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className={checkouts && checkouts.length ? "bg-indigo-600 h-2.5 w-2/5 lg:w-2/6 rounded-full" : "h-2.5 w-2/5 lg:w-2/6 rounded-full"}></div>
          <div className="mt-6 grid grid-cols-4 gap-14 md:gap-60 text-xs md:text-sm font-bold">
            <p className={checkouts && checkouts.length ? "text-indigo-500" : "text-gray-500"}>Order&nbsp;placed</p>
            <p className={checkouts && checkouts.length ? "text-indigo-500" : "text-gray-500"}>Processing</p>
            <p className="text-gray-500">Shipped</p>
            <p className="text-gray-500 justify-self-end">Delivered</p>
          </div>
        </div>
        </>
      <form className="max-w-2xl mx-auto py-9 sm:py-16 lg:mt-50 lg:max-w-none" onSubmit={this.handleSubmit}>
          <div class="mt-16 rounded-lg grid grid-cols-1 gap-16 md:grid-cols-2">
                <div className="relative md:row-span-3">
                <h2 className="text-xl font-extrabold text-gray-800">Contact information</h2>    
                  <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="mt-6 block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        disabled
                        type="email"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        required
                        value={this.props.user.currentUser.currentUser.email}
                        className="mt-1 bg-gray-200 cursor-not-allowed block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <hr className="mt-10" />
                      <h2 className="mt-10 text-xl font-extrabold text-gray-800">Shipping information</h2>
                      <div className="mt-6 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        disabled
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        required
                        value={this.props.user.currentUser.currentUser.name.slice(0, 5)}
                        className="mt-1 bg-gray-200 cursor-not-allowed block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        disabled
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        required
                        value={this.props.user.currentUser.currentUser.name.slice(6, 14)}
                        className="mt-1 bg-gray-200 cursor-not-allowed block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                      </div>
                      <label htmlFor="apartment" className="mt-6 block text-sm font-medium text-gray-700">
                        Apartment, suite, etc.
                      </label>
                      <input
                        type="text"
                        name="apartment"
                        id="apartment"
                        autoComplete="apartment"
                        required
                        onChange={this.handleChange}
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
                        required
                        onChange={this.handleChange}
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
                        required
                        onChange={this.handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                      </div>
                      <div className="mt-6 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="province"
                        id="province"
                        autoComplete="province"
                        required
                        onChange={this.handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">
                        Postal code
                      </label>
                      <input
                        type="text"
                        name="postalcode"
                        id="postalcode"
                        autoComplete="postalcode"
                        required
                        onChange={this.handleChange}
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
                        required
                        onChange={this.handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <hr className="mt-10" />
                      <h2 className="mt-10 text-xl font-extrabold text-gray-800">Delivery method</h2>
                      <div className="flex mt-6 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3 cursor-pointer">
                      <div className={this.state.stclass} onClick={this.setEXClass}>
                      <div className="flex justify-between">
                      <p className="font-bold text-gray-800">Standard</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill={this.state.stfill} width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                      </div>
                      <p className="mt-1 font-medium text-gray-500">4-10 business days</p>
                      <p className="mt-8 font-bold text-gray-800">$5</p>
                      </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 cursor-pointer">
                      <div className={this.state.exclass} onClick={this.setSTClass}>
                      <div className="flex justify-between">
                      <p className="font-bold text-gray-800">Express</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill={this.state.exfill} width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                      </div>
                      <p className="mt-1 font-medium text-gray-500">2-5 business days</p>
                      <p className="mt-8 font-bold text-gray-800">$16</p>
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
                        required
                        onChange={this.handleChange}
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
                        required
                        onChange={this.handleChange}
                        id="namecard"
                        autoComplete="namecard"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex gap-4">
                    <div className="w-10/12 mt-8 col-span-6 sm:col-span-3">
                      <label htmlFor="expiredate" className="block text-xs font-medium text-gray-700 md:text-sm">
                        Expiration date (MM/YY)
                      </label>
                      <input
                        type="date"
                        name="expiredate"
                        required
                        onChange={this.handleChange}
                        id="expiredate"
                        autoComplete="expiredate"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mt-8 col-span-6 sm:col-span-3">
                      <label htmlFor="cvc" className="block text-xs font-medium text-gray-700 md:text-sm">
                        CVC
                      </label>
                      <input
                        type="text"
                        name="cvc"
                        required
                        onChange={this.handleChange}
                        id="cvc"
                        autoComplete="cvc"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    </div>
                    {checkouts && checkouts.length ? 
                    <div className="mt-6">
                      <Link to="/order">
                        <button
                          onClick={() => order(this.props.user.currentUser.currentUser.id, this.state.shipping, this.props.user.currentUser.currentUser.email, this.props.user.currentUser.currentUser.name.slice(0, 5), this.props.user.currentUser.currentUser.name.slice(6, 14), this.state.apartment, this.state.city, this.state.country, this.state.province, this.state.postalcode, this.state.phone, this.state.cardnumber, this.state.namecard, this.state.expiredate, this.state.cvc)}
                          className="flex justify-center items-center w-full mt-12 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          {`${'Pay $' + totalamount}`}
                        </button>
                      </Link>  
                    </div>
                    : ''}
                  </div>
                </div>
                <div className="relative md:row-span-1">
                <h2 className="text-xl font-extrabold text-gray-800">Order summary</h2>
                {checkouts && checkouts.length ?
                <div className="mt-4 p-6 border border-gray-300 rounded-md">
                <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
        {checkouts.map((checkout) => (
            <li key={checkout.id} className="py-6 flex">
              <div className="flex-shrink-0 w-28 h-28 border border-gray-200 rounded-md overflow-hidden">
                <img
                  src={checkout.catimageSrc}
                  alt={checkout.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className="ml-4 flex-1 flex flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{checkout.name}</h3>
                    <button type="button" onClick={() => this.props.checkout(checkout.id) && this.deleteSubmit(checkout.id)}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/></svg>
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{checkout.color}</p>
                  <p className="mt-1 text-sm text-gray-500">{checkout.size}</p>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                  <p className="text-gray-500">${checkout.price}</p>

                  <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {this.state.quantity}
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

        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          {fib(product.inventory).map((num) =>
            <Menu.Item>
              {({ active }) => (
                
                <button
                  value={num}
                  onClick={() => item(checkout.user_id, num) && this.setQuantity(num)}
                  className={classNames(
                    active ? 'w-24 bg-gray-200 text-gray-900 cursor-pointer' : 'w-24 text-gray-700 cursor-pointer',
                    'w-24 block px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                {num}
                </button>
              )}
            </Menu.Item>
            )}
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
                        <p>${this.state.shipping}</p>
                      </div>
                      <div className="flex mt-6 justify-between text-base font-medium text-gray-900">
                        <p>Taxes</p>
                        <p>${taxes}</p>
                      </div>
                      <div className="flex mt-6 border-t border-gray-200 justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>${totalamount}</p>
                      </div>
                </div>
                </div>
                : 
                <Link className="text-lg font-extrabold text-indigo-500" to="/">
                  Please add the product to your card
                </Link>
                }
                </div>
           </div>
      </form>
    </div> 
    )
  }
}

const getTotal = state => state.checkouts.checkouts ? state.checkouts.checkouts.map(product => {return product.price * product.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue, 0) : ''

const getUser = state => state.user

const getCheckout = state => state.checkouts

const getProducts = products => Object.keys(products).map(id => products[id])

const mapStateToProps = state => ({
  products : getProducts(state.products),
  total: getTotal(state),
  user: getUser(state),
  checkouts: getCheckout(state)
})

const mapDispatchToProps = dispatch => ({
  checkout: productId => dispatch(checkout(productId)),
  item: (productId, num) => dispatch(item(productId, num)),
  order: (productId, shipping, email, fname, lname, apartment, city, country, province, postalcode, phone, cardnumber, namecard, expiredate, cvc) => dispatch(order(productId, shipping, email, fname, lname, apartment, city, country, province, postalcode, phone, cardnumber, namecard, expiredate, cvc)),
  recieveCheckouts : (checkouts ) => dispatch(recieveCheckouts(checkouts)),
  recieveProducts : products => dispatch(recieveProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);