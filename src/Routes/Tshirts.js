import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cardlist from "../components/Cardlist";
import { connect } from "react-redux";
import { addToCard } from "../actions";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


class Tshirts extends Component {

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
        const tshirts = [
          {
            id: 1,
            name: 'Full Nelson',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
            price: 19
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
            price: 24
          },
          {
            id: 2,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1608883823203-0a4dbd29bdaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0JTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
            price: 36
          },
          {
            id: 2,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydCUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Counterfeit.",
            describtion: 'Shop Now',
            price: 21
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
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Tshirts</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {tshirts.map((tshirt) => (
              <div key={tshirt.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={tshirt.imageSrc}
                    alt={tshirt.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={tshirt.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {tshirt.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{tshirt.describtion}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-500">${tshirt.price}</p>
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


 export default connect(mapStateToProps , mapDispatchToProps)(Tshirts);