import React, { Component } from "react";
import Product from "./Product";

class ProductItem extends Component {
  render() {
      const { product , onAddToCardClicked } = this.props;
    return (
      <div>
          <Product {...product}  quantity={product.inventory} />
           <button onClick={onAddToCardClicked} disabled = {product.inventory ? '' : 'disabled'} className="flex justify-center items-center w-full mt-12 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                {product.inventory > 0 ? 'Add To Card' : 'Sold Out'}
           </button>
      </div>  
    )
  }
}
export default ProductItem;

  
