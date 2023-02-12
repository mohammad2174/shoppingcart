import React, { Component } from "react";
import { connect } from "react-redux";
import shop from "../api/shop";
import Header from "./Header";
import { recieveProducts, recieveReviews } from "../actions";
import { BrowserRouter as Router } from "react-router-dom";
// import axios from 'axios';


class App extends Component {
  componentWillMount() {
    shop.getProducts((products) => this.props.recieveProducts(products))
    // axios.get(`http://localhost:8000/api/v1/products`)
    //   .then(res => this.props.recieveProducts(res.data.data))
    //   .catch(err => err.response.data)
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:8000/api/v1/reviews`)
  //   .then(res => this.props.recieveReviews(res.data.data))
  //   .catch(err => err.response.data)
  // }
  
  render() {
    const { products } = this.props;

    return (
      <Router>
        <Header totalproduct={products} />  
      </Router>      
    );
  }
}

const mapDispatchToProps = dispatch => ({
    recieveProducts : products => dispatch(recieveProducts(products)),
    recieveReviews : (reviews ) => dispatch(recieveReviews(reviews))
})

const getProducts = products => Object.keys(products).map(id => products[id])

const mapStateToProps = state => {
  
  return {
    products : getProducts(state.products)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);