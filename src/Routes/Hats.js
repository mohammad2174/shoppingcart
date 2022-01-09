import React, { Component } from "react";
import Navigation from "../components/Navigation";


class Hats extends Component {

    render() {
        const hats = [
          {
            id: 1,
            name: 'Full Nelson',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1583002083815-8c6305bd56a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
            price: 69
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
            price: 75
          },
          {
            id: 2,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1504279264812-f45ce7b63bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxoYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
            price: 83
          },
          {
            id: 2,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxoYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Counterfeit.",
            describtion: 'Shop Now',
            price: 75
          },
        ]

      return (
        <>
        <Navigation />
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Hats</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {hats.map((hat) => (
              <div key={hat.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                  <img
                    src={hat.imageSrc}
                    alt={hat.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                <div className="flex items-end p-4">
                <button class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={hat.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {hat.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{hat.describtion}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-500">${hat.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>  
        </>
      )
    }
  }


 export default Hats;