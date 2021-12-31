import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cardlist from "../components/Cardlist";
import { connect } from "react-redux";
import { addToCard } from "../actions";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


class Dresses extends Component {

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
            imageSrc: 'https://media.istockphoto.com/photos/woman-wearing-a-floral-pattern-dress-on-an-autumn-day-in-nature-picture-id1292110906?b=1&k=20&m=1292110906&s=170667a&w=0&h=4zpVYOydO2_d9eu6tYy1QC8e2AiBMJbxmC466Q_mCgo=',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
          },
          {
            id: 2,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
          },
          {
            id: 2,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1618214802314-7dff34596edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyZXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
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
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Dresses</h2>
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
         {/* <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Accessories</h2>
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
          </div> */}
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


 export default connect(mapStateToProps , mapDispatchToProps)(Dresses);