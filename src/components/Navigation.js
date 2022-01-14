import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cardlist from "../components/Cardlist";
import { connect } from "react-redux";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


class Navigation extends Component {

    render() {
        const { products } = this.props;
        console.log(products);
        function classNames(...classes) {
          return classes.filter(Boolean).join(' ')
        }
        const navigation = {
          pages: [
            { name: 'Company', href: '/company' },
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


 export default connect(mapStateToProps)(Navigation);