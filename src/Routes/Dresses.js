import React, { Component } from "react";
import Navigation from "../components/Navigation";


class Dresses extends Component {

    render() {
        const dresses = [
          {
            id: 1,
            name: 'Full Nelson',
            href: '#',
            imageSrc: 'https://media.istockphoto.com/photos/woman-wearing-a-floral-pattern-dress-on-an-autumn-day-in-nature-picture-id1292110906?b=1&k=20&m=1292110906&s=170667a&w=0&h=4zpVYOydO2_d9eu6tYy1QC8e2AiBMJbxmC466Q_mCgo=',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
            price: 101
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
            price: 75
          },
          {
            id: 2,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
            price: 64
          },
          {
            id: 2,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1618214802314-7dff34596edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyZXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Counterfeit.",
            describtion: 'Shop Now',
            price: 130
          },
        ]
  
      return (
        <>
        <Navigation />
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Dresses</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {dresses.map((dress) => (
              <div key={dress.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                  <img
                    src={dress.imageSrc}
                    alt={dress.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                <div className="flex items-end p-4">
                <button class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
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
                  <p className="text-sm font-medium text-gray-500">${dress.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>  
        </>
      )
    }
  }


 export default Dresses;