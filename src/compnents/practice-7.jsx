//life cycle method in class based components
import { Component } from "react";
export class Practice7 extends Component{
  state={
    count:0,
    color: false
  }

  doCount(){
    this .setState({
      count:this.state.count+1
    })
  }

  componentDidUpdate(prevprop,prevstate){
    if(prevstate && prevstate.count != this.state.count && this.state.count == 10){
      this.setState({
        ...this.state,
        color: true
      })
    }
  }
  render(){
    return(
      <div>
        <h2 style={{color:this.state.count?'red':"black"}}>hello i am akash</h2>
        <button onClick={this.doCount()}>Change color</button>
        <h2>Count = {this.state.count}</h2>
      </div>
    );

  }

}