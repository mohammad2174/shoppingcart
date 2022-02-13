import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/solid';
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";


class FullNelson extends Component {
    
    render() {
        const { products } = this.props;
        function classNames(...classes) {
            return classes.filter(Boolean).join(' ')
        }
        const ratings = {
            rating: 3.9,
            reviewCount: 117,
            href: '#'
          }
      return (
        <>
        <Navigation product={products} />
          <div className="mt-16 w-full text-center">
            <p className="font-black text-5xl">Full Nelson</p>
            <p className="mt-8 text-gray-700">Made from natural materials. Grain and color vary with each team.</p>
          </div>
          <div className="m-16 grid grid-cols-1 gap-y-10 gap-x-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <>
              {product.name === 'Full Nelson' ?
              <Link to={`/product/${product.id}`}>
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                  <img
                    src={product.catimageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 text-center">
                  <div>
                    <p className="mt-1 text-base font-medium text-gray-700">{product.name}</p>
                  </div>
                  <div>
                  {/* Reviews */}
                      <div className="mt-2">
                        <h4 className="sr-only">Reviews</h4>
                        <div>
                          <div className="flex justify-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                    ratings.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{ratings.rating} out of 5 stars</p>
                          <p className="mt-1 text-sm font-medium text-gray-500">
                            {ratings.reviewCount} reviews
                          </p>
                        </div>
                      </div>
                      <p className="text-base font-medium text-gray-700">${product.price}</p>
                  </div>
                </div>
              </div>
              </Link>    
              : 
              ''}
              </>
            ))}
          </div>
        </>
      )
    }
  }

const getProducts = products => Object.keys(products).map(id => products[id])

const mapStateToProps = state => {
  return {
    products : getProducts(state.products)
  }
}
  
export default connect(mapStateToProps, null)(FullNelson);