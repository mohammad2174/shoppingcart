import React, { Component } from "react";
import { connect } from "react-redux";
import { checkout } from "../actions";

class Shop extends Component {

  render() {
      const {  id, title, price, quantity, color, size, imageAlt, catimageSrc, checkout } = this.props;
      
    return (
        <div className="mt-8">
        <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li key={id} className="py-6 flex">
              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                  src={catimageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className="ml-4 flex-1 flex flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{title}</h3>
                    <p className="ml-4">${price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{color}</p>
                  <p className="mt-1 text-sm text-gray-500">{size}</p>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                  <p className="text-gray-500">Qty x {quantity}</p>

                  <div className="flex">
                    <button type="button" onClick={() => checkout(id)} className="font-medium text-indigo-600 hover:text-indigo-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul> 
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  checkout: productId => dispatch(checkout(productId))
})

export default connect(null, mapDispatchToProps)(Shop);