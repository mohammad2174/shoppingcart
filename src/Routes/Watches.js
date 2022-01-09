import React, { Component } from "react";
import Navigation from "../components/Navigation";


class Watches extends Component {

    render() {
        const watches = [
          {
            id: 1,
            name: 'Full Nelson',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1520512486727-1b8bc58e20c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNTk4OTg2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
            price: 85
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1517390947773-a742ed6ce0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxuRDV3SG9aUGRXUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
            price: 120
          },
          {
            id: 2,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1482686092144-82c035eea710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxUWNMRTZfdmgxd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
            price: 96
          },
          {
            id: 2,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1509941943102-10c232535736?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxuRDV3SG9aUGRXUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Counterfeit.",
            describtion: 'Shop Now',
            price: 111
          },
        ]

      return (
        <>
        <Navigation />
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Watches</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {watches.map((watch) => (
              <div key={watch.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                  <img
                    src={watch.imageSrc}
                    alt={watch.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                <div className="flex items-end p-4">
                <button class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={watch.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {watch.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{watch.describtion}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-500">${watch.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>  
        </>
      )
    }
  }


 export default Watches;