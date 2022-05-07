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
    axios.get(`http://localhost:8000/api/v1/user?api_token=${this.props.orders.orders.find(order => { return order.api_token }).api_token}`)
      .then(res => this.props.recieveUser(res.data.data))
      .catch(err => err.response.data)
  }

  state = {
    shipping: this.props.orders.orders ? this.props.orders.orders.find(order => { return order.shipping }).shipping : '',
    taxes: this.props.orders.orders ? this.props.orders.orders.find(order => { return order.taxes }).taxes : '',
    email: this.props.user.currentUser.currentUser ? this.props.user.currentUser.currentUser.email : '',
    phone: this.props.orders.orders ? this.props.orders.orders.find(order => { return order.phone }).phone : '',
    cardnumber: this.props.orders.orders ? this.props.orders.orders.find(order => { return order.cardnumber }).cardnumber : '',
    expiredate: this.props.orders.orders ? this.props.orders.orders.find(order => { return order.expiredate }).expiredate : '',
    date: this.props.orders.orders ? this.props.orders.orders.find(order => { return order.date }).date : ''
  }
  render() {
    const date = this.state.date
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
    console.log(date);
    return (
      <div className="px-4 mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-800">Order Details</h2>
        {checkouts.map((checkout) => (
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li key={checkout.id} className="flex pt-6 pb-24">
              <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className="relative md:row-span-1">
                  <img
                    src={checkout.catimageSrc}
                    alt={checkout.imageAlt}
                    className="object-cover object-center w-full h-full rounded-lg md:w-4/5"
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
                  {orders && orders.length ?
                    <>
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
                    </>
                    : ''}
                  <div className="mt-20">
                    <p className="mb-6 text-base font-extrabold text-gray-800">Preparing to ship on {date}</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-indigo-600 h-2.5 w-4/6 lg:w-96 rounded-full"></div>
                      <div className="grid grid-cols-4 mt-6 text-xs font-bold gap-14 md:gap-16 md:text-sm">
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
          {orders && orders.length ?
            <>
              {orders.map((order) => (
                <>
                  <div className="relative grid grid-cols-1 gap-1 ml-0 mt-7 md:row-span-1 md:ml-6 md:grid-cols-2">
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
                    <div className="flex justify-between pb-4 mt-20 text-base font-medium border-b border-gray-300">
                      <p className="text-gray-600">Subtotal</p>
                      <p className="font-bold">${order.subtotal}</p>
                    </div>
                    <div className="flex justify-between pb-4 mt-4 text-base font-medium border-b border-gray-300">
                      <p className="text-gray-600">Shipping</p>
                      <p className="font-bold">${order.shipping}</p>
                    </div>
                    <div className="flex justify-between pb-4 mt-4 text-base font-medium border-b border-gray-300">
                      <p className="text-gray-600">Total</p>
                      <p className="font-bold">${order.taxes}</p>
                    </div>
                    <div className="flex justify-between pb-4 mt-4">
                      <p className="font-bold text-gray-600">Oreder total</p>
                      <p className="font-bold text-indigo-500">${order.totalamount}</p>
                    </div>
                  </div>
                </>
              ))}
            </>
            : ''}
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
  recieveOrders: (orders) => dispatch(recieveOrders(orders)),
  recieveCheckouts: (checkouts) => dispatch(recieveCheckouts(checkouts)),
  recieveUser: (user) => dispatch(recieveUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);


