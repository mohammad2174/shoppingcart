import React, { Component, Fragment } from "react";
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid'
import Navigation from "../components/Navigation";
import { connect } from "react-redux";
import { addToCard } from "../actions";
import { Link } from "react-router-dom";
import { recieveProducts, recieveReview } from "../actions";
import userLogo from "../assests/icons8-user-64.png";
import axios from 'axios';


class Product extends Component {
  state = {
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
      { name: 'XXXL', inStock: false },
    ],
    open: false,
    star: {
      rating: 0,
      reviewCount: 0
    },
    product_id: 0,
    errorMessage: [],
    message: '',
    subject: '',
    notifyopen: false,
    top: '',
    selectedColor: '',
    selectedSize: ''
  }

  setOpen = () => {
    this.setState({ open: true })
  }

  setClose = () => {
    this.setState({ open: false })
  }

  setNotifyOpen = () => {
    this.setState({ notifyopen: true })
  }

  setTimeout = () => {
    setTimeout(() => {
      this.setState({ notifyopen: false })
    }, 3000)
  }

  setNotifyClose = () => {
    this.setState({ notifyopen: false })
  }

  setStar = () => {
    this.setState({
      star: {
        rating: this.state.star.rating >= 5 ? 0 : this.state.star.rating + 1,
        reviewCount: 0 + 1
      }
    })
  }

  setproductId = (e) => {
    this.setState({ product_id: e })
  }

  handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_id", this.state.product_id)
    formData.append("name", this.props.user.currentUser.currentUser.name)
    formData.append("rating", this.state.star.rating)
    formData.append("reviewCount", this.state.star.reviewCount)
    formData.append("subject", this.state.subject)
    formData.append("message", this.state.message)
    axios.post("http://localhost:8000/api/v1/review", formData)
      .then((response) => {
        console.log(response.data.data)
      })
      .catch((err) => {
        this.setState({ errorMessage: err.response.data });
        console.log(err.response.data);
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  setSelectedColor = (e) => {
    this.setState({
      selectedColor: e.name
    })
  }

  setSelectedSize = (e) => {
    this.setState({
      selectedSize: e.name
    })
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const { addToCard, recieveProducts, recieveReview, user, reviews } = this.props;
    const pathname = window.location.pathname.split('')
    const id = pathname.length - 1 <= 9 ? pathname[pathname.length - 1] : pathname[(pathname.length - 2)].concat(pathname[(pathname.length - 1)])
    const products = this.props.products
    const rv = reviews.reviews ? reviews.reviews.map((review) => { return review }) : "no-data"
    const index = (id - 1 === 0) || (id - 1 === 4) || (id - 1 === 8) || (id - 1 === 12) || (id - 1 === 16) || (id - 1 === 20) || (id - 1 === 24) || (id - 1 === 28) || (id - 1 === 32) || (id - 1 === 36) || (id - 1 === 40) || (id - 1 === 44) || (id - 1 === 48) || (id - 1 === 52) || (id - 1 === 56) || (id - 1 === 60)
    const index1 = (id - 1 === 1) || (id - 1 === 5) || (id - 1 === 9) || (id - 1 === 13) || (id - 1 === 17) || (id - 1 === 21) || (id - 1 === 22) || (id - 1 === 23) || (id - 1 === 33) || (id - 1 === 37) || (id - 1 === 41) || (id - 1 === 45) || (id - 1 === 49) || (id - 1 === 53) || (id - 1 === 57) || (id - 1 === 61)
    const index2 = (id - 1 === 2) || (id - 1 === 6) || (id - 1 === 10) || (id - 1 === 14) || (id - 1 === 18) || (id - 1 === 22) || (id - 1 === 23) || (id - 1 === 24) || (id - 1 === 34) || (id - 1 === 38) || (id - 1 === 42) || (id - 1 === 46) || (id - 1 === 50) || (id - 1 === 54) || (id - 1 === 58) || (id - 1 === 62)
    const suggestions = index ? products.slice(id - 1, (id - 1) + 4) : products.slice(id - 4, (id - 1) + 1) && index1 ? products.slice(id - 2, (id - 1) + 3) : products.slice(id - 3, (id - 1) + 2) && index2 ? products.slice(id - 3, (id - 1) + 2) : products.slice(id - 4, (id - 1) + 1)
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
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
        {products.map((product) => (
          <div className="mt-16 ml-6 sm:ml-20">
            {product.id == id
              ?
              <>
                <div className="flex gap-1 text-xs font-extrabold tracking-tight text-gray-900 sm:text-base gap-2">
                  <Link to="/">{product.id == 1 || product.id == 2 || product.id == 3 || product.id == 4 ? "Men" : "Women"}</Link><span className="text-gray-400">\</span>
                  <Link to="/women">{product.id == 9 || product.id == 10 || product.id == 11 || product.id == 12 || product.id == 13 || product.id == 14 || product.id == 15 || product.id == 16 || product.id == 25 || product.id == 26 || product.id == 27 || product.id == 28 || product.id == 37 || product.id == 38 || product.id == 39 || product.id == 40 || product.id == 49 || product.id == 50 || product.id == 51 || product.id == 52 || product.id == 53 || product.id == 54 || product.id == 55 || product.id == 56 ? "Accessories" : "Clothing"}</Link><span className="text-gray-400">\</span>
                  {product.id == 1 || product.id == 2 || product.id == 3 || product.id == 4 ? <><Link to="/man-tops">Tops</Link><span className="text-gray-400">\</span></> : <><Link to="/woman-tops">{(product.id == 5 || product.id == 6 || product.id == 7 || product.id == 8 ? "Tops" : "") || (product.id == 9 || product.id == 10 || product.id == 11 || product.id == 12 ? "Watches" : "") || (product.id == 13 || product.id == 14 || product.id == 15 || product.id == 16 ? "Wallets" : "") || (product.id == 17 || product.id == 18 || product.id == 19 || product.id == 20 ? "T-Shirts" : "") || (product.id == 21 || product.id == 22 || product.id == 23 || product.id == 24 ? "Sweaters" : "") || (product.id == 25 || product.id == 26 || product.id == 27 || product.id == 28 ? "Sunglasses" : "") || (product.id == 29 || product.id == 30 || product.id == 31 || product.id == 32 ? "Pants" : "") || (product.id == 33 || product.id == 34 || product.id == 35 || product.id == 36 ? "Jackets" : "") || (product.id == 37 || product.id == 38 || product.id == 39 || product.id == 40 ? "Hats" : "") || (product.id == 41 || product.id == 42 || product.id == 43 || product.id == 44 ? "Dresses" : "") || (product.id == 45 || product.id == 46 || product.id == 47 || product.id == 48 ? "Denim" : "") || (product.id == 49 || product.id == 50 || product.id == 51 || product.id == 52 ? "Belts" : "") || (product.id == 53 || product.id == 54 || product.id == 55 || product.id == 56 ? "Bags" : "") || (product.id == 57 || product.id == 58 || product.id == 59 || product.id == 60 ? "Activewear" : "")}</Link><span className="text-gray-400">\</span></>}
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
                      className="w-full rounded-lg object-center object-cover xl:h-80 lg:h-44 md:h-44"
                    />
                    <img
                      src={product.catimageSrc}
                      alt={product.imageAlt}
                      className="mt-3 w-full rounded-lg object-center object-cover xl:h-80 lg:h-44 md:h-44"
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
                    <div className="relative w-fit col-span-2 border-r border-gray-200">
                      <span className="text-base text-gray-800 md:text-lg">{product.title}</span>
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
                        <span className="text-base text-gray-800 md:text-lg">{product.detail}</span>
                      </div>
                      {rv !== "no-data" ?
                        <>
                          {rv.map((review) => (
                            <div className="mt-12 grid grid-cols-3 gap-1 md:grid-cols-4">
                              {review.product_id === product.id ?
                                <div className="col-span-1 -space-x-1 overflow-hidden">
                                  <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src={user.currentUser === "undefined" ? user.currentUser.currentUser.image : userLogo}
                                    alt=""
                                  />
                                  <p className="mt-6 pl-0.5 text-sm lg:text-base md:text-base font-black text-gray-900">{review.name}</p>
                                  <div className="mt-2 pl-0.5 flex items-center">
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
                                </div>
                                : ''}
                              {review.product_id === product.id ?
                                <div class="col-span-3">
                                  <h2 className="text-sm lg:text-base md:text-base font-black text-gray-700">{review.subject}</h2>
                                  <p className="mt-4 text-xs lg:text-sm md:text-sm text-gray-500">
                                    {review.message}
                                  </p>
                                </div>
                                : ''}

                            </div>
                          ))}
                          <div className="col-span-3">
                            {!user.currentUser ?
                              ''
                              :
                              <>
                                <h2 className="mt-8 text-base lg:text-lg md:text-lg col-span-2 font-black text-gray-900">Share your thoughts</h2>
                                <p className="mt-2 text-sm lg:text-base md:text-base text-gray-500">
                                  if you've used this poducts, share your thoughts with other customers
                                </p>
                                <button
                                  type="submit"
                                  className="mt-6 w-3/4 h-10 border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                  onClick={() => this.setOpen()}
                                >
                                  Write a review
                                </button>
                              </>
                            }
                          </div>
                        </>
                        : ""
                      }
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

                                <div className="w-full cursor-pointer grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                                  <form className="sm:col-span-full lg:col-span-full" onSubmit={this.handleSubmit}>
                                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>
                                    <div className="mt-2 pl-0.5 flex items-center">
                                      {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                          key={rating}
                                          className={classNames(
                                            this.state.star.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                          )}
                                          aria-hidden="true"
                                          onClick={() => this.setproductId(product.id) || this.setStar()}
                                        />
                                      ))}
                                    </div>
                                    <label htmlFor="street-address" className="mt-4 block text-sm font-medium text-gray-700">
                                      Subject
                                    </label>
                                    {this.state.errorMessage.subject ? <p className="text-red-500">{this.state.errorMessage.subject[0]}</p> : <p className="text-red-500">{this.state.errorMessage.data}</p>}
                                    <input
                                      type="text"
                                      name="subject"
                                      id="subject"
                                      autoComplete="subject"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      onChange={this.handleChange}
                                    />
                                    <label htmlFor="message" className="mt-4 block text-sm font-medium text-gray-700">
                                      Message
                                    </label>
                                    {this.state.errorMessage.message ? <p className="text-red-500">{this.state.errorMessage.message[0]}</p> : <p className="text-red-500">{this.state.errorMessage.data}</p>}
                                    <textarea
                                      type="text"
                                      name="message"
                                      id="message"
                                      autoComplete="address-level2"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      onChange={this.handleChange}
                                    />
                                    <div className="mt-8">
                                      <button
                                        type="submit"
                                        disabled={this.state.message.length <= 0 || this.state.subject.length <= 0 || this.state.star.length <= 0 ? 'disabled' : ''}
                                        className={this.state.message.length <= 0 || this.state.subject.length <= 0 || this.state.star.length <= 0 ? "inline-flex cursor-not-allowed justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" : "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
                                        onClick={this.state.message.length <= 0 || this.state.subject.length <= 0 || this.state.star.length <= 0 || this.state.errorMessage.length >= 0 ? '' : () => recieveReview(product.id, user.currentUser.currentUser.name, this.state.star.rating, this.state.star.reviewCount, this.state.message, this.state.subject) && this.setClose()}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition.Root>
                    <div className="w-full mt-8 items-start md:mt-0">
                      <h2 className="text-xl lg:text-4xl md:text-2xl font-black text-gray-900">${product.price}</h2>
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        {rv !== "no-data" ?
                          <>
                            {rv.map((review) => (
                              <>
                                {review.product_id === product.id ?
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
                                    <span className="ml-3 text-sm font-medium text-gray-600">
                                      {review.reviewCount} reviews
                                    </span>
                                  </div>
                                  : ''}
                              </>
                            ))}
                          </>
                          : ""
                        }
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
                        disabled={product.inventory ? '' : 'disabled'}
                        className={product.inventory ? "mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" : "mt-6 w-full cursor-not-allowed bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
                        onClick={() => addToCard(product.id, this.state.selectedColor, this.state.selectedSize) && this.setNotifyOpen() || this.setTimeout() || this.scrollToTop()}
                      >
                        Add to bag
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white">
                  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg font-extrabold tracking-tight text-gray-900 md:text-2xl">Customers also purchased</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {suggestions.map((suggest) => (
                        <div key={suggest.id} className="group relative">
                          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                              src={suggest.imageSrc}
                              alt={suggest.imageAlt}
                              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                          </div>
                          <div className="mt-4 flex justify-between">
                            <div>
                              <h3 className="text-sm text-gray-700">
                                <Link to={`/product/${suggest.id}`} onClick={() => recieveProducts(products) && this.scrollToTop()}>
                                  <span aria-hidden="true" className="absolute inset-0" />
                                  {suggest.name}
                                </Link>
                              </h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">${suggest.price}</p>
                          </div>
                        </div>
                      ))}
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

const getUser = state => state.user
const getReview = state => state.reviews

const mapStateToProps = state => ({
  user: getUser(state),
  reviews: getReview(state)
})

const mapDispatchToProps = dispatch => ({
  addToCard: (productId, color, size) => dispatch(addToCard(productId, color, size)),
  recieveProducts: (products) => dispatch(recieveProducts(products)),
  recieveReview: (productId, rating, reviewCount, message, subject) => dispatch(recieveReview(productId, rating, reviewCount, message, subject))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);


