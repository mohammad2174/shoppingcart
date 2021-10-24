import React, { Component } from "react";

class Product extends Component {

  render() {
      const { title, price, inventory } = this.props;
      
    return (
      <div>
          {title} - ${price} x {inventory}
      </div>  
    )
  }
}
export default Product;



  
