import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Popover } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/outline'


class Navigation extends Component {
  state = {
    setopen : false
  }
  setOpen = () => this.setState(prevState => ({
    setopen : !prevState.setopen
  }))
  
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
        const count = this.props.product.map(item => item.count)
        const total = count.reduce((prev, curr) => (prev + curr), 0)
       
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
              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {products.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open }) => (
                  <>
                  {category.id === 'men' ? 
                  <Link to="/men" 
                  className={classNames(
                    window.location.pathname.slice(1) === 'men'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:text-gray-800',
                  'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                  )}
                  >
                  {category.name}
                  </Link>
                : '' }
                {category.id === 'women' ? 
                <Link to="/women" 
                className={classNames(
                  window.location.pathname.slice(1) === 'women'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-700 hover:text-gray-800',
                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                )}
                >
                {category.name}
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
                  <button onClick={() => this.setOpen()} className="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                   <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{total}</span>
                   <span className="sr-only">items in cart, view bag</span>
                  </button>
                  {
                    (this.state.setopen) ? <Card open={this.state.setopen} /> : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
        </>
      )
    }
  }


 export default Navigation;