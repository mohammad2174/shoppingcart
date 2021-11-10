import React, { Component } from "react";
import Card from "./Card";

class Cardlist extends Component {
    state = {
        setopen : false
      }
      setOpen = () => this.setState(prevState => ({
        setopen : !prevState.setopen
      }))
  render() {
      const { products } = this.props;
    console.log(products);
    return (
      <div>
           <button onClick={() => this.setOpen(true)} className="flex justify-center items-center w-full mt-12 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Basket
           </button>
           {
                (this.state.setopen) ? <Card {...products} open={this.state.setopen} /> : ''
           }
      </div>  
    )
  }
}
export default Cardlist;

  
