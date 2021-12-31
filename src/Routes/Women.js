import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addToCard } from "../actions";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import Cardlist from "../components/Cardlist";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


class Men extends Component {
  render() {
      const { products , addToCard } = this.props;
      console.log(products);
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const navigation = {
        pages: [
          { name: 'Company', href: '#' },
          { name: 'Store', href: '/store' },
        ],
      }
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
                {category.id === 'men' ? 
                <Link to="/men" className="relative flex">
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
                </Link>
              : '' }
              {category.id === 'women' ? 
              <Link to="/women" className="relative flex">
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
              </Link>
              : '' }
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
      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
      {products.map((category) => (      
            <div className="relative bg-white">
              {category.id === 'women' ?
              <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16"> 
                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                    {category.featured.map((item) => (
                      <>
                      {item.name === 'New Arrivals' ? 
                      <Link to="/">
                      <div key={item.name} className="group relative text-base sm:text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="object-center object-cover"
                          />
                        </div>
                        <a className="mt-6 block font-medium text-gray-900">
                          <span className="absolute z-10 inset-0" aria-hidden="true" />
                          {item.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          Shop now
                        </p>
                      </div>
                      </Link>
                       : ''}
                       {item.name === 'Basic Tees' ? 
                      <Link to="/">
                      <div key={item.name} className="group relative text-base sm:text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="object-center object-cover"
                          />
                        </div>
                        <a className="mt-6 block font-medium text-gray-900">
                          <span className="absolute z-10 inset-0" aria-hidden="true" />
                          {item.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          Shop now
                        </p>
                      </div>
                      </Link>
                       : ''}
                      </>
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
                                {item.name === 'Tops' ? <Link to="/tops">{item.name}</Link> : ''}
                                {item.name === 'Dresses' ? <Link to="/dresses">{item.name}</Link> : ''}
                                {item.name === 'Pants' ? <Link to="/pants">{item.name}</Link> : ''}
                                {item.name === 'Denim' ? <Link to="/denim">{item.name}</Link> : ''}
                                {item.name === 'Sweaters' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'T-Shirts' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Jackets' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Activewear' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Browse All' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Watches' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Wallets' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Bags' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Sunglasses' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Hats' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Belts' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Full Nelson' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'My Way' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Re-Arranged' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Counterfeit' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Significant Other' ? <Link to="/store">{item.name}</Link> : ''}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              : '' }
            </div>
          ))}  
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

export default connect(mapStateToProps , mapDispatchToProps)(Men);
