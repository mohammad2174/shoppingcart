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
           <button onClick={() => this.setOpen(true)} className="font-medium">
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

  
