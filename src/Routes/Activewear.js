import React, { Component } from "react";
import Navigation from "../components/Navigation";


class Activewear extends Component {

    render() {
        const activewears = [
          {
            id: 1,
            name: 'Full Nelson',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTY4MjEyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
            price: 360
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1596646912242-80d82d06c463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxOTg0NTczMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
            price: 342
          },
          {
            id: 2,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDYwNzE2N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
            price: 299
          },
          {
            id: 2,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTMxNTk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Counterfeit.",
            describtion: 'Shop Now',
            price: 286
          },
        ]

      return (
        <>
        <Navigation />
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Activewear</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {activewears.map((activewear) => (
              <div key={activewear.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                  <img
                    src={activewear.imageSrc}
                    alt={activewear.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                <div className="flex items-end p-4">
                <button class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={activewear.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {activewear.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{activewear.describtion}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-500">${activewear.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>  
        </>
      )
    }
  }


 export default Activewear;