import React, { Component } from "react";


class Header extends Component {

  render() {
    const callouts = 
      {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
      }
    const improvement =  
      {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
      }
      const travel =  
      {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      }
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Shop by Catgory</h2>
            <div class="mt-6 space-y-12 rounded-lg lg:space-y-0 grid grid-flow-col gap-0 lg:grid lg:grid-cols-2 lg:gap-x-5">
               <div class="relative row-span-3">
                 <a href={callouts.href}>
                  <img
                    src={callouts.imageSrc}
                    alt={callouts.imageAlt}
                    className="w-full h-3/5 cursor-pointer hover:opacity-75 rounded-lg object-center object-cover"
                  />
                 </a>
                  <h3 className="absolute bottom-1/2 mt-6 ml-3 text-sm text-gray-500">              
                   <span className="absolute inset-0" />
                     {callouts.name}               
                  </h3>
                   <p className="absolute mb-6 ml-3 text-base bottom-1/2 font-semibold text-gray-900">{callouts.description}</p>
               </div>
                <div class="col-span-2">
                  <a href={improvement.href}>  
                   <img
                    src={improvement.imageSrc}
                    alt={improvement.imageAlt}
                    className="w-full h-60 cursor-pointer hover:opacity-75 rounded-lg object-center object-cover"
                   />
                  </a>
                   <h3 className="absolute bottom-2/3 mt-6 ml-3 text-sm text-gray-500">
                    <span className="absolute inset-0" />
                       {improvement.name}
                   </h3>
                    <p className="absolute mb-6 ml-3 text-base bottom-2/3 font-semibold text-gray-900">{improvement.description}</p>
                     <a href={travel.href}>
                      <img
                       src={travel.imageSrc}
                       alt={travel.imageAlt}
                       className="w-full h-2/6 mt-2.5 cursor-pointer hover:opacity-75 rounded-lg object-center object-cover"
                      />
                     </a>
                      <h3 className="absolute bottom-1/2 mt-6 ml-3 text-sm text-gray-500">
                       <span className="absolute inset-0" />
                         {travel.name}
                      </h3>
                       <p className="absolute mb-6 ml-3 text-base bottom-1/2 font-semibold text-gray-900">{travel.description}</p>
                </div>
            </div>
        </div>
    </div>          
    );
  }
}


export default Header;