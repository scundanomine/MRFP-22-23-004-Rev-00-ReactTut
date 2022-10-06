import React, { Component } from 'react'

export class Counter extends Component {

  a=0;
  b=0;
  c=0;
  constructor(props){
    super(props)
    this.state={
      counter:0
    }
    // this.a=0;
    // this.b=0;
  }

  eventHandler() {
    this.setState(
      {counter:this.state.counter+1}
    )
    this.a=this.state.counter*20;
    this.b=this.state.counter*30;
    this.c=this.c+1
  }
  render() {
    return (
      <div>
        Counter {this.c}
        <br />
        <button onClick={()=>this.eventHandler()}>Click Me!</button>
        <br />
        <p>{this.a} {this.b}</p>
      </div>
    )
  }
}

export default Counter
