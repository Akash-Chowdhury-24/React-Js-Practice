//state management 
import { Component } from "react";
export class Practice6 extends Component{

  state={
    color: true
  }
  colorChange=()=>{
    this.setState({
      color: !this.state.color
    })
  }
  render(){
    return (
      <div>
        <h2 style={{color:this.state.color?"red":"black"}}>hello i am akash</h2>
        <button onClick={this.colorChange}>Change color</button>
      </div>
    );
  }
}