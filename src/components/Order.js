import React, { Component } from "react";
import { Link } from "react-router-dom";
import { recieveOrders, recieveCheckouts, recieveUser } from "../actions";
import { connect } from "react-redux";
import axios from 'axios';


class Order extends Component {
  componentDidMount() {
    axios.get(`http://localhost:8000/api/v1/orders`)
    .then(res => this.props.recieveOrders(res.data.data))
    .catch(err => err.response.data)
  }

  componentWillMount() {
    axios.get(`http://localhost:8000/api/v1/checkouts`)
    .then(res => this.props.recieveCheckouts(res.data.data))
    .catch(err => err.response.data)
  }

  componentDidCatch() {
    axios.get(`http://localhost:8000/api/v1/user?api_token=${this.props.orders.orders.find(order => {return order.api_token}).api_token}`)
    .then(res =>  this.props.recieveUser(res.data.data))
    .catch(err => err.response.data)
  }

  state = {
    shipping: this.props.orders.orders.find(order => {return order.shipping}).shipping,
    taxes: this.props.orders.orders.find(order => {return order.taxes}).taxes,
    email: this.props.user.currentUser.currentUser.email,
    phone: this.props.orders.orders.find(order => {return order.phone}).phone,
    cardnumber: this.props.orders.orders.find(order => {return order.cardnumber}).cardnumber,
    expiredate: this.props.orders.orders.find(order => {return order.expiredate}).expiredate
  }
  render() {
      const date = new Date((new Date()).toJSON()).toDateString().slice(4,10).concat(',').concat(new Date((new Date()).toJSON()).toDateString().slice(10,15))
      const firstcharemail = this.state.email.slice(0, 1)
      const firstcharphone = this.state.phone.toString().slice(0, 1)
      const regex = /[@]/g;
      const aftercharat = this.state.email.slice(this.state.email.search(regex));
      const aftercharphone = this.state.phone.toString().slice(-2);
      const cardnumber = this.state.cardnumber.toString().slice(-4);
      const lastexpiredate = this.state.expiredate.slice(-2);
      const firstexpiredate = this.state.expiredate.slice(-5, -3);
      const orders = this.props.orders.orders
      const checkouts = this.props.checkouts.checkouts
      console.log(this.state.expiredate.slice(-2));
    return (
      <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-800">Order Details</h2>
            {checkouts.map((checkout) => (
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                <li key={checkout.id} className="pt-6 pb-24 flex">
                <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-2">
                  <div className="relative md:row-span-1">
                      <img
                       src={checkout.imageSrc}
                       alt={checkout.imageAlt}
                       className="h-full w-full md:w-4/5 rounded-lg object-center object-cover"
                     />
                  </div>
                  <div className="relative mt-16 md:mt-0 md:row-span-1">
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        <h3>{checkout.name}</h3>
                        <p className="text-lg font-semibold text-gray-900">${checkout.price}</p>
                      </div>
                      <p className="mt-4 text-sm text-gray-500">{checkout.size}</p>
                      <p className="mt-1 text-sm text-gray-500">{checkout.color}</p>
                    </div>
                    {orders.map((order) => (
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                    <div className="relative md:row-span-1">
                    <p className="mt-12 text-base font-bold text-gray-900">Delivery address</p>
                    <p className="mt-3 text-sm text-gray-500">{order.fname} {order.lname}<br /> {order.postalcode} {order.apartment}<br /> {order.country}, ON {order.city} {order.province}</p>
                    </div>
                    <div className="relative md:row-span-1">
                    <p className="mt-12 text-base font-bold text-gray-900">Shipping updates</p>
                    <p className="mt-3 text-sm text-gray-500">{firstcharemail}...{aftercharat}<br /> {firstcharphone}.........{aftercharphone}<br /><span className="text-base font-bold text-indigo-500"><Link to="/checkout"> Edit </Link></span></p>
                    </div>
                    </div>
                    ))}
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
            {orders.map((order) => (
              <>
              <div className="mt-7 relative md:row-span-1 ml-0 md:ml-6 grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className="relative md:row-span-1">
                  <p className="mt-12 text-base font-bold text-gray-900">Billing address</p>
                  <p className="mt-3 text-sm text-gray-500">{order.fname} {order.lname}<br /> {order.postalcode} {order.apartment}<br /> {order.country}, ON {order.city} {order.province}</p>
                </div>
                <div className="relative md:row-span-1">
                  <p className="mt-12 text-base font-bold text-gray-900">Payment information</p>
                  <p className="mt-3 text-sm text-gray-500">Ending with {cardnumber}<br />Expires {firstexpiredate} / {lastexpiredate}</p>
                </div>
              </div>
              <div className="relative md:row-span-1">
                <div className="mt-20 pb-4 flex justify-between text-base font-medium border-b border-gray-300">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-bold">${order.subtotal}</p>
                </div>
                <div className="mt-4 pb-4 flex justify-between text-base font-medium border-b border-gray-300">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-bold">${order.shipping}</p>
                </div>
                <div className="mt-4 pb-4 flex justify-between text-base font-medium border-b border-gray-300">
                  <p className="text-gray-600">Total</p>
                  <p className="font-bold">${order.taxes}</p>
                </div>
                <div className="mt-4 pb-4 flex justify-between">
                  <p className="text-gray-600 font-bold">Oreder total</p>
                  <p className="text-indigo-500 font-bold">${order.totalamount}</p>
                </div>
              </div>
              </>
              ))}
            </div>
      </div> 
    )
  }
}

const getOrder = state => state.orders

const getCheckout = state => state.checkouts

const getUser = state => state.user

const mapStateToProps = state => ({
  orders: getOrder(state),
  user: getUser(state),
  checkouts: getCheckout(state)
})

const mapDispatchToProps = dispatch => ({
  recieveOrders : (orders) => dispatch(recieveOrders(orders)),
  recieveCheckouts : (checkouts) => dispatch(recieveCheckouts(checkouts)),
  recieveUser : (user) => dispatch(recieveUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);


