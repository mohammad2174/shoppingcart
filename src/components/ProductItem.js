import React, { Component } from "react";

class ProductItem extends Component {

  render() {
      const { product } = this.props;
      
    return (
      <div>
          {product.title} - ${product.price} x {product.inventory}
          <button disabled = {product.inventory ? 'Add To Card' : 'Sold Out'}>
              {product.inventory > 0 ? 'Add To Card' : 'Sold Out'}
          </button>
      </div>  
    )
  }
}
export default ProductItem;



  
