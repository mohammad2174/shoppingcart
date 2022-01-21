import React, { Component } from "react";
import Card from "./Card";
import { ShoppingBagIcon } from '@heroicons/react/outline'

class Cardlist extends Component {
    state = {
        setopen : false
      }
      setOpen = () => this.setState(prevState => ({
        setopen : !prevState.setopen
      }))
  render(){
      const { products } = this.props;

    return (
      <div>
           <button onClick={() => this.setOpen()} className="group -m-2 p-2 flex items-center">
              <ShoppingBagIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
              <span className="sr-only">items in cart, view bag</span>
           </button>
           {
                (this.state.setopen) ? <Card {...products} open={this.state.setopen} /> : ''
           }
      </div>  
    )
  }
}
export default Cardlist;

  
