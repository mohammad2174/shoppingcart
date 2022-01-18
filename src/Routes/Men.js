import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Cardlist from "../components/Cardlist";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


class Men extends Component {
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
    const products = [
      {
        id: "women",
        name: "Women",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc: "https://media.istockphoto.com/photos/she-is-my-best-friend-picture-id1194741547?b=1&k=20&m=1194741547&s=170667a&w=0&h=nTF9xCL4Bzfz3V9xueJhcZ8svIWjg79UHeXt0KKJ_gc=",
            imageAlt: "Models sitting back to back, wearing Basic Tee in black and bone."
          },
          {
            name: "Basic Tees",
            href: "#",
            imageSrc: "https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMTI2NDQxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            imageAlt: "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
          }
        ],
        sections: [
          {
            id: "clothing",
            name: "Clothing",
            items: [
              { name: "Tops", "href": "#" },
              { name: "Dresses", "href": "#" },
              { name: "Pants", "href": "#" },
              { name: "Denim", "href": "#" },
              { name: "Sweaters", "href": "#" },
              { name: "T-Shirts", "href": "#" },
              { name: "Jackets", "href": "#" },
              { name: "Activewear", "href": "#" },
              { name: "Browse All", "href": "#" }
            ]
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", "href": "#" },
              { name: "Wallets", "href": "#" },
              { name: "Bags", "href": "#" },
              { name: "Sunglasses", "href": "#" },
              { name: "Hats", "href": "#" },
              { name: "Belts", "href": "#" }
            ]
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Full Nelson", "href": "#" },
              { name: "My Way", "href": "#" },
              { name: "Re-Arranged", "href": "#" },
              { name: "Counterfeit", "href": "#" },
              { name: "Significant Other", "href": "#" }
            ]
          }
       ]
      },
      {
        id: "men",
        name: "Men",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc: "https://images.unsplash.com/photo-1555441842-7cbc8f6a7171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NDU4ODAzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            imageAlt: "Drawstring top with elastic loop closure and textured interior padding."
          },
          {
            name: "Artwork Tees",
            href: "#",
            imageSrc: "https://images.unsplash.com/photo-1592516195984-44d68247d57e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8Mjk1NjYyODh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            imageAlt:
              "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
          }
        ],
        sections: [
          {
            id: "clothing",
            name: "Clothing",
            items: [
              { name: "Tops", "href": "#" },
              { name: "Pants", "href": "#" },
              { name: "Sweaters", "href": "#" },
              { name: "T-Shirts", "href": "#" },
              { name: "Jackets", "href": "#" },
              { name: "Activewear", "href": "#" },
              { name: "Browse All", "href": "#" }
            ]
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", "href": "#" },
              { name: "Wallets", "href": "#" },
              { name: "Bags", "href": "#" },
              { name: "Sunglasses", "href": "#" },
              { name: "Hats", "href": "#" },
              { name: "Belts", "href": "#" }
            ]
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Re-Arranged", "href": "#" },
              { name: "Counterfeit", "href": "#" },
              { name: "Full Nelson", "href": "#" },
              { name: "My Way", "href": "#" }
            ]
          }
        ]
      }
    ]
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
      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
      {products.map((category) => (      
            <div className="relative bg-white">
              {category.id === 'men' ?
              <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16"> 
                  <div className="col-start-2 grid sm:grid-cols-2 sm:gap-x-8">
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
                       {item.name === 'Artwork Tees' ? 
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
                  <div className="row-start-1 grid grid-cols-2 gap-y-5 gap-x-2 text-xs sm:grid-cols-3 sm:gap-x-2 sm:text-sm">
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
                                {item.name === 'Tops' ? <Link to="/man-tops">{item.name}</Link> : ''}
                                {item.name === 'Pants' ? <Link to="/pants">{item.name}</Link> : ''}
                                {item.name === 'Sweaters' ? <Link to="/sweaters">{item.name}</Link> : ''}
                                {item.name === 'T-Shirts' ? <Link to="/t-shirts">{item.name}</Link> : ''}
                                {item.name === 'Jackets' ? <Link to="/jackets">{item.name}</Link> : ''}
                                {item.name === 'Activewear' ? <Link to="/activewear">{item.name}</Link> : ''}
                                {item.name === 'Browse All' ? <Link to="/browseall">{item.name}</Link> : ''}
                                {item.name === 'Watches' ? <Link to="/watches">{item.name}</Link> : ''}
                                {item.name === 'Wallets' ? <Link to="/wallets">{item.name}</Link> : ''}
                                {item.name === 'Bags' ? <Link to="/bags">{item.name}</Link> : ''}
                                {item.name === 'Sunglasses' ? <Link to="/sunglasses">{item.name}</Link> : ''}
                                {item.name === 'Hats' ? <Link to="/hats">{item.name}</Link> : ''}
                                {item.name === 'Belts' ? <Link to="/belts">{item.name}</Link> : ''}
                                {item.name === 'Full Nelson' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'My Way' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Re-Arranged' ? <Link to="/">{item.name}</Link> : ''}
                                {item.name === 'Counterfeit' ? <Link to="/">{item.name}</Link> : ''}
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

export default Men;
