import React, { Component, Fragment } from "react";
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Navigation from "../components/Navigation";
import { connect } from "react-redux";
import { addToCard } from "../actions";
import { Link } from "react-router-dom";


class Hats extends Component {
  state = {
    colors : [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes : [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
      { name: 'XXXL', inStock: false },
    ],
    open : false,
    notifyopen : false,
    hat : '',
    selectedColor : '',
    selectedSize : ''
  }

  setOpen = (hat) => {
    this.setState({open : true, hat : hat})
  }

  setClose = () => {
    this.setState({open : false})
  }

  setNotifyOpen = () => {
    this.setState({notifyopen : true})
  }

  setTimeout = () => {
    setTimeout(() => {
      this.setState({notifyopen : false})
    },3000)
  }

  setNotifyClose = () => {
    this.setState({notifyopen : false})
  }
  
  setSelectedColor = (e) => {
    this.setState({
      selectedColor :  e.name
    })
  }

  setSelectedSize = (e) => {
    this.setState({
      selectedSize : e.name 
    })
  }

    render() {
      const { products, addToCard, reviews } = this.props;
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
        const hats = products.slice(36, 40)
        const product = {
          name: this.state.hat.name,
          price: this.state.hat.price,
          rating: this.state.hat.rating,
          reviewCount: this.state.hat.reviewCount,
          href: '#',
          imageSrc: (this.state.hat.id === 37 || this.state.hat.id === 38 || this.state.hat.id === 39 || this.state.hat.id === 40 ? this.state.hat.catimageSrc : this.state.hat.imageSrc),
          imageAlt: this.state.hat.imageAlt,
          colors: this.state.selectedColor,
          sizes: this.state.selectedSize,
          reviews: reviews.reviews ? reviews.reviews.map((review) => {return review}) : "no-data"
        }
        
      return (
        <>
        <Transition.Root show={this.state.notifyopen} as={Fragment}>
         <div class="absolute pr-16 pt-4 w-full flex justify-end">
          <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
           <div class="flex flex-row">
            <div class="px-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
            </div>
            <div class="ml-2 mr-6">
             <span class="font-semibold">Successfully Saved To Bag!</span>
             <span class="block text-gray-500">Please check your's bag for continue shopping</span>
            </div>
           <div>
            <button
              type="button"
              className="top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              onClick={() => this.setNotifyClose()}
             >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
            </button>
           </div>
          </div>
         </div>
        </div>
        </Transition.Root>
        <Navigation product={products} />
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex gap-2 text-base font-extrabold tracking-tight text-gray-900 sm:gap-5">
          <Link to="/">Men</Link><span className="text-gray-400">\</span>
          <Link to="/men">Clothing</Link><span className="text-gray-400">\</span>
          <Link to="/hats" className="text-gray-400">Hats</Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {hats.map((hat) => (
              <div key={hat.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                  <img
                    src={hat.imageSrc}
                    alt={hat.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(hat)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${hat.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {hat.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{hat.describtion}</p>
                  </div>
                  <div>
                  <p className="text-sm font-medium text-gray-500">${hat.price}</p>
                  <p className="mt-1 text-sm text-gray-500">X{hat.inventory ? hat.inventory : <span className="text-red-600">Has Ended</span>}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Transition.Root show={this.state.open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={this.setOpen}>
        <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => this.setClose()}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>
                    {product.reviews !== "no-data" ? 
                    <>
                    {product.reviews.map((review) => (
                      <>
                    {review.product_id === product.id ?
                    <section aria-labelledby="information-heading" className="mt-2">
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">${product.price}</p>

                      {/* Reviews */}
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
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
                          <Link to={`/product/${product.id}`} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {review.reviewCount} reviews
                          </Link>
                        </div>
                      </div>
                    </section>
                    : ''}
                    </>
                    ))}
                    </>
                    : ""
                    }
                    <section aria-labelledby="options-heading" className="mt-10">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                        {/* Colors */}
                        <div>
                          <h4 className="text-sm text-gray-900 font-medium">Color</h4>

                          <RadioGroup value={this.state.selectedColor} onChange={this.setSelectedColor} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {this.state.colors.map((color) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      active && !checked ? 'ring ring-offset-1' : '',
                                      !active && checked ? 'ring-2' : '',
                                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="p" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Sizes */}
                        <div className="mt-10">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm text-gray-900 font-medium">Size</h4>
                          </div>

                          <RadioGroup value={this.state.selectedSize} onChange={this.setSelectedSize} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4">
                              {this.state.sizes.map((size) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      size.inStock
                                        ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                      active ? 'ring-2 ring-indigo-500' : '',
                                      'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                                      {size.inStock ? (
                                        <div
                                          className={classNames(
                                            active ? 'border' : 'border-2',
                                            checked ? 'border-indigo-500' : 'border-transparent',
                                            'absolute -inset-px rounded-md pointer-events-none'
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <div
                                          aria-hidden="true"
                                          className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                        >
                                          <svg
                                            className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                          </svg>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <button
                          type="submit"
                          className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          // eslint-disable-next-line no-mixed-operators
                          onClick={() => addToCard(this.state.hat.id, this.state.selectedColor, this.state.selectedSize) && this.setClose() || this.setNotifyOpen() || this.setTimeout()}             
                        >
                          Add to bag
                        </button>

                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>    
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
              
const mapDispatchToProps = dispatch => ({
  addToCard : (productId, color, size) => dispatch(addToCard(productId, color, size))
})
              
export default connect(mapStateToProps , mapDispatchToProps)(Hats);