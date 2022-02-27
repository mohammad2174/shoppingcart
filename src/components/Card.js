import React, { Component } from "react";
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { connect } from "react-redux";
import Shop from "./Shop";
import { Link } from "react-router-dom";


class Card extends Component {
  state = {
    open : this.props.open
  }

  setOpen = () => {
    this.setState({open : true})
  }

  setClose = () => {
    this.setState({open : false})
  }

  render() {
    const {products, total, user } = this.props
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
      products.map(product => <Shop {...product} />)
    ) : (
      <h3>Please add to the Shopping bag</h3>
    )
      
    return (
        <Transition.Root show={this.state.open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={this.setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">{nodes}</Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => this.setClose()}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">                   
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                      {user.currentUser ?
                      <Link to="/checkout">
                        <button
                          disabled = {hasProducts ? '' : 'disabled'}
                          className={hasProducts ? "flex justify-center items-center w-full mt-12 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" : "flex cursor-not-allowed justify-center items-center w-full mt-12 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"}
                        >
                          Checkout
                        </button>
                        </Link>
                        :
                        <Link to="/signin">
                        <button
                          disabled = {hasProducts ? '' : 'disabled'}
                          className={hasProducts ? "flex justify-center items-center w-full mt-12 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" : "flex cursor-not-allowed justify-center items-center w-full mt-12 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"}
                        >
                          Checkout
                        </button>
                        </Link>
                        }
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="text-indigo-600 font-medium hover:text-indigo-500"
                            onClick={() => this.setClose()} 
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
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

export default connect(mapStateToProps, null)(Card);