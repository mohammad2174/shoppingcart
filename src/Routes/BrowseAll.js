import React, { Component, Fragment } from "react";
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Navigation from "../components/Navigation";
import { connect } from "react-redux";
import { addToCard } from "../actions";
import { Link } from "react-router-dom";


class BrowseAll extends Component {
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
    womantop : '',
    mantop : '',
    dress : '',
    pant : '',
    denim : '',
    sweater : '',
    tshirt : '',
    jacket : '',
    Activewear : '',
    selectedColor : '',
    selectedSize : ''
  }

  setOpen = (womantop,mantop,dress,pant,denim,sweater,tshirt,jacket,Activewear) => {
    this.setState({open : true, womantop : womantop, mantop : mantop, dress : dress, pant : pant, denim : denim, sweater : sweater, tshirt : tshirt, jacket : jacket, Activewear : Activewear})
  }

  setClose = () => {
    this.setState({open : false})
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
    const { products , addToCard } = this.props;
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
      const mantops = products.slice(0, 4)
      const womantops = products.slice(4, 8)
      const dresses = products.slice(40, 44)
      const pants = products.slice(28, 32)
      const denims = products.slice(44, 48)
      const sweaters = products.slice(20, 24)
      const tshirts = products.slice(16, 20)
      const jackets = products.slice(32, 36)
      const Activewears = products.slice(56, 60)
      const product = {
        name: this.state.womantop.name || this.state.mantop.name || this.state.dress.name || this.state.pant.name || this.state.denim.name || this.state.sweater.name || this.state.tshirt.name || this.state.jacket.name || this.state.Activewear.name,
        price: this.state.womantop.price || this.state.mantop.price || this.state.dress.price || this.state.pant.price || this.state.denim.price || this.state.sweater.price || this.state.tshirt.price || this.state.jacket.price || this.state.Activewear.price,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        imageSrc: (this.state.womantop.id === 5 || this.state.womantop.id === 6 || this.state.womantop.id === 7 || this.state.womantop.id === 8 ? this.state.womantop.catimageSrc : this.state.womantop.imageSrc) || (this.state.mantop.id === 1 || this.state.mantop.id === 2 || this.state.mantop.id === 3 || this.state.mantop.id === 4 ? this.state.mantop.catimageSrc : this.state.mantop.imageSrc) || (this.state.dress.id === 41 || this.state.dress.id === 42 || this.state.dress.id === 43 || this.state.dress.id === 44 ? this.state.dress.catimageSrc : this.state.dress.imageSrc) || (this.state.pant.id === 29 || this.state.pant.id === 30 || this.state.pant.id === 31 || this.state.pant.id === 32 ? this.state.pant.catimageSrc : this.state.pant.imageSrc) || (this.state.denim.id === 45 || this.state.denim.id === 46 || this.state.denim.id === 47 || this.state.denim.id === 48 ? this.state.denim.catimageSrc : this.state.denim.imageSrc) || (this.state.sweater.id === 21 || this.state.sweater.id === 22 || this.state.sweater.id === 23 || this.state.sweater.id === 24 ? this.state.sweater.catimageSrc : this.state.sweater.imageSrc) || (this.state.tshirt.id === 17 || this.state.tshirt.id === 18 || this.state.tshirt.id === 19 || this.state.tshirt.id === 20 ? this.state.tshirt.catimageSrc : this.state.tshirt.imageSrc) || (this.state.jacket.id === 33 || this.state.jacket.id === 34 || this.state.jacket.id === 35 || this.state.jacket.id === 36 ? this.state.jacket.catimageSrc : this.state.jacket.imageSrc) || (this.state.Activewear.id === 57 || this.state.Activewear.id === 58 || this.state.Activewear.id === 59 || this.state.Activewear.id === 60 ? this.state.Activewear.catimageSrc : this.state.Activewear.imageSrc),
        imageAlt: this.state.womantop.imageAlt || this.state.mantop.imageAlt || this.state.dress.imageAlt || this.state.pant.imageAlt || this.state.denim.imageAlt || this.state.sweater.imageAlt || this.state.tshirt.imageAlt || this.state.jacket.imageAlt || this.state.Activewear.imageAlt,
        colors: this.state.selectedColor,
        sizes: this.state.selectedSize,
      }

    return (
      <>
      <Navigation product={products} />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Tops</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {womantops.map((womantop) => (
            <div key={womantop.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={womantop.imageSrc}
                  alt={womantop.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(womantop)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                  <Link to={`/product/${womantop.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {womantop.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{womantop.describtion}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">${womantop.price}</p>
                <p className="mt-1 text-sm text-gray-500">X{womantop.inventory ? womantop.inventory : <span className="text-red-600">Has Ended</span>}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {mantops.map((mantop) => (
            <div key={mantop.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={mantop.imageSrc}
                  alt={mantop.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(mantop)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                  <Link to={`/product/${mantop.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {mantop.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{mantop.describtion}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">${mantop.price}</p>
                <p className="mt-1 text-sm text-gray-500">X{mantop.inventory ? mantop.inventory : <span className="text-red-600">Has Ended</span>}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Dresses</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {dresses.map((dress) => (
            <div key={dress.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={dress.imageSrc}
                  alt={dress.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(dress)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${dress.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {dress.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{dress.describtion}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">${dress.price}</p>
                <p className="mt-1 text-sm text-gray-500">X{dress.inventory ? dress.inventory : <span className="text-red-600">Has Ended</span>}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Pants</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {pants.map((pant) => (
            <div key={pant.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={pant.imageSrc}
                  alt={pant.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(pant)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${pant.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {pant.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{pant.describtion}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">${pant.price}</p>
                <p className="mt-1 text-sm text-gray-500">X{pant.inventory ? pant.inventory : <span className="text-red-600">Has Ended</span>}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Denim</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {denims.map((denim) => (
            <div key={denim.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={denim.imageSrc}
                  alt={denim.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(denim)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${denim.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {denim.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{denim.describtion}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">${denim.price}</p>
                <p className="mt-1 text-sm text-gray-500">X{denim.inventory ? denim.inventory : <span className="text-red-600">Has Ended</span>}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Sweaters</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sweaters.map((sweater) => (
            <div key={sweater.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={sweater.imageSrc}
                  alt={sweater.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(sweater)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${sweater.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {sweater.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{sweater.describtion}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">${sweater.price}</p>
                <p className="mt-1 text-sm text-gray-500">X{sweater.inventory ? sweater.inventory : <span className="text-red-600">Has Ended</span>}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">T-Shirts</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {tshirts.map((tshirt) => (
            <div key={tshirt.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={tshirt.imageSrc}
                  alt={tshirt.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(tshirt)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${tshirt.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {tshirt.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{tshirt.describtion}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">${tshirt.price}</p>
                <p className="mt-1 text-sm text-gray-500">X{tshirt.inventory ? tshirt.inventory : <span className="text-red-600">Has Ended</span>}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Jackets</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {jackets.map((jacket) => (
            <div key={jacket.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={jacket.imageSrc}
                  alt={jacket.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(jacket)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${jacket.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {jacket.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{jacket.describtion}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">${jacket.price}</p>
                <p className="mt-1 text-sm text-gray-500">X{jacket.inventory ? jacket.inventory : <span className="text-red-600">Has Ended</span>}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Activewear</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Activewears.map((Activewear) => (
            <div key={Activewear.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={Activewear.imageSrc}
                  alt={Activewear.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(Activewear)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${Activewear.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {Activewear.name}
                      </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{Activewear.describtion}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">${Activewear.price}</p>
                <p className="mt-1 text-sm text-gray-500">X{Activewear.inventory ? Activewear.inventory : <span className="text-red-600">Has Ended</span>}</p>
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
                                  product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
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
                    </section>

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
                          onClick={() => addToCard(this.state.womantop.id, this.state.selectedColor, this.state.selectedSize) && this.setClose()}
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

const mapStateToProps = state => {
  return {
    products : getProducts(state.products)
  }
}
                      
const mapDispatchToProps = dispatch => ({
  addToCard : (productId, color, size) => dispatch(addToCard(productId, color, size))
})
                      
export default connect(mapStateToProps , mapDispatchToProps)(BrowseAll);
