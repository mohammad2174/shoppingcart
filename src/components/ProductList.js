import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCard } from "../actions";
import ProductItem from "./ProductItem";
import Cardlist from './Cardlist';

class ProductsList extends Component {
  render() {
      const { products , addToCard } = this.props;

    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
        <div key={product.id}>
          <ProductItem key={product.id} product = {product} onAddToCardClicked = {() => addToCard(product.id)} /> 
        </div>
      ))}
      <Cardlist products = {products} />
          </div>
        </div>
      </div>  
    )
  }
}

const getProducts = products => Object.keys(products).map(id => products[id])

const mapStateToProps = state => {
  return {
    products : getProducts(state.products)
  }
}

const mapDispatchToProps = dispatch => ({
  addToCard : productId => dispatch(addToCard(productId))
})

export default connect(mapStateToProps , mapDispatchToProps)(ProductsList);
