import React, { Component } from "react";
import Navigation from "../components/Navigation";


class Denim extends Component {

    render() {
        const denims = [
          {
            id: 1,
            name: 'Full Nelson',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
            price: 240
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1545912656-922de67c0b36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbmltJTIwc2tpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
            price: 263
          },
          {
            id: 2,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1570099424905-94ee2997ae4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbmltJTIwc2hvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
            price: 275
          },
          {
            id: 2,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1535821768496-80f6b2bd573a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRlbmltJTIwamVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Counterfeit.",
            describtion: 'Shop Now',
            price: 261
          },
        ]

      return (
        <>
        <Navigation />
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Denim</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {denims.map((denim) => (
              <div key={denim.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                  <img
                    src={denim.imageSrc}
                    alt={denim.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                <div className="flex items-end p-4">
                <button class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
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
                  <p className="text-sm font-medium text-gray-500">${denim.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>  
        </>
      )
    }
  }


 export default Denim;