import React, { Component } from "react";
import Card from "./Card";

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
           <button onClick={() => this.setOpen()}>
           {this.state.setopen ? <img src="https://img.icons8.com/ios-filled/30/000000/lock.png" alt="lock"/> : <img src="https://img.icons8.com/ios-filled/30/000000/unlock.png" alt="unlock"/>}
           </button>
           {
                (this.state.setopen) ? <Card {...products} open={this.state.setopen} /> : ''
           }
      </div>  
    )
  }
}
export default Cardlist;

  
