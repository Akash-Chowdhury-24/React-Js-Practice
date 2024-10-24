import { Component } from "react";

export class ClassBasedComponent extends Component {
  render(){
    return <div>yoooooo</div>;
  }
}

export class Component2 extends Component{
  render(){
    return(
      <div>
        <button>
          click me 
        </button>
      </div>
    ) 
  }
}