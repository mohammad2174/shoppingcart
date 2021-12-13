import React, { Component } from 'react';



class Home extends Component {
    render () {
        return (
            <div className="bg-purple-600">
             <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">please checkout your basket for the selected products</span>
                    <span className="hidden md:inline">please checkout your basket for the selected products</span>
                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
               </div>
              </div>
             </div>
            </div>
        )
    }
}

export default Home;