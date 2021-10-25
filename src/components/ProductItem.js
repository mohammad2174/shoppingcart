import React, { Component } from "react";
import Product from "./Product";

class ProductItem extends Component {

  render() {
      const { product } = this.props;
      
    return (
      <div>
          <Product {...product} />
          <button disabled = {product.inventory ? 'Add To Card' : 'Sold Out'}>
              {product.inventory > 0 ? 'Add To Card' : 'Sold Out'}
          </button>
      </div>  
    )
  }
}
export default ProductItem;

  
