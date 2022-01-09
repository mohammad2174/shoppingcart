import React, { Component } from "react";
import Navigation from "../components/Navigation";


class Tops extends Component {

    render() {
        const tops = [
            {
              id: 1,
              name: 'Full Nelson',
              href: '#',
              imageSrc: 'https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw5ODU3OTk2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              imageAlt: "Full Nelson.",
              describtion: 'Shop Now',
              price: 46
            },
            {
              id: 2,
              name: 'Re-Arranged',
              href: '#',
              imageSrc: 'https://images.unsplash.com/photo-1626160200758-71b8bf10d34f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wwMTh1N19mdnhBUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
              imageAlt: "Re-Arranged.",
              describtion: 'Shop Now',
              price: 61
            },
            {
              id: 2,
              name: 'My Way',
              href: '#',
              imageSrc: 'https://images.unsplash.com/photo-1621844725002-936a3734920a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwwMTh1N19mdnhBUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
              imageAlt: "My Way.",
              describtion: 'Shop Now',
              price: 74
            },
            {
              id: 2,
              name: 'Counterfeit',
              href: '#',
              imageSrc: 'https://images.unsplash.com/photo-1532374894023-69a0b7159b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MDE4dTdfZnZ4QVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              imageAlt: "Counterfeit.",
              describtion: 'Shop Now',
              price: 37
            },
          ]
        
      return (
        <>
        <Navigation />
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Tops</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {tops.map((top) => (
              <div key={top.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                  <img
                    src={top.imageSrc}
                    alt={top.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                <div className="flex items-end p-4">
                <button class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={top.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {top.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{top.describtion}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-500">${top.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>  
        </>
      )
    }
  }


 export default Tops;