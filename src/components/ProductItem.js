import React, { Component } from "react";
import Product from "./Product";

class ProductItem extends Component {

  render() {
      const { product } = this.props;
      
    return (
      <div>
          <Product {...product} />
           <a href="#" disabled = {product.inventory ? 'Add To Card' : 'Sold Out'} className="flex justify-center items-center mt-4 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
           {product.inventory > 0 ? 'Add To Card' : 'Sold Out'}
           </a>
      </div>  
    )
  }
}
export default ProductItem;

  
