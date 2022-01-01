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
      const womantops = [
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
          imageSrc: 'https://images.unsplash.com/photo-1525171254930-643fc658b64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
        },
      ]
      const mantops = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw5ODU3OTk2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1626160200758-71b8bf10d34f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wwMTh1N19mdnhBUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1621844725002-936a3734920a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwwMTh1N19mdnhBUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1532374894023-69a0b7159b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MDE4dTdfZnZ4QVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
        },
      ]
      const dresses = [
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
      const pants = [
           {
            id: 1,
            name: 'Full Nelson',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
          },
          {
            id: 2,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
          },
          {
            id: 2,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Counterfeit.",
            describtion: 'Shop Now',
          },
      ]
      const denims = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1545912656-922de67c0b36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbmltJTIwc2tpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1570099424905-94ee2997ae4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbmltJTIwc2hvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1535821768496-80f6b2bd573a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRlbmltJTIwamVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
        },
      ]
      const sweaters = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1608984361471-ff566593088f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN3ZWF0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1610901157620-340856d0a50f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3dlYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1589359425603-dfe010cf3ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN3ZWF0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1613590373588-e61986b98327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWF0ZXIlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
        },
      ]
      const tshirts = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1608883823203-0a4dbd29bdaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0JTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydCUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
        },
      ]
      const jackets = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1546771515-3c353a3da013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/flagged/photo-1554033750-2137b5cfd7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
        },
      ]
      const Activewears = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTY4MjEyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1596646912242-80d82d06c463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxOTg0NTczMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDYwNzE2N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
        },
        {
          id: 2,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTMxNTk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Tops</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {womantops.map((womantop) => (
            <div key={womantop.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={womantop.imageSrc}
                  alt={womantop.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={womantop.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {womantop.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{womantop.describtion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {mantops.map((mantop) => (
            <div key={mantop.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={mantop.imageSrc}
                  alt={mantop.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={mantop.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {mantop.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{mantop.describtion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Dresses</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {dresses.map((dress) => (
            <div key={dress.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={dress.imageSrc}
                  alt={dress.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={dress.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {dress.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{dress.describtion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Pants</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {pants.map((pant) => (
            <div key={pant.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={pant.imageSrc}
                  alt={pant.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={pant.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {pant.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{pant.describtion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Denim</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {denims.map((denim) => (
            <div key={denim.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={denim.imageSrc}
                  alt={denim.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={denim.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {denim.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{denim.describtion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Sweaters</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sweaters.map((sweater) => (
            <div key={sweater.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={sweater.imageSrc}
                  alt={sweater.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={sweater.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {sweater.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{sweater.describtion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">T-Shirts</h2>
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
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Jackets</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {jackets.map((jacket) => (
            <div key={jacket.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={jacket.imageSrc}
                  alt={jacket.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={jacket.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {jacket.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{jacket.describtion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Activewear</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Activewears.map((Activewear) => (
            <div key={Activewear.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={Activewear.imageSrc}
                  alt={Activewear.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={Activewear.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {Activewear.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{Activewear.describtion}</p>
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
