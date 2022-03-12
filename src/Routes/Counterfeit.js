import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/solid';
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import '../index.css'


class Counterfeit extends Component {
  state = {
    offset: 0,
    data: [],
    perPage: 16,
    currentPage: 0,
    products: this.props.products,
    reviews: this.props.reviews.reviews ? this.props.reviews.reviews.map((review) => {return review}) : "no-data"
  }

  receivedData() {
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
  }
    const data = this.state.products;
    const reviews = this.state.reviews;
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    const postData = slice.map(pd => <React.Fragment>
            <>
            {pd.brand === 'Counterfeit' ?
            <Link to={`/product/${pd.id}`}>
            <div key={pd.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={pd.catimageSrc}
                  alt={pd.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <div>
                  <p className="mt-1 text-base font-medium text-gray-700">{pd.name}</p>
                </div>
                <div>
                {/* Reviews */}
                {reviews !== "no-data" ? 
                    <>
                    {reviews.map((review) => (
                      <>
                    {review.product_id === pd.id ?
                      <div className="mt-2">
                        <h4 className="sr-only">Reviews</h4>
                        <div>
                          <div className="flex justify-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{review.rating} out of 5 stars</p>
                          <p className="mt-1 text-sm font-medium text-gray-500">
                            {review.reviewCount} reviews
                          </p>
                        </div>
                      </div>
                      : ''}
                      </>
                      ))}
                      </>
                      : ""
                      }
                    <p className="text-base font-medium text-gray-700">${pd.price}</p>
                </div>
              </div>
            </div>
            </Link>    
            : 
            ''}
            </>
    </React.Fragment>)
  
    this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),   
        postData
    })
  }

  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;
  
      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });
  
  };
  
  componentDidMount() {
      this.receivedData()
  }

    render() {
        const { products } = this.props;

      return (
        <>
        <Navigation product={products} />
          <div className="mt-16 w-full text-center">
            <p className="font-black text-5xl">Counterfeit</p>
            <p className="mt-8 text-gray-700">Everything you need, nothing you don't, made real close need you are.</p>
          </div>
          <div className="m-16 grid grid-cols-1 gap-y-10 gap-x-1 sm:grid-cols-2 lg:grid-cols-4">
          {this.state.postData} 
          </div>
          <div className="bg-white pl-96 py-3 flex border-t border-gray-200">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}/>
          </div>
        </>
      )
    }
  }

const getProducts = products => Object.keys(products).map(id => products[id])
const getReview = state => state.reviews

const mapStateToProps = state => {
  return {
    products : getProducts(state.products),
    reviews: getReview(state)
  }
}
  
export default connect(mapStateToProps, null)(Counterfeit);