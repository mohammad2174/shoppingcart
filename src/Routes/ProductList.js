import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addToCard } from "../actions";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import Cardlist from "../components/Cardlist";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


class ProductsList extends Component {
  render() {
      const { products , addToCard } = this.props;
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const navigation = {
        pages: [
          { name: 'Company', href: '#' },
          { name: 'Store', href: '/store' },
        ],
      }
      const clothings = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1535365229039-e36084b548f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1602562887763-851fa56061e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbmltJTIwamVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
        },
      ]
      const accessories = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1579362093956-a743707ecac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1620999597215-df2fcbfaec9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1600442715817-4d9c8b6c729f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhY2Nlc3Nvcmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
        },
      ]
    return (
      <>
      <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="h-16 flex items-center">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              // onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="h-full flex space-x-8">
                {products.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                            )}
                          >
                            {category.name}
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <div className="relative bg-white">
                              <div className="max-w-7xl mx-auto px-8">
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {category.featured.map((item) => (
                                      <div key={item.name} className="group relative text-base sm:text-sm">
                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                          <img
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className="object-center object-cover"
                                          />
                                        </div>
                                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                          <span className="absolute z-10 inset-0" aria-hidden="true" />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                {navigation.pages.map((page) => (
                  <Link to="/store"
                    key={page.name}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="ml-4 flow-root lg:ml-6">
                <Cardlist products />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Clothing</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {clothings.map((clothing) => (
            <div key={clothing.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={clothing.imageSrc}
                  alt={clothing.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={clothing.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {clothing.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{clothing.describtion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Accessories</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={accessory.imageSrc}
                  alt={accessory.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={accessory.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {accessory.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{accessory.describtion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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

const mapDispatchToProps = dispatch => ({
  addToCard : productId => dispatch(addToCard(productId))
})

export default connect(mapStateToProps , mapDispatchToProps)(ProductsList);
