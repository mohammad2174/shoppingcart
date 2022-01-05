import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addToCard } from "../actions";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import Cardlist from "../components/Cardlist";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


class ProductsList extends Component {
  state = {
    open : false
  }

  setOpen = () => {
    this.setState({open : true})
  }

  setClose = () => {
    this.setState({open : false})
  }

  render() {
      const { products , addToCard } = this.props;
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const navigation = {
        pages: [
          { name: 'Company', href: '/company' },
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
      <Transition.Root show={this.state.open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={this.setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => this.setClose()}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {products.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {products.map((category) => (
                    <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative text-sm">
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
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
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a href={item.href} className="-m-2 p-2 block text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <>
                  {page.name === 'Store' ? 
                  <Link to="/store"
                  key={page.name}
                  className="flex font-medium text-gray-900"
                >
                  {page.name}
                </Link>
                :
                <Link to="/company"
                  key={page.name}
                  className="flex font-medium text-gray-900"
                >
                  {page.name}
                </Link>
                  }
                  </>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <Link to="/signin">  
                    <span className="-m-2 p-2 corsur-pointer block font-medium text-gray-900">Sign in</span>
                  </Link>
                </div>
                <div className="flow-root">
                  <Link to="/register">  
                    <span className="-m-2 p-2 corsur-pointer block font-medium text-gray-900">Create an account</span>
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="h-16 flex items-center">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              onClick={() => this.setOpen()}
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
                  <>
                  {page.name === 'Store' ? 
                  <Link to="/store"
                  key={page.name}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {page.name}
                </Link>
                :
                <Link to="/company"
                  key={page.name}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {page.name}
                </Link>
                  }
                  </>
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
