import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';


class Home extends Component {

    render () {
        return (
            <div className="bg-purple-600">
             <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <p className="ml-3 font-medium text-white truncate">
                    <span>please checkout your basket for the selected products</span>
                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <button
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
              <Cardlist products />
                </button>
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