import React, { Component, Fragment } from "react";
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid'
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

class Product extends Component {
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
    modalopen : false,
    top : '',
    selectedColor : '',
    selectedSize : ''
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
    const pathname = window.location.pathname.split('')
    const id =  pathname[pathname.length - 1]
    const products = this.props.products
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
    return (
      <>
      <Navigation product={products} />
        {products.map((product) => (
          <div className="mt-16 ml-6 sm:ml-20">
          {product.id == id
          ?
          <>
          <div className="flex gap-1 text-xs font-extrabold tracking-tight text-gray-900 sm:text-base gap-2">
          <Link to="/">Women</Link><span className="text-gray-400">\</span>
          <Link to="/women">Clothing</Link><span className="text-gray-400">\</span>
          <Link to="/woman-tops">Tops</Link><span className="text-gray-400">\</span>
          <Link to={`/product/${product.id}`} className="text-gray-400">{product.name}</Link>
          </div>
          <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-3">
                  <div className="relative md:row-span-3">
                      <img
                       src={product.imageSrc}
                       alt={product.imageAlt}
                       className="h-screen w-full rounded-lg object-center object-cover"
                     />
                  </div>
                  <div className="relative md:row-span-1">  
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full rounded-lg object-center object-cover xl:h-56 lg:h-44 md:h-28"
                    />
                    <img
                    src={product.catimageSrc}
                    alt={product.imageAlt}
                    className="mt-3 w-full rounded-lg object-center object-cover xl:h-56 lg:h-44 md:h-28"
                    />
                  </div>
                  <div className="relative md:row-span-1">
                    <img
                    src={product.catimageSrc}
                    alt={product.imageAlt}
                    className="h-screen w-full rounded-lg object-center object-cover"
                    />
                  </div>
          </div>
          <div className="max-w-2xl mx-auto py-4 lg:max-w-none">
            <h2 className="text-2xl lg:text-5xl md:text-4xl font-black text-gray-900">{product.name}</h2>
              <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-3">
                <div className="relative col-span-2">
                  <span className="text-lg text-gray-800">{product.title}</span>
                  <h2 className="mt-12 text-base lg:text-lg md:text-lg col-span-2 font-black text-gray-900">Highlights</h2>
                <div className="mt-8 relative col-span-2">
                  <ul className="ml-4 text-base text-gray-400 list-disc">
                    <li>Hand cut and sewn locally</li>
                    <li>Dyed with our proprietary colors</li>
                    <li>Pre-washed & pre-shrunk</li>
                    <li>Ultra-soft 100% cotton</li>
                  </ul>  
                </div>
                <h2 className="mt-8 text-base lg:text-lg md:text-lg col-span-2 font-black text-gray-900">Details</h2>
                <div className="mt-8 relative col-span-2">
                  <span className="text-lg text-gray-800">{product.detail}</span> 
                </div>
  
                </div>
                <div className="w-full items-start">
                    <h2 className="text-xl lg:text-4xl md:text-2xl font-black text-gray-900">${product.price}</h2>
                    <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{product.rating} out of 5 stars</p>
                          <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {product.reviewCount} reviews
                          </a>
                        </div>
                    </div>
                    <div className="mt-6">
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
                    >
                      Add to bag
                    </button>                
                </div>
              </div>
          </div>
          </>  
          : 
          ""}
          </div>
        ))}
      </>
    )
  }
}
export default Product;

  
