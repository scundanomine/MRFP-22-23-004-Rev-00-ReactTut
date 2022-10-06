import React, { Component } from "react";

export class Message extends Component{
    constructor(){
        super()
        this.state={message:"Hello Sam"};
    }

    changeMessage(){
        this.setState({message:"Hello Dam!!!!!!!!"});
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={() =>this.changeMessage()}>Click Me!</button>
            </>
        )
    }
}